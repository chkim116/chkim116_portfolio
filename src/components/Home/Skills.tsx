import {
    SiTypescript,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiCircleci,
    SiAmazonaws,
} from 'react-icons/si';

const Skills = () => {
    const stacks = [
        [
            {
                name: 'HTML',
                icon: <SiHtml5 className="text-3xl text-orange-700" />,
            },
            {
                name: 'CSS',
                icon: <SiCss3 className="text-3xl text-blue-600" />,
            },
            {
                name: 'JavaScript',
                icon: <SiJavascript className="text-3xl text-yellow-400" />,
            },
            {
                name: 'TypeScript',
                icon: <SiTypescript className="text-3xl text-blue-500" />,
            },
        ],
        [
            {
                name: 'React',
                icon: <SiReact className="text-3xl text-blue-400" />,
            },
            {
                name: 'Next.js',
                icon: <SiNextdotjs className="text-3xl text-black" />,
            },
            {
                name: 'Express',
                icon: <SiNodedotjs className="text-3xl text-green-600" />,
            },
        ],
        [
            {
                name: 'AWS',
                icon: <SiAmazonaws className="text-3xl text-orange-500" />,
            },
            {
                name: 'CircleCI',
                icon: <SiCircleci className="text-3xl text-black" />,
            },
        ],
    ];

    return (
        <article id="skills" className="w-full p-28">
            <h2 className="text-center mb-10">Skills</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-xl">
                {stacks.map((stack, i) => (
                    <ul key={i} className="w-full flex flex-col items-center">
                        {stack.map((s) => (
                            <li
                                key={s.name}
                                className="w-40 flex items-center text-xl mt-3 font-light"
                            >
                                {s.icon}
                                <span className="ml-2">{s.name}</span>
                            </li>
                        ))}
                        <br className="md:hidden block" />
                    </ul>
                ))}
            </div>
        </article>
    );
};

export default Skills;
