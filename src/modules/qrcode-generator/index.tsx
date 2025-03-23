import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [input, setInput] = useState('');

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-medium text-xl">QR Code Generator</h1>
      <div className="flex items-center gap-4 w-full justify-center">
        <input 
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="font-medium text-sm px-4 py-2 rounded outline-none ring-[2px] ring-purple-500 w-full max-w-[450px]" 
        />
        <button onClick={() => setInput('')} className="font-medium bg-purple-500 rounded py-2 px-5 text-gray-100 ">
          Clear
        </button>
      </div>
      <div>
        <QRCode value={input} />
      </div>
    </div>
  );
}
