import Image from "next/image";

export const CharacterImageContainerApex = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                className="apexDiv"
                width={350}
                height={350}
                src="/homepageArt/ApexNoBg.png"
                alt="Image description"
            ></Image>
        </div>
    ); 
}