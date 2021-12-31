import { SiGithub } from 'react-icons/si';
import { AiOutlineHome } from 'react-icons/ai';
import thumb from '../../assets';

const Projects = () => {
    const portfolio = [
        {
            id: 1,
            title: 'Dev Blog',
            thumb: thumb.blog,
            desc: '개인 개발 블로그\n',
            stack: 'Next.js, Express, Redux&Saga, MongoDB, CircleCI, AWS',
            link: 'https://kormelon.com/',
            git: 'https://github.com/chkim116/kormelon-front',
        },
        {
            id: 2,
            title: 'Early Canvas Editor',
            thumb: thumb.canvas,
            desc: '얼리21 커스텀 캔버스 에디터\n 현재 깃허브는 단일 에디터 기능만 발췌된 레포지토리입니다.',
            stack: 'Next.js, Nest.js, MySQL, GithubAction, AWS',
            link: 'https://early21.com/tool',
            git: 'https://github.com/chkim116/samplejs/tree/master/react-canvas-editor',
        },
        // {
        //     id: 3,
        //     thumb: '',
        //     title: 'Portfolio',
        //     desc: '김창회 포트폴리오',
        //     stack: 'React, Webpack, TailwindCSS',
        //     link: '',
        //     git: '',
        // },
    ];

    return (
        <article id="projects" className="w-full lg:p-28 md:p-20 sm:p-10 p-8 ms:p-20 flex flex-col">
            <div className="mb-10 mx-auto">
                <h2 className="text-right">Projects</h2>
            </div>

            <div className="w-full max-w-4xl flex flex-col justify-center items-center mx-auto">
                {portfolio
                    .sort((a, b) => b.id - a.id)
                    .map((project) => (
                        <div key={project.id} className="w-full h-full">
                            <div className="w-full h-full flex md:flex-row flex-col overflow-hidden my-4">
                                {/* img */}
                                <div className="md:mr-4 max-w-sm mx-auto">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={project.thumb || 'https://via.placeholder.com/500'}
                                    />
                                </div>

                                {/* desc */}
                                <div className="flex flex-col justify-between py-4 w-full">
                                    {/* desc-title&desc */}
                                    <div>
                                        <div className="text-left">
                                            <h3 className="mb-4">{project.title}</h3>
                                        </div>
                                        <div>
                                            <p className="whitespace-pre-line">{project.desc}</p>
                                        </div>
                                    </div>

                                    {/* desc-stack */}
                                    <div className="mt-4 md:mt-0">
                                        <p className="text-orange-600">Stack</p>
                                        <p className="text-sm text-gray-500">{project.stack}</p>
                                    </div>

                                    {/* desc-link */}
                                    <div className="flex justify-end">
                                        <button className="mt-4 text-sm hover:opacity-60 rounded-md">
                                            <a href={project.link}>
                                                <AiOutlineHome className="text-2xl text-red-400" />
                                            </a>
                                        </button>
                                        <button className="mt-4 ml-4 hover:opacity-60">
                                            <SiGithub className="text-2xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </article>
    );
};

export default Projects;
