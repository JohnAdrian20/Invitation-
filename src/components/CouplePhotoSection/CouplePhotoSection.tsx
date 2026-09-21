import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./CouplePhotoSection.css";

interface CouplePhotoSectionProps {
  imageSrc: string;
  altText?: string;
  chapterTitle?: string;
  caption?: string;
}

export default function CouplePhotoSection({
  imageSrc,
  altText = "Couple Photography",
  chapterTitle,
  caption,
}: CouplePhotoSectionProps) {
  const { language } = useLanguage();
  const t = translations[language].chapters;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <section className="couple-editorial-section">
        {/* Soft warm blur backdrop */}
        <div
          className="editorial-blur-bg"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />

        <div className="editorial-inner-container">
          {chapterTitle && (
            <motion.div
              className="chapter-header-badge"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="chapter-leaf">✦</span>
              <span className="chapter-label">{chapterTitle}</span>
              <span className="chapter-leaf">✦</span>
            </motion.div>
          )}

          <motion.div
            className="editorial-arch-frame"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
            onClick={() => setIsLightboxOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Click to enlarge photo"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsLightboxOpen(true);
              }
            }}
          >
            <div className="arch-border-accent" />

            <div className="arch-image-viewport">
              <img
                src={imageSrc}
                alt={altText}
                className="arch-couple-img"
                loading="lazy"
              />
              <div className="arch-vignette-overlay" />

              <div className="tap-zoom-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <span className="tap-zoom-text">{t.viewPhoto}</span>
              </div>
            </div>
          </motion.div>

          {caption && (
            <motion.p
              className="editorial-caption-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              &ldquo;{caption}&rdquo;
            </motion.p>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="photo-lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              className="lightbox-content-wrap"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setIsLightboxOpen(false)}
                aria-label={t.closeLightbox}
              >
                ✕
              </button>
              <img src={imageSrc} alt={altText} className="lightbox-full-img" />
              {caption && <p className="lightbox-caption">{caption}</p>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
