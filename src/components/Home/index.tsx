import AboutMe from './AboutMe';
import Intro from './Intro';
import Skills from './Skills';

const Home = () => {
    return (
        <section>
            <Intro />
            <AboutMe />
            <Skills />
            <article>
                <h1>projects</h1>
            </article>
            <article>
                <h1>contact</h1>
            </article>
        </section>
    );
};

export default Home;
