"use client";
import Tile from "../_components/tile";
import TileAnimator from "../_components/tile-animator";
import Image from "next/image";

function BigOrangeTile() {
  return (
    <Tile className="w-full h-full bg-[#ff5400] rounded-3xl px-8">
      <div className="relative w-full h-full">
        <Image fill src="/tile-photos/mains-menu-temp.png" alt="menu items" />
      </div>
    </Tile>
  );
}

function DeliveryTile() {
  return (
    <Tile className="w-full h-full bg-[#6c3eb6] flex flex-col items-center justify-between text-white rounded-3xl overflow-clip relative">
      <Image
        src="/tile-photos/delivery.png"
        alt="Delivery"
        className="w-full h-full"
        width={293}
        height={252}
      />
    </Tile>
  );
}

function QRTile() {
  return (
    <Tile className="w-full h-full bg-[#ff5400] flex flex-col items-center justify-center rounded-3xl overflow-clip relative">
      <Image
        src="/tile-photos/menu-qr-code.png"
        alt="QR Code"
        className="w-full h-full"
        width={286}
        height={388}
      />
    </Tile>
  );
}

function HoursTile() {
  return (
    <Tile className="w-full h-full bg-[#ff1e7a] flex flex-row items-center justify-between  rounded-3xl relative">
      <Image
        src="/tile-photos/hours.png"
        alt="Hours"
        className="w-full h-full"
        width={286}
        height={115}
      />
    </Tile>
  );
}

function ContactTile() {
  return (
    <Tile className="w-full h-full bg-[#FF3D3C] rounded-3xl relative">
      <div className="font-bold text-[4rem] pl-6 pt-4 leading-18">
        <div>Catering?</div>
        <div>Takeout?</div>
        <div>Questions?</div>
      </div>
      <div className="text-[6.2rem] absolute bottom-0 text-center w-full font-semibold">
        +1 (365) 378-0009
      </div>
      <div className="absolute right-0 top-0 pr-6 pt-0">
        <div className="text-[6rem] font-bold">Call us.</div>
        <Image
          src="/icon/call-icon.svg"
          alt="Call us"
          className="absolute top-35 right-8 w-18 h-18"
          width={597}
          height={252}
          style={{
            animation: "phoneRing 1s infinite",
          }}
        />
      </div>
    </Tile>
  );
}

export default function Page3() {
  return (
    <div className="w-screen h-screen p-8 bg-[#F9ECDC] text-white">
      <div className="grid grid-cols-8 grid-rows-5 w-full h-full gap-6">
        {/* Orange tile: 4 columns, 5 rows */}
        <TileAnimator className="col-span-4 row-span-5">
          <BigOrangeTile />
        </TileAnimator>
        {/* Delivery: 2 columns, 2 rows, starts col 5, row 1 */}
        <TileAnimator className="col-start-5 row-start-1 col-span-2 row-span-2">
          <DeliveryTile />
        </TileAnimator>
        {/* Time: 2 columns, 1 row, starts col 7, row 1 */}
        <TileAnimator className="col-start-5 row-start-3 col-span-2 row-span-1">
          <HoursTile />
        </TileAnimator>
        {/* Full Menu/QR: 2 columns, 3 rows, starts col 7, row 2 */}
        <TileAnimator className="col-start-7 row-start-1 col-span-2 row-span-3">
          <QRTile />
        </TileAnimator>
        {/* Call tile: 4 columns, 2 rows, starts col 5, row 3 */}
        <TileAnimator className="col-start-5 row-start-4 col-span-4 row-span-2">
          <ContactTile />
        </TileAnimator>
      </div>
    </div>
  );
}
