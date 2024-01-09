import Image from "next/image";


export const CharacterInfoPanel2 = () => {
    return (
        <div className="cardDisplayContainer flex flex-row relative w-[90vw] h-[40vh] bg-gray-200">
            <div className="flex relative w-[9vw] h-[23vh]">
                <Image
                    className="rounded-md"
                    fill={true}
                    src="/cardArt/Bard2.png"
                    alt="Image description"
                ></Image>
            </div>
            <div className="flex relative w-[11vw] h-[25vh]">
                <Image
                    className="rounded-md"
                    fill={true}
                    src="/cardArt/Bard2.png"
                    alt="Image description"
                ></Image>
            </div>
            <div className="flex relative w-[13vw] h-[30vh]">
                <Image
                    className="rounded-md"
                    fill={true}
                    src="/cardArt/Bard2.png"
                    alt="Image description"
                ></Image>
            </div>
            <div className="flex relative w-[11vw] h-[25vh]">
                <Image
                    className="rounded-md"
                    fill={true}
                    src="/cardArt/Bard2.png"
                    alt="Image description"
                ></Image>
            </div>   
            <div className="flex relative w-[9vw] h-[23vh]">
                <Image
                    className="rounded-md"
                    fill={true}
                    src="/cardArt/Bard2.png"
                    alt="Image description"
                ></Image>
            </div>
        </div>
    );
};