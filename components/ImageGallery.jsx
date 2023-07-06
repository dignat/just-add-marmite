import { useCallback, useEffect, useState } from "react";
import MediaWrapper from "./MediaWrapper";


const ImageGallery = (props) => {

    const [current, setCurrent] = useState(0);
    const [currentImage, setCurrentImage] = useState("");
    const gallery = props.gallery;

    const handleNext = useCallback(() => {
        try {
            if (current + 1 === gallery.length) {
                setCurrent(0);
            } else {
                setCurrent(current + 1);
            }

        } catch (error) {}

    },[current, gallery]);


    const handlePrev = (() => {
        try {
            if (current -1 === -1) {
                setCurrent(gallery.length -1);
            } else {
                setCurrent(current -1);
            }

        } catch (error) {}
    });

    useEffect(() => {
        const changeFocus = setInterval(() => {
            handleNext();
        }, 10000);
        return () => {
            clearInterval(changeFocus);
        }
    }, [handleNext]);

    if (!gallery) {
        return "";
    }

    return (
        <div>
            <div>
                <button onClick={handlePrev}>Prev</button>
            </div>
            <MediaWrapper {...gallery[current]} />
            <div>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )


}

export default ImageGallery;