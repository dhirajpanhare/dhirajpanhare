import Navabr from "../components/Navbar";
import Hero from "../components/Hero";
import About_Section from "../components/About-Section";
import Project_Section from "../components/Project_Section";
import Certificate_Section from "../components/Certificate-Section";
import Contact_Section from "../components/Contact-Section";
import Notes_Section from "../components/Notes-Section";

function Home() {
    return (
        <>
            <Navabr />
            <Hero />
            <Project_Section />
            <About_Section />
            <Certificate_Section />
            <Contact_Section />
            <Notes_Section />
        </>
    )
}
export default Home;