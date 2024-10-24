import { BiDetail } from "react-icons/bi";
import { MdOutlineZoomIn, MdOutlineZoomOut } from "react-icons/md";
import { RxReset } from "react-icons/rx";

export const Controls = ({ zoomIn, zoomOut, resetTransform, display, setDisplay }) => (
    <div className="controls flex flex-row gap-2 justify-start px-8 py-2 bg-[rgb(30, 41, 59] shadow-sm shadow-black align-middle content-center items-center">
        
        <button className=" align-middle justify-center text-center content-center h-10 text-white px-2 border border-zinc-200 rounded-md hover:bg-zinc-200 hover:text-blue-950 flex flex-row items-center gap-2" onClick={() => setDisplay(!display)}>
            <BiDetail className="text-zinc-400 h-8 w-8 hover:text-blue-950" /> Details </button>
        <button className="px-4 h-9 rounded-lg  text-white border border-zinc-200 hover:bg-zinc-200 hover:text-blue-950 flex flex-row items-center gap-2" onClick={() => zoomIn()}><MdOutlineZoomIn className="text-zinc-400 h-8 w-8 hover:text-blue-950" />
        Zoom In</button>
        <button className="px-4 h-9 rounded-lg  text-white border border-zinc-200 hover:bg-zinc-200 hover:text-blue-950 flex flex-row items-center gap-2" onClick={() => zoomOut()}><MdOutlineZoomOut className="text-zinc-400 h-8 w-8 hover:text-blue-950" /> Zoom Out</button>
        <button className="px-4 h-9 rounded-lg  text-white border border-zinc-200 hover:bg-zinc-200 hover:text-blue-950 flex flex-row items-center gap-2" onClick={() => resetTransform()}><RxReset className="text-zinc-400 h-8 w-8 hover:text-blue-950" /> Reset</button>
    </div>
);