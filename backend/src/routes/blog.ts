import { Hono } from 'hono'
const blog=new Hono<{
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
import { verify } from 'hono/jwt'
import { createPostInput,updatePostInput } from '@zeroshark123/common';

blog.use(async (c, next) => {
    const header=c.req.header("authorization") || "";
    if(!header){
      return c.status(404);
    }
    const token=header.split(" ")[1];
    const valid=await verify(token,c.env.JWT_SECRET);
    if(!valid){
      return c.status(401)
    }
    c.set('userId', valid.id);
    await next()
})

blog.post('/',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id=c.get('userId');
    const body=await c.req.json();
    const { success }=createPostInput.safeParse(body);
    if(!success){
        return c.json({
            message:"Invalid Input's"
        })
    }
    const post=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:id
        }
    })

    return c.json({
		id: post.id
	});
})
  
  
blog.put('/',async(c)=>{
    const userId=c.get('userId');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body=await c.req.json();
    const {success}=updatePostInput.safeParse(body);
    if(!success){
        return c.json({
            message:"Invalid Input's"
        })
    }
    await prisma.post.update({
        where:{
            id:body.id,
            authorId:userId
        },
        data:{
            title:body.title,
            content:body.content
        }
    })
    return c.json({
        message:"updated succesfully"
    })
})
  
blog.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const posts=await prisma.post.findMany({
        select:{
            title:true,
            content:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });
    return c.json({
        posts:posts
    })
})
  
blog.get('/:id',async (c)=>{
    const id = c.req.param('id')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post=await prisma.post.findUnique({
        where:{
            id:id
        }
    })
    return c.json({
        post:post
    })
})
  
  


  export default blog;