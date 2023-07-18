import Navbar from "@/components/Navbar"
import Image from "next/image"
import { Inter } from "next/font/google"
import Tag from "@/components/Tag"
const inter = Inter({ weight: ["400", "200"], subsets: ["latin"] })
import { useState, useEffect } from "react"
import Title from "@/components/Title"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function Home() {
  const size = useWindowSize();

  return (
    <div className="bg-dotted-spacing-[40px] bg-dotted-[#646464] bg-[#161616]" >
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-5 justify-center items-center flex-1">
            <Image alt="me" width="200" height="200" src="/me.png"></Image>
            <p className={inter.className + " text-xl text-[#646464]"}>Hi, I’m Ramon 👋</p>
            <p className={inter.className + " text-center text-[9vw] bg-gradient-to-t from-[#FFFFFF] to-[#646464] bg-clip-text py-2 text-transparent lg:text-7xl"}>Web Developer <br /> Tinkerer, Creator and <br /> Programmer.</p>
          </div>
          <button className="flex flex-col items-center mb-5 animate-bounce">
            <p className={inter.className + " text-white font-light"}>Projects</p>
            <Image className="rotate-90" alt="arrow" width="20" height="20" src="/angel-right-thin-240.png"></Image>
          </button>
        </div>
      </div>

      <div id="projects" className="px-[10%] py-6 flex flex-col gap-[5rem] bg-[#161616]">

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="relative basis-1/3 w-full aspect-video">
            <Image src="/TAS_v2_2.jpeg" alt="TAS" size={size.width < 1024 ? "100vw" : ""} fill className="object-cover rounded" />
          </div>
          <div className={inter.className + " flex flex-col gap-2 basis-2/3"}>
            <div>
              <Title>TAS (Telemetry Acquisition System)</Title>
              <p className="text-white text-xl">2022 - 2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Tag BgColor="bg-lime-200" TxColor="text-lime-700" text="Soldering" />
              <Tag BgColor="bg-blue-200" TxColor="text-blue-700" text="CAD" />
              <Tag BgColor="bg-green-200" TxColor="text-green-700" text="C++" />
            </div>
            <p className="text-white font-thin">As the telemetry lead for rocket launchers, I had the opportunity to contribute to an exciting project called TAS (Telemetry Acquisition System). This project involved the design and development of a custom circuit board specifically tailored to gather an extensive range of data during rocket flights. Our primary objective was to capture critical information, including temperature, velocity, acceleration, pressure, and rotation, enabling us to acquire a comprehensive understanding of the rocket&apos;s behavior throughout its journey into space. By meticulously logging these parameters, we aimed to enhance our analysis and improve the overall performance and safety of future missions.</p>
            <Link className="flex flex-row gap-2" href="/projects/tas">
              <p className="text-white font uppercase">Read More</p>
              <Image className="animate-slideRight" alt="arrow" width="20" height="20" src="/arrow-right-thin-240.png"></Image>
            </Link>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="relative basis-1/3 aspect-video w-full">
            <Image src="/TAS GUI.jpeg" alt="TAS GUI" size={size.width < 1024 ? "100vw" : ""} fill className="object-cover rounded" />
          </div>
          <div className={inter.className + " flex flex-col gap-2 basis-2/3"}>
            <div>
              <Title>TAS GUI (Telemetry Acquisition System)</Title>
              <p className="text-white text-xl">2022 - 2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Tag BgColor="bg-teal-200" TxColor="text-teal-700" text="tailwind" />
              <Tag BgColor="bg-fuchsia-200" TxColor="text-fuchsia-700" text="html" />
              <Tag BgColor="bg-orange-200" TxColor="text-orange-700" text="Rust" />
            </div>
            <p className="text-white font-thin">During my tenure as the telemetry lead for rocket launchers, I had the privilege of working on TAS (Telemetry Acquisition System), a remarkable project that aimed to revolutionize data collection during rocket flights. Our main objective was to develop a cutting-edge custom-designed circuit board capable of gathering an extensive array of information about the rocket&apos;s performance in flight. The data we diligently logged encompassed crucial parameters such as temperature, velocity, acceleration, pressure, and rotation, enabling us to gain invaluable insights for optimizing future missions and ensuring the highest levels of safety and efficiency.</p>
            <Link className="flex flex-row gap-2" href="/projects/tas_gui">
              <p className="text-white font uppercase">Read More</p>
              <Image className="animate-slideRight" alt="arrow" width="20" height="20" src="/arrow-right-thin-240.png"></Image>
            </Link>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="relative basis-1/3 aspect-video w-full">
            <Image src="/Rest_Image_API.png" alt="TAS GUI" size={size.width < 1024 ? "100vw" : ""} fill className="object-cover rounded" />
          </div>
          <div className={inter.className + " flex flex-col gap-2 basis-2/3"}>
            <div>
              <Title>Image Rest API</Title>
              <p className="text-white text-xl">2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Tag BgColor="bg-emerald-200" TxColor="text-emerald-700" text="node.js" />
              <Tag BgColor="bg-cyan-200" TxColor="text-cyan-700" text="json" />
              <Tag BgColor="bg-yellow-200" TxColor="text-yellow-700" text="jimp" />
            </div>
            <p className="text-white font-thin">The rest image API, currently in use, serves as a crucial tool for extracting pixel data from public image URLs and returning it in the form of a JSON object. Originally developed to facilitate the integration of image data into a custom script for the game Garry&apos;s Mod, this API worked seamlessly with an E2 script within the game, enabling the display of images. Since the game lacked a built-in mechanism to directly pass image URLs, this API bridged the gap by utilizing the Jimp library to extract pixel data from the images behind the scenes</p>
            <Link className="flex flex-row gap-2" href="/projects/image_api">
              <p className="text-white font uppercase">Read More</p>
              <Image className="animate-slideRight" alt="arrow" width="20" height="20" src="/arrow-right-thin-240.png"></Image>
            </Link>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="relative basis-1/3 aspect-video w-full">
            <Image src="/portfolio.png" alt="TAS GUI" size={size.width < 1024 ? "100vw" : ""} fill className="object-cover rounded" />
          </div>
          <div className={inter.className + " flex flex-col gap-2 basis-2/3"}>
            <div>
              <Title>Portfolio Website</Title>
              <p className="text-white text-xl">2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Tag BgColor="bg-teal-200" TxColor="text-teal-700" text="tailwind" />
              <Tag BgColor="bg-emerald-200" TxColor="text-emerald-700" text="node.js"/>
              <Tag BgColor="bg-zinc-200" TxColor="text-zinc-700" text="Next.js" />
            </div>
            <p className="text-white font-thin">As my portfolio project began to expand, I envisioned creating a website to showcase and share my work with a wider audience. In pursuit of this goal, I sought to make it a valuable learning experience. That&apos;s when I decided to embrace a framework that was gaining popularity at the time. My choice fell upon Next.js, as it presented a new and promising approach. Having previous experience with React.js, Next.js seemed like a natural progression, allowing me to explore new concepts while building upon my existing knowledge. I&apos;m grateful for this decision as it deepened my understanding of Next.js and React.js, providing me with a practical project to apply these skills in a real-world context.</p>
            <Link className="flex flex-row gap-2" href="/projects/portfolio">
              <p className="text-white font uppercase">Read More</p>
              <Image className="animate-slideRight" alt="arrow" width="20" height="20" src="/arrow-right-thin-240.png"></Image>
            </Link>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-6">
          <div className="relative basis-1/3 aspect-video w-full">
            <Image src="/Semester_Project.png" alt="TAS GUI" size={size.width < 1024 ? "100vw" : ""} fill className="object-cover rounded" />
          </div>
          <div className={inter.className + " flex flex-col gap-2 basis-2/3"}>
            <div>
              <Title>Semester Project</Title>
              <p className="text-white text-xl">2023</p>
            </div>
            <div className="flex flex-row gap-2">
              <Tag BgColor="bg-fuchsia-200" TxColor="text-fuchsia-700" text="SQL" />
              <Tag BgColor="bg-emerald-200" TxColor="text-emerald-700" text="node.js"/>
              <Tag BgColor="bg-cyan-200" TxColor="text-cyan-700" text="json" />
            </div>
            <p className="text-white font-thin">During the 2023 spring semester at UTRGV, I undertook a semester project that involved developing a comprehensive access control system. This system incorporated a server, client application, and Raspberry Pi to manage user access to an application. The process involved users inputting a physical code through the Raspberry Pi&apos;s GPIO pins, which was then transmitted to a server running SQL. The server stored the last entered code in an SQL database. On the client side, a Beeware app requested the last known code from the server and compared it to a predetermined correct code. If the verification was successful, users were granted access to the remaining functionalities of the application. This project provided a practical opportunity to explore server-side development, client-side app creation, and hardware interaction using a Raspberry Pi, resulting in a comprehensive access control solution.</p>
            <Link className="flex flex-row gap-2" href="/projects/semester_project">
              <p className="text-white font uppercase">Read More</p>
              <Image className="animate-slideRight" alt="arrow" width="20" height="20" src="/arrow-right-thin-240.png"></Image>
            </Link>
          </div>
        </div>

      </div>

      <hr className='border-0 bg-[#2F2F2F] h-[2px] mx-[10%]'></hr>

      <div id="about" className="px-[10%] py-6 gap-6 flex jusitfy-center items-center flex-col bg-[#161616]">
        <Image className="rounded" width="300" height="300" src="/me.png" alt="TAS" />
        <div className={inter.className + " flex flex-col gap-4 items-center"}>
          <p className="text-white text-4xl text-md">{size.width < 1024 ? "Ramon Garcia Jr" : "Hello, My name is Ramon Garcia Jr"}</p>
          <p className="text-white lg:px-[25%] text-center font-thin">I was born and grew up in the Rio Grande Valley. As a young child, I was always fascinated by how things worked. My grandmother would tell me a story about how when I was young I would stand by the window for hours watching as machines built my neighborhood around me. Growing up I dont think I ever lost this wonder but rather found a way to channel it. I love to tinker with stuff, build stuff and yes break stuff. I think this quote from Henry Petroski puts it best.</p>
          <div className="flex justify-center flex-col items-center">
            <q className="text-white text-lg lg:text-left text-center">Engineering is the art of curiosity. It is about exploring the unknown, asking questions, and finding answers that can change the world.</q>
            <p className="text-white font-thin">- Henry Petroski</p>
          </div>
        </div>
        <button className="text-white flex flex-row justify-center items-center gap-2">
          <Image className="animate-slideRight" alt="arrow" width="20" height="20" src="/angel-right-thin-240.png"></Image>
          <Image className="animate-slideRight" alt="arrow" width="20" height="20" src="/angel-right-thin-240.png"></Image>
          <a href="/Ramon Garcia Jr - Resume.pdf" target="_blank" className="">Resume</a>
          <Image className="animate-slideLeft" alt="arrow" width="20" height="20" src="/angel-left-thin-240.png"></Image>
          <Image className="animate-slideLeft" alt="arrow" width="20" height="20" src="/angel-left-thin-240.png"></Image>
        </button>
      </div>

      <Footer/>
    </div>
  )
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
