import Navbar from "@/components/Navbar"
import Image from "next/image"
import { Inter } from "next/font/google"
import Tag from "@/components/Tag"
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
          <div className={inter.className + " flex flex-col gap-2"}>
            <p className="text-white text-2xl">TAS(Telemetry Acquisition System) | 2022 - 2023</p>
            <div className="flex flex-row gap-2">
              <Tag BgColor="bg-lime-200" TxColor="text-lime-700" text="Soldering" />
              <Tag BgColor="bg-blue-200" TxColor="text-blue-700" text="CAD" />
              <Tag BgColor="bg-green-200" TxColor="text-green-700" text="C++" />
            </div>
            <p className="text-white font-thin">Objective: Develop a comprehensive system capable of being integrated into a high-powered amateur rocket to collect and transmit vital flight data in real-time. The data to be collected includes but is not limited to velocity, altitude, temperature, acceleration, location, and pressure.</p>
            <p className="text-white font-thin">Solution: The Telemetry Acquisition System (TAS) was specifically engineered to address the requirements of the project. TAS is comprised of several key components such as BME280, BMI088, LoRa Module, PA1616 GPS module, PCF2385, and SD module. The integration of these components enables TAS to gather critical flight data and transmit it in real-time over extended distances, up to 15 kilometers, via the LoRa module. Additionally, TASs GPS capabilities allow for the tracking of the rockets precise location, providing valuable information to recovery teams during and after the flight.</p>
          </div>
        </div>

        <div className="flex flex-row gap-6">
          <Image src="/TAS GUI.jpeg" alt="TAS GUI" width="505" height="0" className="aspect-auto" />
          <div className={inter.className + " flex flex-col gap-2"}>
            <p className="text-white text-2xl">TAS GUI(Telemetry Acquisition System) | 2022 - 2023</p>
            <div className="flex flex-row gap-2">
              <Tag BgColor="bg-teal-200" TxColor="text-teal-700" text="tailwind" />
              <Tag BgColor="bg-fuchsia-200" TxColor="text-fuchsia-700" text="html" />
              <Tag BgColor="bg-orange-200" TxColor="text-orange-700" text="Rust" />
            </div>
            <p className="text-white font-thin">Objective: Develop a system capable of interfacing with TAS, displaying live data in real-time, and recovering corrupted data packets when possible. Additionally, the system should allow for communication with the rocke</p>
            <p className="text-white font-thin">Solution: To address this challenge, the TAS Graphical User Interface (TAS GUI) was developed. The software provides a user-friendly interface for displaying live data collected by TAS and recovering corrupted packets. The final product is displayed on the side of this text. The TAS GUI employs the Tauri library, a powerful tool that facilitates the creation of a desktop application using HTML and CSS on the front end and Rust on the back end. The Tauri backend enables seamless communication with the underlying operating system and facilitates communication with the rocket via USB using serial communication protocols.</p>
          </div>
        </div>

      </div>

      <hr className='border-0 bg-[#2F2F2F] h-[2px] mx-[10%]'></hr>

      <div id="about" className="px-[10%] py-6 gap-6 flex jusitfy-center items-center flex-col bg-[#161616]">
        <Image className="rounded" width="300" height="300" src="/me.png" alt="TAS" />
        <div className={inter.className + " flex flex-col gap-4 items-center"}>
          <p className="text-white text-4xl">Hello, My name is Ramon Garcia Jr</p>
          <p className="text-white px-[25%] text-center font-thin">I was born and grew up in the Rio Grande Valley. As a young child, I was always fascinated by how things worked. My grandmother would tell me a story about how when I was young I would stand by the window for hours watching as machines built my neighborhood around me. Growing up I dont think I ever lost this wonder but rather found a way to channel it. I love to tinker with stuff, build stuff and yes break stuff. I think this quote from Henry Petroski puts it best.</p>
          <div className="flex justify-center flex-col items-center">
            <q className="text-white text-lg">Engineering is the art of curiosity. It is about exploring the unknown, asking questions, and finding answers that can change the world.</q>
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

      <div className={inter.className + " bg-[#2F2F2F] py-6 flex flex-col justify-center items-center"}>
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
