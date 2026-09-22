"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { FiPlay, FiPause, FiFilm, FiImage, FiZap, FiVolume2, FiVolumeX } from "react-icons/fi";
import { GsapParallax } from "@/components/animations/gsap-scroll-fx";

interface MediaSlotProps {
  type?: "video" | "image" | "placeholder";
  src?: string;
  poster?: string;
  alt?: string;
  badge?: string;
  caption?: string;
  aspectRatio?: "16/9" | "21/9" | "4/3" | "1/1" | "3/2" | "auto";
  className?: string;
  priority?: boolean;
  hudOverlay?: boolean;
  fade?: "all" | "left" | "right" | "bottom" | "top" | "x" | "y" | "radial" | "none";
  objectFit?: "cover" | "contain";
  theme?: "dark" | "light" | "transparent";
  parallax?: boolean;
  allowPause?: boolean;
  hideBadge?: boolean;
}

export function MediaSlot({
  type = "image",
  src,
  poster,
  alt = "VMOVEXA Media Showcase",
  badge,
  caption,
  aspectRatio = "16/9",
  className = "",
  priority = false,
  hudOverlay = false,
  fade = "all",
  objectFit = "cover",
  theme = "dark",
  parallax = true,
  allowPause = true,
  hideBadge = false,
}: MediaSlotProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current || !allowPause) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const ratioClass =
    aspectRatio === "21/9"
      ? "aspect-[21/9]"
      : aspectRatio === "16/9"
      ? "aspect-[16/9]"
      : aspectRatio === "3/2"
      ? "aspect-[3/2]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "1/1"
      ? "aspect-square"
      : "aspect-video";

  const fadeClass =
    fade === "left"
      ? "fade-edge-left"
      : fade === "right"
      ? "fade-edge-right"
      : fade === "bottom"
      ? "fade-edge-bottom"
      : fade === "top"
      ? "fade-edge-top"
      : fade === "x"
      ? "fade-edge-x"
      : fade === "y"
      ? "fade-edge-y"
      : fade === "radial"
      ? "fade-edge-radial"
      : fade === "all"
      ? "fade-edge-all"
      : "";

  return (
    <div
      className={`relative w-full rounded-3xl overflow-hidden ${theme === "transparent" ? "bg-transparent" : theme === "light" ? "bg-black/[0.03] border border-black/10" : "bg-black"} group transition-all duration-500 ${ratioClass} ${className}`}
    >
      {/* Top Media Tag / Badge */}
      {!hideBadge && (
        <div className="preserve-dark absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono tracking-wider !text-white uppercase shadow-lg">
          {type === "video" ? (
            <FiFilm className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          ) : type === "image" ? (
            <FiImage className="w-3.5 h-3.5 text-indigo-400" />
          ) : (
            <FiZap className="w-3.5 h-3.5 text-purple-400" />
          )}
          <span className="!text-white font-medium">{badge || (type === "video" ? "Video Showcase" : type === "image" ? "High-Res Visual" : "Media Slot Reserved")}</span>
        </div>
      )}

      {/* Content Rendering */}
      {type === "video" && src ? (
        <div className={`absolute inset-0 w-full h-full ${fadeClass}`}>
          <GsapParallax speed={0.15} className="absolute inset-0 w-full h-full z-0">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </GsapParallax>
          {/* Ambient Video Glow Overlay - Feathers completely into black page */}
          {theme === "dark" && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-10 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-10 opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_80%,#000000_98%)] pointer-events-none z-10" />
            </>
          )}

          {/* Futuristic HUD Reticle Corners & Telemetry Overlay */}
          {hudOverlay && (
            <div className="absolute inset-0 pointer-events-none z-20 p-4 sm:p-6 flex flex-col justify-between">
              {/* Top Row: Stream info */}
              <div className="flex items-center justify-end">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>1080P60 • 12ms PING</span>
                </div>
              </div>

              {/* HUD Reticle Brackets (Sci-Fi Framing) */}
              <div className="absolute inset-4 sm:inset-6 border border-white/10 rounded-2xl pointer-events-none">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
              </div>

              {/* Bottom Telemetry Ticker */}
              <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                <div className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>GPS: 28.6139° N, 77.2090° E // SPEED: 44 KM/H</span>
                </div>
              </div>
            </div>
          )}

          {/* Floating Controls (Play/Pause & Mute/Unmute) */}
          <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2 pointer-events-auto">
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
              className="p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:scale-105 transition-all cursor-pointer shadow-lg"
            >
              {isMuted ? <FiVolumeX className="w-4 h-4 text-white/70" /> : <FiVolume2 className="w-4 h-4 text-cyan-300" />}
            </button>
            {allowPause && (
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="p-2.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white/90 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:scale-105 transition-all cursor-pointer shadow-lg"
              >
                {isPlaying ? <FiPause className="w-4 h-4" /> : <FiPlay className="w-4 h-4 ml-0.5" />}
              </button>
            )}
          </div>
        </div>
      ) : type === "image" && src ? (
        <div className={`absolute inset-0 w-full h-full group ${fadeClass}`}>
          {parallax ? (
            <GsapParallax speed={0.15} className="absolute inset-0 w-full h-full z-0">
              <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className={`${objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out`}
              />
            </GsapParallax>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 1200px) 100vw, 1200px"
              className={`${objectFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out z-0 absolute inset-0`}
            />
          )}
          {/* Seamless perimeter feathering into pure black page background */}
          {theme === "dark" && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-10 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none z-10 opacity-90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_80%,#000000_98%)] pointer-events-none z-10" />
            </>
          )}
        </div>
      ) : (
        /* Explicit Placeholder / Space Reserved for future media */
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-white/15 rounded-3xl bg-white/[0.02]">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white/40">
            <FiFilm className="w-6 h-6" />
          </div>
          <p className="text-white/80 font-medium text-sm tracking-wide">
            {badge || "Space Reserved for Video / Interactive Visual"}
          </p>
          <p className="text-white/40 text-xs mt-1 max-w-sm">
            {caption || "Client video or high-resolution render can be plugged directly here."}
          </p>
        </div>
      )}

      {/* Caption at bottom if specified */}
      {caption && (type === "video" || type === "image") && (
        <div className="preserve-dark absolute bottom-4 left-4 z-20 text-xs font-mono !text-white/95 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 shadow-lg">
          {caption}
        </div>
      )}
    </div>
  );
}
