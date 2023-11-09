import About from "./About";
import Extra from "./Extra";
import Header from "./Header";
import Projects from "./Projects";
import Work from "./Work";

function Home(){
    return(
        <>
            <Header/>
            <About/>
            <Work/>
            <Projects/>
            <Extra/>
        </>
    );
}

export default Home;