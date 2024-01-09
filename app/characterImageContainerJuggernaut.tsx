import Image from "next/image";

export const CharacterImageContainerJuggernaut = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                className="juggernautDiv"
                width={350}
                height={350}
                src="/homepageArt/JuggernautNoBG.png"
                alt="Image description"
            ></Image>
        </div>
    );  
}