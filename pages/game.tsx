import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Game from "../components/Game";
import { GameProvider } from "../hooks/useGame";
import useWindowSize from "../hooks/useWindowSize";

const GamePage: NextPage = () => {
  const { height } = useWindowSize();
  return (
    <div
      className="fixed w-full flex flex-col bg-zinc-800 p-5"
      style={{
        height: `${height}px`,
      }}
    >
      <Head>
        <title>Flappy Bird</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <div className="mb-4 ml-4 inline-block px-4 py-2 border-4 border-t-white border-l-white border-r-black border-b-black bg-yellow-300 text-black font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors">
        <Link href="/" >
          {"<= Back to Homepage"}
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <GameProvider>
          <Game />
        </GameProvider>
      </div>
    </div>
  );
};

export default GamePage;