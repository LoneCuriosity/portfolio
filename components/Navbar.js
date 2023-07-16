import Image from "next/image";
import Link from "next/link";
import { Inter } from 'next/font/google'
import { useState } from "react";
import { usePathname } from 'next/navigation';
const inter = Inter({ weight: ['400', '200'], subsets: ['latin'] })

const Navbar = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const currentPage = usePathname();

    return (
        <>
            <div className="lg:hidden flex flex-col">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ?
                        <Image alt="menu" width="48" height="48" src="/x-mark-lined-240.png" class="absolute top-0 z-10"></Image>
                        :
                        <Image alt="menu" width="48" height="48" src="/menu-left-lined-240.png" className="absolute top-0 pl-2 z-10"></Image>
                    }
                </button>
                {menuOpen &&
                    <div className="absolute w-full">
                        <ul className={inter.className + " flex flex-col gap-3 py-3 bg-[#161616] text-white items-center bg-opacity-90"}>
                            <li><a href="https://www.linkedin.com/in/ramon-garcia-787b6921b/" target="_blank" onClick={() => setMenuOpen(!menuOpen)}>LinkedIn</a></li>
                            <hr className='border-0 bg-[#2F2F2F] h-[2px] w-[75%]'></hr>
                            <li><a href="https://github.com/LoneCuriosity" target="_blank" onClick={() => setMenuOpen(!menuOpen)}>Github</a></li>
                            <hr className='border-0 bg-[#2F2F2F] h-[2px] w-[75%]'></hr>
                            <li><a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>Projects</a></li>
                            <hr className='border-0 bg-[#2F2F2F] h-[2px] w-[75%]'></hr>
                            <li><a href="#about" onClick={() => setMenuOpen(!menuOpen)}>About Me</a></li>
                            <hr className='border-0 bg-[#2F2F2F] h-[2px] w-[75%]'></hr>
                            <li><a href="/Ramon Garcia Jr - Resume.pdf" target="_blank" onClick={() => setMenuOpen(!menuOpen)}>Resume</a></li>
                        </ul>
                    </div>
                }
            </div>

            <div className="hidden lg:block flex flex-col gap-3 px-[10%]">
                <div className="flex flex-row justify-between py-3">
                    { props.Title == null ?
                        <button onClick={() => { window.location.href = "mailto:ramon@ramongarciajr.tech" }} className="flex flex-row items-center">
                            <div className="h-[50px] w-[50px] bg-[#212121] rounded-full flex flex-col justify-center items-center">
                                <Image alt="email" className="opacity-30" width="25" height="25" src="/mail-thin-240.png"></Image>
                            </div>
                            <p className={inter.className + " pl-3 text-[#646464]"}>ramon@ramongarciajr.tech</p>
                        </button>
                        :
                        <h1 className="text-[#909090] text-3xl py-2">{props.Title}</h1>
                    }
                    <ul className={inter.className + " flex flex-row gap-3 text-[#646464] items-center"}>
                        {currentPage != "/" &&
                        <>
                            <li><Link href="/">Home</Link></li>
                            <li>/</li>
                        </>
                        }
                        <li><a href="https://www.linkedin.com/in/ramon-garcia-787b6921b/" target="_blank">LinkedIn</a></li>
                        <li>/</li>
                        <li><a href="https://github.com/LoneCuriosity" target="_blank">Github</a></li>
                        <li>/</li>
                        {currentPage == "/" &&
                        <>
                            <li><a href="#projects">Projects</a></li>
                            <li>/</li>
                            <li><a href="#about">About Me</a></li>
                            <li>/</li>
                        </>
                        }
                        <li><a href="/Ramon Garcia Jr - Resume.pdf" target="_blank">Resume</a></li>
                    </ul>
                </div>
                <hr className='border-0 bg-[#2F2F2F] h-[2px]'></hr>
            </div>
        </>
    );
}

export default Navbar;