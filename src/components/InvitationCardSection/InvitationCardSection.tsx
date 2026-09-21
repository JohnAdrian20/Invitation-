import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { InvitationData } from "../../data/invitationData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./InvitationCardSection.css";

interface InvitationCardSectionProps {
  data: InvitationData;
  guestName?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function InvitationCardSection({
  data,
  guestName,
}: InvitationCardSectionProps) {
  const { language } = useLanguage();
  const t = translations[language].invitationCard;
  // Live Countdown calculation
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(data.targetCountdownDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [data.targetCountdownDate]);

  // Calendar Day Generation
  const emptyDaysOffset = Array.from({ length: data.calendar.firstDayOffset || 0 }, (_, i) => i);
  const daysArray = Array.from({ length: data.calendar.totalDays }, (_, i) => i + 1);



  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Celebration:+Varman+%26+Saru&dates=20261212T033000Z/20261212T103000Z&details=உங்களுடன்+இந்த+இனிய+தருணத்தை+பகிர்ந்து+கொள்ள+மகிழ்கிறோம்.+Balagala+Tea+Garden&location=Balagala+Tea+Garden,+Akuressa,+Matara`;

  return (
    <section className="invitation-details-section">
      <motion.div
        className="invitation-card-suite"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Subtle Double Border */}
        <div className="card-border-outer" />
        <div className="card-border-inner" />

        {/* Top Header Motif */}
        <div className="card-top-insignia">
          <span className="card-tamil-title">{t.cardTitle}</span>
          <div className="kolam-divider">
            <span className="kolam-line" />
            <span className="kolam-motif">✦ ॐ ✦</span>
            <span className="kolam-line" />
          </div>
        </div>

        {/* Warm Invitation Greeting */}
        <div className="guest-greeting-box">
          <p className="guest-salutation">
            {guestName ? t.guestSalutation(guestName) : t.defaultSalutation}
          </p>
          <h2 className="main-invitation-phrase">{t.mainPhrase}</h2>
          <p className="invitation-subtext">
            {t.bodyParagraph}
          </p>
        </div>

        {/* Primary Couple Names: Varman & Saru */}
        <div className="couple-names-block">
          <div className="names-row">
            <span className="bride-headline">{data.groomName}</span>
            <span className="names-script-connector">&amp;</span>
            <span className="groom-headline">{data.brideName}</span>
          </div>
          <span className="names-tamil-caption">{t.namesCaption}</span>
        </div>

        {/* Families Heritage Grid */}
        <div className="families-heritage-grid">
          <div className="family-col">
            <span className="family-role-tag">{t.groomParentsRole}</span>
            <p className="parents-name">{t.groomParentsName}</p>
          </div>

          <div className="family-ornament-center">
            <span>&bull;</span>
          </div>

          <div className="family-col">
            <span className="family-role-tag">{t.brideParentsRole}</span>
            <p className="parents-name">{t.brideParentsName}</p>
          </div>
        </div>

        <div className="deckled-divider">
          <span className="divider-diamond">✦</span>
        </div>

        {/* When & Where Details Grid */}
        <div className="itinerary-summary-grid">
          <div className="itinerary-card date-card">
            <div className="card-icon-tag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <span className="itinerary-label">{t.dateTimeLabel}</span>
            <h3 className="itinerary-title">{t.weddingDate}</h3>
            <span className="itinerary-sub">{t.weddingTime}</span>
          </div>

          <div className="itinerary-card venue-card">
            <div className="card-icon-tag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="itinerary-label">{t.venueLabel}</span>
            <h3 className="itinerary-title">{t.venueTitle}</h3>
            <p className="itinerary-detail">{t.venueAddress}</p>
            <span className="itinerary-sub">{t.venueCity}</span>
          </div>
        </div>

        {/* Calendar Sync Actions */}
        <div className="calendar-sync-actions">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="calendar-sync-btn google-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{t.googleCalendarBtn}</span>
          </a>
        </div>

        <div className="deckled-divider">
          <span className="divider-diamond">✦</span>
        </div>

        {/* Interactive Calendar Month */}
        <div className="bespoke-calendar-section">
          <div className="calendar-header-block">
            <span className="calendar-title-label">{t.calendarAuspiciousLabel}</span>
            <h3 className="calendar-month-title">{t.calendarMonthTitle}</h3>
          </div>

          <div className="calendar-foil-wrapper">
            <div className="calendar-grid-header">
              {t.calendarWeekdays.map((w, idx) => (
                <span key={idx}>{w}</span>
              ))}
            </div>

            <div className="calendar-days-matrix">
              {emptyDaysOffset.map((offset) => (
                <div key={`offset-${offset}`} className="cal-day-cell cal-day-empty" aria-hidden="true" />
              ))}
              {daysArray.map((day) => {
                const isTarget = day === data.calendar.highlightedDay;
                return (
                  <div
                    key={day}
                    className={`cal-day-cell ${isTarget ? "highlighted-wedding-day" : ""}`}
                  >
                    {isTarget && (
                      <div className="heart-badge-pin" title={t.calendarHeartTooltip}>
                        <svg viewBox="0 0 100 100" className="heart-pin-svg">
                          <path
                            d="M50,85 C25,60 10,40 15,22 C18,12 35,10 50,28 C65,10 82,12 85,22 C90,40 75,60 50,85 Z"
                            fill="#8a5742"
                            stroke="#ffffff"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                    )}
                    <span className="day-number">{day}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blessings Quote */}
        <div className="blessings-banner">
          <p className="blessings-quote-text">
            &ldquo;{t.blessingsQuote}&rdquo;
          </p>
        </div>

        {/* Live Countdown Timer */}
        <div className="couture-countdown-container" aria-label="Live Wedding Countdown">
          <span className="countdown-headline">{t.countdownHeadline}</span>

          <div className="countdown-tiles-row">
            <div className="countdown-tile">
              <div className="tile-inner">
                <span className="tile-val">{String(timeLeft.days).padStart(2, "0")}</span>
                <span className="tile-label">{t.countdownDays}</span>
              </div>
            </div>

            <span className="time-colon">:</span>

            <div className="countdown-tile">
              <div className="tile-inner">
                <span className="tile-val">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="tile-label">{t.countdownHours}</span>
              </div>
            </div>

            <span className="time-colon">:</span>

            <div className="countdown-tile">
              <div className="tile-inner">
                <span className="tile-val">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="tile-label">{t.countdownMinutes}</span>
              </div>
            </div>

            <span className="time-colon">:</span>

            <div className="countdown-tile">
              <div className="tile-inner">
                <span className="tile-val">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span className="tile-label">{t.countdownSeconds}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
