import Image from "next/image";
import { Inter } from "next/font/google"
import { useState } from "react";
import { useEffect } from "react";
const inter = Inter({ weight: ["400", "200"], subsets: ["latin"] })

const Footer = () => {
    const size = useWindowSize();
    
    return (
        <div className={inter.className + " bg-[#2F2F2F] py-6 flex flex-col justify-center items-center"}>
            <p className="text-white font-thin">Created by Ramon Garcia Jr &copy; 2023</p>
            <div className={inter.className + " lg:gap-2 lg:text-left text-center font-thin flex lg:flex-row flex-col text-white"}>
            <a href="mailto:ramon@ramongarciajr.tech">Email: ramon@ramongarciajr.tech</a>
            {size.width > 1024 && <p>&#8226;</p>}
            <a href="tel:+19564389466">Phone: (956) 438-9466</a>
            </div>
            <div className="pt-2 flex flex-row gap-5">
            <a href="https://www.linkedin.com/in/ramon-garcia-787b6921b/" target="_blank">
                <Image alt="linkedin" width="36" height="36" src="/linkedin-2-240.png"></Image>
            </a>
            <a href="https://github.com/LoneCuriosity" target="_blank">
                <Image alt="github" width="36" height="36" src="/github-1-240.png"></Image>
            </a>
            </div>
        </div>
    );
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default Footer;