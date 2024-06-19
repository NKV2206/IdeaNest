
import { AppbarSkeleton } from "./LoaderBlogs";

export function LoaderBlog(){
    return(
        <div className="animate-pulse">
            <AppbarSkeleton/>
            <BlogSkeleton/>
        </div>

    )
}

function BlogSkeleton(){
    return(
        <div className="grid grid-cols-12 mt-10 ">
        <div className="col-span-8 w-screen pl-10 pr-10 lg:w-full  lg:pl-20 lg-pr-4">
            <div className="h-10 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-1 w-[30%] rounded-md bg-gray-300 mt-3"></div>
            <BodySkeleton/>
            
            <div className="animate-pulse visible mt-5 lg:invisible">
            <div className="tbg-gray-300 h-1 w-8 pb-2"></div>
            <div className="flex flex-row items-center  ">
            <div><div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full "></div></div>
            <div className="pl-3 h-2 bg-gray-300 rounded-md w-full mx-6"></div>
            </div>
            </div>

        </div>
        <div className="col-span-4 pr-20 ml-3 invisible lg:visible">
            
            <div className="flex flex-row items-center  ">
            <div><div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-200 rounded-full "></div></div>
                <div className="pl-3 h-2 bg-gray-300 rounded-md w-full mx-6"></div>
            </div>
        </div>

    </div>
    )
}

function BodySkeleton(){
    return(
        <div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
            <div className="mt-5 h-2 w-full rounded-sm bg-gray-300"></div>
        </div>
    )
}