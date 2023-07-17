import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Inter } from 'next/font/google'
const inter = Inter({ weight: ['400', '200'], subsets: ['latin'] })
import Link from "next/link";

const Portfolio = () => {
    return (
        <>
            <div className="h-screen flex flex-col bg-[#161616] bg-dotted-spacing-[40px] bg-dotted-[#646464]">
                <Navbar Title="COMING SOON..."/>
                <div className="flex flex-col justify-center items-center px-[10%] py-4 gap-4 h-full">
                    <h1 className={inter.className + " text-white text-5xl"}>COMING SOON...</h1>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Portfolio;