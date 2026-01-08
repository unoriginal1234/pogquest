import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <p>These are the settings</p>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
}

export default About;