"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Tile from "./tile";

interface MusicData {
  album: string;
  album_art: string;
  artist: string;
  duration: string;
  position: string;
  speaker: string;
  state: string;
  title: string;
  volume: number;
}

// Convert time string "H:MM:SS" to seconds
function timeToSeconds(timeStr: string): number {
  const parts = timeStr.split(":");
  if (parts.length === 3) {
    // Format: H:MM:SS
    const hours = Number(parts[0]) || 0;
    const minutes = Number(parts[1]) || 0;
    const seconds = Number(parts[2]) || 0;
    return hours * 3600 + minutes * 60 + seconds;
  } else if (parts.length === 2) {
    // Format: MM:SS (fallback)
    const minutes = Number(parts[0]) || 0;
    const seconds = Number(parts[1]) || 0;
    return minutes * 60 + seconds;
  }
  return 0;
}

// Fetch music data from the API
export async function fetchMusicData(): Promise<MusicData> {
  const response = await fetch("http://100.111.203.2:41145/now");
  if (!response.ok) {
    throw new Error("Failed to fetch music data");
  }
  return response.json();
}

function MusicTile() {
  const [interpolatedProgress, setInterpolatedProgress] = useState(0);
  const [lastFetchTime, setLastFetchTime] = useState(Date.now());

  const { data, error, isLoading } = useQuery({
    queryKey: ["music-now"],
    queryFn: fetchMusicData,
    refetchInterval: 10000, // Fetch every 10 seconds
    refetchIntervalInBackground: true,
  });

  // Interpolate progress between fetches
  useEffect(() => {
    if (!data || data.state !== "PLAYING") return;

    const durationSeconds = timeToSeconds(data.duration);
    const positionSeconds = timeToSeconds(data.position);
    const progress = positionSeconds / durationSeconds;

    setInterpolatedProgress(progress);
    setLastFetchTime(Date.now());

    // Update progress every second while playing
    const interval = setInterval(() => {
      const elapsed = (Date.now() - lastFetchTime) / 1000;
      const newProgress = Math.min(
        (positionSeconds + elapsed) / durationSeconds,
        1
      );
      setInterpolatedProgress(newProgress);
    }, 1000);

    return () => clearInterval(interval);
  }, [data, lastFetchTime]);

  if (isLoading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!data) return null;

  const isPlaying = data.state === "PLAYING";

  if (!isPlaying) {
    return null;
  }

  return (
    <Tile className="w-full h-full bg-[#000000] relative overflow-hidden">
      <div className="image absolute inset-0 bg-cover bg-center -translate-y-32 blur-2xl   scale-150">
        {/* we add the album art here but blurred and blown up in size and set z index to be behind everything */}
        <img
          src={data.album_art}
          alt={`${data.album} album art`}
          className=" rounded-lg"
          style={{
            animation: "spin 25s linear infinite",
            transformOrigin: "center",
          }}
        />
      </div>
      <div className="absolute inset-0 p-4 flex gap-4 text-white">
        <div className="flex-shrink-0 aspect-square h-full">
          <img
            src={data.album_art}
            alt={`${data.album} album art`}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div className="flex items-center gap-2">
            <div className="text-lg text-white/60 uppercase tracking-wider">
              Now Playing
            </div>
            {isPlaying && (
              <div className="flex gap-1">
                <div className="w-1 h-3 bg-green-400 animate-pulse" />
                <div
                  className="w-1 h-2 bg-green-400 animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <div
                  className="w-1 h-4 bg-green-400 animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col justify-center ">
            <div className="text-xl text-white line-clamp-1 font-semibold">
              {data.album}
            </div>
            <div className="text-lg  text-white/70 line-clamp-2 font-semibold    ">
              {data.artist}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-white/60">
              <span>{data.position}</span>
              <span>{data.duration}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1">
              <div
                className="bg-white h-1 rounded-full transition-all duration-1000 ease-linear"
                style={{
                  width: `${Math.max(
                    0,
                    Math.min(100, interpolatedProgress * 100)
                  )}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Tile>
  );
}

export default MusicTile;
