import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./AudioPlayer.css";

interface AudioPlayerProps {
  autoStart?: boolean;
}

export default function AudioPlayer({ autoStart = false }: AudioPlayerProps) {
  const { language } = useLanguage();
  const t = translations[language].audio;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element with mild volume
  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = "auto";
    // Mild, gentle background volume (28% volume)
    audio.volume = 0.28;

    const canPlayM4a = audio.canPlayType("audio/mp4; codecs=\"mp4a.40.2\"");
    if (canPlayM4a) {
      audio.src = "/bgm.m4a";
    } else {
      audio.src = "/bgm.webm";
    }

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onended = () => setIsPlaying(false);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const playAudio = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.volume = 0.28;
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const pauseAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // Handle autoStart when envelope is opened
  useEffect(() => {
    if (autoStart) {
      playAudio();
    }
  }, [autoStart]);

  return (
    <button
      type="button"
      className="minimal-cd-player"
      onClick={togglePlay}
      title={isPlaying ? t.pauseTitle : t.playTitle}
      aria-label={isPlaying ? t.pauseTitle : t.playTitle}
    >
      <div className={`cd-disc ${isPlaying ? "spinning" : ""}`}>
        {/* Iridescent radial CD grooves */}
        <div className="cd-groove-outer" />
        <div className="cd-groove-inner" />
        <div className="cd-center-ring">
          <div className="cd-center-hole">
            {isPlaying ? (
              <span className="cd-status-indicator cd-playing-bars">
                <span className="bar" />
                <span className="bar" />
              </span>
            ) : (
              <span className="cd-status-indicator cd-play-icon">▶</span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
