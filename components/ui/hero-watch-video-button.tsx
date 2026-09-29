"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX, FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds)) return "0:00";
  const m = Math.floor(timeInSeconds / 60);
  const s = Math.floor(timeInSeconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

interface HeroWatchVideoButtonProps {
  videoSrc: string;
}

export function HeroWatchVideoButton({ videoSrc }: HeroWatchVideoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Video state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // Use a ref for the timeout to handle it properly in effects/handlers
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsPlaying(true);
      setShowControls(true);
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isOpen]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowControls(true); // Always show controls when paused
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      if (total > 0) {
        setProgress((current / total) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(pos * 100);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2500);
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: 250, borderRadius: "60px" }}
            animate={{ opacity: 1, scale: 1, y: 0, borderRadius: "24px" }}
            exit={{ opacity: 0, scale: 0.6, y: 150, borderRadius: "40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl aspect-[16/9] bg-[#050505] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
              if (isPlaying) setShowControls(false);
            }}
            onClick={togglePlay}
          >
            {/* Close Button (always visible) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="absolute top-6 right-6 z-50 p-3 bg-black/40 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110"
              aria-label="Close video"
            >
              <FiX size={24} />
            </button>

            {/* Video Element */}
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-contain cursor-pointer"
            />

            {/* Custom Overlay Controls */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 z-40 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"
                >
                  {/* Big Center Play Button (only shown when paused) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <AnimatePresence>
                      {!isPlaying && (
                        <motion.button
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          onClick={togglePlay}
                          className="p-5 rounded-full bg-black/40 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white transition-all hover:scale-110 pointer-events-auto shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                        >
                          <FiPlay size={48} className="fill-white/80 translate-x-1" />
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Control Bar */}
                  <div className="w-full px-8 pb-8 pt-12 pointer-events-auto">
                    {/* Progress Bar */}
                    <div
                      className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden mb-5 relative group"
                      onClick={handleProgressClick}
                    >
                      {/* Hover effect on progress */}
                      <div className="absolute inset-y-0 left-0 bg-cyan-400 group-hover:bg-cyan-300 transition-colors" style={{ width: `${progress}%` }} />
                    </div>

                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-8">
                        {/* Play/Pause Small */}
                        <button onClick={togglePlay} className="hover:text-cyan-400 transition-colors">
                          {isPlaying ? <FiPause size={22} className="fill-current" /> : <FiPlay size={22} className="fill-current" />}
                        </button>
                        
                        {/* Volume */}
                        <button onClick={toggleMute} className="hover:text-cyan-400 transition-colors">
                          {isMuted ? <FiVolumeX size={22} /> : <FiVolume2 size={22} />}
                        </button>
                        
                        {/* Time */}
                        <div className="font-mono text-sm opacity-80 tracking-wide">
                          {formatTime(currentTime)} <span className="opacity-50 mx-1">/</span> {formatTime(duration)}
                        </div>
                      </div>

                      {/* Fullscreen */}
                      <button onClick={toggleFullScreen} className="hover:text-cyan-400 transition-colors">
                        <FiMaximize size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/25 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white/15 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        Watch Video
      </button>

      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
