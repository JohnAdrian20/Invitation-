import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { InvitationData } from "../../data/invitationData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./EnvelopeCover.css";

interface EnvelopeCoverProps {
  data: InvitationData;
  onOpen: () => void;
  guestName?: string;
}

export default function EnvelopeCover({ data, onOpen, guestName }: EnvelopeCoverProps) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].envelope;
  const [isOpening, setIsOpening] = useState(false);
  const [isUnsealed, setIsUnsealed] = useState(false);

  const handleSealBreak = () => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Audio fallback
    }

    setTimeout(() => {
      setIsUnsealed(true);
    }, 320);

    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="gatefold-cover-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}
      >
        <div className="gatefold-scene">
          {/* Inner card preview visible when gatefold opens */}
          <div className="inner-card-preview">
            <div className="inner-card-crest">
              <span className="crest-tamil-greet">{t.innerCrestGreeting}</span>
              <span className="crest-monogram">V &bull; S</span>
              <span className="crest-subtitle">{data.venueTitle}</span>
            </div>
          </div>

          {/* Left Door */}
          <div className={`gatefold-door left-door ${isUnsealed ? "door-open-left" : ""}`}>
            <div className="door-paper-fiber" />
            <div className="door-crease-shadow" />
            <div className="door-filigree-border" />
            <div className="door-filigree-inner-border" />
            <div className="door-diagonal-crease top-diagonal" />
            <div className="door-diagonal-crease bottom-diagonal" />
            <div className="door-decor top-left-corner" />
            <div className="door-decor bottom-left-corner" />
            <div className="door-seam-gold-bevel" />
          </div>

          {/* Right Door */}
          <div className={`gatefold-door right-door ${isUnsealed ? "door-open-right" : ""}`}>
            <div className="door-paper-fiber" />
            <div className="door-crease-shadow" />
            <div className="door-filigree-border" />
            <div className="door-filigree-inner-border" />
            <div className="door-diagonal-crease top-diagonal" />
            <div className="door-diagonal-crease bottom-diagonal" />
            <div className="door-decor top-right-corner" />
            <div className="door-decor bottom-right-corner" />
            <div className="door-seam-gold-bevel" />
          </div>

          {/* SVG Filter for realistic tactile paper grain fibers */}
          <svg className="envelope-svg-filters" aria-hidden="true" width="0" height="0">
            <filter id="paper-fiber-grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0" />
            </filter>
          </svg>

          {/* Header Content */}
          <div className={`envelope-hero-content ${isUnsealed ? "fade-out" : ""}`}>
            <motion.div
              className="invitation-badge"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <span className="kolam-dot">✦</span>
              <span className="badge-text">
                {guestName ? t.guestBadge(guestName) : t.defaultBadge}
              </span>
              <span className="kolam-dot">✦</span>
            </motion.div>

            <motion.div
              className="hero-names-block"
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              <h1 className="hero-couple-names">
                <span className="name-part">{data.groomName}</span>
                <span className="name-separator">&amp;</span>
                <span className="name-part">{data.brideName}</span>
              </h1>
              <p className="hero-tamil-sub">{t.subtitle}</p>
            </motion.div>

            <motion.div
              className="hero-date-venue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="date-badge">
                <span className="date-string">{t.dateBadge}</span>
              </div>
              <p className="venue-string">{t.venueText}</p>
            </motion.div>
          </div>

          {/* Medallion Wax Seal */}
          <div className={`wax-seal-wrapper ${isOpening ? "seal-breaking" : ""} ${isUnsealed ? "seal-hidden" : ""}`}>
            <button
              type="button"
              className="wax-seal-btn"
              onClick={handleSealBreak}
              aria-label={t.openAriaLabel}
            >
              <div className="wax-seal-outer-rim">
                <div className="wax-seal-inner-emboss">
                  <svg className="seal-laurel-svg" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      fill="none"
                      stroke="#dfca9c"
                      strokeWidth="1.2"
                      strokeDasharray="3 3"
                    />
                  </svg>
                  <div className="seal-crest-content">
                    <span className="seal-letters">V&nbsp;&amp;&nbsp;S</span>
                  </div>
                </div>
              </div>
            </button>

            <div className="seal-instruction">
              <span className="tap-text">{t.tapToOpen}</span>
              <div className="seal-arrow-bounce">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M7 10l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Language Selection: Tamil / English directly below Tap to Open button */}
            <div
              className="envelope-lang-capsule"
              role="group"
              aria-label="Language Options"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={`envelope-lang-pill ${language === "ta" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage("ta");
                }}
                aria-pressed={language === "ta"}
                aria-label="Display in Tamil (தமிழ்)"
              >
                {language === "ta" && (
                  <motion.div
                    layoutId="envelopeLangActiveGlow"
                    className="envelope-lang-indicator"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="envelope-lang-label">தமிழ்</span>
              </button>

              <button
                type="button"
                className={`envelope-lang-pill ${language === "en" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setLanguage("en");
                }}
                aria-pressed={language === "en"}
                aria-label="Display in English"
              >
                {language === "en" && (
                  <motion.div
                    layoutId="envelopeLangActiveGlow"
                    className="envelope-lang-indicator"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="envelope-lang-label">English</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
