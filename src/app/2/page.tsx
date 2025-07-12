"use client";
import Sizer from "../_components/sizer";
import Page1 from "../_components/page1";
import Page2 from "../_components/page2";
import Page3 from "../_components/page3";
import { cn, tl } from "@/util/tw";
import Image from "next/image";

import TileAnimator from "../_components/tile-animator";
import Tile from "../_components/tile";
import MusicTile, { fetchMusicData } from "../_components/music-tile";

import { useQuery } from "@tanstack/react-query";

function SoyaChaapTile() {
  return (
    <Tile className="w-full h-full bg-[#360085] flex flex-col items-stretch justify-between  p-8">
      <h1 className="text-[3rem] font-bold leading-tight mb-8">
        Tandoori. Achaari. Haryaali. Malai.
      </h1>
      <div className="w-full h-full absolute top-0 left-0">
        <Image src="/tile-photos/soya-chaap.png" alt="Soya Chaap" fill />
      </div>
      <h1 className="text-[3rem] font-bold leading-tight text-right">
        Try Our
        <br />
        <span className="text-[4rem]">Soya Chaap</span>
      </h1>
    </Tile>
  );
}

function ManchurianTile() {
  return (
    <Tile className="w-full h-full bg-[#f58f01] flex flex-col items-stretch justify-between  p-8">
      <h1 className="text-[5rem] font-bold leading-tight mb-8 text-right">
        Hakka Manchurian
      </h1>
      <div className="w-full h-full relative top-0 left-0">
        <Image
          src="/tile-photos/manchurian.png"
          alt="Hakka Manchurian"
          width={1000}
          height={1000}
          className=" absolute -bottom-50 scale-150"
          style={{
            animation: "spin 150s linear infinite",
            transformOrigin: "center",
          }}
        />
      </div>
    </Tile>
  );
}

function BlueLagoonTile() {
  return (
    <Tile className="w-full h-full bg-[#0147b1] flex flex-col items-stretch justify-between  p-8">
      <h1 className="text-[5rem] font-bold leading-tight mb-8 text-right">
        Blue Lagoon
      </h1>
      <div className="w-full h-full relative top-0 left-0">
        <Image
          src="/tile-photos/blue-lagoon.png"
          alt="Blue Lagoon"
          width={1000}
          height={1000}
          className="absolute -bottom-0 right-20 scale-200"
        />
      </div>
    </Tile>
  );
}

function AamPanaTile() {
  return (
    <Tile className="w-full h-full bg-[#e5ca00] flex flex-col items-stretch justify-between  p-8">
      <h1 className="text-[7rem] font-bold leading-[96px] mb-8 text-right">
        Aam Pana
      </h1>
      <div className="w-full h-full relative top-0 left-0">
        <Image
          src="/tile-photos/aam-pana.png"
          alt="Aam Pana"
          width={1000}
          height={1000}
          className="absolute -bottom-0 right-0 scale-175"
        />
      </div>
    </Tile>
  );
}

function PinaColadaTile() {
  return (
    <Tile className="w-full h-full bg-[#f5b001] flex flex-col items-stretch justify-between p-8 shadow-[inset_0_0_5px_0_rgba(0,0,0,0.2)]">
      <h1 className="text-[5rem] font-bold leading-tight mb-8 text-right ">
        Pina Colada
      </h1>
      <div className="w-full h-full relative top-0 left-0">
        <Image
          src="/tile-photos/pina-colada.png"
          alt="Pina Colada"
          width={1000}
          height={1000}
          className="absolute -bottom-0 right-0 scale-200"
        />
      </div>
    </Tile>
  );
}

function OreoShakeTile() {
  return (
    <Tile className="w-full h-full bg-[#2C1810] flex flex-col items-stretch justify-between  p-8">
      <h1 className="text-[5rem] font-bold leading-tight mb-8 text-right">
        Oreo Shake
      </h1>
      <div className="w-full h-full relative top-0 left-0">
        <Image
          src="/tile-photos/oreo-shake.png"
          alt="Oreo Shake"
          width={1000}
          height={1000}
          className="absolute -bottom-0 right-0 scale-200"
        />
      </div>
    </Tile>
  );
}

function KitKatShakeTile() {
  return (
    <Tile className="w-full h-full bg-[#D2001F] flex flex-col items-stretch justify-between  p-8">
      <h1 className="text-[5rem] font-bold leading-tight mb-8 text-right">
        Kit Kat Shake
      </h1>
      <div className="w-full h-full relative top-0 left-0">
        <Image
          src="/tile-photos/kitkat-shake.png"
          alt="Kit Kat Shake"
          width={1000}
          height={1000}
          className="absolute -bottom-0 right-0 scale-200"
        />
      </div>
    </Tile>
  );
}

function StrawberryShakeTile() {
  return (
    <Tile className="w-full h-full bg-[#E91E63] flex flex-col items-stretch justify-between  p-8">
      <h1 className="text-[5rem] font-bold leading-tight mb-8 text-right">
        Strawberry Shake
      </h1>
      <div className="w-full h-full relative top-0 left-0">
        <Image
          src="/tile-photos/strawberry-shake.png"
          alt="Strawberry Shake"
          width={1000}
          height={1000}
          className="absolute bottom-30 right-20 scale-200"
        />
      </div>
    </Tile>
  );
}

function ThaliTile() {
  return (
    <Tile className="w-full h-full bg-[#06593E] grid grid-cols-1 grid-rows-2 ">
      <div className="col-span-1 row-span-1">
        <Image
          src="/tile-photos/thali.png"
          alt="Daily Thali"
          width={1000}
          height={1000}
          className="absolute"
        />
      </div>
      <div className="col-span-1 row-span-1 flex flex-col items-start justify-between p-8 pt-16">
        <h1 className="text-[5rem] font-bold leading-tight">Daily Thali</h1>
        <p className="text-[3rem] opacity-75 font-semibold text-balance leading-16">
          Freshly made with love every day.
        </p>
      </div>
    </Tile>
  );
}

function PavBhajiTileHalf() {
  const imageOffsetX = 0;
  const imageOffsetY = -50;

  return (
    <Tile className="w-full h-full bg-orange-600 flex flex-col-reverse items-stretch justify-center text-left">
      <div className="flex-1/2 ">
        <div {...tl("w-full h-full relative", imageOffsetX, imageOffsetY)}>
          <Image
            src="/tile-photos/pav-bhaji.png"
            alt="Pav Bhaji"
            width={800}
            height={800}
            className="absolute top-0 left-0 scale-125  "
          />
        </div>
      </div>
      <div className="flex-1/2 flex justify-start flex-col p-10 font-bold text-white">
        <h1 className="text-[6rem] leading-16 mt-4">Pav Bhaji</h1>
        <p className="pt-4 text-2xl opacity-75  text-[2.5rem] leading-12">
          Buttered like royalty.
        </p>
      </div>
    </Tile>
  );
}

export default function Home() {
  const {
    data: musicData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["music-now"],
    queryFn: fetchMusicData,
    refetchInterval: 10000, // Fetch every 10 seconds
    refetchIntervalInBackground: true,
  });

  const showMusic =
    musicData?.state === "PLAYING" && !musicData.duration.includes("NOT_");
  // const showMusic = true;

  return (
    <div className="w-screen h-screen p-8 bg-[#F9ECDC] text-white">
      <div className="grid grid-cols-6 grid-rows-5 w-full h-full gap-6">
        <TileAnimator
          className="col-span-2 row-span-5"
          every={10}
          initialDelay={3}
        >
          <SoyaChaapTile />
          <ManchurianTile />
        </TileAnimator>
        <TileAnimator
          className={cn("col-span-2", {
            "row-span-5": !showMusic,
            "row-span-4": showMusic,
          })}
          every={10}
          initialDelay={5}
        >
          <PavBhajiTileHalf />
          <ThaliTile />
        </TileAnimator>
        {showMusic && (
          <TileAnimator
            className="col-span-2 row-span-1 row-start-5 col-start-3"
            every={10}
            initialDelay={5}
          >
            <MusicTile />
          </TileAnimator>
        )}
        <TileAnimator
          className="col-span-2 row-span-5"
          every={10}
          initialDelay={1}
        >
          <AamPanaTile />
          <BlueLagoonTile />
          <PinaColadaTile />
          <OreoShakeTile />
          <KitKatShakeTile />
          {/* <StrawberryShakeTile /> */}
        </TileAnimator>
      </div>
    </div>
  );
}
