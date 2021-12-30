import { useCallback, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { animated, useSpring } from 'react-spring';

const AppHeader = () => {
    const [openNav, setOpenNav] = useState(false);
    const navOpenAnimation = useSpring({
        translateX: openNav ? 0 : -320,
    });

    const handleOpenNav = useCallback(() => {
        setOpenNav((prev) => !prev);
    }, []);

    return (
        <header className="w-full mx-auto flex items-center relative">
            <button
                className="cursor-pointer fixed max-w-fit top-7 left-8 z-10"
                onClick={handleOpenNav}
            >
                {openNav ? (
                    <AiOutlineClose className="text-3xl" />
                ) : (
                    <HiMenu className="text-3xl text-red-500" />
                )}
            </button>
            <animated.nav
                style={navOpenAnimation}
                className={`w-80 h-full px-8 py-8 flex-col flex fixed top-0 left-0 bg-gray-100`}
            >
                <ul className="w-full flex flex-col pt-10">
                    <li className="mt-8 ml-4 ph-2 text-2xl font-thin cursor-pointer max-w-fit hover:text-orange-300">
                        <a href="#2">About</a>
                    </li>
                    <li className="mt-8 ml-4 ph-2 text-2xl font-thin cursor-pointer max-w-fit hover:text-orange-300">
                        Skills
                    </li>
                    <li className="mt-8 ml-4 ph-2 text-2xl font-thin cursor-pointer max-w-fit hover:text-orange-300">
                        Projects
                    </li>
                    <li className="mt-8 ml-4 ph-2 text-2xl font-thin cursor-pointer max-w-fit hover:text-orange-300">
                        Contact
                    </li>
                </ul>
            </animated.nav>
        </header>
    );
};

export default AppHeader;
