
import { Quote } from "../Components/Quote";
import SignInAuth from "../Components/SignInAuth";

export function Signin(){
    return(
        <div className="grid grid-cols-2">
            <div className="w-screen lg:w-full">
                <SignInAuth/>
            </div>
            <div className="visibility invisible lg:visible">
                <Quote/>
            </div>
            
        </div>
    )
}