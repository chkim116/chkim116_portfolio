import AboutMe from './AboutMe';
import Contact from './Contact';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <section>
            <Intro />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </section>
    );
};

export default Home;
