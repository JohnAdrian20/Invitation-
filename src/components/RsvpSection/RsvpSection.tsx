// src/components/RsvpSection/RsvpSection.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./RsvpSection.css";

interface RsvpSectionProps {
  deadline: string;
  defaultGuestName?: string;
}

export default function RsvpSection({
  deadline,
  defaultGuestName = "",
}: RsvpSectionProps) {
  const [name, setName] = useState(defaultGuestName);
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [dietary, setDietary] = useState<string>("Standard Traditional Feast");
  const [wishes, setWishes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultGuestName && !name) {
      setName(defaultGuestName);
    }
  }, [defaultGuestName, name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const groomWhatsApp = "94719268681";
    let text = `வணக்கம் வர்மன் & சாரு! ✨\n`;
    if (attending === "yes") {
      text += `நான் ${name}. உங்கள் திருமண விழாவில் ${guestCount} விருந்தினர்களுடன் மகிழ்வுடன் பங்கேற்கிறோம்.\n`;
      if (dietary) text += `உணவு முறை: ${dietary}\n`;
      if (wishes) text += `வாழ்த்து: "${wishes}"\n`;
      text += `ஜூன் 11 அன்று Balagala Tea Garden-ல் சந்திக்க ஆவலுடன் உள்ளோம்! 💐`;
    } else {
      text += `நான் ${name}. தவிர்க்க முடியாத காரணத்தினால் எங்களால் நேரில் வர இயலவில்லை, எனினும் எங்கள் மனமார்ந்த வாழ்த்துகளும் ஆசிகளும் என்றும் உங்களுடன்! 🕊️`;
    }
    return `https://wa.me/${groomWhatsApp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="rsvp-section" id="rsvp">
      <div className="section-container">
        <motion.div
          className="rsvp-header-group"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="rsvp-pretag">வருகையை உறுதிப்படுத்த &bull; R.S.V.P</span>
          <h2 className="section-title">தங்கள் வருகையை உறுதிப்படுத்தவும்</h2>
          <div className="kolam-divider">
            <span className="kolam-line" />
            <span className="kolam-motif">✦ ॐ ✦</span>
            <span className="kolam-line" />
          </div>
          <p className="section-subtitle">
            உணவு மற்றும் ஆசன வசதிகளை ஒழுங்கு செய்ய தயவுசெய்து <strong>{deadline}</strong>-க்குள் அறியத்தரவும்.
          </p>
        </motion.div>

        <motion.div
          className="rsvp-card-suite"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="rsvp-form">
              <div className="form-group">
                <label htmlFor="rsvp-name" className="form-label">
                  உங்கள் பெயர் &bull; Your Full Name
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  placeholder="எ.கா. திரு. க. கார்த்திகேயன் / Karthik"
                  className="form-input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <span className="form-label">வருகை &bull; Will You Be Attending?</span>
                <div className="attendance-toggle-row">
                  <button
                    type="button"
                    className={`att-btn ${attending === "yes" ? "att-active-yes" : ""}`}
                    onClick={() => setAttending("yes")}
                  >
                    <span className="att-icon">✨</span>
                    <span>மகிழ்வுடன் பங்கேற்கிறோம்</span>
                  </button>
                  <button
                    type="button"
                    className={`att-btn ${attending === "no" ? "att-active-no" : ""}`}
                    onClick={() => setAttending("no")}
                  >
                    <span className="att-icon">🕊️</span>
                    <span>வர இயலவில்லை</span>
                  </button>
                </div>
              </div>

              {attending === "yes" && (
                <div className="form-row-dual">
                  <div className="form-group count-group">
                    <label htmlFor="rsvp-guest-count" className="form-label">
                      பங்கேற்போர் எண்ணிக்கை &bull; Guests
                    </label>
                    <div className="counter-wrapper">
                      <button
                        type="button"
                        className="counter-btn"
                        onClick={() => setGuestCount((prev) => Math.max(1, prev - 1))}
                        disabled={guestCount <= 1}
                        aria-label="Decrease guest count"
                      >
                        −
                      </button>
                      <span id="rsvp-guest-count" className="count-display">
                        {guestCount}
                      </span>
                      <button
                        type="button"
                        className="counter-btn"
                        onClick={() => setGuestCount((prev) => Math.min(8, prev + 1))}
                        disabled={guestCount >= 8}
                        aria-label="Increase guest count"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="rsvp-dietary" className="form-label">
                      உணவு விருப்பம் &bull; Dietary
                    </label>
                    <select
                      id="rsvp-dietary"
                      className="form-select"
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
                    >
                      <option value="Traditional Vegetarian">சைவம் &bull; Pure Vegetarian</option>
                      <option value="Standard Traditional Feast">அறுசுவை விருந்து &bull; Traditional Feast</option>
                      <option value="No Onion / Garlic">சமணர் உணவு &bull; Jain Style</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="rsvp-wishes" className="form-label">
                  சிறப்புக் குறிப்பு / வாழ்த்து &bull; Wishes or Notes <span className="opt-tag">(Optional)</span>
                </label>
                <textarea
                  id="rsvp-wishes"
                  placeholder="மணமக்களுக்கு வாழ்த்துச் செய்தி அல்லது குறிப்புகள்..."
                  className="form-textarea"
                  rows={2}
                  value={wishes}
                  onChange={(e) => setWishes(e.target.value)}
                />
              </div>

              <div className="form-actions-row">
                <button type="submit" className="rsvp-submit-btn">
                  <span>பங்கேற்பை உறுதிப்படுத்த &bull; Confirm</span>
                </button>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rsvp-whatsapp-direct-btn"
                  title="Send attendance details via WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>WhatsApp RSVP</span>
                </a>
              </div>
            </form>
          ) : (
            <motion.div
              className="rsvp-confirmation-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="confirmation-crest-ring">
                <span className="confirm-check">✓</span>
              </div>

              <h3 className="thank-you-headline">நன்றி, {name}!</h3>
              <p className="thank-you-body">
                {attending === "yes"
                  ? `தங்களின் வருகை பதிவு செய்யப்பட்டது (${guestCount} நபர்). வர்மன் & சாரு தம்பதியினரின் திருமண நன்னாளில் தங்களை வரவேற்பதில் மிக்க மகிழ்ச்சி அடைகிறோம்!`
                  : "தங்களின் வாழ்த்துகளுக்கு மனமார்ந்த நன்றி. இந்நன்னாளில் தங்கள் பிரசன்னத்தை தவறவிட்டாலும், தங்களின் ஆசிகள் என்றும் எங்களோடு நிலைத்திருக்கும்."}
              </p>

              <div className="confirmation-actions">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-confirm-link"
                >
                  <span>WhatsApp-ல் உறுதிப்படுத்தவும்</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="edit-rsvp-link"
                >
                  பதிவைத் திருத்த &bull; Change Response
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
