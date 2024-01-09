import Image from "next/image";

export const CharacterImageContainerCaltrops = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                className="caltropsDiv"
                width={350}
                height={350}
                src="/homepageArt/CaltropsNoBG.png"
                alt="Image description"
            ></Image>
        </div>
    );
}