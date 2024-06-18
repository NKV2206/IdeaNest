import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";
import { LoaderBlogs } from "../Components/LoaderBlogs";
import { useBlogs } from "../hooks";

export function Blogs(){
    const {loading,blogs}=useBlogs();
    if(loading){
        return (
            <LoaderBlogs/>
        )

    }
    return (
        
        <div>
            <Appbar author={'Nandu'}/>
        <div className="flex justify-center ">
            <div className="">   
            {blogs.map(item => <BlogCard author={item.author.name|| 'Anonymous'} key={item.id} id={item.id} publishedDate={"2012-12-23"} title={item.title} content={item.content}/>)}
            </div>       
        </div>
        </div>
    )
}