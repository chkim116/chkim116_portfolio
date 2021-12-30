import AboutMe from './AboutMe';
import Contact from './Contact';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
import Work from './Work';

const Home = () => {
    return (
        <section>
            <Intro />
            <AboutMe />
            <Skills />
            <Work />
            <Projects />
            <Contact />
        </section>
    );
};

export default Home;
