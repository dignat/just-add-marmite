import { useEffect, useState } from "react";
import Image from "next/image";
const MediaWrapper = (props) => {
    const [isImage, setIsImage] = useState(false);

    const assetUrl = props.fields.file.url;
    const asset = props.image;
    const assetType = props.fields.file.contentType;
    const width = props.fields.file.details.image.width;
    const height = props.fields.file.details.image.height;

    console.log(assetType, 'asset type')

    useEffect(() => {
        try {
            if (assetType.startsWith("image")) {
                setIsImage(true);
            }

        }catch (error) {}
        return () => {
            setIsImage(false);
        };
    }, [assetType]);
    if (!assetUrl) {
        return '..'
    }

    return (
        <div>
            {isImage ? (
                <div>
                    <div>
                        <Image src={`https:${assetUrl}`}
                        width={width} height={height}/>
                    </div>
                </div>

            ): ("")}
        </div>
    )
}

export default MediaWrapper;