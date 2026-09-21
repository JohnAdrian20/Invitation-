import { useState, useEffect } from "react";
import invitationData from "./data/invitationData";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { translations } from "./data/translations";
import EnvelopeCover from "./components/EnvelopeCover/EnvelopeCover";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import CouplePhotoSection from "./components/CouplePhotoSection/CouplePhotoSection";
import InvitationCardSection from "./components/InvitationCardSection/InvitationCardSection";
import ScheduleTimeline from "./components/ScheduleTimeline/ScheduleTimeline";
// import WishesWallSection from "./components/WishesWallSection/WishesWallSection";
import MapLocationSection from "./components/MapLocationSection/MapLocationSection";
import ContactSection from "./components/ContactSection/ContactSection";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import FloatingPetals from "./components/FloatingPetals/FloatingPetals";
import "./App.css";

function InvitationApp() {
  const { language } = useLanguage();
  const tChapters = translations[language].chapters;

  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [guestName, setGuestName] = useState<string>("");
  const [startAudio, setStartAudio] = useState(false);

  // Extract ?invite= or ?name= or ?guest= from URL search params
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const inviteParam =
        params.get("invite") || params.get("name") || params.get("guest");
      if (inviteParam) {
        setGuestName(decodeURIComponent(inviteParam).trim());
      }
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsCoverOpen(true);
    setStartAudio(true);
  };

  return (
    <div className="invitation-app-root">
      {/* Falling Ambient Botanical Petals */}
      <FloatingPetals />

      {/* Floating Wedding Music Player */}
      <AudioPlayer autoStart={startAudio} />

      {/* Gatefold Envelope & Wax Seal */}
      {!isCoverOpen && (
        <EnvelopeCover
          data={invitationData}
          onOpen={handleOpenInvitation}
          guestName={guestName}
        />
      )}

      {/* Main Invitation Flow */}
      <main className="main-invitation-container">
        {/* Section 1: Welcome & Prologue */}
        <WelcomeSection data={invitationData} />

        {/* Section 2: Couple Chapter 1 */}
        <CouplePhotoSection
          imageSrc={invitationData.photos.photo1}
          altText={`${invitationData.groomName} & ${invitationData.brideName}`}
          chapterTitle={tChapters.ch1Title}
          caption={tChapters.ch1Caption}
        />

        {/* Section 3: Formal Invitation Suite (Personalized Guest Honor, Parents, Details, Calendar, Countdown) */}
        <InvitationCardSection data={invitationData} guestName={guestName} />

        {/* Section 4: Couple Chapter 2 */}
        <CouplePhotoSection
          imageSrc={invitationData.photos.photo2}
          altText={`${invitationData.groomName} & ${invitationData.brideName}`}
          chapterTitle={tChapters.ch2Title}
          caption={tChapters.ch2Caption}
        />

        {/* Section 5: Events Program / Timeline */}
        <ScheduleTimeline />

        {/* Section 6: Couple Chapter 3 */}
        <CouplePhotoSection
          imageSrc={invitationData.photos.photo3}
          altText={`${invitationData.groomName} & ${invitationData.brideName}`}
          chapterTitle={tChapters.ch3Title}
          caption={tChapters.ch3Caption}
        />

        {/* Section 7: Blessings & Wishes Wall (Temporarily hidden) */}
        {/* <WishesWallSection defaultGuestName={guestName} /> */}

        {/* Section 8: Venue Map & Directions */}
        <MapLocationSection data={invitationData} />

        {/* Section 9: Contact & Closing Signature */}
        <ContactSection contacts={invitationData.contacts} />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <InvitationApp />
    </LanguageProvider>
  );
}
