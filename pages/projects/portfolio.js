import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ['400', '200'], subsets: ['latin'] })
import Link from "next/link";

const Portfolio = () => {
    return (
        <>
            <div className="h-full lg:h-screen flex flex-col bg-[#161616] bg-dotted-spacing-[40px] bg-dotted-[#646464]">
                <Navbar Title="PORTFOLIO WEBSITE"/>
                <div className="flex flex-col px-[10%] py-4 gap-4 h-full">

                    <div className="flex-row lg:basis-4/6 aspect-video lg:aspect-auto flex rounded-lg overflow-hidden border-2 border-[#2F2F2F]">
                        <div className="relative flex-1">
                            <Image src="/portfolio.png" fill alt="TAS v2 #1" className="object-cover"></Image>
                        </div>
                        
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 basis-2/6">
                        <div className="basis-1/6 bg-[#1B1B1B] rounded-lg p-2 flex flex-col border-2 border-[#2F2F2F]">
                            <h1 className={inter.className + " text-[#F0F0F0] text-xl pb-1"}>STATUS</h1>
                            <hr className='border-0 bg-[#2F2F2F] h-[2px]'></hr>
                            <div className="flex flex-col h-full justify-around">
                                <div className="flex flex-row items-center">
                                    <h1 className={inter.className + " text-white text-xl pr-2"}>COMPLETE -</h1>
                                    {/*<svg className="w-[30px] h-[30px] fill-red-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>*/}
                                    <svg className="w-[28px] h-[28px] fill-green-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fillRule="nonzero"/></svg>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h1 className={inter.className + " text-[#909090] text-sm pr-2"}>STARTED - 4/2023</h1>
                                    <h1 className={inter.className + " text-[#909090] text-sm pr-2"}>FINISHED - N/A</h1>
                                </div>
                                <div className="flex flex-row items-center">
                                    <h1 className={inter.className + " text-white text-xl"}>TEAM PROJECT -</h1>
                                    <div className="pl-1">
                                        <svg className="w-[32px] h-[32px] fill-red-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                                    </div>
                                    <div className="pl-1">
                                        {/*<svg className="w-[28px] h-[28px] fill-green-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fillRule="nonzero"/></svg>*/}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <h1 className={inter.className + " text-white text-xl"}>HARDWARE -</h1>
                                    <div className="pl-1">
                                        <svg className="w-[32px] h-[32px] fill-red-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                                    </div>
                                    <div className="pl-1">
                                        {/*<svg className="w-[28px] h-[28px] fill-green-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fillRule="nonzero"/></svg>*/}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <h1 className={inter.className + " text-white text-xl"}>SOFTWARE -</h1>
                                    <div className="pl-1">
                                        {/*<svg className="w-[32px] h-[32px] fill-red-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>*/}
                                    </div>
                                    <div className="pl-1">
                                        <svg className="w-[28px] h-[28px] fill-green-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fillRule="nonzero"/></svg>
                                    </div>
                                </div>
                                <Link href="https://github.com/RamonGarciaJr956/portfolio" className="flex flex-row items-center">
                                    <h1 className={inter.className + " text-white text-xl"}>GITHUB -</h1>
                                    <div className="pl-1">
                                        {/*<svg className="w-[32px] h-[32px] fill-red-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>*/}
                                    </div>
                                    <div className="pl-1">
                                        <svg className="w-[28px] h-[28px] fill-green-600" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56" fillRule="nonzero"/></svg>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="h-full basis-5/6 bg-[#1B1B1B] rounded-lg p-2 flex flex-col border-2 border-[#2F2F2F]">
                            <h1 className={inter.className + " text-[#F0F0F0] text-xl pb-1"}>DESCRIPTION</h1>
                            <hr className='border-0 bg-[#2F2F2F] h-[2px]'></hr>
                            <p className="text-white font-thin">I created my portfolio website with the intention of showcasing my projects to a wider audience. To make the most of this opportunity, I decided to explore different technologies during the website development process, aiming to enhance my learning experience. For this purpose, I chose Next.js as the framework for building my website. Although I had limited prior exposure to Next.js, its similarities to my existing knowledge made it an intriguing option for venturing into the unknown. Moreover, Next.js popularity provided a significant advantage, as it meant that a large community was available to offer support and valuable tips. Alongside Next.js, I also opted to utilize Tailwind for CSS. While it may seem verbose to some, I appreciated the ease with which Tailwind allowed me to work with CSS, enabling me to focus more on the design aspect of my portfolio. Overall, I am pleased with the results of my portfolio website, and I am continuously working on improving and refining it to ensure it reaches its full potential.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Portfolio;