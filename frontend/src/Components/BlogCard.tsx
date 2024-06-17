interface BlogCradProps{
    author :string,
    title:string,
    content:string,
    publishedDate:string
}

export function BlogCard({author,title,content,publishedDate}:BlogCradProps){
    return (
        <div className="border-b border-slate-200 w-[60%] mx-auto p-2">
            <div className="text-sm flex flex-row">
                <div className="flex flex-col justify-center"><Avatar author={author}/></div> <div className="pl-2  font-semibold">{author }</div>
                 <div className="flex flex-col justify-center pl-2"><Circle/></div>
                 <div className="pl-2 font-light">{publishedDate}</div>
            </div>
            <div className="text-3xl font-semibold ">
                {title}
            </div>
            <div className="text-md font-light">
                {content.slice(0,100)}
            </div>
            <div className="text-sm text-slate-400">
                {Math.ceil(content.length/100) } min read. 
            </div>
        </div>
    )
}
interface avatar{
    author:string
}
function Avatar({author}:avatar){
    return (
        <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
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