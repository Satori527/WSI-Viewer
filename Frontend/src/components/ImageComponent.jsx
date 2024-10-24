import { useRef } from "react";
import {
    MiniMap,
    TransformComponent,
    TransformWrapper
} from "react-zoom-pan-pinch";
//import wsi from "../assets/wsi.jpg";
import wsi from "../assets/wsi.png";
import { Controls } from "./controls";
import "./HubViewPanel.css";



export function ImageComponent({display, setDisplay}) {
    const transformComponentRef = useRef(null);

    const zoomToImage = () => {
        if (transformComponentRef.current) {
        const { zoomToElement } = transformComponentRef.current;
        zoomToElement("imgExample");
        }
    };

    return (
        <TransformWrapper
        initialScale={1}
        
        ref={transformComponentRef}
        
        >
        {(utils) => (
            
            <div className="w-full h-full bg-[rgb(30, 41, 59] flex flex-col justify-start content-center ">
                <div className="HubViewPanel">
                <MiniMap className="MiniMap"
                    borderColor="rgba(84, 96, 915, 0.428)"
                    
                >
                    <img src={wsi} alt="test" id="imgExample" />
                </MiniMap>
                </div>
                <div>
                    <Controls {...utils} display={display} setDisplay={setDisplay} />
                </div>
            
                <div className="flex flex-row justify-center bg-slate-800">
                <TransformComponent>
                    <div className="w-full h-full flex flex-col justify-start content-center">
                        <img src={wsi} alt="test" id="imgExample" style={{width: "100%", maxHeight: "820px"}}/>
                        
                    </div>
                </TransformComponent>
                </div>
            </div>
        )}
        </TransformWrapper>
    );
};