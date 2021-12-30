import { useCallback, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { animated, useSpring } from 'react-spring';

const AppHeader = () => {
    const [openNav, setOpenNav] = useState(false);
    const navOpenAnimation = useSpring({
        translateX: openNav ? 0 : -320,
    });

    const handleOpenNav = useCallback(() => {
        setOpenNav(true);
    }, []);

    const handleCloseNav = useCallback(() => {
        setOpenNav(false);
    }, []);

    return (
        <header className="w-full mx-auto h-14 flex items-center relative">
            <button className="cursor-pointer" onClick={handleOpenNav}>
                <AiOutlineMenu className="text-2xl" />
            </button>
            <animated.nav
                style={navOpenAnimation}
                className={`w-80 h-full px-8 py-8 flex-col flex fixed top-0 left-0 bg-gray-100`}
            >
                <button className="max-w-fit mb-8" onClick={handleCloseNav}>
                    <AiOutlineClose className="text-3xl" />
                </button>
                <ul className="w-full flex flex-col">
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
