import Foot from "./Foot";
import NavBar from "./NavBar";

export default function Prize(){
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div className="content">
                <h2>The Distill Prize for Clarity in Machine Learning</h2>
                <p>Recognizing outstanding work communicating and refining ideas in Machine Learning and adjacent topics.</p>
            </div>
            <div>
                <Foot/>
            </div>
        </div>
    )
}