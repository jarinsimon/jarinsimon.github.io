import About from "./About";
import Extra from "./Extra";
import Header from "./Header";
import Projects from "./Projects";
import Work from "./Work";

function Home(){
    return(
        <>
            <div className="snap-y">
                <Header/>
                <About/>
                <Work/>
                <Projects/>
                <Extra/>
            </div>
        </>
    );
}

export default Home;