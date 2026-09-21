// src/data/invitationData.ts
// Central data configuration for the modern Tamil cultural wedding invitation

export interface TimelineEvent {
  time: string;
  title: string;
  titleTa?: string;
  desc: string;
  icon: "map-pin" | "sun" | "diamond" | "flower" | "dining" | "car" | "cake" | "music";
}

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  whatsapp?: string;
}

export interface CalendarInfo {
  monthName: string;      // e.g. "JUNE 2026"
  monthNameTa?: string;    // "ஜூன் 2026"
  year: number;           // 2026
  monthIndex: number;     // 5 for June (0-indexed)
  highlightedDay: number; // 11
  totalDays: number;      // 30
  firstDayOffset: number; // 0 for Monday, etc.
}

export interface InvitationData {
  groomName: string;
  brideName: string;
  groomParents: string;
  brideParents: string;
  weddingDateFormatted: string; // "வியாழன், 11 ஜூன் 2026 | Thursday, 11th June 2026"
  weddingDateShort: string;     // "11.06.2026"
  weddingTimeFormatted: string; // "காலை 9:00 – மாலை 4:00 | 9:00 AM – 4:00 PM"
  targetCountdownDate: string;  // ISO string for countdown: "2026-06-11T09:00:00"
  venueTitle: string;           // "BALAGALA TEA GARDEN"
  venueAddress: string;         // "AKURESSA, MATARA"
  venueCity: string;            // "Akuressa, Matara, Sri Lanka"
  welcomeQuote: string;
  blessingsQuote: string;
  invitationTamilGreeting: string;
  rsvpDeadline: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
  wazeUrl: string;
  appleMapsUrl: string;
  photos: {
    photo1: string;
    photo2: string;
    photo3: string;
    centerpiece: string;
  };
  calendar: CalendarInfo;
  timeline: TimelineEvent[];
  contacts: ContactPerson[];
}

const invitationData: InvitationData = {
  groomName: "Varman",
  brideName: "Saru",
  groomParents: "திரு & திருமதி வரதராஜன் (Mr. & Mrs. Varatharajan)",
  brideParents: "திரு & திருமதி சிவகுமார் (Mr. & Mrs. Sivakumar)",
  weddingDateFormatted: "சனிக்கிழமை, 12 டிசம்பர் 2026 | Saturday, 12th December 2026",
  weddingDateShort: "12.12.2026",
  weddingTimeFormatted: "காலை 9:00 – மாலை 4:00 | 9:00 AM – 4:00 PM",
  targetCountdownDate: "2026-12-12T09:00:00",
  venueTitle: "BALAGALA TEA GARDEN",
  venueAddress: "AKURESSA, MATARA",
  venueCity: "Akuressa, Matara, Sri Lanka",
  welcomeQuote: "உங்களுடன் இந்த இனிய தருணத்தை பகிர்ந்து கொள்ள மகிழ்கிறோம்.",
  blessingsQuote: "உங்கள் வருகையும் ஆசிகளும் எங்களின் இந்நாளை மேலும் சிறப்பாக்கும்.",
  invitationTamilGreeting: "அன்புடன் அழைக்கிறோம்",
  rsvpDeadline: "1st of December, 2026",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.86801990426!2d80.4475471441865!3d6.084931818290378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae16d5162a0aa15%3A0x67ee191d84812a64!2sAkuressa%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk",
  googleMapsUrl: "https://maps.google.com/?q=Balagala+Tea+Garden+Akuressa+Matara",
  wazeUrl: "https://waze.com/ul?q=Balagala+Tea+Garden+Akuressa",
  appleMapsUrl: "https://maps.apple.com/?q=Balagala+Tea+Garden+Akuressa",
  photos: {
    photo1: "/preshot-01.jpg",
    photo2: "/preshot-02.jpg",
    photo3: "/preshot-03.jpg",
    centerpiece: "/white-roses.jpg",
  },
  calendar: {
    monthName: "DECEMBER 2026",
    monthNameTa: "டிசம்பர் 2026",
    year: 2026,
    monthIndex: 11,
    highlightedDay: 12,
    totalDays: 31,
    firstDayOffset: 1, // Dec 1, 2026 is Tuesday
  },
  timeline: [
    {
      time: "9.00 AM",
      title: "வரவேற்பு",
      titleTa: "வரவேற்பு",
      desc: "Guests arrive and are warmly welcomed with traditional hospitality.",
      icon: "flower",
    },
    {
      time: "10.00 AM",
      title: "மங்கள நிகழ்வு",
      titleTa: "மங்கள நிகழ்வு",
      desc: "A meaningful traditional celebration moment and auspicious rituals.",
      icon: "diamond",
    },
    {
      time: "12.00 PM",
      title: "வாழ்த்துகள் & ஆசிகள்",
      titleTa: "வாழ்த்துகள் & ஆசிகள்",
      desc: "Family and friends share their heartfelt wishes and blessings.",
      icon: "sun",
    },
    {
      time: "12.45 PM",
      title: "விருந்தோம்பல்",
      titleTa: "விருந்தோம்பல்",
      desc: "A warm gathering and traditional festive feast with loved ones.",
      icon: "dining",
    },
    {
      time: "3.30 PM",
      title: "நன்றியுரை",
      titleTa: "நன்றியுரை",
      desc: "A heartfelt farewell and gratitude for gracing our celebration.",
      icon: "car",
    },
  ],
  contacts: [
    {
      name: "Varman",
      role: "மணமகன் (Groom)",
      phone: "+94719268681",
      phoneDisplay: "+94 71 926 8681",
      whatsapp: "94719268681",
    },
    {
      name: "Saru",
      role: "மணமகள் (Bride)",
      phone: "+94773811701",
      phoneDisplay: "+94 77 381 1701",
      whatsapp: "94773811701",
    },
  ],
};

export default invitationData;
