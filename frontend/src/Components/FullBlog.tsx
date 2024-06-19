import { Blog } from "../hooks";
import { Avatar } from "./Appbar";

export function FullBlog({blog}:{blog:Blog}){
    return(
        <div className="grid grid-cols-12 mt-10 ">
            <div className="col-span-8 w-screen pl-10 pr-10 lg:w-full  lg:pl-20 lg-pr-4">
                <div className="text-4xl font-bold">
                    {blog.title}
                </div>
                <div className="text-sm  font-normal text-gray-400 mt-3">Posted on August 24,2023</div>
                
                <div className="mt-5 text-md font-normal text-gray-700 max-w-full">
                    {blog.content}
                </div>
                <div className=" visible mt-5 lg:invisible">
                <div className="text-sm pb-2">Author</div>
                <div className="flex flex-row items-center  ">
                    <Avatar author={'A'}/>
                    <div className="pl-3">{blog.author.name}</div>
                </div>
                </div>

            </div>
            <div className="col-span-4 pr-20 ml-3 invisible lg:visible">
                <div className="text-sm pb-2">Author</div>
                <div className="flex flex-row items-center  ">
                    <Avatar author={'A'}/>
                    <div className="pl-3">{blog.author.name}</div>
                </div>
            </div>

        </div>
    )
}

