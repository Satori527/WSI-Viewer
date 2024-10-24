export const Controls = ({ zoomIn, zoomOut, resetTransform, display, setDisplay }) => (
    <div className="controls flex flex-row gap-2 justify-start px-20 py-2 bg-[rgb(30, 41, 59] shadow-sm shadow-black align-middle content-center items-center">
        <button className="mt-2 align-middle justify-center text-center content-center w-10 h-10 text-white text-3xl border border-zinc-200 rounded-md hover:bg-[#bebec783] hover:text-blue-950" onClick={() => setDisplay(!display)}>=</button>
        <button className="px-4 h-8 rounded-lg  text-white border border-zinc-200 hover:bg-zinc-200 hover:text-blue-950" onClick={() => zoomIn()}>+ Zoom In</button>
        <button className="px-4 h-8 rounded-lg  text-white border border-zinc-200 hover:bg-zinc-200 hover:text-blue-950" onClick={() => zoomOut()}>- Zoom Out</button>
        <button className="px-4 h-8 rounded-lg  text-white border border-zinc-200 hover:bg-zinc-200 hover:text-blue-950" onClick={() => resetTransform()}>x Reset</button>
    </div>
);