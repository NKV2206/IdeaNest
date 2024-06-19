import { Appbar } from "../Components/Appbar";
import { FullBlog } from "../Components/FullBlog";
import { LoaderBlog } from "../Components/LoaderBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";

export function Blog(){
    const {id}=useParams()
    const {loading,blog}=useBlog({
        id:id || "1"
    });
    if(loading || !blog){
        return (
            <LoaderBlog/>
        )
    }
    return(
        <div>
            <Appbar author={'Nandu'}/>
            <FullBlog blog={blog}/>
        </div>
    )
}