import { Hono } from 'hono'
const user=new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET:string
	},
  Variables : {
		userId: string,
	}
}>();
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput,signinInput } from '@zeroshark123/common';

user.post('/signup',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body=await c.req.json();
    const {success}=signupInput.safeParse(body);
    if(!success){
      return c.json({
        message:"Invalid Inputs"
      })
    }
    try{
      const user=await prisma.user.create({
        data:{
          email: body.email,
          password: body.password,
          name:body.name
        }
      })
      console.log('hello')
      const jwt=await sign({id:user.id},c.env.JWT_SECRET);
      return c.json({jwt});
    }catch(e){
      console.log('catch')
      return c.status(403);
    }
  })
  
  
  
  user.post('/signin',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body=await c.req.json();
    const{success}=signinInput.safeParse(body);
    if(!success){
      return c.json({
        message:"Invalid Inputs"
      })
    }
    const valid=await prisma.user.findUnique({
      where:{
        email:body.email,
        password:body.password
      }
    })
    if(valid){
      const jwt=await sign({id:valid.id},c.env.JWT_SECRET);
      return c.json({
        jwt:jwt
      })
    }
    else{
      c.status(403);
      return c.json({
        message:'Invalid Credentials'
      })
    }
  
  })

  export default user;