import Image from 'next/image'
import { Button, ConfigProvider, Space } from 'antd'
export default function Home() {
  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#00b96b',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6ffed',
      },
    }}
  >
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex items-center justify-center w-full h-[65vh] sm:h-[65vh] bg-gradient-to-r from-sky-500 to-indigo-500 border-b-4 border-b-slate-950">
        <div className="flex flex-col items-center justify-center  max-w-[900px]">
          <h1 className="text-center font-bold text-4xl mb-8 w-full">Flip Comp - Build your Composition and words!</h1>
          <h2 className="text-center font-light w-3/4">Build a deck of Attackers, Tanks and Support units, then use them in tandem to create a unique team composition every round, facing off against your opponents own team comp.</h2>
          <button className="bg-orange-400 hover:bg-teal-400 text-white font-bold rounded mt-8 py-4 px-16">
             Pre Order Flip Comp
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-start bg-white items-center justify-center">
        <div className="flex flex-col items-center pl-2 sm:pl-4 md:pl-6 lg:pl-48 pb-4 pt-4">
          <Image className="rounded-md mb-4" width={250} height={400} src="/Trading-Card-1-1.svg" alt="Image description"></Image>
          <h2 className="text-center text-slate-950 w-2/3">Attackers are meant to be used aggresively and distrupt your opponent by destroying their resources</h2>
        </div>
        <div className="flex flex-col items-center pl-4 pr-4 pb-4 pt-4">
          <Image className="rounded-md mb-4" width={250} height={400} src="/Trading-Card-2-2.svg" alt="Image description"></Image>
          <h2 className="text-center text-slate-950 w-2/3">Attackers are meant to be used aggresively and distrupt your opponent by destroying their resources</h2>
        </div>
        <div className="flex flex-col items-center pr-2 sm:pr-4 md:pr-6 lg:pr-48 pb-4 pt-4">
          <Image className="rounded-md mb-4" width={250} height={400} src="/Trading-Card-1-1.svg" alt="Image description"></Image>
          <h2 className="text-center text-slate-950 w-2/3">Attackers are meant to be used aggresively and distrupt your opponent by destroying their resources</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full py-20 items-start bg-gray">
        <h1 className="text-center font-bold text-5xl text-slate-950 pb-12">Connect with Us!</h1>
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
          <button className="bg-sky-50 hover:bg-teal-400 text-slate-950 font-bold rounded w-32 h-12 px-6 py-2 mx-12 my-2">
             TableTop
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[65vh] sm:h-[65vh] bg-darker-gray">
      </div>
    </main>
    </ConfigProvider>
  )
}
