import Image from "next/image";


export const CharacterInfoPanel = () => {
    return (
        <div className="characterInfoPanelContainer flex flex-col w-[90vw] h-[30vh] bg-gray-200">
            <div className="characterInfoPanelTop flex flex-row h-[20%]">
                <div className="characterInfoPanelLogo flex flex-col text-black text-center w-[10%]">
                    Logo
                </div>
                <div className="characterInfoPanelClanName text-black text-center w-[35%]">
                    Clan Name
                </div>
                <div className="characterInfoPanelUltimate text-black text-center w-[55%]">
                    Ultimate
                </div>
            </div>
            <div className="characterInfoPanelBottom flex flex-row h-[80%]">
                <div className="characterInfoPanelSection1 flex text-black text-center">
                    <div className="flex flex-col items-center">
                        <Image
                            className="rounded-md"
                            width={125}
                            height={125}
                            src="/cardArt/Bard2.png"
                            alt="Image description"
                        ></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};