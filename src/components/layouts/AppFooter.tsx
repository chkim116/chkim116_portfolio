import { SiGithub, SiBlogger } from 'react-icons/si';

const AppFooter = () => {
    return (
        <footer className="w-full lg:pl-28 md:pl-20 sm:pl-10 pl-8 pb-20 bg-gray-700 flex flex-col">
            <div className="flex">
                <a href="https://github.com/chkim116" target="_blank" className="mr-4">
                    <SiGithub className="text-3xl text-white" />
                </a>
                <a href="https://kormelon.com" target="_blank">
                    <SiBlogger className="text-3xl text-white" />
                </a>
            </div>
            <div className="text-gray-400 pt-4">
                <p>
                    Designed By{' '}
                    <a
                        className="text-rose-700 font-semibold"
                        href="https://neva-portfolio-vue.netlify.app/"
                        target="_blank"
                    >
                        aabid sofi
                    </a>
                </p>
                <p>
                    KimChangHoe <span className="text-rose-700">&copy;2021</span>
                </p>
            </div>
        </footer>
    );
};

export default AppFooter;
