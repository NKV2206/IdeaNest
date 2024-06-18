import { Link } from "react-router-dom"

interface BlogCradProps{
    author :string,
    title:string,
    content:string,
    publishedDate:string,
    id:number
}

export function BlogCard({author,title,content,publishedDate,id}:BlogCradProps){
    return (
        <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 p-4 w-screen max-w-screen-lg cursor-pointer hover:shadow-md">
            <div className="text-sm flex flex-row">
                <div className=" text-sm"><Avatar author={author}/></div> <div className="pl-2 flex flex-col justify-center  font-semibold">{author }</div>
                 <div className="flex flex-col justify-center pl-2"><Circle/></div>
                 <div className="pl-2 flex flex-col justify-center font-light text-sm">{publishedDate}</div>
            </div>
            <div className="text-xl font-semibold mt-1">
                {title}
            </div>
            <div className="text-md font-light text-wrap">
                {content.slice(0,100)}
            </div>
            <div className="text-sm text-slate-500 font-thin pt-4">
                {Math.ceil(content.length/100) } min read. 
            </div>
        </div>
        </Link>
    )
}
interface avatar{
    author:string
}
export function Avatar({author}:avatar){
    return (
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-normal text-gray-600 dark:text-gray-300">{author[0]}</span>
        </div>
    )
}
function Circle(){
    return (
        <div className="w-1 h-1 rounded-full bg-slate-500">

        </div>
    )
}