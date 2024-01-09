import Image from "next/image";

export const CharacterImageContainerChorus = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                className="chorusDiv"
                width={350}
                height={350}
                src="/homepageArt/ChorusNoBG.png"
                alt="Image description"
            ></Image>
        </div>
    ); 
}