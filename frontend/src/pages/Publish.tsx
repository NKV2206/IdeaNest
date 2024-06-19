import axios from "axios"
import { Appbar } from "../Components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

export function Publish(){
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const navigate=useNavigate();
    return (
        <div>
            <Appbar author={'Nanda'}/>
            <div className="flex items-center flex-col ` mt-5">
                <div className="w-full mx-auto max-w-screen-lg">
                    <input onChange={(e)=>{
                        setTitle(e.target.value)
                    }} id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Title" required></input>
                </div>
                <TextEditor onChange={(e)=>{
                    setContent(e.target.value)
                }} />
                <button onClick={async ()=>{
                    const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                        title,
                        content,
                    },{
                        headers:{
                            Authorization:`Bearer ${localStorage.getItem('token')}`
                        }
                    })
                    navigate(`/blog/${response.data.id}`)
                }} 
                type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                    Publish Blog
                </button>
            </div>
            
        </div>
    )
}


function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
    return (
        <div className="max-w-screen-lg w-full mt-5">

            <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex items-center justify-between px-3 py-2 border-b">
                    
                    <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip ">
                        Show full screen
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-b-lg ">
                    <label  className="sr-only">Publish post</label>
                    <textarea onChange={onChange} id="editor" rows={8} className=" focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0  " placeholder="Content" required ></textarea>
                </div>
            </div>
            
            </form>

        </div>
    )
}