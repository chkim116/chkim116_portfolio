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
    return (
        <article className="w-full p-28">
            <h2 className="text-center mb-10">My Stack</h2>
            <div className="grid grid-cols-3 text-2xl font-light">
                <div className="flex justify-center">
                    <ul className="leading-loose">
                        <li className="flex items-center">
                            <SiHtml5 className="text-orange-700 text-4xl" />
                            <span className="ml-2">HTML</span>
                        </li>
                        <li className="flex items-center">
                            <SiCss3 className="text-blue-600 text-4xl" />
                            <span className="ml-2">CSS</span>
                        </li>
                        <li className="flex items-center">
                            <SiJavascript className="text-yellow-400 text-4xl" />
                            <span className="ml-2">JavaScript</span>
                        </li>
                        <li className="flex items-center">
                            <SiTypescript className="text-blue-500 text-4xl" />
                            <span className="ml-2">TypeScript</span>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <ul className="leading-loose">
                        <li className="flex items-center">
                            <SiReact className="text-blue-400 text-4xl" />
                            <span className="ml-2">React</span>
                        </li>
                        <li className="flex items-center">
                            <SiNextdotjs className="text-black text-4xl" />
                            <span className="ml-2">Next.js</span>
                        </li>
                        <li className="flex items-center">
                            <SiNodedotjs className="text-green-600 text-4xl" />
                            <span className="ml-2">Node.js</span>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <ul className="leading-loose">
                        <li className="flex items-center">
                            <SiAmazonaws className="text-orange-500 text-4xl" />
                            <span className="ml-2">AWS</span>
                        </li>
                        <li className="flex items-center">
                            <SiCircleci className="text-black text-4xl" />
                            <span className="ml-2">CircleCI</span>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default Skills;
