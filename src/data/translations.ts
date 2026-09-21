// src/data/translations.ts
// Comprehensive Tamil and English content dictionaries for the wedding invitation

export interface Translations {
  envelope: {
    guestBadge: (guestName: string) => string;
    defaultBadge: string;
    subtitle: string;
    dateBadge: string;
    venueText: string;
    tapToOpen: string;
    openAriaLabel: string;
    innerCrestGreeting: string;
  };
  welcome: {
    mangalaSymbol: string;
    prologueTag: string;
    heading: string;
    quote: string;
    venueTitle: string;
    venueCity: string;
  };
  chapters: {
    ch1Title: string;
    ch1Caption: string;
    ch2Title: string;
    ch2Caption: string;
    ch3Title: string;
    ch3Caption: string;
    viewPhoto: string;
    closeLightbox: string;
  };
  invitationCard: {
    cardTitle: string;
    guestSalutation: (name: string) => string;
    defaultSalutation: string;
    mainPhrase: string;
    bodyParagraph: string;
    namesCaption: string;
    groomParentsRole: string;
    groomParentsName: string;
    brideParentsRole: string;
    brideParentsName: string;
    dateTimeLabel: string;
    weddingDate: string;
    weddingTime: string;
    venueLabel: string;
    venueTitle: string;
    venueAddress: string;
    venueCity: string;
    googleCalendarBtn: string;
    icsDownloadBtn: string;
    calendarAuspiciousLabel: string;
    calendarMonthTitle: string;
    calendarWeekdays: [string, string, string, string, string, string, string];
    calendarHeartTooltip: string;
    blessingsQuote: string;
    countdownHeadline: string;
    countdownDays: string;
    countdownHours: string;
    countdownMinutes: string;
    countdownSeconds: string;
  };
  schedule: {
    pretag: string;
    title: string;
    subtitle: string;
    events: Array<{
      time: string;
      title: string;
      desc: string;
      icon: "flower" | "diamond" | "sun" | "dining" | "car";
    }>;
  };
  wishes: {
    pretag: string;
    title: string;
    subtitle: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    submitBtn: string;
    successToast: string;
    guestBadge: string;
    sampleWishes: Array<{
      id: string;
      sender: string;
      relationship: string;
      message: string;
      date: string;
    }>;
  };
  venueMap: {
    pretag: string;
    title: string;
    address: string;
    googleMapsBtn: string;
    wazeBtn: string;
    appleMapsBtn: string;
  };
  contact: {
    pretag: string;
    title: string;
    subtitle: string;
    groomRole: string;
    brideRole: string;
    callBtn: (name: string) => string;
    whatsappBtn: string;
    footerBlessingLine1: string;
    footerBlessingLine2: string;
    footerCopyright: string;
  };
  audio: {
    playTitle: string;
    pauseTitle: string;
  };
}

export const translations: Record<"ta" | "en", Translations> = {
  ta: {
    envelope: {
      guestBadge: (name: string) => `அன்புடையீர் ${name} அவர்களுக்கு`,
      defaultBadge: "அன்புடன் அழைக்கிறோம்",
      subtitle: "மங்களகரமான திருமண அழைப்பிதழ்",
      dateBadge: "12.12.2026 • சனிக்கிழமை",
      venueText: "BALAGALA TEA GARDEN, AKURESSA, MATARA",
      tapToOpen: "திறக்க அழுத்தவும்",
      openAriaLabel: "திருமண அழைப்பிதழைத் திறக்க",
      innerCrestGreeting: "அன்புடன் அழைக்கிறோம்",
    },
    welcome: {
      mangalaSymbol: "ஓம் • மங்கலம்",
      prologueTag: "திருமண அழைப்பிதழ்",
      heading: "அன்புடன் அழைக்கிறோம்",
      quote: "உங்களுடன் இந்த இனிய தருணத்தை பகிர்ந்து கொள்ள மகிழ்கிறோம்.",
      venueTitle: "BALAGALA TEA GARDEN",
      venueCity: "Akuressa, Matara, Sri Lanka",
    },
    chapters: {
      ch1Title: "அன்பின் தொடக்கம்",
      ch1Caption: "குடும்பத்தினரின் ஆசிகளோடு இணையும் எங்கள் அன்புப் பயணம்.",
      ch2Title: "இனிய தருணங்கள்",
      ch2Caption: "ஒன்றாக பகிர்ந்துகொள்ளும் ஒவ்வொரு தருணமும் ஓர் இனிய நினைவாக.",
      ch3Title: "என்றும் இணைந்திருக்க",
      ch3Caption: "அன்போடும் நல்லெண்ணத்தோடும் மலரும் எங்கள் இல்லற வாழ்வு.",
      viewPhoto: "படத்தைப் பார்க்க",
      closeLightbox: "மூடுக",
    },
    invitationCard: {
      cardTitle: "திருமண அழைப்பிதழ்",
      guestSalutation: (name: string) => `அன்புடையீர் ${name} அவர்களுக்கு,`,
      defaultSalutation: "அன்புடையீர் வணக்கம்,",
      mainPhrase: "அன்புடன் அழைக்கிறோம்",
      bodyParagraph:
        "எங்கள் இல்லத் திருமண விழாவிற்கு தாங்கள் தங்கள் குடும்ப சகிதமாக வருகை தந்து மணமக்களை வாழ்த்தி அருளுமாறு அன்புடன் அழைக்கின்றோம்.",
      namesCaption: "வர்மன் • சாரு",
      groomParentsRole: "மணமகன் வீட்டார்",
      groomParentsName: "திரு & திருமதி வரதராஜன் (Mr. & Mrs. Varatharajan)",
      brideParentsRole: "மணமகள் வீட்டார்",
      brideParentsName: "திரு & திருமதி சிவகுமார் (Mr. & Mrs. Sivakumar)",
      dateTimeLabel: "சுப தினம் & நேரம்",
      weddingDate: "சனிக்கிழமை, 12 டிசம்பர் 2026",
      weddingTime: "காலை 9:00 – மாலை 4:00",
      venueLabel: "திருமண மண்டபம்",
      venueTitle: "BALAGALA TEA GARDEN",
      venueAddress: "AKURESSA, MATARA",
      venueCity: "Akuressa, Matara, Sri Lanka",
      googleCalendarBtn: "Google Calendar-ல் சேர்க்க",
      icsDownloadBtn: "Apple / Outlook (.ics)",
      calendarAuspiciousLabel: "சுப முகூர்த்த நாள்",
      calendarMonthTitle: "டிசம்பர் 2026",
      calendarWeekdays: ["திங்", "செவ்", "புதன்", "வியா", "வெள்", "சனி", "ஞாயி"],
      calendarHeartTooltip: "சுப முகூர்த்த நாள்",
      blessingsQuote: "உங்கள் வருகையும் ஆசிகளும் எங்களின் இந்நாளை மேலும் சிறப்பாக்கும்.",
      countdownHeadline: "இனிய நாளுக்கான எதிர்பார்ப்பு",
      countdownDays: "நாட்கள்",
      countdownHours: "மணி",
      countdownMinutes: "நிமிடம்",
      countdownSeconds: "நொடி",
    },
    schedule: {
      pretag: "சுப நிகழ்வு நிரல்",
      title: "நிகழ்வுகள்",
      subtitle: "மங்களகரமான இந்த நன்னாளில் நடைபெறும் முக்கிய நிகழ்வுகள்",
      events: [
        {
          time: "9.00 AM",
          title: "வரவேற்பு",
          desc: "விருந்தினர்களின் வருகை மற்றும் பாரம்பரிய நல்வரவேற்பு உபசரிப்பு.",
          icon: "flower",
        },
        {
          time: "10.00 AM",
          title: "மங்கள நிகழ்வு",
          desc: "புனிதமான மங்கள சடங்குகள் மற்றும் ஆசீர்வதிக்கப்பட்ட தருணங்கள்.",
          icon: "diamond",
        },
        {
          time: "12.00 PM",
          title: "வாழ்த்துகள் & ஆசிகள்",
          desc: "குடும்பத்தினரும் நண்பர்களும் தங்கள் மனமார்ந்த நல்வாழ்த்துகளைப் பகிர்தல்.",
          icon: "sun",
        },
        {
          time: "12.45 PM",
          title: "விருந்தோம்பல்",
          desc: "பாரம்பரிய அறுசுவை மதிய திருமண விருந்து உபசரிப்பு.",
          icon: "dining",
        },
        {
          time: "3.30 PM",
          title: "நன்றியுரை",
          desc: "வருகை தந்து சிறப்பித்த அனைத்து நல்உள்ளங்களுக்கும் மனமார்ந்த நன்றி.",
          icon: "car",
        },
      ],
    },
    wishes: {
      pretag: "வாழ்த்துச் செய்தி",
      title: "வாழ்த்துகள் & ஆசிகள்",
      subtitle: "வர்மன் & சாரு தம்பதியினருக்கு தங்களின் மனமார்ந்த வாழ்த்துகளையும் ஆசிகளையும் அன்புடன் பகிருங்கள்.",
      namePlaceholder: "உங்கள் பெயர்",
      messagePlaceholder: "உங்கள் மனமார்ந்த வாழ்த்துச் செய்தியை இங்கு எழுதவும்...",
      submitBtn: "வாழ்த்துகளைப் பகிர",
      successToast: "நன்றி! தங்கள் வாழ்த்துப் பதிவு இணைக்கப்பட்டது.",
      guestBadge: "விருந்தினர்",
      sampleWishes: [
        {
          id: "1",
          sender: "கார்த்திக் & சுபா",
          relationship: "நண்பர்கள்",
          message: "வர்மன் & சாரு தம்பதியினர் எல்லா வளமும் பெற்று சீரோடும் சிறப்போடும் நூறாண்டு காலம் இன்புற்று வாழ உளமார வாழ்த்துகிறோம்!",
          date: "இப்போது",
        },
        {
          id: "2",
          sender: "பெரியப்பா குடும்பத்தினர்",
          relationship: "உறவினர்கள்",
          message: "இறைவனின் திருவருளால் இல்லற வாழ்வு இனிதே சிறக்க மனமார்ந்த நல்வாழ்த்துகளும் ஆசிகளும்.",
          date: "நேற்று",
        },
        {
          id: "3",
          sender: "பிரியா & தினேஷ்",
          relationship: "தோழர்கள்",
          message: "வர்மன் மற்றும் சாருவிற்கு எங்கள் இதயப்பூர்வமான திருமண நல்வாழ்த்துகள்! என்றும் இணைபிரியா அன்புடன் வாழ்க!",
          date: "2 நாட்களுக்கு முன்",
        },
      ],
    },
    venueMap: {
      pretag: "திருமண மண்டபம்",
      title: "BALAGALA TEA GARDEN",
      address: "Akuressa, Matara, Sri Lanka",
      googleMapsBtn: "இடத்தைப் பார்க்க • Google Maps",
      wazeBtn: "Waze வழிசெலுத்தல்",
      appleMapsBtn: "Apple Maps",
    },
    contact: {
      pretag: "தொடர்புகளுக்கு",
      title: "தொடர்பு கொள்ள",
      subtitle: "பயண வழிகாட்டல் மற்றும் விபரங்களுக்கு எங்களைத் தொடர்பு கொள்ளவும்.",
      groomRole: "மணமகன்",
      brideRole: "மணமகள்",
      callBtn: (name: string) => `அழைக்க • Call ${name}`,
      whatsappBtn: "WhatsApp செய்தி",
      footerBlessingLine1: "உங்கள் வருகை எங்கள் இல்லத்து நன்னாளுக்கு பெருமை சேர்க்கும்.",
      footerBlessingLine2: "அன்புடன் எதிர்நோக்கும் வர்மன் & சாரு மற்றும் குடும்பத்தினர்.",
      footerCopyright: "• டிசம்பர் 12, 2026 • Balagala Tea Garden •",
    },
    audio: {
      playTitle: "இசையை இயக்க",
      pauseTitle: "இசையை நிறுத்த",
    },
  },
  en: {
    envelope: {
      guestBadge: (name: string) => `Honored Guest ${name}`,
      defaultBadge: "You Are Cordially Invited",
      subtitle: "A Celebration of Holy Matrimony",
      dateBadge: "12.12.2026 • Saturday",
      venueText: "BALAGALA TEA GARDEN, AKURESSA, MATARA",
      tapToOpen: "Tap to Open",
      openAriaLabel: "Open Wedding Invitation",
      innerCrestGreeting: "Cordially Invited",
    },
    welcome: {
      mangalaSymbol: "Auspicious Union",
      prologueTag: "Wedding Invitation",
      heading: "Warm Welcome",
      quote: "We joyfully invite you to share in the warmth and celebration of this blessed day.",
      venueTitle: "BALAGALA TEA GARDEN",
      venueCity: "Akuressa, Matara, Sri Lanka",
    },
    chapters: {
      ch1Title: "A Journey of Love",
      ch1Caption: "Our beautiful journey begins, blessed by the love of our families.",
      ch2Title: "Cherished Moments",
      ch2Caption: "Every moment shared together blossoms into a cherished lifelong memory.",
      ch3Title: "Together Forever",
      ch3Caption: "Stepping into a lifetime of harmony, mutual affection, and shared dreams.",
      viewPhoto: "Tap to View",
      closeLightbox: "Close",
    },
    invitationCard: {
      cardTitle: "Wedding Invitation",
      guestSalutation: (name: string) => `Dear ${name},`,
      defaultSalutation: "Dear Guests & Family,",
      mainPhrase: "Cordially Invite You",
      bodyParagraph:
        "We cordially invite you with your family to grace the wedding celebration of our beloved children and bestow your heartfelt blessings upon the couple.",
      namesCaption: "Varman & Saru",
      groomParentsRole: "Groom's Parents",
      groomParentsName: "Mr. & Mrs. Varatharajan",
      brideParentsRole: "Bride's Parents",
      brideParentsName: "Mr. & Mrs. Sivakumar",
      dateTimeLabel: "Date & Time",
      weddingDate: "Saturday, 12th December 2026",
      weddingTime: "9:00 AM – 4:00 PM",
      venueLabel: "Wedding Venue",
      venueTitle: "BALAGALA TEA GARDEN",
      venueAddress: "AKURESSA, MATARA",
      venueCity: "Akuressa, Matara, Sri Lanka",
      googleCalendarBtn: "Add to Google Calendar",
      icsDownloadBtn: "Apple / Outlook (.ics)",
      calendarAuspiciousLabel: "Save The Date",
      calendarMonthTitle: "DECEMBER 2026",
      calendarWeekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      calendarHeartTooltip: "Wedding Day",
      blessingsQuote: "Your gracious presence and heartfelt blessings will make this day truly special.",
      countdownHeadline: "Countdown to the Celebration",
      countdownDays: "Days",
      countdownHours: "Hours",
      countdownMinutes: "Mins",
      countdownSeconds: "Secs",
    },
    schedule: {
      pretag: "ITINERARY & PROGRAM",
      title: "Order of Events",
      subtitle: "Order of proceedings and joyous moments on this auspicious day",
      events: [
        {
          time: "9.00 AM",
          title: "Arrival & Welcome",
          desc: "Guests arrive and are warmly welcomed with traditional hospitality.",
          icon: "flower",
        },
        {
          time: "10.00 AM",
          title: "Auspicious Ceremony",
          desc: "Sacred traditional rituals and auspicious vows uniting two families.",
          icon: "diamond",
        },
        {
          time: "12.00 PM",
          title: "Blessings & Congratulations",
          desc: "Family and friends gather to shower their heartfelt love and blessings.",
          icon: "sun",
        },
        {
          time: "12.45 PM",
          title: "Festive Wedding Feast",
          desc: "A sumptuous traditional festive luncheon celebrated with loved ones.",
          icon: "dining",
        },
        {
          time: "3.30 PM",
          title: "Gratitude & Farewell",
          desc: "Heartfelt thanks and warmest farewell to all who graced our celebration.",
          icon: "car",
        },
      ],
    },
    wishes: {
      pretag: "BLESSINGS & WISHES",
      title: "Guest Blessings Wall",
      subtitle: "Leave your warm blessings and congratulations for Varman & Saru.",
      namePlaceholder: "Your Name",
      messagePlaceholder: "Write your heartfelt message and blessings here...",
      submitBtn: "Send Blessing",
      successToast: "Thank you! Your blessing has been posted.",
      guestBadge: "Guest",
      sampleWishes: [
        {
          id: "1",
          sender: "Karthik & Suba",
          relationship: "Friends",
          message: "Wishing Varman & Saru an abundance of joy, peace, and eternal love on your wonderful journey together!",
          date: "Just now",
        },
        {
          id: "2",
          sender: "Periyappa & Family",
          relationship: "Family",
          message: "May the divine blessings guide and illuminate your new chapter of life with prosperity and happiness.",
          date: "Yesterday",
        },
        {
          id: "3",
          sender: "Priya & Dinesh",
          relationship: "Colleagues",
          message: "Heartiest congratulations to the lovely couple Varman & Saru! Wishing you a lifetime of laughter and cherished memories!",
          date: "2 days ago",
        },
      ],
    },
    venueMap: {
      pretag: "LOCATION & VENUE",
      title: "BALAGALA TEA GARDEN",
      address: "Akuressa, Matara, Sri Lanka",
      googleMapsBtn: "Directions • Google Maps",
      wazeBtn: "Navigate with Waze",
      appleMapsBtn: "Apple Maps",
    },
    contact: {
      pretag: "CONTACT & INQUIRIES",
      title: "Get in Touch",
      subtitle: "For venue directions, assistance, or inquiries, please feel free to reach out.",
      groomRole: "Groom",
      brideRole: "Bride",
      callBtn: (name: string) => `Call ${name}`,
      whatsappBtn: "WhatsApp Message",
      footerBlessingLine1: "Your presence will bring immense joy and honor to our celebration.",
      footerBlessingLine2: "Warmly anticipated by Varman & Saru and families.",
      footerCopyright: "• December 12, 2026 • Balagala Tea Garden •",
    },
    audio: {
      playTitle: "Play Music",
      pauseTitle: "Pause Music",
    },
  },
};
