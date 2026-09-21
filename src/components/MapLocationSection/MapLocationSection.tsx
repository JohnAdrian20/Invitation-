import { motion } from "framer-motion";
import type { InvitationData } from "../../data/invitationData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./MapLocationSection.css";

interface MapLocationSectionProps {
  data: InvitationData;
}

export default function MapLocationSection({ data }: MapLocationSectionProps) {
  const { language } = useLanguage();
  const t = translations[language].venueMap;

  return (
    <section className="map-api-location-section">
      <div className="section-container">
        <motion.div
          className="map-header-group"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="location-pretag">{t.pretag}</span>
          <h2 className="venue-title">{t.title}</h2>
          <div className="kolam-divider">
            <span className="kolam-line" />
            <span className="kolam-motif">✦ ॐ ✦</span>
            <span className="kolam-line" />
          </div>
          <p className="venue-address">{t.address}</p>
        </motion.div>

        <motion.div
          className="map-frame-wrapper"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            title="Wedding Venue Location"
            src={data.mapEmbedUrl}
            className="map-iframe"
            loading="lazy"
            allowFullScreen
          />
        </motion.div>

        <div className="map-actions">
          <a
            href={data.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {t.googleMapsBtn}
          </a>

          <a
            href={data.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            {t.wazeBtn}
          </a>

          <a
            href={data.appleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="direction-btn"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            {t.appleMapsBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
