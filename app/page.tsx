import Image from "next/image";
import { Button, ConfigProvider, Space } from "antd";
import { CharacterInfoPanel } from "./characterInfoBox";
import { CharacterInfoPanel2 } from "./characterInfoBox2";
import { CharacterImageContainerApex } from "./characterImageContainerApex";
import { CharacterImageContainerBrimstone } from "./characterImageContainerBrimstone";
import { CharacterImageContainerChorus } from "./characterImageContainerChorus";
import { CharacterImageContainerCaltrops } from "./characterImageContainerCaltrops";
import { CharacterImageContainerPlague } from "./characterImageContainerPlague";
import { CharacterImageContainerJuggernaut } from "./characterImageContainerJuggernaut";
import { PageSection } from "./PageSection";
export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#00b96b",
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex items-center justify-center w-full h-[65vh] sm:h-[65vh] bg-gradient-to-r from-sky-500 to-indigo-500 border-b-4 border-b-slate-950">
          <div className="flex flex-col items-center justify-center  max-w-[900px]">
            <h1 className="text-center font-bold text-4xl mb-8 w-full">
              Flip Comp - Build your Composition and words!
            </h1>
            <h2 className="text-center font-light w-3/4">
              Build a deck of Attackers, Tanks and Support units, then use them
              in tandem to create a unique team composition every round, facing
              off against your opponents own team comp.
            </h2>
            <button className="bg-orange-400 hover:bg-teal-400 text-white font-bold rounded mt-8 py-4 px-16">
              Pre Order Flip Comp
            </button>
          </div>
        </div>
        <PageSection>
          <CharacterImageContainerBrimstone />
          <CharacterImageContainerCaltrops />
          <CharacterImageContainerJuggernaut />
          <CharacterImageContainerChorus />
          <CharacterImageContainerApex />
          <CharacterImageContainerPlague />
          <div className="infoPanelDiv flex">
            <CharacterInfoPanel2 />
          </div>
        </PageSection>
        <div className="flex flex-col items-center justify-center w-full py-20 items-start bg-gray-100">
          <h1 className="text-center font-bold text-5xl text-slate-950 pb-12">
            Connect with Us!
          </h1>
          <div>
            <button className="bg-[#1877F2] hover:bg-teal-400 text-white font-bold rounded w-32 h-12 px-6 py-2 mx-12 my-2">
              Facebook
            </button>
            <button className="bg-[#1DA1F2] hover:bg-teal-400 text-white font-bold rounded w-32 h-12 px-6 py-2 mx-12 my-2">
              Twitter
            </button>
            <button className="bg-[#7289DA] hover:bg-teal-400 text-white font-bold rounded w-32 h-12 px-6 py-2 mx-12 my-2">
              Discord
            </button>
            <button className="bg-fuchsia-400 hover:bg-teal-400 text-slate-950 font-bold rounded w-32 h-12 px-6 py-2 mx-12 my-2">
              TableTop
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full h-[65vh] sm:h-[65vh] bg-gray-200">
          <div className="flex flex-col w-[] px-20">
            <h1 className="text-slate-950 w-50vw64 text-4xl mb-4">
              Thank you for visiting our website!
            </h1>
            <h2 className="text-slate-950 w-56 text-2xl pb-20">
              We cant wait to send you our game!
            </h2>
          </div>
          <div className="flex flex-col items-center bg-sky-50 p-10 mx-20 rounded w-86 h-106">
            <div className="flex flex-col items-left">
              <label htmlFor="first_name" className="block mb-2 text-slate-950">
                First name*
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-100 border border-gray-300 text-slate-950 text-sm rounded mb-2 focus:ring-blue-500 focus:border-blue-500 block w-56 h-8"
                required
              ></input>
            </div>
            <div className="flex flex-col items-left">
              <label htmlFor="first_name" className="block mb-2 text-slate-950">
                Last name*
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-100 border border-gray-300 text-slate-950 text-sm rounded mb-2 focus:ring-blue-500 focus:border-blue-500 block w-56 h-8"
                required
              ></input>
            </div>
            <div className="flex flex-col items-left">
              <label htmlFor="first_name" className="block mb-2 text-slate-950">
                Email address*
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-100 border border-gray-300 text-slate-950 text-sm rounded mb-2 focus:ring-blue-500 focus:border-blue-500 block w-56 h-8"
                required
              ></input>
            </div>
            <button className="bg-orange-400 hover:bg-teal-400 text-white font-bold rounded my-4 w-56 h-10">
              Sign Up
            </button>
            <p className="text-xs text-slate-950 text-center w-64 break-normal">
              Signing up will put you on our email list! We will send you
              updates on the games development
            </p>
          </div>
        </div>
      </main>
    </ConfigProvider>
  );
}
