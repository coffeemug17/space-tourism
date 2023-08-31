import NavBar from "../../Components/NavBar/NavBar";
import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="homepage">
            <NavBar></NavBar>
            <h5 className="homepageH5">SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className="homepageH1">SPACE</h1>
            <body>
                Let's face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we'll give you a truly out of this world experience!
            </body>
        </div>
    );
}