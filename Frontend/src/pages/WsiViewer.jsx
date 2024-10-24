import { useEffect, useState } from "react";
import DetailsPanel from "../components/DetailsPanel";
import ImagePanel from "../components/ImagePanel";

function WsiViewer() {

    const [display, setDisplay] = useState(false)
    const [DetailsClass, setDetailsClass] = useState("DetailsDisplay")
    const [TableClass, setTableClass] = useState("TableDisplay")

    useEffect(() => {
        if (!display) {
            setDetailsClass("DetailsDisplay")
            setTableClass("TableDisplay")
        }else {
            setDetailsClass("")
            setTableClass("")
        }
    }, [display])

    return (
        <div className="w-full h-full bg-[rgb(30, 41, 59)] flex flex-col">
            
            <div className="w-full h-16 flex flex-row gap-4 px-4 bg-[#1b2245] shadow-md shadow-gray-900 align-middle content-center z-10">
                {/* <button className="mt-2 align-middle justify-center text-center content-center w-10 h-10 text-white text-3xl border border-zinc-200 rounded-md hover:bg-[#bebec783] hover:text-blue-950" onClick={() => setDisplay(!display)}>=</button> */}
                <h1 className="text-3xl text-white font-medium text-left content-center">WSI Viewer</h1>
                
                
            </div>

            <div className="w-full h-full flex flex-row justify-center">
                <DetailsPanel DetailsClass={DetailsClass} TableClass={TableClass} />
                <ImagePanel display={display} setDisplay={setDisplay}/>
                
            </div>
                
        </div>
    )
}

export default WsiViewer