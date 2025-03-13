import { useState } from 'react'

export default function RandomColorGenerator(){

    const [colorType, setColorType] = useState<'hex' |'rgb' >("hex")
    const [color, setColor] = useState("#aaaaaa")

    const generateRandomHexColor = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * hex.length);
            hexColor += hex[randomIndex];
        }

        setColor(hexColor);
        setColorType('hex')
    }

    const generateRandomRgbColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        setColor(rgbColor);
        setColorType('rgb')
    }

    return (
        <div className="min-h-[100dvh] p-4 flex flex-col" style={{background: color}}>
            <div className='flex gap-4 items-center justify-center flex-wrap'>
                <button className='rounded px-4 py-2.5 text-sm font-semibold bg-gray-700 text-white border-[1px]' onClick={generateRandomHexColor}>Create HEX color</button>
                <button className='rounded px-4 py-2.5 text-sm font-semibold bg-gray-700 text-white border-[1px]' onClick={generateRandomRgbColor}>Create RGB color</button>
                <button className='rounded px-4 py-2.5 text-sm font-semibold bg-gray-700 text-white border-[1px]' onClick={colorType === 'hex' ? generateRandomHexColor : generateRandomRgbColor}>Generate Random Color</button>
            </div>
            <div className='grow flex items-center justify-center font-bold text-3xl'>
                { color }
            </div>
        </div>
    )
}

