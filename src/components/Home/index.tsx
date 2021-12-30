import AboutMe from './AboutMe';
import Intro from './Intro';

const Home = () => {
    return (
        <section>
            <Intro />
            <AboutMe />
            <article>
                <h1>skills/tool</h1>
            </article>
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
