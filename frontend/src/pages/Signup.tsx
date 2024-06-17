import {SignUpAuth} from "../Components/SignUpAuth";
import { Quote } from "../Components/Quote";

export function Signup(){
    return(
        <div className="grid grid-cols-2">
            <div className="w-screen lg:w-full">
                <SignUpAuth/>
            </div>
            <div className="visibility invisible lg:visible">
                <Quote/>
            </div>
            
        </div>
    )
}