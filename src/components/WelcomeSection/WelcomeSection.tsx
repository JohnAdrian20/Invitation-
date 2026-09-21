import { motion } from "framer-motion";
import type { InvitationData } from "../../data/invitationData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./WelcomeSection.css";

interface WelcomeSectionProps {
  data: InvitationData;
}

export default function WelcomeSection({ data }: WelcomeSectionProps) {
  const { language } = useLanguage();
  const t = translations[language].welcome;

  return (
    <section className="welcome-section">
      <motion.div
        className="welcome-card-prologue"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Subtle Kolam / Mangala Motif Top */}
        <div className="prologue-crest">
          <div className="crest-filigree-line left-line" />
          <div className="crest-icon">
            <span className="mangala-symbol">{t.mangalaSymbol}</span>
          </div>
          <div className="crest-filigree-line right-line" />
        </div>

        <span className="prologue-tag">{t.prologueTag}</span>

        {/* Centerpiece Image Frame with Soft Ring */}
        <div className="halo-image-container">
          <div className="gilded-halo-ring" />
          <img
            src={data.photos.centerpiece}
            alt="Wedding White Flowers"
            className="centerpiece-halo-img"
            loading="lazy"
          />
        </div>

        {/* Monogram Suite */}
        <div className="prologue-monogram-suite">
          <span className="mono-letter">{data.groomName.charAt(0)}</span>
          <span className="mono-ampersand">&amp;</span>
          <span className="mono-letter">{data.brideName.charAt(0)}</span>
        </div>

        {/* Greeting & Warm Welcome */}
        <div className="prologue-quote-box">
          <h3 className="tamil-welcome-heading">{t.heading}</h3>
          <p className="quote-body">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="kolam-divider">
            <span className="kolam-line" />
            <span className="kolam-motif">✦ ॐ ✦</span>
            <span className="kolam-line" />
          </div>
        </div>

        {/* Venue Location Line */}
        <div className="prologue-destination">
          <span className="destination-name">{t.venueTitle}</span>
          <span className="destination-location">{t.venueCity}</span>
        </div>
      </motion.div>
    </section>
  );
}
