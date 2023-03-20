import Image from "next/image";
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ['400', '200'], subsets: ['latin'] })

const Navbar = () => {
    return (
        <div className="flex flex-col gap-3 pt-3 px-[10%]">
            <div className="flex flex-row justify-between">
                <button onClick={() => {window.location.href = "mailto:ramon.garcia08@utrgv.edu"}} className="flex flex-row items-center">
                    <div className="h-[55px] w-[55px] bg-[#212121] rounded-full flex flex-col justify-center items-center">
                        <Image alt="email" className="opacity-30" width="25" height="25" src="/mail-thin-240.png"></Image>
                    </div>
                    <p className={inter.className + " pl-3 text-[#646464]"}>ramon.garcia08@utrgv.edu</p>
                </button>
                <ul className={inter.className + " flex flex-row gap-3 text-[#646464] items-center"}>
                    <li><a href="https://www.linkedin.com/in/ramon-garcia-787b6921b/" target="_blank">LinkedIn</a></li>
                    <li>/</li>
                    <li><a href="https://github.com/LoneCuriosity" target="_blank">Github</a></li>
                    <li>/</li>
                    <li><a href="#projects">Projects</a></li>
                    <li>/</li>
                    <li><a href="#about">About Me</a></li>
                    <li>/</li>
                    <li><a href="/Ramon Garcia Jr - Resume.pdf" target="_blank">Resume</a></li>
                </ul>
            </div>
            <hr className='border-0 bg-[#1F1F1F] h-[2px]'></hr>
        </div>
    );
}

export default Navbar;