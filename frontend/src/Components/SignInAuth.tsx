import {  ChangeEvent, useState } from "react"
import { SigninInput} from "@zeroshark123/common"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface inputType{
    Input:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}



export default function SignInAuth(){
    const [postInputs,setPostInputs]=useState<SigninInput>({
        email:"",
        password:""
    })
    const navigate=useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInputs);
            const jwt=await response.data.jwt;
            localStorage.setItem('token',jwt);
            navigate('/blogs')
        }catch(e){

        }
    }
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    return (
        
        <div className="flex flex-col justify-center h-screen">
            <div className="text-3xl font-bold flex justify-center pb-2">
                IdeaNest
            </div>
            <div className="pt-1 text-md text-gray-400 flex justify-center font-semibold">
               Don't have an account ?  <Link className="pl-2 underline" to={'/signup'}>Sign up</Link>
            </div>
            <LabeledInput Input={"Email"} placeholder="m@gmail.com" onChange={(e)=>{
                setPostInputs({
                            ...postInputs,
                            email:e.target.value
                        })
            }}></LabeledInput>
            <label className="font-2xl font-bold w-[60%] mx-auto mt-2 ">Password</label>
            <div className="relative w-[60%] container mx-auto border border-solid rounded-xl mt-1">
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            password:e.target.value
                        })
                    }}
                />
                <button
                    className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                >
                    {isPasswordVisible ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                    </svg>
                    ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    )}
                </button>
                </div>
            
            <button type='submit' onClick={sendRequest} className="w-[60%] mx-auto flex justify-center text-center mt-4 border border-gray-800 bg-black rounded-lg p-3 text-white">
                Sign in
            </button>
        </div>
    )
}


function LabeledInput({Input,placeholder,onChange,type} :inputType){
    return(
        <div className="flex flex-col w-[60%] mx-auto pt-3" onChange={onChange}>
            <label className="font-2xl font-bold">{Input}</label>
            <input type={type || "text"} className="pl-4 mt-2 py-auto rounded-md border border-gray-300 border-double p-2" placeholder={placeholder}/>
        </div>
    )
}