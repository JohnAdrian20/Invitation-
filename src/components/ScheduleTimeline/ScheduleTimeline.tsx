import { motion } from "framer-motion";
import type { TimelineEvent } from "../../data/invitationData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./ScheduleTimeline.css";

interface ScheduleTimelineProps {
  timeline?: TimelineEvent[];
}

function renderTimelineIcon(icon: TimelineEvent["icon"]) {
  switch (icon) {
    case "flower":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3a3 3 0 0 0 -3 3c0 .8 .4 1.5 1 2a4 4 0 0 0 -2 -1 3 3 0 0 0 -3 3c0 .8 .4 1.5 1 2a4 4 0 0 0 -2 -1 3 3 0 0 0 -3 3c0 1.7 1.3 3 3 3a4 4 0 0 0 2 -1c-.6 .5 -1 1.2 -1 2a3 3 0 0 0 3 3c1.7 0 3 -1.3 3 -3a4 4 0 0 0 -1 -2c.5 .6 1.2 1 2 1a3 3 0 0 0 3 -3c0 -.8 -.4 -1.5 -1 -2a4 4 0 0 0 2 1a3 3 0 0 0 3 -3c0 -1.7 -1.3 -3 -3 -3a4 4 0 0 0 -2 1c.6 -.5 1 -1.2 1 -2a3 3 0 0 0 -3 -3z" />
        </svg>
      );
    case "diamond":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
          <path d="M10 12l-2 -2.2l.6 -1" />
        </svg>
      );
    case "sun":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>
      );
    case "dining":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12m0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
        </svg>
      );
    case "car":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
        </svg>
      );
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
  }
}

export default function ScheduleTimeline({ timeline }: ScheduleTimelineProps) {
  const { language } = useLanguage();
  const t = translations[language].schedule;
  const events = t.events || timeline;

  return (
    <section className="schedule-section">
      <div className="schedule-container">
        <motion.div
          className="schedule-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="schedule-pretag">{t.pretag}</span>
          <h2 className="title">{t.title}</h2>
          <div className="kolam-divider">
            <span className="kolam-line" />
            <span className="kolam-motif">✦ ॐ ✦</span>
            <span className="kolam-line" />
          </div>
          <p className="subtitle">{t.subtitle}</p>
        </motion.div>

        <div className="timeline-vine-wrapper">
          <div className="central-vine-line" />

          {events.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={item.title}
                className={`timeline-node ${isEven ? "node-left" : "node-right"}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
              >
                {/* Center Node Badge */}
                <div className="timeline-node-pin">
                  <div className="node-icon-glow">
                    {renderTimelineIcon(item.icon)}
                  </div>
                </div>

                {/* Event Card */}
                <div className="timeline-event-card">
                  <div className="card-time-badge">
                    <span>{item.time}</span>
                  </div>
                  <h3 className="event-title">{item.title}</h3>
                  <p className="event-desc">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
