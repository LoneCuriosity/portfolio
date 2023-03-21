import { Inter } from "next/font/google"
const inter = Inter({ weight: ["400", "200"], subsets: ["latin"] })

const Tag = (props) => {
    return (
        <div className={`${inter.className} ${props.BgColor} flex flex-row text-white gap-2 rounded-full px-3 py-1` }>
            <p className={`${props.TxColor} font-bold uppercase text-xs`}>{props.text}</p>
        </div>
    );
}

export default Tag;