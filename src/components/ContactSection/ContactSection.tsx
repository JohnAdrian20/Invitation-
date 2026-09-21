import { motion } from "framer-motion";
import type { ContactPerson } from "../../data/invitationData";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import "./ContactSection.css";

interface ContactSectionProps {
  contacts: ContactPerson[];
}

export default function ContactSection({ contacts }: ContactSectionProps) {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className="contact-section">
      <div className="section-container">
        <motion.div
          className="contact-header-group"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-pretag">{t.pretag}</span>
          <h2 className="section-title">{t.title}</h2>
          <div className="kolam-divider">
            <span className="kolam-line" />
            <span className="kolam-motif">✦ ॐ ✦</span>
            <span className="kolam-line" />
          </div>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="contact-cards-wrapper">
          {contacts.map((contact, index) => {
            const roleDisplay = contact.name.toLowerCase().includes("varman")
              ? t.groomRole
              : t.brideRole;

            return (
              <motion.div
                key={contact.name}
                className="contact-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
              >
                <div className="contact-avatar">
                  {contact.name.charAt(0)}
                </div>

                <h3 className="name">{contact.name}</h3>
                <span className="role">{roleDisplay}</span>

                <div className="button-group">
                  <a
                    href={`tel:${contact.phone}`}
                    className="contact-btn call-btn"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    {t.callBtn(contact.name)}
                  </a>

                  {contact.whatsapp && (
                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-btn wa-btn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      {t.whatsappBtn}
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="footer-couture-signature"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="footer-monogram">V &amp; S</div>
          <p className="footer-blessing">
            {t.footerBlessingLine1}<br />
            {t.footerBlessingLine2}
          </p>
          <span className="footer-copyright">{t.footerCopyright}</span>
        </motion.div>
      </div>
    </section>
  );
}
