import Navbar from "@/components/Navbar"
import Image from "next/image"
import { Inter } from "next/font/google"
const inter = Inter({ weight: ["400", "200"], subsets: ["latin"] })

export default function Home() {
  return (
    <div className="bg-dotted-spacing-[40px] bg-dotted-[#646464] bg-[#161616]" >
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-5 justify-center items-center flex-1">
            <Image alt="me" width="200" height="200" src="/me.png"></Image>
            <p className={inter.className + " text-xl text-[#646464]"}>Hi, I’m Ramon 👋</p>
            <p className={inter.className + " text-center text-7xl bg-gradient-to-t from-[#FFFFFF] to-[#646464] bg-clip-text text-transparent h-[15rem]"}>Web Developer <br /> Tinkerer, Creator and <br /> Programmer.</p>
          </div>
          <button className="flex flex-col items-center mb-5 animate-bounce">
            <p className={inter.className + " text-white font-light"}>Projects</p>
            <Image className="rotate-90" alt="arrow" width="20" height="20" src="/angel-right-thin-240.png"></Image>
          </button>
        </div>
      </div>

      <div id="projects" className="px-[10%] py-6 flex flex-col gap-[5rem] bg-[#161616]">

        <div className="flex flex-row gap-6">
          <Image className="rounded" width="500" height="500" src="/TAS.jpg" alt="TAS" />
          <div className={inter.className + " flex flex-col gap-4"}>
            <p className="text-white text-4xl">TAS(Telemetry Acquisition System) | 2022 - 2023</p>
            <p className="text-white">Problem: Design a system that could be installed within a high-powered amateur rocket and could provide different information about it during and after the flight. Information to be collected includes but is not limited to velocity, altitude, temperature, acceleration, location, pressure, etc. The system should have a live data streaming component to it as well.</p>
            <p className="text-white">Solution: TAS(Telemetry Acquisition System) was created to address most of not of the requirements that were required. Some of the components used within TAS include BME280, BMI088, LoRa Module, PA1616 GPS module, PCF2385, and SD module. The combination of these systems forms TAS. Using the LoRa module TAS can stream live data packets as far as 15 km. TAS also takes advantage of its GPS capabilities to track its location during and after the flight to better allow our recovery team to pinpoint the location of the rocket during recovery operations.</p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <Image className="rounded" width="500" height="500" src="/TAS.jpg" alt="TAS" />
          <div className={inter.className + " flex flex-col gap-4"}>
            <p className="text-white text-4xl">TAS(Telemetry Acquisition System) | 2022 - 2023</p>
            <p className="text-white">Problem: Design a system that could be installed within a high-powered amateur rocket and could provide different information about it during and after the flight. Information to be collected includes but is not limited to velocity, altitude, temperature, acceleration, location, pressure, etc. The system should have a live data streaming component to it as well.</p>
            <p className="text-white">Solution: TAS(Telemetry Acquisition System) was created to address most of not of the requirements that were required. Some of the components used within TAS include BME280, BMI088, LoRa Module, PA1616 GPS module, PCF2385, and SD module. The combination of these systems forms TAS. Using the LoRa module TAS can stream live data packets as far as 15 km. TAS also takes advantage of its GPS capabilities to track its location during and after the flight to better allow our recovery team to pinpoint the location of the rocket during recovery operations.</p>
          </div>
        </div>

      </div>

      <hr className='border-0 bg-[#1F1F1F] h-[2px] mx-[10%]'></hr>

      <div id="about" className="px-[10%] py-6 gap-6 flex jusitfy-center items-center flex-col bg-[#161616]">
        <Image className="rounded" width="300" height="300" src="/me.png" alt="TAS" />
        <div className={inter.className + " flex flex-col gap-4 items-center"}>
          <p className="text-white text-4xl">Hello, My name is Ramon Garcia Jr</p>
          <p className="text-white px-[25%] text-center">I was born and grew up in the Rio Grande Valley. As a young child, I was always fascinated by how things worked. My grandmother would tell me a story about how when I was young I would stand by the window for hours watching as machines built my neighborhood around me. Growing up I dont think I ever lost this wonder but rather found a way to channel it. I love to tinker with stuff, build stuff and yes break stuff. I think this quote from Henry Petroski puts it best.</p>
          <div className="flex justify-center flex-col items-center">
            <q className="text-white text-xl">Engineering is the art of curiosity. It is about exploring the unknown, asking questions, and finding answers that can change the world.</q>
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

      <div className={inter.className + " bg-[#1a1a1a] py-6 flex flex-col justify-center items-center"}>
        <p className="text-white font-thin">Created by Ramon Garcia Jr &copy; 2023</p>
        <div className={inter.className + " gap-2 font-thin flex flex-row text-white"}>
          <a href="mailto:ramon.garcia08@utrgv.edu">Email: ramon.garcia08@utrgv.edu</a>
          <p>&#8226;</p>
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
    </div>
  )
}
