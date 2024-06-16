import {Auth} from "../Components/Auth";
import { Quote } from "../Components/Quote";

export function Signup(){
    return(
        <div className="grid grid-cols-2">
            <div>
                <Auth/>
            </div>
            <div className="visibility invisible lg:visible">
                <Quote/>
            </div>
            
        </div>
    )
}