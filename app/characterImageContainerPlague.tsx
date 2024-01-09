import Image from "next/image";

export const CharacterImageContainerPlague = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                className="plagueDiv"
                width={350}
                height={350}
                src="/homepageArt/PlagueNoBG.png"
                alt="Image description"
            ></Image>
        </div>
    );   
}