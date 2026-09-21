// src/components/LanguageSelector/LanguageSelector.tsx
import { motion } from "framer-motion";
import { useLanguage, type Language } from "../../context/LanguageContext";
import "./LanguageSelector.css";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const options: Array<{ code: Language; label: string; ariaLabel: string }> = [
    { code: "ta", label: "தமிழ்", ariaLabel: "Switch language to Tamil (தமிழ்)" },
    { code: "en", label: "English", ariaLabel: "Switch language to English" },
  ];

  return (
    <nav className="language-selector-wrapper" aria-label="Language Selection">
      <div className="language-toggle-pill">
        {options.map((opt) => {
          const isActive = language === opt.code;
          return (
            <button
              key={opt.code}
              type="button"
              className={`lang-option-btn ${isActive ? "is-active" : ""}`}
              onClick={() => setLanguage(opt.code)}
              aria-pressed={isActive}
              aria-label={opt.ariaLabel}
            >
              {isActive && (
                <motion.div
                  layoutId="activeLangIndicator"
                  className="lang-active-indicator"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
              <span className="lang-label-text">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
