"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Tile from "../_components/tile";
import TileAnimator from "../_components/tile-animator";
import Image from "next/image";
import { cn } from "@/util/tw";


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

function ContactTile({ expanded }: { expanded?: boolean }) {
  const photosRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (photosRef.current) {
      if (expanded) {
        // Fade in photos
        photosRef.current.style.display = "flex";
        const photos = Array.from(photosRef.current.children);
        photos.forEach((photo, index) => {
          photo.animate([
            { opacity: 0, transform: 'translateY(30px) scale(0.8)' },
            { opacity: 1, transform: 'translateY(0px) scale(1)' }
          ], {
            duration: 600,
            delay: index * 150,
            easing: "ease-out",
            fill: "forwards"
          });
        });
      } else {
        // Fade out photos
        const photos = Array.from(photosRef.current.children);
        const fadeOutPromises = photos.map((photo, index) => {
          return photo.animate([
            { opacity: 1, transform: 'translateY(0px) scale(1)' },
            { opacity: 0, transform: 'translateY(-30px) scale(0.8)' }
          ], {
            duration: 200,
            delay: index * 100,
            easing: "ease-in",
            fill: "forwards"
          }).finished;
        });

        Promise.all(fadeOutPromises).then(() => {
          if (photosRef.current) {
            photosRef.current.style.display = "none";
          }
        });
      }
    }
  }, [expanded]);

  return (
    <Tile className="w-full h-full bg-[#FF3D3C] rounded-3xl relative overflow-hidden">
      {/* Default contact content */}
      <div className={cn("transition-opacity duration-500", {
        "opacity-100": true
      })}>
        <div className="font-bold text-[4rem] pl-6 pt-4 leading-18">
          {expanded ? (
            <div>We do catering!</div>
          ) : (
            <>
              <div>Catering?</div>
              <div>Takeout?</div>
              <div>Questions?</div>
            </>
          )}
        </div>
        <div className="text-[6.2rem] absolute bottom-0 text-right w-full font-semibold pr-8">
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
      </div>

      {/* Photo gallery that appears when expanded - polaroid snapshots */}
      <div
        ref={photosRef}
        className="absolute inset-0 pointer-events-none flex items-center justify-center gap-8"
        style={{ display: 'none' }}
      >
        {/* Dishes polaroid */}
        <div className="bg-white p-8 pb-12 rounded-lg shadow-2xl transform rotate-[-4deg]">
          <div className="w-96 h-[32rem] rounded overflow-hidden">
            <Image
              src="/expanded-photos/dishes.jpg"
              alt="Our delicious dishes"
              className="w-full h-full object-cover"
              width={500}
              height={600}
            />
          </div>
          <div className="text-gray-800 text-2xl mt-4 text-center font-medium">
            Dishes Available
          </div>
        </div>

        {/* Drinks polaroid */}
        <div className="bg-white p-8 pb-12 rounded-lg shadow-2xl transform rotate-[2deg]">
          <div className="w-96 h-[32rem] rounded overflow-hidden">
            <Image
              src="/expanded-photos/drinks.JPG"
              alt="Refreshing drinks"
              className="w-full h-full object-cover"
              width={500}
              height={600}
            />
          </div>
          <div className="text-gray-800 text-2xl mt-4 text-center font-medium">
            Live Mojitos
          </div>
        </div>

        {/* Food polaroid */}
        <div className="bg-white p-8 pb-12 rounded-lg shadow-2xl transform rotate-[-2deg]">
          <div className="w-96 h-[32rem] rounded overflow-hidden">
            <Image
              src="/expanded-photos/food.jpg"
              alt="Fresh food"
              className="w-full h-full object-cover"
              width={500}
              height={600}
            />
          </div>
          <div className="text-gray-800 text-2xl mt-4 text-center font-medium">
            Amazing Food
          </div>
        </div>
      </div>
    </Tile>
  );
}

function animateSize(initalRect: DOMRect, rect: DOMRect, element: HTMLDivElement): Animation {
  const animation = element.animate([
    {
      width: `${initalRect.width}px`,
      height: `${initalRect.height}px`,
      top: `${initalRect.top}px`,
      left: `${initalRect.left}px`,
      transform: "none",
    },
    {
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      top: `${rect.top}px`,
      left: `${rect.left}px`,
      transform: "none",
    }
  ], {
    duration: 350,
    easing: "ease-in-out",
  });
  return animation
}

export default function Page3() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // if not expanded, expand after 30 seconds
    // if expanded, collapse after 15 seconds
    let timeout: NodeJS.Timeout;
    if (!expanded) {
      timeout = setTimeout(() => {
        setExpanded(true);
      }, 30000);
    } else {
      timeout = setTimeout(() => {
        setExpanded(false);
      }, 15000);
    }
    return () => clearTimeout(timeout);
  }, [expanded]);

  const contactTileRef = useRef<HTMLDivElement>(null);
  const otherContentsRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (contactTileRef.current) {
      contactTileRef.current.style.gridArea = "4 / 5 / 6 / 9";
    }
  }, [contactTileRef])

  useLayoutEffect(() => {
    if (expanded && contactTileRef.current && otherContentsRef.current) {
      otherContentsRef.current.style.display = "none";

      const initalRect = contactTileRef.current.getBoundingClientRect();
      contactTileRef.current.style.gridArea = "1 / 1 / 6 / 9";
      const finalRect = contactTileRef.current.getBoundingClientRect();
      contactTileRef.current.style.gridArea = "4 / 5 / 6 / 9";

      contactTileRef.current.style.position = "absolute";
      otherContentsRef.current.style.display = "contents";
      const sizeAnimationPromise = animateSize(initalRect, finalRect, contactTileRef.current).finished;
      const fadeOutAnimationPromises = Array.from(otherContentsRef.current.children).map(child => {
        return child.animate([
          { opacity: 1, transform: 'scale(1)' },
          { opacity: 0, transform: 'scale(0.5)' }
        ], {
          duration: 350,
          easing: "ease-in",
          fill: "forwards"
        }).finished;
      });

      Promise.all([sizeAnimationPromise, ...fadeOutAnimationPromises]).then(() => {
        if (otherContentsRef.current) {
          otherContentsRef.current.style.display = "none";
        }
        if (contactTileRef.current) {
          contactTileRef.current.style.position = "relative";
          contactTileRef.current.style.gridArea = "1 / 1 / 6 / 9";
        }
      })
    }
    else {
      // reverse the animation above
      if (contactTileRef.current && otherContentsRef.current) {
        contactTileRef.current.style.gridArea = "4 / 5 / 6 / 9";
        const finalRect = contactTileRef.current.getBoundingClientRect();
        contactTileRef.current.style.gridArea = "1 / 1 / 6 / 9";
        const initalRect = contactTileRef.current.getBoundingClientRect();

        contactTileRef.current.style.position = "absolute";
        otherContentsRef.current.style.display = "contents";
        const sizeAnimationPromise = animateSize(initalRect, finalRect, contactTileRef.current).finished;
        const fadeInAnimationPromises = Array.from(otherContentsRef.current.children).map(child => {
          return child.animate([
            { opacity: 0, transform: 'scale(0.5)' },
            { opacity: 1, transform: 'scale(1)' }
          ], {
            duration: 350,
            easing: "ease-out",
            fill: "forwards"
          }).finished;
        }
        );

        Promise.all([sizeAnimationPromise, ...fadeInAnimationPromises]).then(() => {
          if (contactTileRef.current) {
            contactTileRef.current.style.position = "relative";
            contactTileRef.current.style.gridArea = "4 / 5 / 6 / 9";
          }
        })
      }
    }
  }, [expanded]);



  return (
    <div className="w-screen h-screen p-8 bg-[#F9ECDC] text-white">
      <div className="grid grid-cols-8 grid-rows-5 w-full h-full gap-6">
        <div
          ref={otherContentsRef}
          className={cn({
            "contents": true
          })}>
          <TileAnimator className="col-span-4 row-span-5">
            <BigOrangeTile />
          </TileAnimator>
          <TileAnimator className="col-start-5 row-start-1 col-span-2 row-span-2">
            <DeliveryTile />
          </TileAnimator>
          <TileAnimator className="col-start-5 row-start-3 col-span-2 row-span-1">
            <HoursTile />
          </TileAnimator>
          <TileAnimator className="col-start-7 row-start-1 col-span-2 row-span-3">
            <QRTile />
          </TileAnimator>
        </div>

        <div className="col-start-5 row-start-4 col-span-4 row-span-2 bg-[#FF3D3C] rounded-3xl flex items-center justify-center text-[6.2rem] font-semibold" ref={contactTileRef}
        >
          <ContactTile expanded={expanded} />
        </div>

      </div>
    </div >
  );
}
