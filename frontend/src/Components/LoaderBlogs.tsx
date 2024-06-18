export function LoaderBlogs(){
    return (
        <div role='status' className="animate-pulse">
            <AppbarSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    )
}
function AppbarSkeleton(){
    return(
        <div>
            <div className="flex justify-between px-10 border-b py-2 mb-2 sticky top-0 z-10 bg-white items-center">
            <div className="h-8 w-14 bg-gray-200 dark:bg-gray-600"></div>
            <div><div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600"></div></div>
            </div>
        </div>
    )
}
function BlogSkeleton(){
    return(
        <div className="flex justify-center "> 
                <div className="border-b border-slate-200 p-4 w-screen max-w-screen-lg ">
                <div className="text-sm flex flex-row">
                    <div className=" text-sm"><div><div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600"></div></div></div> <div className="pl-2 flex flex-col justify-center  font-semibold">{}</div>
                    <div className="flex justify-center items-center"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div></div>
                </div>
                <div className="flex justify-start items-center"><div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 my-3"></div></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>    
        </div>
    )
}