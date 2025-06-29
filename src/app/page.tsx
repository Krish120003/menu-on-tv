import Sizer from "./_components/sizer";
import Page1 from "./_components/page1";
import Page2 from "./_components/page2";
import Page3 from "./_components/page3";
import { tl } from "@/util/tw";
import Image from "next/image";

import TileAnimator from "./_components/tile-animator";
import Tile from "./_components/tile";
import MusicTile from "./_components/music-tile";

const DEBUG_MODE = false;

function AlooTikkiBurgerTileHalf() {
  const imageOffsetX = 0;
  const imageOffsetY = 35;

  return (
    <Tile className="w-full h-full bg-blue-600 flex flex-col items-stretch justify-center text-right  ">
      <div className="flex-1/2 p-10 font-bold text-white">
        <h1 className="text-[10rem] leading-32 mb-8">Aloo Tikki Burger</h1>
        <p className="pt-4   text-2xl opacity-75 text-[5rem] leading-20">
          Only $8.99
        </p>
        {/* <p className="text-2xl opacity-75 text-[2.7rem]">*Limited Time Offer</p> */}
      </div>
      <div className="flex-1/2 ">
        <div
          {...tl(
            "w-full h-full relative scale-200",
            imageOffsetX,
            imageOffsetY
          )}
        >
          <Image src="/tile-photos/burger.png" alt="Aloo Tikki Burger" fill />
        </div>
      </div>
    </Tile>
  );
}

function DahiBhallaTile() {
  const imageOffsetX = 60;
  const imageOffsetY = -250;

  return (
    <Tile className="w-full h-full bg-[#be0055] flex flex-col items-stretch justify-center text-left">
      <div className="flex-1/2 ">
        <div {...tl("w-full h-full relative", imageOffsetX, imageOffsetY)}>
          <Image
            src="/tile-photos/dahi-bhalla.png"
            alt="Dahi Bhalla"
            width={800}
            height={800}
            className="absolute top-0 left-0 scale-125"
          />
        </div>
      </div>
      <div className="flex-1/2 flex justify-end flex-col p-10 font-bold text-white">
        <h1 className="text-[8rem] leading-24  mb-4">Dahi Bhalla</h1>
        <p className="pt-4 text-2xl opacity-75 text-[5rem] leading-20">
          Better than you remember.
        </p>
      </div>
    </Tile>
  );
}

function KesarMilkBadamTile() {
  return (
    <Tile className="w-full h-full bg-amber-500 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/tile-photos/kesar-milk-badam.png')",
          transform:
            "rotate(13deg) translate(-200px, 150px) scaleX(-1.4) scaleY(1.4)",
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col items-end justify-between p-8 font-bold text-white text-right">
        <p className="text-[4rem] leading-tight opacity-75">Try Our</p>
        <div>
          <h1 className="text-[7rem] leading-tight">Kesar</h1>
          <h1 className="text-[7rem] leading-tight">Milk Badam</h1>
        </div>
      </div>
    </Tile>
  );
}

function RoohAfzaTile() {
  return (
    <Tile className="w-full h-full bg-pink-500 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/tile-photos/roohafza.png')",
          transform:
            "rotate(13deg) translate(-200px, 150px) scaleX(-1.4) scaleY(1.4)",
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col items-end justify-between p-8 font-bold text-white text-right">
        <p className="text-[4rem] leading-tight opacity-75">Try Our</p>
        <div>
          <h1 className="text-[7rem] leading-tight">Rooh Afza</h1>
          <h1 className="text-[7rem] leading-tight">Shake</h1>
        </div>
      </div>
    </Tile>
  );
}
function SamosaChanaChaatTile() {
  return (
    <Tile className="w-full h-full bg-red-500 relative">
      <div className="flex h-full items-center">
        <div className="p-8 font-bold text-white -space-x-4">
          <h1 className="text-[6rem] leading-20">Samosa</h1>
          <h1 className="text-[6rem] leading-20">Chana</h1>
          <h1 className="text-[6rem] leading-20">Chaat</h1>
        </div>
      </div>

      {/* Wrapper div handles positioning */}
      <div
        className="absolute top-0 left-0"
        style={{
          transform: "scale(1.25) translateY(-50px) translateX(200px)",
        }}
      >
        {/* Image only handles spinning animation */}
        <Image
          src="/tile-photos/samosa.png"
          alt="Samosa Chana Chaat"
          className="object-cover"
          width={1984}
          height={1126}
          style={{
            animation: "spin 120s linear infinite",
            transformOrigin: "center",
          }}
        />
      </div>
    </Tile>
  );
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: "1" | "2" | "3" }>;
}) {
  const page = (await searchParams).page;

  const Page = page === "1" ? Page1 : page === "2" ? Page2 : Page3;

  return (
    <div className="w-screen h-screen p-8 bg-[#F9ECDC] text-white">
      <div className="grid grid-cols-6 grid-rows-5 w-full h-full gap-6">
        <div className="col-span-3 row-span-2">
          <SamosaChanaChaatTile />
        </div>
        <TileAnimator
          className="row-start-3 col-span-3 row-span-3"
          cronExpression="*/7 * * * * *"
        >
          {/* <MusicTile /> */}
          <KesarMilkBadamTile />
          {/* <RoohAfzaTile /> */}
          {/* <MusicTile /> */}
        </TileAnimator>

        <TileAnimator
          className="col-span-3 row-span-5"
          cronExpression="*/10 * * * * *"
        >
          <AlooTikkiBurgerTileHalf />
          {/* <PavBhajiTileHalf /> */}
          <DahiBhallaTile />
        </TileAnimator>
      </div>
    </div>
  );
}
