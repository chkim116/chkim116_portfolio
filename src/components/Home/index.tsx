import AboutMe from './AboutMe';
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
            <article>
                <h1>contact</h1>
            </article>
        </section>
    );
};

export default Home;
