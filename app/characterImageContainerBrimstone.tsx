import Image from "next/image";

export const CharacterImageContainerBrimstone = () => {
    return (
        <div className="flex flex-col items-center">
            <Image
                className="brimstoneDiv"
                width={350}
                height={350}
                src="/homepageArt/BrimstoneNoBG.png"
                alt="Image description"
            ></Image>
        </div>
    );
}