import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Idea.png'
export function Appbar({author}:{author:string}){
    const navigate=useNavigate();
    return(
    <div className="flex justify-between px-10 border-b py-2 mb-2 sticky top-0 z-10 bg-white items-center">
        <button onClick={()=>{
            navigate('/blogs')
        }}>
        <div>
            <img src={logo} className="h-9"></img>
        </div>
        </button>
        <div>
        <Link to={'/publish'}>
        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 mr-4 ">New</button>
        </Link>
        
        <button onClick={()=>{
            navigate('/signin')
            localStorage.setItem('token',"")
        }}>
            <div>
                <Avatar author={author} /> 
            </div>
        </button>
        </div>
        
    </div>
    )
}

export function Avatar({author}:{author:string}){
    return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-semibold text-gray-600 dark:text-gray-300">{author[0]}</span>
        </div>
    )
}