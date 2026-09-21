import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./WishesWallSection.css";

interface CustomWish {
  id: string;
  sender: string;
  relationship: string;
  message: string;
  date: string;
}

interface WishesWallSectionProps {
  defaultGuestName?: string;
}

export default function WishesWallSection({ defaultGuestName = "" }: WishesWallSectionProps) {
  const { language } = useLanguage();
  const t = translations[language].wishes;

  const [customWishes, setCustomWishes] = useState<CustomWish[]>([]);
  const [authorName, setAuthorName] = useState(defaultGuestName);
  const [wishText, setWishText] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePostWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !wishText.trim()) return;

    const newWish: CustomWish = {
      id: Date.now().toString(),
      sender: authorName.trim(),
      relationship: t.guestBadge,
      message: wishText.trim(),
      date: language === "ta" ? "இப்போது" : "Just now",
    };

    setCustomWishes([newWish, ...customWishes]);
    setWishText("");
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 4000);
  };

  const allWishes = [...customWishes, ...t.sampleWishes];

  return (
    <section className="wishes-wall-section">
      <div className="section-container">
        <motion.div
          className="wishes-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="wishes-pretag">{t.pretag}</span>
          <h2 className="wishes-title">{t.title}</h2>
          <div className="kolam-divider">
            <span className="kolam-line" />
            <span className="kolam-motif">✦ ॐ ✦</span>
            <span className="kolam-line" />
          </div>
          <p className="wishes-subtitle">{t.subtitle}</p>
        </motion.div>

        {/* Input Form */}
        <motion.div
          className="wishes-form-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handlePostWish} className="wishes-form">
            <div className="form-row">
              <input
                type="text"
                placeholder={t.namePlaceholder}
                className="wish-input"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                required
              />
            </div>
            <div className="form-row">
              <textarea
                placeholder={t.messagePlaceholder}
                className="wish-textarea"
                rows={3}
                value={wishText}
                onChange={(e) => setWishText(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="post-wish-btn">
              <span>{t.submitBtn}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

          <AnimatePresence>
            {showThankYou && (
              <motion.div
                className="wish-toast-alert"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {t.successToast}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Wishes Cards Grid */}
        <div className="wishes-stream-grid">
          {allWishes.map((w, index) => (
            <motion.div
              key={w.id}
              className="wish-bubble-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="wish-card-header">
                <div className="avatar-monogram">
                  {w.sender.charAt(0)}
                </div>
                <div className="wish-sender-meta">
                  <h4 className="sender-title">{w.sender}</h4>
                  <span className="sender-date">{w.relationship} &bull; {w.date}</span>
                </div>
              </div>
              <p className="wish-card-quote">&ldquo;{w.message}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
