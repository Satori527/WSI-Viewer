import { ImageComponent } from "./ImageComponent"

function ImagePanel({display, setDisplay}) {
    return (
        <>
            <ImageComponent display={display} setDisplay={setDisplay} />
        </>
    )
}

export default ImagePanel