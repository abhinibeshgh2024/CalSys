// app.js
// =====================================================================
// Kolkata Cyber-Grid 033: Smart City Management & Local RAG System
// =====================================================================
// Revised with crisp Google-styled Light Theme UI, interactive map pins,
// and localStorage-backed Citizen Login/Signup accounts.

// LocalStorage redirection helper to ensure zero pollution from vizag prefix
const originalGetItem = localStorage.getItem.bind(localStorage);
const originalSetItem = localStorage.setItem.bind(localStorage);
const originalRemoveItem = localStorage.removeItem.bind(localStorage);

localStorage.getItem = function(key) {
  if (typeof key === "string" && key.startsWith("vizag_")) {
    key = key.replace("vizag_", "kolkata_");
  }
  return originalGetItem(key);
};
localStorage.setItem = function(key, value) {
  if (typeof key === "string" && key.startsWith("vizag_")) {
    key = key.replace("vizag_", "kolkata_");
  }
  return originalSetItem(key, value);
};
localStorage.removeItem = function(key) {
  if (typeof key === "string" && key.startsWith("vizag_")) {
    key = key.replace("vizag_", "kolkata_");
  }
  return originalRemoveItem(key);
};

// Translation Dictionary for Language Support
window.translations = {
  en: {
    "brand_title": "Kolkata Cyber-Grid",
    "brand_tag": "033 GLOBAL",
    "brand_desc": "Kolkata Local Offline RAG Intelligence Systems Unit",
    "sos_btn": "🚨 SOS DISPATCH",
    "rag_status": "RAG COOLDOWN OK",
    "ledger_title": "Ledger Overview",
    "cbc_balance": "CBDC Balance",
    "ecology_rating": "Grid Ecology Rating",
    "ask_rag_btn": "Ask RAG Ground AI",
    "nav_transit": "Auto-Transit Booking",
    "nav_utility": "Utility Bills",
    "nav_citycard": "Virtual City Card",
    "nav_complaints": "Municipal Complaints",
    "nav_social": "Social Work & Credits",
    "nav_chat": "Offline RAG Chat",
    "nav_kb": "S² Ground Manuals",
    "nav_events": "City Events",
    "nav_admin": "Govt. Admin Portal",
    "search_placeholder": "Query offline guide manuals: 'Metro link', 'e-Rupee envelope', 'Purge'...",
    "signin_title": "Use your Citizen Account",
    "signin_subtitle": "Authorized access to Kolkata Smart Mobility & Local RAG",
    "create_account": "Create Account",
    "citizens_preset_title": "Quick Login as Verified Citizen presets:",
    "auth_username": "Citizen Email or Username",
    "auth_pwd": "Password",
    "auth_signin": "Sign in",
    "auth_logo_k": "K",
    "auth_logo_o": "o",
    "auth_logo_l": "l",
    "auth_logo_k2": "k",
    "auth_logo_a": "a",
    "auth_logo_t": "t",
    "auth_logo_a2": "a",
    "auth_footer": "English • Kolkata Smart Grid Protocol • Secure Dual-Offline Sandbox Keyless Engine"
  },
  bn: {
    "brand_title": "কলকাতা সাইবার-গ্রিড",
    "brand_tag": "০৩৩ গ্লোবাল",
    "brand_desc": "কলকাতা স্থানীয় অফলাইন আরএজি ইন্টেলিজেন্স সিস্টেম ইউনিট",
    "sos_btn": "🚨 জরুরী এসওএস কল",
    "rag_status": "আরএজি স্বাভাবিক আছে",
    "ledger_title": "লেজার সংক্ষিপ্ত বিবরণ",
    "cbc_balance": "CBDC ব্যালেন্স",
    "ecology_rating": "গ্রিড পরিবেশ রেটিং",
    "ask_rag_btn": "আরএজি এআই জিজ্ঞেস করুন",
    "nav_transit": "স্বয়ংক্রিয় ট্রানজিট বুকিং",
    "nav_utility": "ইউটিলিটি বিল",
    "nav_citycard": "ভার্চুয়াল সিটি কার্ড",
    "nav_complaints": "পৌর অভিযোগ",
    "nav_social": "সামাজিক কাজ ও ক্রেডিট",
    "nav_chat": "অফলাইন আরএজি চ্যাট",
    "nav_kb": "এস² গ্রাউন্ড নির্দেশিকা",
    "nav_events": "শহরের অনুষ্ঠানসূচী",
    "nav_admin": "সরকারি অ্যাডমিন পোর্টাল",
    "search_placeholder": "অফলাইন গাইড ম্যানুয়াল অনুসন্ধান করুন: 'মেট্রো', 'ই-রুপি খাম', 'শুদ্ধকরণ'...",
    "signin_title": "আপনার সিটিজেন অ্যাকাউন্ট ব্যবহার করুন",
    "signin_subtitle": "কলকাতা স্মার্ট মোবিলিটি ও আরএজি সিস্টেমে অনুমোদিত প্রবেশাধিকার",
    "create_account": "অ্যাকাউন্ট তৈরি করুন",
    "citizens_preset_title": "যাচাইকৃত নাগরিক প্রিসেট হিসাবে দ্রুত লগইন করুন:",
    "auth_username": "নাগরিক ইমেল বা ব্যবহারকারীর নাম",
    "auth_pwd": "পাসওয়ার্ড",
    "auth_signin": "সাইন ইন করুন",
    "auth_logo_k": "ক",
    "auth_logo_o": "ল",
    "auth_logo_l": "কা",
    "auth_logo_k2": "তা",
    "auth_logo_a": " ",
    "auth_logo_t": "গ্রি",
    "auth_logo_a2": "ড",
    "auth_footer": "বাংলা • কলকাতা স্মার্ট গ্রিড প্রোটোকল • নিরাপদ ডুয়াল-অফলাইন স্যান্ডবক্স ইঞ্জিন"
  },
  hi: {
    "brand_title": "कोलकाता साइबर-ग्रिड",
    "brand_tag": "033 ग्लोबल",
    "brand_desc": "कोलकाता स्थानीय ऑफ़लाइन आरएजी इंटेलिजेंस सिस्टम यूनिट",
    "sos_btn": "🚨 एसओएस आपातकालीन सेवा",
    "rag_status": "आरएजी सामान्य स्तर पर है",
    "ledger_title": "लेज़र अवलोकन",
    "cbc_balance": "CBDC शेष राशि",
    "ecology_rating": "ग्रिड पर्यावरण रेटिंग",
    "ask_rag_btn": "आरएजी एआई से पूछें",
    "nav_transit": "ऑटो-परिवहन बुकिंग",
    "nav_utility": "उपयोगिता बिल",
    "nav_citycard": "वर्चुअल सिटी कार्ड",
    "nav_complaints": "नगर निगम शिकायतें",
    "nav_social": "सामाजिक कार्य और क्रेडिट",
    "nav_chat": "ऑफ़लाइन आरएजी चैट",
    "nav_kb": "एस² ग्राउंड नियमावली",
    "nav_events": "शहर के कार्यक्रम",
    "nav_admin": "सरकारी एडमिन पोर्टल",
    "search_placeholder": "ऑफ़लाइन नियमावली खोजें: 'मेट्रो लिंक', 'ई-रुपया लिफाफा'...",
    "signin_title": "अपने सिटीजन अकाउंट का उपयोग करें",
    "signin_subtitle": "कोलकाता स्मार्ट मोबिलिटी और स्थानीय आरएजी में अधिकृत पहुंच",
    "create_account": "खाता बनाएं",
    "citizens_preset_title": "सत्यापित नागरिक प्रीसेट के रूप में त्वरित लॉगिन करें:",
    "auth_username": "नागरिक ईमेल या उपयोगकर्ता नाम",
    "auth_pwd": "पासवर्ड",
    "auth_signin": "साइन इन करें",
    "auth_logo_k": "को",
    "auth_logo_o": "ल",
    "auth_logo_l": "का",
    "auth_logo_k2": "ता",
    "auth_logo_a": " ",
    "auth_logo_t": "ग्रि",
    "auth_logo_a2": "ड",
    "auth_footer": "हिन्दी • कोलकाता स्मार्ट ग्रिड प्रोटोकॉल • सुरक्षित ऑफ़लाइन सैंडबॉक्स इंजन"
  }
};

const tabTranslations = {
  en: {
    cabs: {
      title: "Google Maps Traffic Preemption & Fleet Dispatch",
      desc: "Google-styled GPS map monitoring real-time coordinate changes across 6 landmark beacons. Touch any red location pin to send driverless EV cabs."
    },
    bills: {
      title: "CESC & SafeGas Utility Bills Core",
      desc: "Query or instantly pay outstanding regional electricity and pipeline cooking gas bills using sovereign CBDC e-Rupee token values."
    },
    citycard: {
      title: "S² Smart Grid Contactless NFC Citizen Pass",
      desc: "A premium metallic black contactless virtual multi-track citizen pass. Tap public check gates or refill credit balances on a secure local ledger."
    },
    innovations: {
      title: "Sovereign Shanghai-Inspired City Tech Core",
      desc: "Modelled after municipal standards. Purge high-pressure under-beach Xiong'an waste pipelines, edit maglev speeds, or unlock red envelopes."
    },
    chat: {
      title: "Kolkata Standalone RAG Grounding Engine",
      desc: "Local semantic match engine sourcing municipal parameters offline. Ask about maglev speeds, electric buses, tolls, and Emergency SOS lines."
    },
    kb: {
      title: "S² Giant Datashield & Ground Directories",
      desc: "Search or retrieve complete local rules, SLA timetables, carbon parameters, and crisis lines from browser offline storage."
    },
    complaints: {
      title: "S² Metropolitan Civil Incident Dashboard",
      desc: "Report civil hazards, infrastructural collapses, security gaps, or utility service interruptions. Vote, filter, track resolution, and manage local filings dynamically."
    },
    socialwork: {
      title: "S² Standalone Social Work & State Credits Registry with Leaderboard",
      desc: "Earn verified public Social Credits by publishing community welfare proofs. Upload video feed with custom categories, hashtags, monitor public records, and view the city-wide Leaderboard."
    },
    events: {
      title: "Kolkata Civic & Cultural Event Planner",
      desc: "Discover and book access passes to upcoming government welfare programmes, IT exhibitions, and special heritage tea/sweets festivals."
    },
    admin: {
      title: "Kolkata Cybernetics Council - Security Administration",
      desc: "Secured operations hub for authorized municipal staff. Edit citizen records, publish regional announcements, and dispatch crisis relief."
    }
  },
  bn: {
    cabs: {
      title: "গুগল ম্যাপস ট্রাফিক প্রি-এমপশন এবং ফ্লিট ডিসপ্যাচ",
      desc: "৬টি ল্যান্ডমার্ক জোনে রিয়েল-টাইম জিপিএস ম্যাপ ট্র্যাকিং। যেকোনো পিন স্পর্শ করে ড্রাইভারলেস ইভি ক্যাব পাঠান।"
    },
    bills: {
      title: "সিইএসসি (CESC) এবং সেফগ্যাস ইউটিলিটি বিলিং",
      desc: "সার্বভৌম সিবিডিসি ই-রুপি টোকেন ব্যবহারের মাধ্যমে আপনার বকেয়া বিদ্যুৎ ও রান্নার গ্যাস বিল প্রদান করুন।"
    },
    citycard: {
      title: "এস² স্মার্ট গ্রিড কন্ট্যাক্টলেস এনএফসি সিটিজেন পাস",
      desc: "প্রিমিয়াম মেটালিক ভার্চুয়াল কন্ট্যাক্টলেস সিটিজেন পাস। পাবলিক গেট ট্যাপ করুন বা লোকাল লেজার রিফিল করুন।"
    },
    innovations: {
      title: "সার্বভৌম সাংহাই-অনুপ্রাণিত সিটি টেক কোর",
      desc: "পৌর মডেলিং সিস্টেম। নদীর নিচে উচ্চ-চাপের বর্জ্য পাইপলাইন পরিষ্কার করুন, ম্যাগলেভ ট্রেনের গতি বাড়ান, বা রেড এনভেলাপ দাবি করুন।"
    },
    chat: {
      title: "কলকাতা অফলাইন আরএজি (RAG) অনুসন্ধান ইঞ্জিন",
      desc: "স্থানীয় মিউনিসিপ্যাল তথ্যের অফলাইন অনুসন্ধান ইঞ্জিন। ম্যাগলেভ গতি, বৈদ্যুতিক বাস, টোল, এবং জরুরি এসওএস লাইন সম্পর্কে জিজ্ঞাসা করুন।"
    },
    kb: {
      title: "এস² ডেটাশিল্ড এবং গ্রাউন্ড নির্দেশিকা",
      desc: "ব্রাউজারের অফলাইন স্টোরেজ থেকে সম্পূর্ণ নিয়মকানুন, এসএলএ সময়সূচী, কার্বন প্যারামিটার এবং হেল্পলাইন অনুসন্ধান করুন।"
    },
    complaints: {
      title: "এস² মহানগরী নাগরিক অভিযোগ ড্যাশবোর্ড",
      desc: "নাগরিক সমস্যা, অবকাঠামো ক্ষতি বা পরিষেবা ব্যাহত হওয়ার রিপোর্ট করুন। সাধারণ নাগরিকেদের ভোটিং এবং সমাধান ট্র্যাকিং।"
    },
    socialwork: {
      title: "এস² সামাজিক কাজ এবং লিডারবোর্ড সিস্টেম",
      desc: "সমাজকল্যাণ মূলক কাজের প্রমাণ আপলোড করে সামাজিক ক্রেডিট অর্জন করুন। ভিডিও ফিড, হ্যাশট্যাগ ও শহরের পাবলিক লিডারবোর্ড মনিটর করুন।"
    },
    events: {
      title: "কলকাতা নাগরিক ও সাংস্কৃতিক ইভেন্ট প্ল্যানার",
      desc: "আসন্ন সরকারি মেলা, তথ্যপ্রযুক্তি প্রদর্শনী এবং ঐতিহ্যবাহী মিষ্টি-উৎসবের অ্যাক্সেস পাস বুক করুন।"
    },
    admin: {
      title: "কলকাতা সাইবারনেটিক্স কাউন্সিল - নিরাপত্তা প্রশাসন",
      desc: "অনুমোদিত প্রশাসনিক কর্মীদের সুরক্ষিত ড্যাশবোর্ড। নাগরিক রেকর্ড সংশোধন করুন এবং জরুরি সেবা প্রেরণ করুন।"
    }
  },
  hi: {
    cabs: {
      title: "गूगल मैप्स ट्रैफिक प्री-एम्प्शन और फ्लीट डिस्पैच",
      desc: "6 ऐतिहासिक स्थलों पर वास्तविक समय के जीपीएस मानचित्र की निगरानी। ड्राइवर रहित ईवी कैब भेजने के लिए किसी भी लाल पिन को स्पर्श करें।"
    },
    bills: {
      title: "सीईएससी (CESC) और सेफगैस यूटिलिटी बिल कोर",
      desc: "संप्रभु सीबीडीसी ई-रुपया मूल्य का उपयोग करके अपनी बिजली और पाइप गैस बिल का तत्काल भुगतान करें।"
    },
    citycard: {
      title: "एस² स्मार्ट ग्रिड कॉन्टैक्टलेस एनएफसी सिटीजन पास",
      desc: "एक सुरक्षित संपर्क रहित वर्चुअल मल्टी-ट्रैक सिटीजन पास। सार्वजनिक गेटों पर टैप करें या सुरक्षित स्थानीय लेज़र बैलेंस भरें।"
    },
    innovations: {
      title: "शंघाई-प्रेरित सॉवरेन सिटी टेक कोर",
      desc: "नगर निगम मानकों के तहत निर्मित। उच्च दबाव कचरा पाइपलाइनों को साफ़ करें, मैगलेव की गति बदलें, या लाल लिफाफे खोलें।"
    },
    chat: {
      title: "कोलकाता स्टैंडअलोन आरएजी (RAG) ग्राउंडिंग इंजन",
      desc: "ऑफ़लाइन रूप से नगर निगम मापदंडों का अनुवाद करने वाला स्थानीय सिमेंटिक इंजन। मैगलेव गति, ई-बसों, टोल और आपातकालीन लाइनों के बारे में पूछें।"
    },
    kb: {
      title: "एस² डेटाशील्ड और ग्राउंड डायरेक्टरीज़",
      desc: "ब्राउज़र ऑफ़लाइन स्टोरेज से पूर्ण स्थानीय नियम, कार्बन पैरामीटर और संकटकालीन हेल्पलाइन त्वरित खोजें।"
    },
    complaints: {
      title: "एस² महानगरीय नागरिक शिकायत डैशबोर्ड",
      desc: "नागरिक खतरों, संविदात्मक समस्याओं या उपयोगिता सेवाओं में रुकावटों की रिपोर्ट करें। नागरिक वोटिंग और डिजिटल शिकायतों का निवारण करें।"
    },
    socialwork: {
      title: "एस² स्टैंडअलोन सामाजिक कार्य और लीडरबोर्ड रजिस्ट्री",
      desc: "सत्यापित सार्वजनिक सामाजिक कार्य प्रमाण प्रकाशित करके सामाजिक क्रेडिट अर्जित करें। वीडियो फ़ीड अपलोड करें, हैशटैग और शहर-व्यापी लीडरबोर्ड देखें।"
    },
    events: {
      title: "कोलकाता नागरिक एवं सांस्कृतिक कार्यक्रम योजनाकार",
      desc: "आगामी सरकारी कल्याण कार्यक्रमों, आईटी प्रदर्शनियों और विशेष चाय/मिठाई उत्सवों के प्रवेश पास टिकट खोजें और बुक करें।"
    },
    admin: {
      title: "कोलकाता साइबरनेटिक्स काउंसिल - सुरक्षा प्रशासन",
      desc: "अधिकृत नगर निगम कर्मचारियों के लिए सुरक्षित संचालन केंद्र। नागरिक रिकॉर्ड संपादित करें और संकट राहत दल भेजें।"
    }
  }
};

// Local Operational Grounding Database of Kolkata Smart Guidelines (RAG Dataset)
const KNOWLEDGE_BASE_DOCS = [
  {
    id: "kb-01",
    category: "Metro & Rail Lines",
    title: "Kolkata Under-River Metro Link & Maglev Express Trails",
    keywords: ["metro", "maglev", "rail", "express", "corridor", "station", "train", "speed", "howrah", "salt lake", "river"],
    content: "Kolkata's primary transit backbone is the historic under-river metro and the driverless high-speed maglev corridor:\n" +
             "• Howrah-Salt Lake Express (Red Line): Deep-tunnel high-frequency metro operating underneath the Hooghly river back and forth from Howrah Junction straight to Salt Lake Sector V Cyber-plaza. Maximum levitation velocity reaches 380 km/h.\n" +
             "• Rajarhat Corridor (Blue Line): Connects Esplanade to Rajarhat New Town township directly under a strict 5-minute transit window.\n" +
             "• Heritage Green Tram Loop: Restored Inductive eco-trams cruising via the Maidan loops generating and feeding clean regenerative current directly back to the grid."
  },
  {
    id: "kb-02",
    category: "Bus Network",
    title: "Kolkata Electrified WBTC Bus Transit & Eco Shuttles",
    keywords: ["bus", "buses", "green shuttle", "electric bus", "route 102", "route 205", "recharge", "esplanade", "salt lake"],
    content: "Kolkata's modern municipal bus system consists of 1,200 pure electric buses (EVs) operated by West Bengal Transport Corporation (WBTC):\n" +
             "• Route 102 (Sector V Express): Loops commuters from Esplanade through Sealdah straight to Salt Lake Sector V, running once every 5 minutes.\n" +
             "• Route 205 (New Town Feeder): Connects Rajarhat to Rabindra Sadan, integrating with green prioritizer light sensors to preempt major city congestion zones seamlessly."
  },
  {
    id: "kb-03",
    category: "Fares & Passes",
    title: "Kolkata Sovereign e-Rupee Transit Tariffs",
    keywords: ["fare", "ticket", "card", "pass", "recharge", "balance", "erupee", "upi", "recharges"],
    content: "Kolkata Cyber-Grid transit accepts standard Sovereign e-Rupee (Central Bank Digital Currency / UPI-CBDC):\n" +
             "• Smart Card base purchase price: ₹100. Accounts bind natively with e-Rupee digital wallets for dual-offline payments (touch works flawlessly inside under-river metro tunnels).\n" +
             "• Monthly Unlimited Pass: ₹1,200 grants unlimited access to maglev lines and EV buses citywide.\n" +
             "• Flat fares: Flat rates start at ₹10 e-Rupee base + ₹1.5 per kilometer of travel."
  },
  {
    id: "kb-04",
    category: "Pneumatic Waste",
    title: "Kolkata Sub-Surface Pneumatic Waste Collection System",
    keywords: ["pneumatic", "trash", "waste", "garbage", "suction", "pipe", "vacuum", "slurry", "salt lake", "parks"],
    content: "Kolkata uses advanced sub-surface conduits to carry garbage in Salt Lake Sector V and Rajarhat Tech Hubs:\n" +
             "• Operation Flow: Strategic smart inlets separate wet organic food waste from high-grade recycled plastics using micro-tag scanners.\n" +
             "• Conduits: Heavy pneumatic vacuum pumps accelerate solid waste through 1.2-meter pipelines at 70 km/h directly to deep processing plants, preventing street clutter.\n" +
             "• Purge Protocols: System triggers automated high-pressure sweeps to instantly clear bottlenecks, sustaining 99.8% air flow consistency."
  },
  {
    id: "kb-05",
    category: "Environment",
    title: "Kolkata Cyber-Grid Telemetry & Air Quality Index (AQI)",
    keywords: ["aqi", "air quality", "pollution", "telemetry", "co2", "environment", "carbon", "breeze"],
    content: "Kolkata's air quality is monitored carefully by the civic grid environment sensory enclaves:\n" +
             "• Target: Keeps the weekly ambient AQI under 80. Current live Maidan index is 58 (Excellent/Healthy) due to zero-emission zones and heavy vehicle bans inside Esplanade core.\n" +
             "• Carbon credits: Citizens planting trees or traveling through eco-buses earn green points on their virtual city cards."
  },
  {
    id: "kb-06",
    category: "Sovereign Rewards",
    title: "Kolkata Green Carbon Red Envelopes (Hongbao)",
    keywords: ["hongbao", "envelope", "red envelope", "reward", "green score", "carbon score", "claim", "points"],
    content: "To foster green micro-habits, citizens keeping high Green Score ratings are rewarded with digitized Red Envelopes:\n" +
             "• Requirement: Sustaining an active Green Score above 80 points (earned by booking EV cabs and composting organic waste).\n" +
             "• Rewards: Claims trigger instant e-Rupee red envelope (Hongbao) cash deposits ranging from ₹150 to ₹1,000 into the citizen's virtual card."
  },
  {
    id: "kb-07",
    category: "Emergency",
    title: "Kolkata Unified Crisis Dispatch & Hospital Lines",
    keywords: ["emergency", "sos", "helpline", "hospital", "police", "fire", "911", "911-crit", "ambala"],
    content: "Kolkata operates a highly responsive crisis response dispatch connected to emergency services:\n" +
             "• Universal Crisis Line: 911-CRIT (or press the red SOS Dispatch button in the card menu).\n" +
             "• Hospitals: SSKM Hospital (Sector 2, 800 critical beds), Apollo Gleneagles (Sector 8, 400 beds), and Fortis Medical Enclave (Sector 12).\n" +
             "• Police Control Force: Lalbazar Control Headquarters, Salt Lake Security Enclave, and Howrah Port Guard."
  },
  {
    id: "kb-08",
    category: "City Overview",
    title: "Kolkata Cyber-Grid Overview & Cultural Hub",
    keywords: ["overview", "city", "kolkata", "calcutta", "port", "population", "mayor", "industrial"],
    content: "Welcome to Kolkata Cyber-Grid! A futuristic, culturally rich metropolis of 15 million citizens merging historic grandeur with high-tech solutions.\n" +
             "• Smart System Core: Multi-tiered under-river transit lines, automated traffic preemption, pneumatic garbage streams, and RAG grounding systems.\n" +
             "• Net-Zero Initiatives: Current clean-grid threshold is 65% based on automated biomass conversion and grid optimization."
  }
];

// Interactive Kolkata Landmarks list
const MAP_NODES = [
  { id: "node-1", name: "Howrah Junction Terminal", x: 120, y: 100, type: "eVTOL Pad" },
  { id: "node-2", name: "Salt Lake Sector V IT Hub", x: 340, y: 80, type: "Inductive Bay" },
  { id: "node-3", name: "Rajarhat New Town Enclave", x: 480, y: 160, type: "Central Node" },
  { id: "node-4", name: "Park Street Esplanade Core", x: 260, y: 200, type: "Magnetic Terminal" },
  { id: "node-5", name: "Babughat Hooghly Riverfront", x: 190, y: 320, type: "Residential Node" },
  { id: "node-6", name: "Gariahat South Kolkata Sentinel", x: 540, y: 340, type: "Maglev Station" }
];

// Preloaded mock citizens database with credentials and bill particulars
const MOCK_CITIZENS = {
  suresh: {
    username: "suresh",
    name: "Suresh Kumar",
    password: "password123",
    email: "suresh.kumar@kolkata.gov.in",
    walletBalance: 3200,
    greenScore: 85,
    cardNumber: "5432 8812 3204 1184",
    elecId: "WB-ELEC-21938",
    gasId: "WB-GAS-99104",
    bills: {
      electricity: { due: 850.50, usage: "340 kWh", period: "May 15 - June 15", status: "Unpaid" },
      gas: { due: 420.00, usage: "14.5 m³", period: "May 15 - June 15", status: "Unpaid" }
    }
  },
  haritha: {
    username: "haritha",
    name: "Haritha Sen",
    password: "password123",
    email: "haritha.sen@kolkata.gov.in",
    walletBalance: 4750,
    greenScore: 92,
    cardNumber: "5432 1102 4829 0010",
    elecId: "WB-ELEC-88349",
    gasId: "WB-GAS-22019",
    bills: {
      electricity: { due: 1240.00, usage: "496 kWh", period: "May 15 - June 15", status: "Unpaid" },
      gas: { due: 310.00, usage: "11 m³", period: "May 15 - June 15", status: "Unpaid" }
    }
  },
  anish: {
    username: "anish",
    name: "Anish Roy",
    password: "password123",
    email: "anish.roy@kolkata.gov.in",
    walletBalance: 800,
    greenScore: 68,
    cardNumber: "5432 4429 1108 7291",
    elecId: "WB-ELEC-72910",
    gasId: "WB-GAS-54910",
    bills: {
      electricity: { due: 2450.00, usage: "980 kWh", period: "May 15 - June 15", status: "Unpaid" },
      gas: { due: 890.00, usage: "32 m³", period: "May 15 - June 15", status: "Unpaid" }
    }
  }
};

const BUS_ROUTES = [
  { id: "102", name: "Esplanade Express 102", interval: "Every 5 mins", from: "Esplanade", to: "Salt Lake Sector V", flatFare: 25 },
  { id: "400", name: "Babughat River-Loop 400", interval: "Every 8 mins", from: "Babughat Riverfront", to: "Gariahat Sentinel", flatFare: 25 },
  { id: "99A", name: "New Town-Salt Lake IT Expressway", interval: "Every 4 mins", from: "Rajarhat New Town", to: "Park Street Esplanade Core", flatFare: 25 }
];

const TRAIN_LINES = [
  { id: "corridor-red", name: "Howrah Under-River Metro Red Line", interval: "Every 2 mins", length: "24.5 km", duration: "12 mins" },
  { id: "corridor-green", name: "Green Salt Lake Maglev", interval: "Every 5 mins", length: "42.0 km", duration: "18 mins" },
  { id: "corridor-cyber", name: "Rajarhat Hyperloop Conduit", interval: "Every 3 mins", length: "15.2 km", duration: "8 mins" }
];

// State Management
let state = {
  currentUser: null, // Logged in user profile
  currentLanguage: localStorage.getItem("kolkata_lang") || "en", // Localization select
  walletBalance: 1500, // Loaded based on account
  activeTab: "cabs",
  greenScore: 84, // Ecology score
  sosActive: false,
  sosMessage: "",
  
  // Transit internal Sub-tab selection state
  activeTransitSubTab: "cabs",
  
  // Smart EV Buses state
  selectedBusRouteId: "102",
  selectedBusSeat: null,
  occupiedSeatsList: [4, 7, 11, 14, 18, 19, 22, 23], // Dummy occupied seats indices
  
  // High-Speed Rail state
  selectedTrainLineId: "corridor-red",
  selectedTrainTier: "Standard",
  selectedTrainPrice: 40,
  
  // Utilities billing state
  billQueryProvider: "electricity",
  queriedConsumerId: "",
  lastQueriedBill: null,
  
  // City Card state
  activeNfcPassChecked: false,
  nfcCardNumber: "5432 8812 3204 1184",
  nfcCardholderName: "SURESH KUMAR",
  nfcLogs: [
    { id: "L-1", terminal: "Babughat Ferry Checkpoint", fee: "₹15", status: "LINK OK", time: "10:32 AM" }
  ],

  // Vehicular Fleet positions inside map
  cabs: [
    { id: "WB-02-BYD-Q", name: "BYD Qin Autonomous Taxi", x: 190, y: 320, status: "Idle", battery: 88, speed: 65, type: "EV Auto-Cab" },
    { id: "WB-02-BYD-H", name: "BYD Han L4 Cyber Cruise", x: 260, y: 200, status: "Idle", battery: 94, speed: 80, type: "Autonomous EV" },
    { id: "WB-02-EH-216", name: "EHang 216-S Air Taxi", x: 120, y: 100, status: "Idle", battery: 76, speed: 130, type: "eVTOL Flight" },
    { id: "WB-02-PONY-6", name: "Pony.ai Gen-6 Robo-Cab", x: 480, y: 160, status: "Idle", battery: 62, speed: 60, type: "Full Auto L4" }
  ],
  selectedCabId: "WB-02-BYD-Q",
  dispatchActive: false,
  dispatchProgress: 0,
  dispatchTargetName: "",
  dispatchEta: 0,
  
  congestionOptimized: false, // preemption switch
  hongbaoStatus: "idle", // idle / claimed / low_score
  hongbaoAmount: 0,
  
  pneumaticPurgeActive: false,
  pneumaticPressure: 8.4,
  pneumaticThroughput: 5420,
  maglevCurrentSpeed: 350,
  maglevRegeneration: 24,
  activeUavFlights: 16,
  
  chatLogs: [
    { sender: "system", text: "Initializing Local Kolkata RAG intelligence. System securely active completely offline.", timestamp: "SYS" }
  ],

  // Municipal Complaints Registry
  complaintsFilterCategory: "All",
  complaintsSearchQuery: "",
  complaintsUploadedAttachment: null,
  complaints: [],

  // Social Work & Social Credit Registry
  socialCredits: 750,
  socialCategoryFilter: "All",
  socialSubTab: "feed",
  socialSearchQuery: "",
  socialUploadedVideo: null,
  socialPosts: [],

  // New features: City Events & Admins
  eventFilterCategory: "All",
  eventSearchQuery: "",
  registeredEvents: [],
  cityEvents: [],
  adminSession: null
};

const defaultCityEvents = [
  {
    id: "evt-1",
    title: "Kolkata Green Maidan Clean-up Drive",
    category: "Government",
    fee: 0,
    timings: "Saturday, 06:00 AM - 09:00 AM",
    location: "Brigade Parade Ground, Maidan, Kolkata",
    description: "Help clean up plastic waste and restore the green canopy with environmental activists. Earn +50 Social Credits completely free!"
  },
  {
    id: "evt-2",
    title: "Salt Lake Sector V IoT & Smart Robotics Expo",
    category: "Special",
    fee: 100,
    timings: "Monday, 10:00 AM - 05:00 PM",
    location: "SDF Building Sector-V Trade Center, Salt Lake",
    description: "Experience the newest breakthroughs in edge technology, local cybernetics, and AI-driven drone security grids."
  },
  {
    id: "evt-3",
    title: "Darjeeling Heritage Tea & Rosella Festival",
    category: "Special",
    fee: 100,
    timings: "Thursday, 11:30 AM - 08:00 PM",
    location: "Victoria Memorial Gardens, Kolkata",
    description: "Sample award-winning organic Darjeeling tea selections and explore regional heritage brewing styles."
  },
  {
    id: "evt-4",
    title: "West Bengal Forestation & Tree Canopy Drive",
    category: "Government",
    fee: 0,
    timings: "Sunday, 07:00 AM - 11:00 AM",
    location: "Rabindra Sarobar Eco-Paths, Kolkata",
    description: "Join fellow citizens in planting 500 indigenous forest saplings to build dense micro-green sanctuaries."
  },
  {
    id: "evt-5",
    title: "Park Street Live Sufi & Folk Fusion Concert",
    category: "Special",
    fee: 100,
    timings: "Friday, 06:00 PM - 11:00 PM",
    location: "Allen Park Open Arena, Park Street, Kolkata",
    description: "Live open-air musical concerts featuring local acoustic folk instruments, fusion drums, and laser light displays."
  },
  {
    id: "evt-6",
    title: "Maidan Sunrise Yoga & Pranic Healing Shala",
    category: "Government",
    fee: 0,
    timings: "Daily, 05:30 AM - 07:30 AM",
    location: "Red Road Green Lawns, Maidan, Kolkata",
    description: "Rejuvenating sunrise yoga sessions guided by certified masters. Open for retirees, families, and morning joggers."
  },
  {
    id: "evt-7",
    title: "Hilsa & Bengali Cultural Culinary Carnival",
    category: "Special",
    fee: 100,
    timings: "Wednesday, 12:00 PM - 10:00 PM",
    location: "Gariahat Exhibition Ground, Kolkata",
    description: "Taste Kolkata's premium river Hilsha cuisines, traditional sweet Sondesh, and biological organic drinks."
  },
  {
    id: "evt-8",
    title: "Kolkata Transit Hackathon: Ride-Sharing Algorithms",
    category: "Government",
    fee: 0,
    timings: "Saturday, 09:00 AM - Next Day 05:00 PM",
    location: "Biswa Bangla Convention Centre, New Town",
    description: "Develop smart routing algorithms for low-latency public metro coordination. Grand prize of ₹1,00,000 for top concepts!"
  },
  {
    id: "evt-9",
    title: "Howrah Bridge Heritage Photography & Walk",
    category: "Special",
    fee: 100,
    timings: "Tuesday, 02:00 PM - 05:00 PM",
    location: "Prinsep Ghat Promenade, Kolkata",
    description: "Insightful architectural walk around classic colonial heritage monuments and historic river ports."
  },
  {
    id: "evt-10",
    title: "Hooghly Riverfront Net-Zero Cycling Rally",
    category: "Government",
    fee: 0,
    timings: "Sunday, 05:00 AM - 08:30 AM",
    location: "Millennium Park to Howrah Bridge, Kolkata",
    description: "A beautiful scenic ride promoting low-carbon commuting. Certified protective safety gear, rental cycles, and food coupons provided!"
  },
  {
    id: "evt-11",
    title: "College Street International Boi Mela (Book Fair)",
    category: "Special",
    fee: 100,
    timings: "Daily, 10:00 AM - 09:00 PM",
    location: "Swabhumi Heritage Plaza, Kolkata",
    description: "Explore books from West Bengal and global writers, host panels with local authors, and enjoy dedicated children's reading Zones."
  }
];

const govtAdmins = [
  { email: "commissioner@kolkata.gov.in", key: "KOL-COMM-0033-A", name: "Municipal Commissioner" },
  { email: "police.hq@kolkata.gov.in", key: "KOL-LALB-911-S", name: "Lalbazar Cyber Police Chief" },
  { email: "transit.mgr@kolkata.gov.in", key: "KOL-METR-TRANS", name: "Kolkata Transit Controller" },
  { email: "social.work@kolkata.gov.in", key: "KOL-SEVA-CRED-K", name: "Social Welfare Director" },
  { email: "finance.audit@kolkata.gov.in", key: "KOL-FIN-RUPEE-1", name: "e-Rupee Ledger Auditor" },
  { email: "gaspipeline@kolkata.gov.in", key: "KOL-SAFE-GAS-05", name: "Pipeline Safety Lead" },
  { email: "mayor.office@kolkata.gov.in", key: "KOL-MAYOR-033-Y", name: "Mayor Executive Secretariat" }
];

// =====================================================================
// AUTOPRINT USER AND INTERACTION LOGS
// =====================================================================

// Check and verify login status on start
function checkCitizenSessionOnLoad() {
  const cachedUser = localStorage.getItem("vizag_active_citizen");
  const authOverlay = document.getElementById("auth-overlay-block");
  const mainPage = document.getElementById("google-main-page");

  // Load city events
  const cachedEvents = localStorage.getItem("vizag_city_events");
  if (cachedEvents) {
    state.cityEvents = JSON.parse(cachedEvents);
  } else {
    state.cityEvents = [...defaultCityEvents];
    localStorage.setItem("vizag_city_events", JSON.stringify(state.cityEvents));
  }

  // Load booked events list
  const cachedBooked = localStorage.getItem("vizag_registered_events");
  if (cachedBooked) {
    state.registeredEvents = JSON.parse(cachedBooked);
  } else {
    state.registeredEvents = [];
    localStorage.setItem("vizag_registered_events", JSON.stringify(state.registeredEvents));
  }

  // Load active admin session
  const cachedAdmin = localStorage.getItem("vizag_admin_session");
  if (cachedAdmin) {
    state.adminSession = JSON.parse(cachedAdmin);
  }

  if (cachedUser) {
    state.currentUser = JSON.parse(cachedUser);
    state.walletBalance = state.currentUser.walletBalance ?? 1500;
    state.greenScore = state.currentUser.greenScore ?? 84;
    
    // Hide auth screen and show main UI
    if (authOverlay) authOverlay.classList.add("hidden");
    if (mainPage) mainPage.classList.remove("invisible");
    
    syncUserDisplays();
    showNotificationToast(`Welcome back, ${state.currentUser.name}! Dual-offline secure node active.`);
  } else {
    // Show auth screen explicitly
    if (authOverlay) authOverlay.classList.remove("hidden");
    if (mainPage) mainPage.classList.add("invisible");
  }
  updateUI();
}

// Global toggle between auth forms
window.toggleAuthForm = function(type) {
  const signinForm = document.getElementById("form-auth-signin");
  const signupForm = document.getElementById("form-auth-signup");
  const btnSignin = document.getElementById("btn-show-signin");
  const btnSignup = document.getElementById("btn-show-signup");

  if (type === "signup") {
    if (signinForm) signinForm.classList.add("hidden");
    if (signupForm) signupForm.classList.remove("hidden");
    if (btnSignin) {
      btnSignin.className = "font-medium text-gray-500 hover:text-gray-800 pb-2 px-2 transition-all cursor-pointer";
    }
    if (btnSignup) {
      btnSignup.className = "font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 px-2 transition-all cursor-pointer";
    }
  } else {
    if (signinForm) signinForm.classList.remove("hidden");
    if (signupForm) signupForm.classList.add("hidden");
    if (btnSignin) {
      btnSignin.className = "font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 px-2 transition-all cursor-pointer";
    }
    if (btnSignup) {
      btnSignup.className = "font-medium text-gray-500 hover:text-gray-800 pb-2 px-2 transition-all cursor-pointer";
    }
  }
};

// Handle account registration
window.handleUserSignUp = function(event) {
  event.preventDefault();
  const nameVal = document.getElementById("signup-name").value.trim();
  const emailVal = document.getElementById("signup-email").value.trim().toLowerCase();
  const passwordVal = document.getElementById("signup-password").value;
  
  // Grant amount selection
  const selectedGrant = document.querySelector('input[name="signup-grant"]:checked')?.value || "1500";
  const finalGrant = parseFloat(selectedGrant);

  if (!nameVal || !emailVal || !passwordVal) {
    alert("Please fill in all register credentials.");
    return;
  }

  // Save the citizen metadata
  const newUser = {
    name: nameVal,
    email: emailVal,
    walletBalance: finalGrant,
    greenScore: 84 // Starter sustainability rating
  };

  localStorage.setItem("vizag_active_citizen", JSON.stringify(newUser));
  state.currentUser = newUser;
  state.walletBalance = finalGrant;
  state.greenScore = 84;

  // Animate interface transition
  const authOverlay = document.getElementById("auth-overlay-block");
  const mainPage = document.getElementById("google-main-page");
  if (authOverlay) authOverlay.classList.add("hidden");
  if (mainPage) mainPage.classList.remove("invisible");

  syncUserDisplays();
  showNotificationToast(`Citizen account registered. e-Rupee grant of ₹${finalGrant} issued!`);
  
  // Clear inputs
  document.getElementById("form-auth-signup").reset();
  
  updateUI();
};

// Handle account login
window.handleUserSignIn = function(event) {
  event.preventDefault();
  const emailVal = document.getElementById("signin-email").value.trim().toLowerCase();
  const passwordVal = document.getElementById("signin-password").value;

  if (!emailVal || !passwordVal) {
    alert("Please fill in all login parameters.");
    return;
  }

  // Create or pull existing user
  const existingUser = {
    name: emailVal.split("@")[0].toUpperCase() || "Citizen Master",
    email: emailVal.includes("@") ? emailVal : `${emailVal}@0891.gov.in`,
    walletBalance: 1500,
    greenScore: 84
  };

  localStorage.setItem("vizag_active_citizen", JSON.stringify(existingUser));
  state.currentUser = existingUser;
  state.walletBalance = existingUser.walletBalance;
  state.greenScore = existingUser.greenScore;

  const authOverlay = document.getElementById("auth-overlay-block");
  const mainPage = document.getElementById("google-main-page");
  if (authOverlay) authOverlay.classList.add("hidden");
  if (mainPage) mainPage.classList.remove("invisible");

  syncUserDisplays();
  showNotificationToast(`Successfully signed in. Dual-offline workspace ready.`);
  
  document.getElementById("form-auth-signin").reset();
  
  updateUI();
};

// Override Login as Guest Flow
window.overrideUserLoginGuest = function() {
  const guestUser = {
    name: "Guest Citizen",
    email: "guest.offline@0891.gov.in",
    walletBalance: 1450,
    greenScore: 84
  };

  localStorage.setItem("vizag_active_citizen", JSON.stringify(guestUser));
  state.currentUser = guestUser;
  state.walletBalance = guestUser.walletBalance;
  state.greenScore = guestUser.greenScore;

  const authOverlay = document.getElementById("auth-overlay-block");
  const mainPage = document.getElementById("google-main-page");
  if (authOverlay) authOverlay.classList.add("hidden");
  if (mainPage) mainPage.classList.remove("invisible");

  syncUserDisplays();
  showNotificationToast("Continuing as Guest. Offline parameters temporarily stored.");
  
  updateUI();
};

// Login as one of our premium preset citizen cards
window.loginAsDemoPreset = function(presetKey) {
  const citizen = MOCK_CITIZENS[presetKey];
  if (!citizen) return;

  const demoUser = {
    name: citizen.name,
    email: citizen.email,
    walletBalance: citizen.walletBalance,
    greenScore: citizen.greenScore,
    cardNumber: citizen.cardNumber,
    elecId: citizen.elecId,
    gasId: citizen.gasId,
    bills: JSON.parse(JSON.stringify(citizen.bills)) // deep copy
  };

  localStorage.setItem("vizag_active_citizen", JSON.stringify(demoUser));
  state.currentUser = demoUser;
  state.walletBalance = citizen.walletBalance;
  state.greenScore = citizen.greenScore;
  state.nfcCardNumber = citizen.cardNumber;
  state.nfcCardholderName = citizen.name.toUpperCase();
  
  // Update bill selector default
  const consInput = document.getElementById("bill-consumer-id-input");
  if (consInput) {
    consInput.value = state.billQueryProvider === "electricity" ? citizen.elecId : citizen.gasId;
  }

  const authOverlay = document.getElementById("auth-overlay-block");
  const mainPage = document.getElementById("google-main-page");
  if (authOverlay) authOverlay.classList.add("hidden");
  if (mainPage) mainPage.classList.remove("invisible");

  syncUserDisplays();
  showNotificationToast(`Logged in successfully as verified citizen: ${citizen.name}!`);
  
  updateUI();
};

// Sign out Citizen Account
window.handleUserSignOut = function() {
  localStorage.removeItem("vizag_active_citizen");
  state.currentUser = null;
  state.walletBalance = 0;
  
  // Close menu dropdown
  const profileMenu = document.getElementById("user-profile-menu");
  if (profileMenu) profileMenu.classList.add("hidden");

  // Re-enable overlay
  const authOverlay = document.getElementById("auth-overlay-block");
  const mainPage = document.getElementById("google-main-page");
  if (authOverlay) authOverlay.classList.remove("hidden");
  if (mainPage) mainPage.classList.add("invisible");
  
  showNotificationToast("Successfully logged out from Google accounts portal.");
};

// Sync header names and profile menu details
function syncUserDisplays() {
  if (!state.currentUser) return;
  
  const headerAvatar = document.getElementById("user-display-avatar");
  const headerName = document.getElementById("user-display-name");
  const headerEmail = document.getElementById("user-display-email");
  
  const dropdownName = document.getElementById("profile-dropdown-name");
  const dropdownEmail = document.getElementById("profile-dropdown-email");
  const dropdownBalance = document.getElementById("profile-dropdown-balance");
  const dropdownScore = document.getElementById("profile-dropdown-score");

  const avatarChar = state.currentUser.name.trim().charAt(0).toUpperCase() || "C";

  if (headerAvatar) {
    headerAvatar.textContent = avatarChar;
    // Set Google colors for avatar
    const colors = ["#1a73e8", "#34a853", "#fbbc05", "#ea4335"];
    const hash = state.currentUser.name.length % colors.length;
    headerAvatar.style.backgroundColor = colors[hash];
  }

  if (headerName) headerName.textContent = state.currentUser.name;
  if (headerEmail) headerEmail.textContent = state.currentUser.email;

  if (dropdownName) dropdownName.textContent = state.currentUser.name;
  if (dropdownEmail) dropdownEmail.textContent = state.currentUser.email;
  if (dropdownBalance) dropdownBalance.textContent = `₹${state.walletBalance.toLocaleString()}`;
  if (dropdownScore) dropdownScore.textContent = `${state.greenScore}/100`;
}

// Toggle user profile menu dropdown
window.toggleProfileDropdown = function() {
  const profileMenu = document.getElementById("user-profile-menu");
  if (profileMenu) {
    profileMenu.classList.toggle("hidden");
  }
};

// Open detailed user profile modal dashboard
window.openDetailedProfileModal = function() {
  const profileMenu = document.getElementById("user-profile-menu");
  if (profileMenu) {
    profileMenu.classList.add("hidden"); // close dropdown path
  }

  const modal = document.getElementById("detailed-profile-modal");
  if (!modal) return;

  const editName = document.getElementById("profile-edit-name");
  const editEmail = document.getElementById("profile-edit-email");
  const modalUsername = document.getElementById("profile-modal-username");
  const modalNumber = document.getElementById("profile-modal-card-number");
  const modalHolder = document.getElementById("profile-modal-card-holder");
  const scoreVal = document.getElementById("profile-modal-score-val");
  const scoreBar = document.getElementById("profile-modal-score-bar");
  const creditsVal = document.getElementById("profile-modal-credits-val");
  const walletVal = document.getElementById("profile-modal-wallet-balance");
  const avatarBadge = document.getElementById("profile-modal-avatar-badge");

  if (state.currentUser) {
    if (editName) editName.value = state.currentUser.name;
    if (editEmail) editEmail.value = state.currentUser.email;
    if (modalUsername) modalUsername.textContent = state.currentUser.username || "guest_citizen";
    if (modalNumber) modalNumber.textContent = state.currentUser.cardNumber || "5432 0000 1100 4848";
    if (modalHolder) modalHolder.textContent = state.currentUser.name || "Guest Citizen";
    if (scoreVal) scoreVal.textContent = state.greenScore;
    if (scoreBar) scoreBar.style.width = `${state.greenScore}%`;
    if (creditsVal) creditsVal.textContent = state.socialCredits || 0;
    if (walletVal) walletVal.textContent = `₹${state.walletBalance.toLocaleString()}`;

    if (avatarBadge) {
      const avatarChar = state.currentUser.name.trim().charAt(0).toUpperCase() || "C";
      avatarBadge.textContent = avatarChar;
      const colors = ["#1a73e8", "#34a853", "#fbbc05", "#ea4335"];
      const hash = state.currentUser.name.length % colors.length;
      avatarBadge.style.backgroundColor = colors[hash];
      avatarBadge.style.color = "#ffffff";
    }

    // Booked events list display from real interactive state.registeredEvents
    const listContainer = document.getElementById("profile-modal-events-list");
    if (listContainer) {
      if (state.registeredEvents && state.registeredEvents.length > 0) {
        listContainer.innerHTML = "";
        state.registeredEvents.forEach(evtId => {
          const matchingEvt = state.cityEvents.find(e => e.id === evtId);
          if (matchingEvt) {
            const item = document.createElement("div");
            item.className = "flex justify-between items-center bg-gray-50 border border-gray-200 p-2.5 rounded text-xs select-none";
            item.innerHTML = `
              <div class="text-left">
                <strong class="text-gray-800 font-sans block truncate max-w-[200px]">${matchingEvt.title}</strong>
                <span class="text-[9.5px] text-gray-500 font-mono">${matchingEvt.timings}</span>
              </div>
              <span class="text-[9px] font-mono bg-[#e8f0fe] text-[#1a73e8] px-2 py-0.5 rounded font-bold shrink-0">PASS SECURED</span>
            `;
            listContainer.appendChild(item);
          }
        });
      } else {
        listContainer.innerHTML = `
          <p class="text-xs text-gray-400 italic text-center py-2 bg-gray-50/50 border border-dashed border-gray-200 rounded">
            No active event passports booked yet.
          </p>
        `;
      }
    }
  }

  modal.classList.remove("hidden");
};

// Close detailed user profile modal dashboard
window.closeDetailedProfileModal = function() {
  const modal = document.getElementById("detailed-profile-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
};

// Save edited citizen credentials
window.saveCitizenIdentityChanges = function() {
  const editName = document.getElementById("profile-edit-name");
  const editEmail = document.getElementById("profile-edit-email");
  if (!editName || !editEmail) return;

  const newName = editName.value.trim();
  const newEmail = editEmail.value.trim();

  if (!newName || !newEmail) {
    alert("Please fill in both name and email fields.");
    return;
  }

  if (state.currentUser) {
    state.currentUser.name = newName;
    state.currentUser.email = newEmail;
    
    // Save state back to local databases
    localStorage.setItem("kolkata_active_citizen", JSON.stringify(state.currentUser));
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
    
    // Sync displays to ensure instant top bar updates
    syncUserDisplays();
    
    // Update self model inside modal
    const modalHolder = document.getElementById("profile-modal-card-holder");
    if (modalHolder) modalHolder.textContent = newName;
    
    const avatarBadge = document.getElementById("profile-modal-avatar-badge");
    if (avatarBadge) {
      avatarBadge.textContent = newName.charAt(0).toUpperCase() || "C";
    }

    showNotificationToast("Identity credentials successfully updated!");
  }
};

// Quick refill select preset amount helper
window.setProfileRefillPreset = function(amount) {
  const refillInput = document.getElementById("profile-refill-amount");
  if (refillInput) {
    refillInput.value = amount;
  }
};

// Execute wallet ledger balance credit
window.executeLedgerRefill = function() {
  const refillInput = document.getElementById("profile-refill-amount");
  if (!refillInput) return;

  const value = parseInt(refillInput.value.trim(), 10);
  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid positive e-Rupee amount to top-up.");
    return;
  }

  state.walletBalance += value;
  if (state.currentUser) {
    state.currentUser.walletBalance = state.walletBalance;
    localStorage.setItem("kolkata_active_citizen", JSON.stringify(state.currentUser));
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
  }

  refillInput.value = "";
  
  // Play authentic NFC beep sound
  if (typeof playNfcBeep === "function") {
    playNfcBeep();
  }

  // Refill top levels
  syncUserDisplays();

  // Refill current view within modal
  const walletVal = document.getElementById("profile-modal-wallet-balance");
  if (walletVal) {
    walletVal.textContent = `₹${state.walletBalance.toLocaleString()}`;
  }

  showNotificationToast(`Successfully credited ₹${value} to your e-Rupee Wallet ledger!`);
};

// Trigger notification toast
function showNotificationToast(msg) {
  const toast = document.getElementById("toast-notify");
  const toastTxt = document.getElementById("toast-text");
  if (toast && toastTxt) {
    toastTxt.textContent = msg;
    toast.classList.remove("hidden");
    
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 4500);
  }
}

// Sync State back to localStorage cache if active profile exists
function autoSaveCitizenState() {
  if (state.currentUser) {
    state.currentUser.walletBalance = state.walletBalance;
    state.currentUser.greenScore = state.greenScore;
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
    syncUserDisplays();
  }
}

// =====================================================================
// MAP DISPATCH & TAB OPERATIONS TRANSITION
// =====================================================================

// Synchronize all operational UI states
function updateUI() {
  // Sync core header statistics
  const ecoBalanceSpan = document.getElementById("eco-balance");
  if (ecoBalanceSpan) ecoBalanceSpan.textContent = `₹${state.walletBalance.toLocaleString()}`;
  
  const scoreSpan = document.getElementById("green-score-display");
  if (scoreSpan) scoreSpan.textContent = `${state.greenScore}/100`;

  // Sync navigation active class (Google active pill styling)
  ["cabs", "bills", "citycard", "chat", "kb", "complaints", "socialwork", "events", "admin"].forEach(tab => {
    const btn = document.getElementById(`tab-btn-${tab}`);
    const tabSection = document.getElementById(`section-${tab}`);
    if (btn) {
      if (state.activeTab === tab) {
        btn.className = "w-full flex items-center gap-4 px-4 py-3 rounded-full text-sm font-semibold transition-all bg-[#e8f0fe] text-[#1a73e8]";
      } else {
        btn.className = "w-full flex items-center gap-4 px-4 py-3 rounded-full text-sm font-medium transition-all text-[#5f6368] hover:bg-gray-100 hover:text-gray-900";
      }
    }
    if (tabSection) {
      tabSection.className = state.activeTab === tab ? "block space-y-6" : "hidden";
    }
  });

  // Active Title Descriptors
  const subTitle = document.getElementById("active-tab-title");
  const subDesc = document.getElementById("active-tab-desc");
  if (subTitle && subDesc) {
    const lang = state.currentLanguage || "en";
    const dict = tabTranslations[lang] && tabTranslations[lang][state.activeTab];
    if (dict) {
      subTitle.textContent = dict.title;
      subDesc.textContent = dict.desc;
    }
  }

  // Apply general static text translations across the document
  applyTranslations();

  renderCabCommandPanel();
  
  // Render sub-sections of new tabs
  if (state.activeTab === "cabs") {
    if (state.activeTransitSubTab === "buses") {
      renderBusRoutesUI();
      renderBusSeatsUI();
    } else if (state.activeTransitSubTab === "trains") {
      renderTrainLinesUI();
    }
  } else if (state.activeTab === "bills") {
    renderBillPresetsUI();
    renderBillDetailsUI();
  } else if (state.activeTab === "citycard") {
    renderNfcCardUI();
    renderNfcLogsUI();
  } else if (state.activeTab === "complaints") {
    renderComplaintsUI();
  } else if (state.activeTab === "socialwork") {
    renderSocialUI();
  } else if (state.activeTab === "events") {
    renderEventsUI();
  } else if (state.activeTab === "admin") {
    renderAdminUI();
  }

  // Draw real-time vehicles on map
  const cabsGroup = document.getElementById("svg-cabs");
  if (cabsGroup) {
    cabsGroup.innerHTML = "";
    state.cabs.forEach(cab => {
      const isSelected = cab.id === state.selectedCabId;
      
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.style.cursor = "pointer";
      g.onclick = (e) => {
        e.stopPropagation();
        if (state.dispatchActive) return;
        state.selectedCabId = cab.id;
        updateUI();
      };

      // Pulsing concentric sonar halo matching active coordinates positioning
      if (isSelected || cab.status === "EnRoute") {
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("cx", cab.x);
        ring.setAttribute("cy", cab.y - 12); // aligned with teardrop base
        ring.setAttribute("r", "16");
        ring.setAttribute("fill", "none");
        ring.setAttribute("stroke", isSelected ? "#1a73e8" : "#ea4335");
        ring.setAttribute("stroke-width", "1.5");
        ring.setAttribute("class", "maps-ripple");
        g.appendChild(ring);
      }

      // Small elegant GPS direction indicator dot
      const dotBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dotBg.setAttribute("cx", cab.x);
      dotBg.setAttribute("cy", cab.y - 12);
      dotBg.setAttribute("r", "5.5");
      dotBg.setAttribute("fill", cab.status === "EnRoute" ? "#ea4335" : "#1a73e8");
      dotBg.setAttribute("stroke", "#ffffff");
      dotBg.setAttribute("stroke-width", "1.5");
      g.appendChild(dotBg);
      
      cabsGroup.appendChild(g);
    });
  }

  // Preemption toggle indicator
  const preemptionBtn = document.getElementById("signal-preemption-btn");
  if (preemptionBtn) {
    if (state.congestionOptimized) {
      preemptionBtn.className = "bg-[#e8f0fe] hover:bg-blue-100 text-[#1a73e8] border border-blue-200 font-sans text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm transition-all";
      preemptionBtn.innerHTML = `<span class="h-2 w-2 bg-[#34a853] rounded-full animate-pulse"></span> PREEMPTION priority: ACTIVE`;
    } else {
      preemptionBtn.className = "bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-sans text-xs px-4 py-2 rounded-full flex items-center gap-2 transition-all shadow-sm";
      preemptionBtn.innerHTML = `<span class="h-2 w-2 bg-gray-400 rounded-full"></span> ENABLE INTERSECTION PREEMPTION`;
    }
  }

  // Update Dynamic Dispatch Progress Status
  const dispatchBox = document.getElementById("dispatch-status-box");
  if (dispatchBox) {
    if (state.dispatchActive) {
      dispatchBox.className = "bg-white border border-[#dadce0] p-4.5 rounded-lg space-y-3 block shadow-sm";
      const pgBar = document.getElementById("dispatch-progress-bar");
      if (pgBar) pgBar.style.width = `${state.dispatchProgress}%`;
      const pgText = document.getElementById("dispatch-progress-text");
      if (pgText) pgText.textContent = `${state.dispatchProgress}%`;
      const pgDetails = document.getElementById("dispatch-progress-details");
      if (pgDetails) {
        pgDetails.textContent = `Dispatching autonomous ${state.selectedCabId} to ${state.dispatchTargetName} (ETA: ~${state.dispatchEta} mins). Dual-offline routing calculated.`;
      }
    } else {
      dispatchBox.className = "hidden";
    }
  }

  // Update Pneumatic vacuum specifications
  const pneumaticBtn = document.getElementById("pneumatic-purge-btn");
  if (pneumaticBtn) {
    if (state.pneumaticPurgeActive) {
      pneumaticBtn.className = "bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded text-xs font-semibold tracking-wider animate-pulse cursor-not-allowed";
      pneumaticBtn.textContent = "SWEEP IN PROGRESS...";
    } else {
      pneumaticBtn.className = "bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs rounded px-4 py-2 hover:shadow transition-all cursor-pointer font-sans uppercase tracking-wider";
      pneumaticBtn.textContent = "TRIGGER SWEEP PURGE";
    }
  }
  const pneumaticP = document.getElementById("pneumatic-pressure");
  if (pneumaticP) pneumaticP.textContent = `${state.pneumaticPressure.toFixed(1)} Bars`;
  const pneumaticT = document.getElementById("pneumatic-throughput");
  if (pneumaticT) pneumaticT.textContent = `${state.pneumaticThroughput.toLocaleString()} kg/hr`;

  // Update Maglev speeds info
  const maglevSpeedVal = document.getElementById("maglev-speed-val");
  if (maglevSpeedVal) maglevSpeedVal.textContent = `${state.maglevCurrentSpeed} km/h`;
  const maglevInput = document.getElementById("maglev-speed-input");
  if (maglevInput) maglevInput.value = state.maglevCurrentSpeed;

  // Red Envelope Claim Section (Hongbao)
  const hongbaoPrompt = document.getElementById("hongbao-prompt-area");
  if (hongbaoPrompt) {
    if (state.hongbaoStatus === "claimed") {
      hongbaoPrompt.innerHTML = `
        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-center text-xs text-emerald-800 animate-fade-in google-shadow-sm">
          <strong class="text-emerald-700 block mb-1">🎁 e-Rupee Red Envelope Unlocked!</strong>
          An automatic credit of <strong class="text-emerald-700 font-mono">₹${state.hongbaoAmount} e-Rupee</strong> was loaded into your local balance ledger as eco-reward.
        </div>
      `;
    } else if (state.hongbaoStatus === "low_score") {
      hongbaoPrompt.innerHTML = `
        <div class="bg-red-50 border border-red-200 p-4 rounded-lg text-center text-xs text-red-800 animate-fade-in">
          <strong class="text-[#ea4335] block mb-1">⚠️ Reward Red-Envelope Blocked</strong>
          Your household sustainability Green score is <strong>${state.greenScore}</strong>. The criteria demands a score index of <strong>80+</strong> points. Take the electric bus, sort kitchen slurry, or balance solar to qualify!
        </div>
      `;
    } else {
      hongbaoPrompt.innerHTML = `
        <div class="bg-gray-50 rounded-lg border border-gray-200 p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-inner">
          <div class="space-y-1 text-left select-none">
            <span class="text-[9px] font-mono text-red-600 block uppercase font-bold tracking-wider">Ecology Incentive Scheme</span>
            <p class="text-xs text-gray-700">
               Certified micro-habits Green Score: <strong class="text-emerald-600 font-mono">${state.greenScore}/100 Points</strong>
            </p>
          </div>
          <button
            onclick="claimHongbao()"
            class="bg-[#ea4335] hover:bg-[#d93025] text-white font-medium text-xs py-2.5 px-5 rounded shadow hover:shadow-md transition-all cursor-pointer font-sans"
          >
            CLAIM GREEN HONGBAO (RED ENVELOPE)
          </button>
        </div>
      `;
    }
  }

  // Reload logs list
  renderChatLogs();

  // Reload manuals directories
  renderKnowledgeBase();

  // Save changes locally
  autoSaveCitizenState();
}

// Function to translate elements with data-tr attributes
function applyTranslations() {
  const lang = state.currentLanguage || "en";
  const dict = window.translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-tr]").forEach(el => {
    const key = el.getAttribute("data-tr");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.setAttribute("placeholder", dict[key]);
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Sync language dropdown select value option
  const langSelect = document.getElementById("language-selector");
  if (langSelect && langSelect.value !== lang) {
    langSelect.value = lang;
  }
}

// Global hook to switch language
window.setLanguage = function(lang) {
  state.currentLanguage = lang;
  localStorage.setItem("kolkata_lang", lang);
  updateUI();
};

// Render fleet command cards
function renderCabCommandPanel() {
  const container = document.getElementById("cabs-selection-list");
  if (!container) return;
  container.innerHTML = "";

  state.cabs.forEach(cab => {
    const isSelected = cab.id === state.selectedCabId;
    const card = document.createElement("div");
    card.onclick = () => {
      if (state.dispatchActive) return;
      state.selectedCabId = cab.id;
      updateUI();
    };

    const speed = state.congestionOptimized ? cab.speed + 25 : cab.speed;
    
    card.className = `p-3.5 rounded-lg border transition-all cursor-pointer select-none ${isSelected ? "bg-blue-50/60 border-blue-400 font-semibold" : "bg-white border-gray-200 hover:border-gray-300"}`;
    card.innerHTML = `
      <div class="flex justify-between items-start">
        <div class="text-left">
          <h5 class="text-xs text-gray-800 flex items-center gap-1.5 font-bold">
            <span class="h-2 w-2 rounded-full ${isSelected ? "bg-blue-600 animate-ping" : "bg-[#1a73e8]"}"></span>
            ${cab.name}
          </h5>
          <p class="text-[10px] text-gray-400 mt-1 font-mono">${cab.type} | Beacon (${cab.x}, ${cab.y})</p>
        </div>
        <span class="text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase ${cab.status === "Idle" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-red-50 text-red-700 border border-red-100 animate-pulse"}">
          ${cab.status}
        </span>
      </div>
      <div class="mt-3.5 grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
        <div class="bg-gray-50 p-1.5 rounded border border-gray-200">
          <span class="text-gray-400 block text-[8px] uppercase font-sans">Battery Charge</span>
          <strong class="text-gray-700 mt-0.5 block">${cab.battery}%</strong>
        </div>
        <div class="bg-gray-50 p-1.5 rounded border border-gray-200">
          <span class="text-gray-400 block text-[8px] uppercase font-sans">Target Cruise</span>
          <strong class="text-gray-700 mt-0.5 block">${speed} km/h</strong>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Plot Teardrop location pinpoint markers on map (Google Maps Theme)
function plotInteractiveNodes() {
  const mapOverlay = document.getElementById("svg-interactive-nodes");
  if (!mapOverlay) return;
  mapOverlay.innerHTML = "";

  MAP_NODES.forEach(node => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.style.cursor = "pointer";
    g.setAttribute("class", "group");
    g.onclick = () => {
      dispatchCabToNode(node.id, node.name, node.x, node.y);
    };

    // Glow ring underneath teardrop base
    const glow = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    glow.setAttribute("cx", node.x);
    glow.setAttribute("cy", node.y);
    glow.setAttribute("r", "16");
    glow.setAttribute("fill", "#ea4335");
    glow.setAttribute("fill-opacity", "0.0");
    glow.setAttribute("class", "group-hover:fill-opacity-10 transition-all");
    g.appendChild(glow);

    // Google style bright Red Teardrop Location Pin standard SVG
    const pin = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // Pin teardrop SVG coordinates drawn exactly around (node.x, node.y)
    pin.setAttribute("d", `M${node.x} ${node.y} C${node.x - 7} ${node.y - 11}, ${node.x - 7} ${node.y - 18}, ${node.x} ${node.y - 18} C${node.x + 7} ${node.y - 18}, ${node.x + 7} ${node.y - 11}, ${node.x} ${node.y}`);
    pin.setAttribute("fill", "#ea4335");
    pin.setAttribute("stroke", "#ffffff");
    pin.setAttribute("stroke-width", "1.5");
    pin.setAttribute("class", "group-hover:fill-blue-600 transition-all");
    g.appendChild(pin);

    // Tiny white center dot inside teardrop pin
    const pinDot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pinDot.setAttribute("cx", node.x);
    pinDot.setAttribute("cy", node.y - 11);
    pinDot.setAttribute("r", "2.5");
    pinDot.setAttribute("fill", "#ffffff");
    g.appendChild(pinDot);

    mapOverlay.appendChild(g);
  });
}

// Coordinate autoCab routing positioning trigger
function dispatchCabToNode(nodeId, nodeName, targetX, targetY) {
  if (state.dispatchActive) return;

  const fare = Math.floor(Math.random() * 25 + 20); // standard tariff UPI ₹20 - ₹45
  if (state.walletBalance < fare) {
    alert(`Insufficient digital e-Rupee balance! Base fare to ${nodeName} demands ₹${fare}. Open some Green Red Envelopes (Hongbao) first to reclaim assets.`);
    return;
  }

  state.dispatchActive = true;
  state.dispatchProgress = 0;
  state.dispatchTargetName = nodeName;
  state.dispatchEta = Math.round(Math.abs(targetX - 250) / 45) || 1;
  updateUI();

  const interval = setInterval(() => {
    state.dispatchProgress += 10;
    
    // Incrementally step vehicle plotting coordinates towards target coordinates
    state.cabs = state.cabs.map(cab => {
      if (cab.id === state.selectedCabId) {
        const deltaX = (targetX - cab.x) * 0.25;
        const deltaY = (targetY - cab.y) * 0.25;
        return {
          ...cab,
          x: Math.round(cab.x + deltaX),
          y: Math.round(cab.y + deltaY),
          status: "EnRoute",
          battery: Math.max(5, cab.battery - 1)
        };
      }
      return cab;
    });

    if (state.dispatchProgress >= 100) {
      clearInterval(interval);
      state.dispatchActive = false;
      state.walletBalance -= fare;
      
      state.cabs = state.cabs.map(cab => {
        if (cab.id === state.selectedCabId) {
          return {
            ...cab,
            x: targetX,
            y: targetY,
            status: "Idle"
          };
        }
        return cab;
      });

      // Log completion to RAG chat archives
      state.chatLogs.push({
        sender: "system",
        text: `Grid Dispatch Completed: ${state.selectedCabId} arrived safely at ${nodeName}. Debited ₹${fare} e-Rupee flat toll. Air quality status remains green.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      showNotificationToast(`Transit completed! Debited ₹${fare} e-Rupee.`);
    }
    updateUI();
  }, 220);
}

// Toggle priority signal preemption (traffic optimization)
window.toggleSignalPreemption = function() {
  state.congestionOptimized = !state.congestionOptimized;
  if (state.congestionOptimized) {
    state.greenScore = Math.min(100, state.greenScore + 5);
    showNotificationToast("Intersection priority assigned! High-efficiency routing active.");
  } else {
    state.greenScore = Math.max(10, state.greenScore - 5);
  }
  updateUI();
};

// Underground trash sweep purge triggers
window.triggerPneumaticPurge = function() {
  if (state.pneumaticPurgeActive) return;
  
  state.pneumaticPurgeActive = true;
  state.pneumaticPressure = 13.6;
  state.pneumaticThroughput = 8920;
  updateUI();

  setTimeout(() => {
    state.pneumaticPurgeActive = false;
    state.pneumaticPressure = 8.4;
    state.pneumaticThroughput = 5420;
    updateUI();
    alert("Xiong'an high-velocity underground sweep completed successfully. Conduits and slurry valves are clear.");
    showNotificationToast("Sectional conduits purge completed.");
  }, 2500);
};

// Maglev speed control range triggers
window.handleMaglevSpeedInput = function(val) {
  state.maglevCurrentSpeed = parseInt(val);
  state.maglevRegeneration = Math.round(24 + (600 - state.maglevCurrentSpeed) * 0.05);
  const regenLabel = document.getElementById("maglev-regen-pct");
  if (regenLabel) regenLabel.textContent = `${state.maglevRegeneration}% Regenerated`;
  
  const speedSpan = document.getElementById("maglev-speed-val");
  if (speedSpan) speedSpan.textContent = `${state.maglevCurrentSpeed} km/h`;
};

// Claim carbon envelope credits
window.claimHongbao = function() {
  if (state.greenScore < 80) {
    state.hongbaoStatus = "low_score";
    updateUI();
    return;
  }

  const gift = Math.floor(Math.random() * 300 + 200); // INR Digital Rupees ₹200 to ₹500
  state.hongbaoAmount = gift;
  state.walletBalance += gift;
  state.hongbaoStatus = "claimed";
  showNotificationToast(`Congratulations! Claimed ₹${gift} Green digital Red Envelope.`);
  updateUI();
};

// Central Emergency dispatch
window.triggerSosAlarm = function() {
  state.sosActive = true;
  state.sosMessage = "Broadcasting GPS coordinates instantly. Alert units dispatched from siripuram HQ, Ocean clinic and beachfront coastal guards.";
  
  const sosModal = document.getElementById("sos-alert-modal");
  const sosMsgEl = document.getElementById("sos-alert-message");
  if (sosModal && sosMsgEl) {
    sosMsgEl.textContent = state.sosMessage;
    sosModal.className = "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in";
  }
};

window.dismissSosAlarm = function() {
  state.sosActive = false;
  const sosModal = document.getElementById("sos-alert-modal");
  if (sosModal) sosModal.className = "hidden";
  showNotificationToast("Beacon cancelled. Telemetry secure.");
};

// Switch navigation panes
window.changeTab = function(tabName) {
  state.activeTab = tabName;
  updateUI();
  
  // Auto-collapse mobile sidebar on selection
  const sidebar = document.getElementById("google-sidebar");
  if (sidebar && window.innerWidth < 768) {
    sidebar.classList.add("hidden");
    sidebar.classList.remove("flex");
  }
};

// Toggle mobile sidebar helper
window.toggleSidebarMobile = function() {
  const sidebar = document.getElementById("google-sidebar");
  if (sidebar) {
    if (sidebar.classList.contains("hidden")) {
      sidebar.classList.remove("hidden");
      sidebar.classList.add("flex");
    } else {
      sidebar.classList.add("hidden");
      sidebar.classList.remove("flex");
    }
  }
};

// Top search input handler (switch tabs & trigger smart query)
window.handleTopSearchEnter = function(event) {
  if (event.key === "Enter") {
    const bar = document.getElementById("top-dashboard-search");
    if (!bar || !bar.value.trim()) return;
    
    const query = bar.value.trim();
    // Redirect to chat tab
    state.activeTab = "chat";
    updateUI();

    // Fill chat input and query
    const chatInput = document.getElementById("rag-user-input");
    if (chatInput) {
      chatInput.value = query;
      submitRAGMessage();
    }
    
    // Clear top search bar
    bar.value = "";
    bar.blur();
  }
};

// Trigger focus highlight on the top search bar
window.triggerSearchFocus = function() {
  const bar = document.getElementById("top-dashboard-search");
  if (bar) bar.focus();
};

// Suggestions chip click triggers
window.fillAndSubmitRAGChat = function(text) {
  const chatInput = document.getElementById("rag-user-input");
  if (chatInput) {
    chatInput.value = text;
    submitRAGMessage();
  }
};

// =====================================================================
// LOCAL OFFLINE RAG RETRIEVAL DECISION SYSTEM
// =====================================================================

function localSearchGroundedDoc(query) {
  const norm = query.toLowerCase().trim();
  if (!norm) return null;

  let ranked = KNOWLEDGE_BASE_DOCS.map(doc => {
    let score = 0;
    doc.keywords.forEach(kw => {
      if (norm.includes(kw)) score += 4;
    });
    if (norm.includes(doc.category.toLowerCase())) score += 3;
    if (norm.includes(doc.title.toLowerCase())) score += 7; // high weighting for direct title match
    return { doc, score };
  })
  .filter(x => x.score > 0)
  .sort((a,b) => b.score - a.score);

  return ranked.length > 0 ? ranked[0].doc : null;
}

window.submitRAGMessage = function() {
  const input = document.getElementById("rag-user-input");
  if (!input || !input.value.trim()) return;

  const userText = input.value.trim();
  state.chatLogs.push({
    sender: "user",
    text: userText,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });

  input.value = "";
  renderChatLogs();

  // Fast offline matching response
  setTimeout(() => {
    const doc = localSearchGroundedDoc(userText);
    let reply = "";

    if (doc) {
      reply = `🤖 **[Kolkata RAG Grounding Found]**\nMatched *${doc.category}* from the local municipal registry:\n\n` +
              `📍 **${doc.title}**\n${doc.content}\n\n` +
              `*No external APIs or remote servers queried. Secure local client indexing active.*`;
    } else {
      reply = `🤖 **[Municipal Directory Guide]**\nI've searched our giant Kolkata offline manual database, but found no matches for that phrase.\n\nTry querying about:\n` +
              `• **"Maglev"** or **"Corrridor"** for high-speed metro-rail connections.\n` +
              `• **"Electric bus"** or **"Route 102"** for bus timings.\n` +
              `• **"e-Rupee envelope"** or **"Hongbao"** for claiming rewards.\n` +
              `• **"Emergency"** or **"911"** to trace critical helpline numbers.`;
    }

    state.chatLogs.push({
      sender: "system",
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    renderChatLogs();
  }, 450);
};

// Render chat history
function renderChatLogs() {
  const box = document.getElementById("chat-flow-box");
  if (!box) return;

  box.innerHTML = "";
  state.chatLogs.forEach(log => {
    const div = document.createElement("div");
    div.className = log.sender === "user" ? "flex flex-col items-end space-y-1" : "flex flex-col items-start space-y-1";
    
    const bubbleClass = log.sender === "user" 
      ? "bg-[#e8f0fe] border border-blue-100 text-blue-900 p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] text-xs text-left" 
      : "bg-white border border-gray-200 text-gray-800 p-3.5 rounded-2xl rounded-tl-sm max-w-[85%] text-xs text-left leading-relaxed shadow-sm";

    // Format simple bold text
    let formattedText = log.text
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/📍/g, "🔹")
      .replace(/•/g, "▪️");

    div.innerHTML = `
      <span class="text-[9px] font-sans font-medium text-gray-400 uppercase tracking-widest">${log.sender === "user" ? (state.currentUser?.name || "CITIZEN CORE") : "MUNICIPAL RAG COMMAND"} &bull; ${log.timestamp}</span>
      <div class="${bubbleClass}">${formattedText}</div>
    `;
    box.appendChild(div);
  });

  box.scrollTop = box.scrollHeight;
}

// Render complete knowledge base Cards
function renderKnowledgeBase() {
  const kbGrid = document.getElementById("kb-cards-grid");
  if (!kbGrid) return;
  kbGrid.innerHTML = "";

  KNOWLEDGE_BASE_DOCS.forEach(doc => {
    const card = document.createElement("div");
    card.className = "bg-white border border-[#dadce0] rounded-lg p-5 hover:shadow-md transition-all text-left";
    card.innerHTML = `
      <div class="flex justify-between items-start mb-2.5">
        <span class="text-[10px] font-sans text-blue-600 font-semibold uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
          ${doc.category}
        </span>
        <span class="text-[9px] font-mono text-gray-400">ID: ${doc.id}</span>
      </div>
      <h4 class="text-xs font-bold text-gray-800 mb-2">${doc.title}</h4>
      <p class="text-[11.5px] text-gray-600 leading-relaxed font-sans">${doc.content.replace(/\n/g, "<br>")}</p>
      <div class="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
        ${doc.keywords.map(kw => `<span class="text-[9px] font-mono text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">#${kw}</span>`).join("")}
      </div>
    `;
    kbGrid.appendChild(card);
  });
}

// Global initialization bindings
document.addEventListener("DOMContentLoaded", () => {
  // Bind vectors and coordinates labels
  plotInteractiveNodes();
  
  MAP_NODES.forEach((node, idx) => {
    const label = document.getElementById(`node-label-${node.id}`);
    if (label) {
      label.style.left = `${(node.x / 650) * 100}%`;
      label.style.top = `${(node.y / 450) * 100}%`;
    }
  });

  const textInput = document.getElementById("rag-user-input");
  if (textInput) {
    textInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        submitRAGMessage();
      }
    });
  }

  // Pre-load default bus and train state
  renderBusRoutesUI();
  renderBusSeatsUI();
  renderTrainLinesUI();
  renderBillPresetsUI();
  renderBillDetailsUI();
  renderNfcCardUI();
  renderNfcLogsUI();

  // Load municipal complaints
  loadComplaintsOnStartup();

  // Load public social credit welfare posts
  loadSocialOnStartup();

  // Double check session
  checkCitizenSessionOnLoad();
});

// =====================================================================
// MULTI-TRANSIT SYSTEM: BUSES & HIGH-SPEED MAGLEV RAIL
// =====================================================================

window.changeTransitSubTab = function(subTabKey) {
  state.activeTransitSubTab = subTabKey;
  
  const ids = ["cabs", "buses", "trains"];
  ids.forEach(id => {
    const btn = document.getElementById(`subtab-btn-transit-${id}`);
    const container = document.getElementById(`transit-container-${id}`);
    
    if (btn) {
      if (id === subTabKey) {
        btn.className = "flex-1 py-2 px-4 rounded-full text-xs font-semibold bg-[#e8f0fe] text-[#1a73e8] transition-all cursor-pointer text-center";
      } else {
        btn.className = "flex-1 py-2 px-4 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-100 transition-all cursor-pointer text-center";
      }
    }
    
    if (container) {
      if (id === subTabKey) {
        container.classList.remove("hidden");
        container.classList.add("block");
      } else {
        container.classList.add("hidden");
        container.classList.remove("block");
      }
    }
  });
  
  updateUI();
};

function renderBusRoutesUI() {
  const container = document.getElementById("bus-routes-selector-list");
  if (!container) return;
  
  container.innerHTML = "";
  BUS_ROUTES.forEach(route => {
    const isSelected = route.id === state.selectedBusRouteId;
    const card = document.createElement("div");
    card.onclick = () => selectBusRoute(route.id);
    card.className = `p-4 border rounded-xl cursor-pointer text-left transition-all ${
      isSelected 
        ? "border-blue-500 bg-blue-50/40 shadow-sm" 
        : "border-gray-200 bg-white hover:bg-gray-50"
    }`;
    
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <strong class="text-xs text-gray-800 font-bold block">${route.name}</strong>
          <span class="text-[10px] text-gray-500 block mt-0.5">⏱️ ${route.interval} &bull; Route: ${route.from} ➔ ${route.to}</span>
        </div>
        <span class="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded">₹${route.flatFare}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

window.selectBusRoute = function(routeId) {
  state.selectedBusRouteId = routeId;
  state.selectedBusSeat = null; // reset seat
  
  // Randomize occupied seats lists based on routes for interactive realism
  const seeds = {
    "102": [4, 7, 11, 14, 18, 19, 22, 23],
    "400": [1, 2, 8, 9, 12, 13, 20, 21, 24],
    "99A": [3, 6, 12, 15, 16, 25, 26, 28]
  };
  state.occupiedSeatsList = seeds[routeId] || [5, 10, 15];
  
  // Update summaries
  const route = BUS_ROUTES.find(r => r.id === routeId);
  const sumRoute = document.getElementById("bus-summary-route");
  const sumInterval = document.getElementById("bus-summary-interval");
  if (sumRoute) sumRoute.textContent = route ? route.name : `Route ${routeId}`;
  if (sumInterval) sumInterval.textContent = route ? route.interval : "Every 6 mins";
  
  const sumSeat = document.getElementById("bus-summary-seat");
  if (sumSeat) sumSeat.textContent = "None Chosen";
  if (sumSeat) sumSeat.className = "text-blue-600 font-mono";

  renderBusRoutesUI();
  renderBusSeatsUI();
};

function renderBusSeatsUI() {
  const grid = document.getElementById("bus-cabin-seating-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  
  // 30 standard coach seats
  for (let i = 1; i <= 30; i++) {
    const isOccupied = state.occupiedSeatsList.includes(i);
    const isSelected = state.selectedBusSeat === i;
    
    // Create seat slot button
    const btn = document.createElement("button");
    btn.type = "button";
    
    if (isOccupied) {
      btn.className = "aspect-square rounded text-[9px] font-mono font-bold bg-gray-200 text-gray-400 cursor-not-allowed";
      btn.disabled = true;
      btn.textContent = i;
    } else if (isSelected) {
      btn.className = "aspect-square rounded text-[9px] font-mono font-bold bg-blue-600 text-white cursor-pointer ring-2 ring-blue-400";
      btn.onclick = () => selectBusSeat(i);
      btn.textContent = i;
    } else {
      btn.className = "aspect-square rounded text-[9px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 cursor-pointer";
      btn.onclick = () => selectBusSeat(i);
      btn.textContent = i;
    }
    
    // Add spacer on column 3 to model aisle walkway
    grid.appendChild(btn);
    if (i % 5 === 2) {
      const aisle = document.createElement("div");
      aisle.className = "col-span-1"; // acts as gap spacing
      grid.appendChild(aisle);
    }
  }
}

window.selectBusSeat = function(seatIndex) {
  if (state.selectedBusSeat === seatIndex) {
    state.selectedBusSeat = null;
    const sumSeat = document.getElementById("bus-summary-seat");
    if (sumSeat) sumSeat.textContent = "None Chosen";
    if (sumSeat) sumSeat.className = "text-blue-600 font-mono";
  } else {
    state.selectedBusSeat = seatIndex;
    const sumSeat = document.getElementById("bus-summary-seat");
    if (sumSeat) sumSeat.textContent = `Seat #${seatIndex}`;
    if (sumSeat) sumSeat.className = "text-emerald-600 font-mono font-bold";
  }
  renderBusSeatsUI();
};

window.bookBusTicket = function() {
  if (state.selectedBusSeat === null) {
    alert("Please select an available cabin seat on the interactive seating grid first.");
    return;
  }
  
  const fare = 25;
  if (state.walletBalance < fare) {
    alert("Incomplete rupee funds. Refill your e-Rupee balance or switch accounts.");
    return;
  }
  
  // Deduct
  state.walletBalance -= fare;
  state.greenScore = Math.min(100, state.greenScore + 2); // green reward points multiplier
  
  // Update citizen profile on localStorage
  if (state.currentUser) {
    state.currentUser.walletBalance = state.walletBalance;
    state.currentUser.greenScore = state.greenScore;
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
  }
  
  syncUserDisplays();
  
  // Issue dynamic boarding ticket voucher
  const route = BUS_ROUTES.find(r => r.id === state.selectedBusRouteId);
  const ticketContainer = document.getElementById("bus-ticket-printed-receipt-container");
  if (ticketContainer) {
    const ticketHtml = `
      <div class="bg-gradient-to-br from-[#1a73e8] to-[#1557b0] text-white p-5 rounded-lg shadow-md space-y-3.5 text-left select-none border border-blue-700 animate-pulse">
        <div class="flex justify-between items-center border-b border-white/20 pb-2">
          <div>
            <span class="text-[8px] font-mono uppercase tracking-widest text-blue-200">KOLKATA SMART EV BUS</span>
            <strong class="text-[11px] block text-white uppercase font-bold">${route ? route.name : "EXPRESS REVENUE CAP"}</strong>
          </div>
          <span class="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded font-bold">FAST-PASS</span>
        </div>
        
        <div class="grid grid-cols-2 gap-3.5 text-[10px] font-sans">
          <div>
            <span class="text-blue-200 text-[8px] block uppercase">Route Journey</span>
            <span class="font-medium text-white block">${route ? route.from : "Siripuram Jn"} ➔ ${route ? route.to : "IT Research"}</span>
          </div>
          <div>
            <span class="text-blue-200 text-[8px] block uppercase">Assigned Seat</span>
            <span class="font-mono font-bold text-[#34a853] bg-white px-2 py-0.5 rounded block text-center w-max mt-0.5">Seat ${state.selectedBusSeat}</span>
          </div>
          <div>
            <span class="text-blue-200 text-[8px] block uppercase">Validated Stamp</span>
            <span class="font-bold text-yellow-300 block">SECURE DIRECT-DEBIT</span>
          </div>
          <div>
            <span class="text-blue-200 text-[8px] block uppercase">Transaction Reference</span>
            <span class="font-mono text-white/80 block">TXN-BUS-${Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
        </div>

        <div class="pt-2 border-t border-dashed border-white/20 flex justify-between items-center text-[9px] font-mono">
          <span>Carbon Offset: +2 Green Pts</span>
          <span>Fare paid: ₹25 CBDC</span>
        </div>
      </div>
    `;
    ticketContainer.innerHTML = ticketHtml;
  }
  
  showNotificationToast("EV Bus Fast-Pass issued! Deducted ₹25 e-Rupee. +2 Eco Bonus points earned.");
  updateUI();
};

function renderTrainLinesUI() {
  const container = document.getElementById("train-corridors-selection-container");
  if (!container) return;
  
  container.innerHTML = "";
  TRAIN_LINES.forEach(line => {
    const isSelected = line.id === state.selectedTrainLineId;
    const card = document.createElement("div");
    card.onclick = () => selectTrainLine(line.id);
    card.className = `p-4 border rounded-xl cursor-pointer text-left transition-all ${
      isSelected 
        ? "border-purple-500 bg-purple-50/40 shadow-sm" 
        : "border-gray-200 bg-white hover:bg-gray-50"
    }`;
    
    card.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
          <strong class="text-xs text-gray-800 font-bold block">${line.name}</strong>
          <span class="text-[10px] text-gray-500 block mt-0.5">🚅 High-Speed Maglev &bull; Route Length: ${line.length} &bull; Delta: ${line.duration}</span>
        </div>
        <span class="text-[9px] font-mono uppercase bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded border border-purple-200">SUPERCON</span>
      </div>
    `;
    container.appendChild(card);
  });
}

window.selectTrainLine = function(lineId) {
  state.selectedTrainLineId = lineId;
  
  const line = TRAIN_LINES.find(t => t.id === lineId);
  const sumLine = document.getElementById("train-summary-line");
  if (sumLine) sumLine.textContent = line ? line.name : "Coastal Line";
  
  renderTrainLinesUI();
};

window.selectTrainTier = function(tier, price) {
  state.selectedTrainTier = tier;
  state.selectedTrainPrice = price;
  
  // Cycle borders
  const tiers = ["Standard", "First", "Executive"];
  tiers.forEach(t => {
    const card = document.getElementById(`train-tier-card-${t}`);
    if (card) {
      if (t === tier) {
        card.className = "p-4 border rounded-xl bg-blue-50/50 border-blue-400 cursor-pointer text-left transition-all";
      } else {
        card.className = "p-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 cursor-pointer text-left transition-all";
      }
    }
  });
  
  const sumTier = document.getElementById("train-summary-tier");
  const sumPrice = document.getElementById("train-summary-price");
  if (sumTier) sumTier.textContent = tier === "Standard" ? "Standard Coach" : tier === "First" ? "First Class Cabin" : "VVIP Hyper Suite";
  if (sumPrice) sumPrice.textContent = `₹${price} e-Rupee`;
};

window.bookTrainTicket = function() {
  const fare = state.selectedTrainPrice;
  if (state.walletBalance < fare) {
    alert("Incomplete CBDC funds. Refill user assets.");
    return;
  }
  
  state.walletBalance -= fare;
  state.greenScore = Math.min(100, state.greenScore + 5);
  
  if (state.currentUser) {
    state.currentUser.walletBalance = state.walletBalance;
    state.currentUser.greenScore = state.greenScore;
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
  }
  
  syncUserDisplays();
  
  const line = TRAIN_LINES.find(t => t.id === state.selectedTrainLineId);
  const ticketContainer = document.getElementById("train-ticket-printed-receipt-container");
  
  if (ticketContainer) {
    const stampText = state.selectedTrainTier === "Standard" ? "STANDARD FARE" : state.selectedTrainTier === "First" ? "FIRST PRIORITY" : "VVIP CRYPTO-GRID";
    
    const ticketHtml = `
      <div class="bg-neutral-900 border border-neutral-800 text-white p-5 rounded-lg shadow-lg space-y-4 text-left select-none relative overflow-hidden animate-pulse">
        <div class="absolute -right-6 -bottom-6 h-20 w-20 rounded-full border border-white/5 opacity-20"></div>
        
        <div class="flex justify-between items-start border-b border-neutral-800 pb-2.5">
          <div>
            <span class="text-[8px] font-mono uppercase text-purple-400 tracking-wider">MAGLEV SUPER-LINERS</span>
            <strong class="text-xs block text-gray-100 uppercase font-bold">${line ? line.name : "COASTAL SUPER-GRID"}</strong>
          </div>
          <span class="text-[9px] font-mono bg-purple-900/40 text-purple-300 border border-purple-700/60 px-2 py-0.5 rounded font-bold">${stampText}</span>
        </div>

        <div class="grid grid-cols-2 gap-3 text-[10px] font-sans">
          <div>
            <span class="text-neutral-500 text-[8px] block uppercase">MAGLEV DURATION</span>
            <span class="font-medium text-white block">${line ? line.duration : "12 mins"} &bull; up to 600 km/h</span>
          </div>
          <div>
            <span class="text-neutral-500 text-[8px] block uppercase">DEBIT WALLET GATE</span>
            <span class="font-mono text-emerald-400 block font-bold">₹${fare} e-Rupee</span>
          </div>
          <div>
            <span class="text-neutral-500 text-[8px] block uppercase">SECURITY PASS</span>
            <span class="font-bold text-yellow-500 block">NFC GATE-BOUND OK</span>
          </div>
          <div>
            <span class="text-neutral-500 text-[8px] block uppercase">CRYPTO SIGNATURE HASH</span>
            <span class="font-mono block text-neutral-400">0xSH-${Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
        </div>

        <div class="pt-2 border-t border-dashed border-neutral-800 flex justify-between items-center text-[9px] font-mono text-gray-500">
          <span>Carbon Offset: +5 Eco Bonus</span>
          <span>Validated Offline Ledger</span>
        </div>
      </div>
    `;
    ticketContainer.innerHTML = ticketHtml;
  }
  
  showNotificationToast(`Maglev Bullet Pass generated! Deducted ₹${fare} CBDC e-Rupee.`);
  updateUI();
};

// =====================================================================
// MUNICIPAL BILLS AND UTILITIES PANEL
// =====================================================================

window.handleBillProviderChange = function() {
  const pSelect = document.getElementById("bill-provider-select");
  const conInput = document.getElementById("bill-consumer-id-input");
  if (!pSelect || !conInput) return;
  
  state.billQueryProvider = pSelect.value;
  
  // Fill default value if we have a current user profile loaded
  if (state.currentUser && state.currentUser.elecId && state.currentUser.gasId) {
    conInput.value = pSelect.value === "electricity" ? state.currentUser.elecId : state.currentUser.gasId;
  } else {
    conInput.value = pSelect.value === "electricity" ? "WB-ELEC-21938" : "WB-GAS-99104";
  }
  
  state.lastQueriedBill = null;
  renderBillDetailsUI();
};

window.checkOutstandingBill = function() {
  const conInput = document.getElementById("bill-consumer-id-input");
  if (!conInput) return;
  
  const idValue = conInput.value.trim();
  if (!idValue) {
    alert("Please enter or select a Registered Customer ID first.");
    return;
  }
  
  // Loop through presets profiles and check if there is an exact ID match
  let matchedBill = null;
  let matchedCitizenName = "";
  
  for (const presetKey in MOCK_CITIZENS) {
    const cit = MOCK_CITIZENS[presetKey];
    if (state.billQueryProvider === "electricity" && cit.elecId === idValue) {
      matchedBill = cit.bills.electricity;
      matchedCitizenName = cit.name;
      break;
    } else if (state.billQueryProvider === "gas" && cit.gasId === idValue) {
      matchedBill = cit.bills.gas;
      matchedCitizenName = cit.name;
      break;
    }
  }
  
  // If no match found, create a placeholder bill of random value to ensure flawless UX
  if (!matchedBill) {
    matchedBill = {
      due: parseFloat((150 + Math.random() * 450).toFixed(2)),
      usage: state.billQueryProvider === "electricity" ? "180 kWh" : "8.2 m³",
      period: "May 15 - June 15",
      status: "Unpaid"
    };
    matchedCitizenName = state.currentUser?.name || "Offline Citizen ID";
  }
  
  state.lastQueriedBill = {
    provider: state.billQueryProvider,
    consumerId: idValue,
    citizenName: matchedCitizenName,
    dueAmount: matchedBill.due,
    usageMetric: matchedBill.usage,
    periodRange: matchedBill.period,
    status: matchedBill.status
  };
  
  showNotificationToast(`Utility database invoice fetched for ID: ${idValue}.`);
  renderBillDetailsUI();
};

window.payOutstandingBill = function() {
  if (!state.lastQueriedBill) return;
  
  const originalDue = state.lastQueriedBill.dueAmount;
  if (state.walletBalance < originalDue) {
    alert("Incomplete wallet rupee balance. Please refill funds.");
    return;
  }
  
  // Process balance reduction
  state.walletBalance -= originalDue;
  state.greenScore = Math.min(100, state.greenScore + 5);
  state.lastQueriedBill.status = "Paid";
  
  // Persist if current user
  if (state.currentUser) {
    state.currentUser.walletBalance = state.walletBalance;
    state.currentUser.greenScore = state.greenScore;
    
    // Sync the local preset bills mapping as well if Suresh, Haritha, or Anish
    for (const presetKey in MOCK_CITIZENS) {
      const cit = MOCK_CITIZENS[presetKey];
      if (cit.name === state.lastQueriedBill.citizenName) {
        if (state.lastQueriedBill.provider === "electricity") {
          cit.bills.electricity.status = "Paid";
        } else {
          cit.bills.gas.status = "Paid";
        }
      }
    }
    
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
  }
  
  syncUserDisplays();
  
  // Print receipt inside sidebar
  const printedContainer = document.getElementById("bill-payment-receipt-printed-container");
  if (printedContainer) {
    const provName = state.lastQueriedBill.provider === "electricity" ? "CESC KOLKATA ELECTRICITY GRID" : "SAFEGAS PIPELINE CORP";
    printedContainer.innerHTML = `
      <div class="bg-gradient-to-tr from-emerald-600 to-teal-500 text-white p-5 rounded-lg text-left select-none shadow space-y-3 animate-fade-in border border-emerald-600">
        <div class="flex justify-between items-center border-b border-white/20 pb-2">
          <div>
            <span class="text-[8px] font-mono uppercase text-emerald-100">payment voucher proof</span>
            <strong class="text-[10px] block font-bold text-white tracking-wide">${provName}</strong>
          </div>
          <span class="text-[8px] font-mono uppercase bg-white/20 text-white border border-white/40 rounded px-1.5 py-0.5">cleared</span>
        </div>
        
        <div class="text-[10.5px] font-sans space-y-1 bg-black/10 p-2.5 rounded">
          <div class="flex justify-between"><span class="opacity-75">Customer ID:</span> <span class="font-mono">${state.lastQueriedBill.consumerId}</span></div>
          <div class="flex justify-between"><span class="opacity-75">Name:</span> <span>${state.lastQueriedBill.citizenName}</span></div>
          <div class="flex justify-between"><span class="opacity-75">Metric usage:</span> <span class="font-mono">${state.lastQueriedBill.usageMetric}</span></div>
          <div class="flex justify-between pt-1 border-t border-white/10"><span class="font-medium text-white">Rupee Paid:</span> <strong class="font-mono text-yellow-300">₹${originalDue}</strong></div>
        </div>

        <div class="text-[9px] font-mono flex justify-between pt-1">
          <span>+5 Eco Bonus Points</span>
          <span>Hash: ${Math.floor(100000 + Math.random() * 900000)}-OK</span>
        </div>
      </div>
    `;
  }
  
  showNotificationToast(`Utility Bill Cleared! Deducted ₹${originalDue} from secure CBDC wallet.`);
  renderBillDetailsUI();
};

window.selectBillPresetProfile = function(presetKey) {
  const citizen = MOCK_CITIZENS[presetKey];
  if (!citizen) return;
  
  const conInput = document.getElementById("bill-consumer-id-input");
  if (conInput) {
    conInput.value = state.billQueryProvider === "electricity" ? citizen.elecId : citizen.gasId;
    checkOutstandingBill();
  }
};

function renderBillPresetsUI() {
  const container = document.getElementById("bill-presets-profile-list");
  if (!container) return;
  
  container.innerHTML = "";
  for (const presetKey in MOCK_CITIZENS) {
    const cit = MOCK_CITIZENS[presetKey];
    const card = document.createElement("div");
    card.onclick = () => selectBillPresetProfile(presetKey);
    card.className = "bg-white border border-gray-200.5 p-3 rounded-lg hover:border-blue-400 cursor-pointer shadow-sm transition-all text-left flex justify-between items-center";
    
    // Check current state bills dues parameters
    const currentDue = state.billQueryProvider === "electricity" ? cit.bills.electricity : cit.bills.gas;
    const isPaid = currentDue.status === "Paid";
    const statusText = isPaid ? "₹0.00 DUE" : `₹${currentDue.due} DUE`;
    const statusColor = isPaid ? "text-emerald-600 bg-emerald-50 border-emerald-100" : "text-amber-600 bg-amber-50 border-amber-100";
    
    card.innerHTML = `
      <div>
        <strong class="text-xs text-gray-800 font-semibold block">${cit.name}</strong>
        <span class="text-[9px] text-gray-400 block mt-0.5">ID: ${state.billQueryProvider === "electricity" ? cit.elecId : cit.gasId}</span>
      </div>
      <span class="text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${statusColor}">${statusText}</span>
    `;
    container.appendChild(card);
  }
}

function renderBillDetailsUI() {
  const display = document.getElementById("bill-due-calculator-display");
  if (!display) return;
  
  if (!state.lastQueriedBill) {
    display.innerHTML = `
      <div class="text-center py-6 text-gray-500 text-xs font-sans">
        Enter your Registered Consumer ID or select a preset dummy account to fetch outstanding billing parameters.
      </div>
    `;
    return;
  }
  
  const isPaid = state.lastQueriedBill.status === "Paid";
  const labelClass = isPaid ? "text-emerald-700 bg-emerald-50 border border-emerald-200" : "text-amber-700 bg-amber-50 border border-amber-200 animate-pulse";
  const btnMarkup = isPaid 
    ? `
      <div class="bg-emerald-50 border border-emerald-200 p-3.5 rounded-lg text-emerald-800 text-center text-xs font-mono">
        ✓ INVOICE ACQUIRED & FULLY CLEARED. TRANSACTION VALIDATED ON REGIONAL CBDC NODE.
      </div>
    `
    : `
      <button 
        onclick="payOutstandingBill()"
        class="w-full bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium text-xs tracking-wider py-3 rounded uppercase font-sans cursor-pointer shadow-sm transition-all"
      >
        Deduct ₹${state.lastQueriedBill.dueAmount} e-Rupee & Settle Invoice
      </button>
    `;
    
  display.innerHTML = `
    <div class="space-y-4 text-left">
      <div class="flex justify-between items-center">
        <div>
          <span class="text-[9px] uppercase font-mono tracking-wide text-gray-400 block">Validated Customer Signature</span>
          <strong class="text-xs text-gray-800 font-bold block">${state.lastQueriedBill.citizenName}</strong>
        </div>
        <span class="text-[9px] font-mono font-bold px-2 py-0.5 rounded ${labelClass}">${state.lastQueriedBill.status.toUpperCase()}</span>
      </div>

      <div class="border-t border-b border-gray-100 py-3 grid grid-cols-2 gap-4 text-xs">
        <div>
          <span class="text-gray-400 block text-[9.5px]">Billing Period</span>
          <strong class="text-gray-700 block font-normal mt-0.5">${state.lastQueriedBill.periodRange}</strong>
        </div>
        <div>
          <span class="text-gray-400 block text-[9.5px]">Grid Meter Consumption</span>
          <strong class="text-gray-700 block font-mono font-normal mt-0.5">${state.lastQueriedBill.usageMetric}</strong>
        </div>
        <div>
          <span class="text-gray-400 block text-[9.5px]">Gateway Bound Token</span>
          <strong class="text-blue-600 block font-bold font-mono mt-0.5">Sovereign CBDC Wallet</strong>
        </div>
        <div>
          <span class="text-gray-400 block text-[9.5px]">Total Accrued Invoice Dues</span>
          <strong class="text-gray-900 block font-bold font-mono mt-0.5">₹${state.lastQueriedBill.dueAmount}</strong>
        </div>
      </div>

      <div class="pt-2">
        ${btnMarkup}
      </div>
    </div>
  `;
}

// =====================================================================
// CONTACTLESS METALLIC NFC CITY CARD
// =====================================================================

function playNfcBeep() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // high chime A5
    gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.12); // fast beep
  } catch(e) {
    console.warn("Audio Context interaction blocked or unsupported.", e);
  }
}

window.triggerNfcTapWave = function() {
  const terminal = document.getElementById("nfc-gate-select")?.value || "siripuram";
  const flash = document.getElementById("nfc-sensor-beep-flash");
  
  const gateMapping = {
    kailasagiri: { name: "RK Beach Ferry Checkpoint", fee: 15 },
    siripuram: { name: "Siripuram Smart Transit Gate", fee: 15 },
    rushikonda: { name: "Kailasagiri Summit Elevators", fee: 15 }
  };
  
  const gate = gateMapping[terminal] || gateMapping["siripuram"];
  
  if (state.walletBalance < gate.fee) {
    alert("Incomplete cash. Recharge your contactless pass enclave.");
    return;
  }
  
  // Deduct
  state.walletBalance -= gate.fee;
  if (state.currentUser) {
    state.currentUser.walletBalance = state.walletBalance;
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
  }
  
  syncUserDisplays();
  playNfcBeep();
  
  // Flash success container
  if (flash) {
    flash.classList.remove("hidden");
    setTimeout(() => {
      flash.classList.add("hidden");
    }, 3800);
  }
  
  // Append audit trail log
  const newLog = {
    id: `L-${Math.floor(100 + Math.random() * 900)}`,
    terminal: gate.name,
    fee: `₹${gate.fee}`,
    status: "APPROVED LINK",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  };
  
  state.nfcLogs.unshift(newLog);
  renderNfcLogsUI();
  showNotificationToast(`Contactless NFC Tapped at ${gate.name}! Deducted ₹${gate.fee} gate fee.`);
};

window.rechargeCityCard = function() {
  const rInput = document.getElementById("citycard-recharge-amount");
  if (!rInput || !rInput.value) return;
  
  const inc = parseFloat(rInput.value);
  if (isNaN(inc) || inc <= 0) {
    alert("Please enter a valid rupee amount to refill.");
    return;
  }
  
  state.walletBalance += inc;
  if (state.currentUser) {
    state.currentUser.walletBalance = state.walletBalance;
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
  }
  
  syncUserDisplays();
  rInput.value = "";
  
  showNotificationToast(`CBDC Pass Refilled! Added ₹${inc} to card enclave.`);
  renderNfcCardUI();
};

function renderNfcCardUI() {
  const cardNumSpan = document.getElementById("citycard-visual-number");
  const cardHolderSpan = document.getElementById("citycard-visual-name");
  const cardCreditsSpan = document.getElementById("citycard-visual-credits");
  
  if (cardNumSpan && state.currentUser) {
    cardNumSpan.textContent = state.nfcCardNumber || "5432 8812 3204 1184";
  }
  if (cardHolderSpan && state.currentUser) {
    cardHolderSpan.textContent = state.nfcCardholderName || "SURESH KUMAR";
  }
  if (cardCreditsSpan) {
    let scoreClass = "Excellent";
    let scoreColor = "text-emerald-400";
    if (state.socialCredits >= 900) {
      scoreClass = "Elite A+";
      scoreColor = "text-yellow-400";
    } else if (state.socialCredits >= 850) {
      scoreClass = "Superior A";
      scoreColor = "text-blue-400";
    } else if (state.socialCredits >= 700) {
      scoreClass = "Excellent B";
      scoreColor = "text-emerald-400";
    } else {
      scoreClass = "Standard C";
      scoreColor = "text-rose-450";
    }
    cardCreditsSpan.textContent = `${state.socialCredits} (${scoreClass})`;
    cardCreditsSpan.className = `text-[10px] block font-bold ${scoreColor}`;
  }
}

function renderNfcLogsUI() {
  const container = document.getElementById("nfc-pass-activities-history");
  if (!container) return;
  
  if (state.nfcLogs.length === 0) {
    container.innerHTML = `
      <div class="text-center py-4 text-gray-400 text-[10px]">
        No NFC checkpoint activities logged in active session.
      </div>
    `;
    return;
  }
  
  container.innerHTML = "";
  state.nfcLogs.forEach(log => {
    const item = document.createElement("div");
    item.className = "flex justify-between items-center p-2.5 border-b border-gray-100 last:border-0";
    item.innerHTML = `
      <div class="text-left font-sans">
        <strong class="text-[11px] text-gray-800 block">${log.terminal}</strong>
        <span class="text-[9px] text-gray-400 block">${log.time} &bull; ID: ${log.id}</span>
      </div>
      
      <div class="text-right">
        <strong class="text-[11.5px] font-mono text-red-500 block">-${log.fee}</strong>
        <span class="text-[8.5px] font-mono text-green-600 block uppercase font-bold tracking-wide">${log.status}</span>
      </div>
    `;
    container.appendChild(item);
  });
}

// =====================================================================
// CITIZEN MUNICIPAL COMPLAINTS SYSTEM (S² DISPATCH & LEDGER SERVICE)
// =====================================================================

window.loadComplaintsOnStartup = function() {
  const cached = localStorage.getItem("vizag_complaints");
  if (cached) {
    state.complaints = JSON.parse(cached);
  } else {
    state.complaints = [
      {
        id: "COMP-2026-081F",
        title: "Major pothole block and broken asphalt lining",
        category: "Road Conditions",
        urgency: "Critical",
        node: "Park Street Esplanade",
        location: "Sudder Street near signal crossing",
        description: "Three deep craters causing severe slowdowns and water pooling at the intersection. Two vehicle axles have been reported damaged already. Urgent resurfacing requested.",
        reporter: "SURESH KUMAR",
        submitTime: "6/16/2026, 09:30 AM",
        status: "Dispatched",
        upvotes: 24,
        hasUpvoted: false,
        attachment: "park_street_crater_evidence.jpg"
      },
      {
        id: "COMP-2026-112B",
        title: "Broken riverfront promenade pedestrian rail collapsed",
        category: "Infrastructure Damage",
        urgency: "Medium",
        node: "Babughat Riverfront",
        location: "Opposite Circular Station Road boardwalk",
        description: "A 15-meter section of the pedestrian guard barrier has corroded completely and dropped to the lower water side. Kids play around this safety hazard. Needs metallic support pipe welding.",
        reporter: "HARITHA RAO",
        submitTime: "6/15/2026, 04:15 PM",
        status: "Investigating",
        upvotes: 18,
        hasUpvoted: false,
        attachment: null
      },
      {
        id: "COMP-2026-319A",
        title: "Streetlight solar charging array panel theft & dark-spot",
        category: "Security Issues",
        urgency: "Critical",
        node: "Rajarhat New Town",
        location: "Major IT Corridor backalley access path",
        description: "Battery backup storage and solar charge controller module were pried open and stripped overnight. The entire back alley is completely dark, posing security hazard for night shifts.",
        reporter: "ANISH RAJU",
        submitTime: "6/17/2026, 11:20 PM",
        status: "Pending Review",
        upvotes: 35,
        hasUpvoted: false,
        attachment: "it_panel_stolen_backups.jpg"
      },
      {
        id: "COMP-2026-004X",
        title: "Main municipal pipeline low flow gas trigger",
        category: "Gas/Water/Electricity Issues",
        urgency: "Low",
        node: "Salt Lake Sector V",
        location: "GP Block Sector-V gate-B pipeline junction",
        description: "Low gas flow pressure reading reported on household cooktops. Pipeline pressure shows 0.3 Bar drop below normal limits. Request municipal grid technical monitoring inspection.",
        reporter: "GOPAL SHASTRI",
        submitTime: "6/14/2026, 10:45 AM",
        status: "Resolved",
        upvotes: 6,
        hasUpvoted: false,
        attachment: null
      }
    ];
    localStorage.setItem("vizag_complaints", JSON.stringify(state.complaints));
  }
};

window.triggerComplaintFileInput = function() {
  const fileInput = document.getElementById("comp-file-input");
  if (fileInput) fileInput.click();
};

window.handleComplaintFileSelect = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  state.complaintsUploadedAttachment = file.name;

  const dragText = document.getElementById("comp-drag-text");
  const indicator = document.getElementById("comp-attachment-indicator");
  const nameSpan = document.getElementById("comp-attachment-name");

  if (dragText) dragText.textContent = "Photo Attachment Loaded";
  if (nameSpan) nameSpan.textContent = `📎 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
  if (indicator) indicator.classList.remove("hidden");
};

window.clearComplaintAttachment = function(event) {
  if (event) event.stopPropagation();

  state.complaintsUploadedAttachment = null;

  const dragText = document.getElementById("comp-drag-text");
  const indicator = document.getElementById("comp-attachment-indicator");
  const fileInput = document.getElementById("comp-file-input");

  if (dragText) dragText.textContent = "Tap or drop photo here";
  if (indicator) indicator.classList.add("hidden");
  if (fileInput) fileInput.value = "";
};

window.registerNewComplaint = function(event) {
  event.preventDefault();

  const titleVal = document.getElementById("comp-title-input")?.value?.trim();
  const catVal = document.getElementById("comp-category-input")?.value;
  const urgencyVal = document.getElementById("comp-urgency-input")?.value;
  const nodeVal = document.getElementById("comp-node-input")?.value;
  const locVal = document.getElementById("comp-location-input")?.value?.trim();
  const descVal = document.getElementById("comp-desc-input")?.value?.trim();

  if (!titleVal || !locVal || !descVal) {
    alert("Please fill out all required complaint fields.");
    return;
  }

  const newId = `COMP-2026-${Math.floor(100 + Math.random() * 900)}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
  const reporterName = state.currentUser ? state.currentUser.name.toUpperCase() : "GUEST CITIZEN";
  const currentTime = new Date().toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  const newComplaint = {
    id: newId,
    title: titleVal,
    category: catVal,
    urgency: urgencyVal,
    node: nodeVal,
    location: locVal,
    description: descVal,
    reporter: reporterName,
    submitTime: currentTime,
    status: "Pending Review",
    upvotes: 1,
    hasUpvoted: true, // reporter automatically upvotes their own filing
    attachment: state.complaintsUploadedAttachment
  };

  state.complaints.unshift(newComplaint);
  localStorage.setItem("vizag_complaints", JSON.stringify(state.complaints));

  // Reset form
  const form = document.getElementById("complaint-submit-form");
  if (form) form.reset();
  clearComplaintAttachment();

  showNotificationToast(`Incident ${newId} registered to S² decentral bank! Municipal response active.`);

  // Boost green score slightly for report diligence
  state.greenScore = Math.min(100, state.greenScore + 1);
  if (state.currentUser) {
    state.currentUser.greenScore = state.greenScore;
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
  }
  syncUserDisplays();

  updateUI();
};

window.upvoteComplaint = function(compId) {
  state.complaints = state.complaints.map(comp => {
    if (comp.id === compId) {
      if (comp.hasUpvoted) {
        // Toggle/remove support
        return {
          ...comp,
          upvotes: Math.max(0, comp.upvotes - 1),
          hasUpvoted: false
        };
      } else {
        // Add support
        return {
          ...comp,
          upvotes: comp.upvotes + 1,
          hasUpvoted: true
        };
      }
    }
    return comp;
  });

  localStorage.setItem("vizag_complaints", JSON.stringify(state.complaints));
  updateUI();
};

window.withdrawComplaint = function(compId) {
  if (!confirm("Are you sure you want to withdraw and delete this registered complaint from the municipal ledger?")) return;

  state.complaints = state.complaints.filter(comp => comp.id !== compId);
  localStorage.setItem("vizag_complaints", JSON.stringify(state.complaints));
  showNotificationToast(`Complaint report ${compId} successfully withdrawn.`);
  updateUI();
};

window.setComplaintCategoryFilter = function(category) {
  state.complaintsFilterCategory = category;

  // Toggle buttons visually
  const btns = {
    "All": "flt-comp-cat-All",
    "Road Conditions": "flt-comp-cat-road",
    "Infrastructure Damage": "flt-comp-cat-infra",
    "Security Issues": "flt-comp-cat-security",
    "Gas/Water/Electricity Issues": "flt-comp-cat-utility"
  };

  for (const cat in btns) {
    const el = document.getElementById(btns[cat]);
    if (el) {
      if (cat === category) {
        el.className = "px-3 py-1.5 rounded-full text-[10px] font-semibold bg-[#e8f0fe] text-[#1a73e8] border border-blue-100 transition-all cursor-pointer";
      } else {
        el.className = "px-3 py-1.5 rounded-full text-[10px] font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all cursor-pointer";
      }
    }
  }

  updateUI();
};

window.filterComplaints = function() {
  const searchInput = document.getElementById("comp-search-bar");
  state.complaintsSearchQuery = searchInput ? searchInput.value.trim().toLowerCase() : "";
  updateUI();
};

window.adminFastTrackResolve = function(compId) {
  state.complaints = state.complaints.map(comp => {
    if (comp.id === compId) {
      showNotificationToast(`Triggering automated S² response repair team to: ${comp.node}. Status: Resolved!`);
      // Award sustainability points
      state.greenScore = Math.min(100, state.greenScore + 4);
      if (state.currentUser) {
        state.currentUser.greenScore = state.greenScore;
        localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
        syncUserDisplays();
      }
      return {
        ...comp,
        status: "Resolved"
      };
    }
    return comp;
  });

  localStorage.setItem("vizag_complaints", JSON.stringify(state.complaints));
  updateUI();
};

window.renderComplaintsUI = function() {
  const container = document.getElementById("complaints-list-view");
  if (!container) return;

  const totalCnt = document.getElementById("cnt-complaints-total");
  const activeCnt = document.getElementById("cnt-complaints-active");
  const resolvedCnt = document.getElementById("cnt-complaints-resolved");

  // Keep a running update of dashboard counters
  const totalReportsNum = state.complaints.length;
  const activeReportsNum = state.complaints.filter(c => c.status !== "Resolved").length;
  const resolvedReportsNum = state.complaints.filter(c => c.status === "Resolved").length;

  if (totalCnt) totalCnt.textContent = `${totalReportsNum} Logged`;
  if (activeCnt) activeCnt.textContent = `${activeReportsNum} Active`;
  if (resolvedCnt) resolvedCnt.textContent = `${resolvedReportsNum} Resolved`;

  // Start with raw list
  let list = [...state.complaints];

  // Category filter
  if (state.complaintsFilterCategory !== "All") {
    list = list.filter(c => c.category === state.complaintsFilterCategory);
  }

  // Keywords search bar query matching
  if (state.complaintsSearchQuery) {
    const q = state.complaintsSearchQuery;
    list = list.filter(c => 
      c.id.toLowerCase().includes(q) ||
      c.title.toLowerCase().includes(q) ||
      c.reporter.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.node.toLowerCase().includes(q)
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 bg-gray-50 rounded-xl border border-[#dadce0] text-gray-500 text-xs font-sans">
        No complaints found matching the criteria. Add a new report to begin!
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  list.forEach(comp => {
    // Determine badges and colors
    let statusBg = "bg-amber-50 text-amber-700 border-amber-100";
    let statusText = "PENDING ASSESSMENT";

    if (comp.status === "Dispatched") {
      statusBg = "bg-blue-50 text-blue-700 border-blue-100";
      statusText = "UNIT DISPATCHED";
    } else if (comp.status === "Investigating") {
      statusBg = "bg-purple-50 text-purple-700 border-purple-100";
      statusText = "UNDER ACTIVE REVIEW";
    } else if (comp.status === "Resolved") {
      statusBg = "bg-emerald-50 text-emerald-700 border-emerald-100";
      statusText = "RESOLVED & CLOSED";
    }

    // Urgency indicators
    let urgencyColor = "text-gray-500 bg-gray-50 border-gray-100";
    if (comp.urgency === "Medium") {
      urgencyColor = "text-amber-600 bg-amber-50 border-amber-100";
    } else if (comp.urgency === "Critical") {
      urgencyColor = "text-rose-600 bg-rose-50 border-rose-100 font-bold";
    }

    // Check if voter matches active logged in user
    const isActiveUserReporter = state.currentUser && (comp.reporter === state.currentUser.name.toUpperCase());
    
    // Upvotes visual styles
    const upvoteBtnClass = comp.hasUpvoted 
      ? "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 transition-all scale-[1.02] cursor-pointer" 
      : "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 transition-all cursor-pointer";

    // Setup micro timeline checkpoints checkboxes
    const step1 = "✓";
    const step2 = (comp.status === "Investigating" || comp.status === "Dispatched" || comp.status === "Resolved") ? "✓" : "2";
    const step3 = (comp.status === "Dispatched" || comp.status === "Resolved") ? "✓" : "3";
    const step4 = (comp.status === "Resolved") ? "✓" : "4";

    const step1Color = "bg-emerald-500 text-white font-bold";
    const step2Color = (step2 === "✓") ? "bg-emerald-500 text-white font-bold" : "bg-gray-100 text-gray-400";
    const step3Color = (step3 === "✓") ? "bg-emerald-500 text-white font-bold" : "bg-gray-100 text-gray-400";
    const step4Color = (step4 === "✓") ? "bg-[#34a853] text-white font-bold ring-2 ring-emerald-300" : "bg-gray-100 text-gray-400";

    const card = document.createElement("div");
    card.className = "bg-white border border-[#dadce0] rounded-xl p-5 hover:shadow-md transition-all text-left flex flex-col gap-4";

    card.innerHTML = `
      <!-- Card header -->
      <div class="flex justify-between items-start gap-2">
        <div class="space-y-1">
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="text-[9.5px] font-mono font-bold bg-[#f1f3f4] text-gray-700 border border-gray-300 px-2 py-0.5 rounded">${comp.id}</span>
            <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded border ${statusBg} font-bold">${statusText}</span>
            <span class="text-[9.5px] font-sans px-2 py-0.5 rounded border ${urgencyColor} text-[8.5px] uppercase font-semibold">${comp.urgency} PRIORITY</span>
          </div>
          <h4 class="text-xs font-bold text-gray-800 pt-1">${comp.title}</h4>
        </div>
        <span class="text-[9.5px] font-sans text-gray-400 whitespace-nowrap">${comp.submitTime}</span>
      </div>

      <!-- Description content -->
      <div class="space-y-2 font-sans text-[11.5px] text-gray-600 leading-relaxed bg-[#fafafa]/50 p-3 rounded-lg border border-gray-100">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-[10px] font-semibold text-[#1a73e8] border-b border-gray-100 pb-1.5 mb-1.5 uppercase font-mono">
          <span>📍 Landmark: ${comp.node}</span>
          <span class="text-gray-500 normal-case">Spot: ${comp.location}</span>
        </div>
        <p>${comp.description}</p>
        
        ${comp.attachment 
          ? `
            <div class="mt-3.5 flex items-center gap-2 text-[10px] font-mono bg-blue-50/50 text-blue-800 p-2 rounded border border-blue-100 w-max max-w-full">
              <span>🖼️ Attached Evidence:</span>
              <strong class="underline truncate block max-w-[200px]" title="${comp.attachment}">${comp.attachment}</strong>
            </div>
            `
          : ""
        }
      </div>

      <!-- Resolution timeline tracking -->
      <div class="border-t border-b border-gray-100 py-3.5 select-none font-sans">
        <div class="flex justify-between items-center text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">
          <span>S² Tracker Progress</span>
          <span class="text-blue-600 font-mono">Ledger Verified</span>
        </div>
        
        <div class="relative flex justify-between items-center px-4">
          <!-- Connector line -->
          <div class="absolute left-6 right-6 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <!-- Node 1 -->
          <div class="relative z-10 flex flex-col items-center gap-1 bg-white px-2">
            <span class="h-5 w-5 rounded-full flex items-center justify-center text-[9px] ${step1Color}">${step1}</span>
            <span class="text-[8px] font-bold text-gray-500 uppercase">Filed</span>
          </div>

          <!-- Node 2 -->
          <div class="relative z-10 flex flex-col items-center gap-1 bg-white px-2">
            <span class="h-5 w-5 rounded-full flex items-center justify-center text-[9px] ${step2Color}">${step2}</span>
            <span class="text-[8px] font-bold text-gray-500 uppercase">Review</span>
          </div>

          <!-- Node 3 -->
          <div class="relative z-10 flex flex-col items-center gap-1 bg-white px-2">
            <span class="h-5 w-5 rounded-full flex items-center justify-center text-[9px] ${step3Color}">${step3}</span>
            <span class="text-[8px] font-bold text-gray-500 uppercase">Crew Work</span>
          </div>

          <!-- Node 4 -->
          <div class="relative z-10 flex flex-col items-center gap-1 bg-white px-2">
            <span class="h-5 w-5 rounded-full flex items-center justify-center text-[9px] ${step4Color}">${step4}</span>
            <span class="text-[8px] font-bold text-gray-500 uppercase">Closed</span>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="flex justify-between items-center pt-1 flex-wrap gap-2 text-xs">
        <div class="text-[10px] text-gray-400 font-sans">
          Reporter: <strong class="text-gray-700 font-semibold uppercase">${comp.reporter}</strong>
        </div>

        <div class="flex items-center gap-2">
          <!-- Fast track mock trigger for interactive immersion -->
          ${comp.status !== "Resolved" 
            ? `
              <button 
                onclick="adminFastTrackResolve('${comp.id}')"
                class="bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 text-[10px] px-2.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-1"
                title="Simulate municipal technician repair dispatch"
              >
                ⚡ Fast-Track
              </button>
              `
            : ""
          }

          <!-- Support Upvote action -->
          <button 
            onclick="upvoteComplaint('${comp.id}')"
            class="${upvoteBtnClass}"
            title="${comp.hasUpvoted ? 'Retract community endorsement' : 'Back this report to expedite review'}"
          >
            <span>👍</span>
            <span>Support${comp.upvotes > 0 ? ` (${comp.upvotes})` : ""}</span>
          </button>

          <!-- Withdraw reporter action -->
          ${isActiveUserReporter 
            ? `
              <button 
                onclick="withdrawComplaint('${comp.id}')"
                class="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-all cursor-pointer"
                title="Immediately delete this complaint report"
              >
                🗑️ Withdraw
              </button>
              `
            : `
              <button 
                disabled
                class="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed opacity-50"
                title="Only available for files submitted by yourself."
              >
                🗑️ Withdraw
              </button>
              `
          }
        </div>
      </div>
    `;

    container.appendChild(card);
  });
};

// =====================================================================
// S² STANDALONE SOCIAL WORK & STATE CREDITS SYSTEM
// =====================================================================

window.loadSocialOnStartup = function() {
  const cachedCredits = localStorage.getItem("vizag_social_credits");
  if (cachedCredits) {
    state.socialCredits = parseInt(cachedCredits, 10);
  } else {
    state.socialCredits = 780; // Default Excellent rating
    localStorage.setItem("vizag_social_credits", state.socialCredits.toString());
  }

  const cachedPosts = localStorage.getItem("vizag_social_posts");
  if (cachedPosts) {
    state.socialPosts = JSON.parse(cachedPosts);
  } else {
    state.socialPosts = [
      {
        id: "SVC-2026-089A",
        title: "Rabindra Sarobar Lake Garbage Cleanliness Mission",
        category: "Public Cleanliness",
        caption: "Gathered 4 solar garbage collection carts of trash from lake pathways.",
        hashtags: "#CleanKolkata #RabindraSarobar #S2GreenPass",
        description: "Volunteered with Southern Avenue resident welfare cell around the Rabindra Sarobar coast. Gathered 4 full automated pneumatic carts of macroplastics, bottles, and discarded plastic netting. Verified completely by city sanitation drone sensors.",
        reporter: "SURESH KUMAR",
        video: "rk_beach_cleanliness_validation_4k.mp4",
        submitTime: "6/18/2026, 02:45 PM",
        rewards: 90,
        upvotes: 42,
        hasUpvoted: false
      },
      {
        id: "SVC-2026-112B",
        title: "Community Seva: Public Food Kitchen distribution",
        category: "Seva",
        caption: "Served hot lunch packs to 240 street cleaners and transit team crews during hot afternoon shifts.",
        hashtags: "#SevaKolkata #CommunityKitchen #TransitHeroes",
        description: "Organized a temporary Seva checkpoint opposite Howrah bus line depot. Distributed eco-leaf packed nutrition packs. Supported by the S² central food-surplus system allocation logic.",
        reporter: "HARITHA RAO",
        video: "depot_seva_hotpack_proof.mp4",
        submitTime: "6/17/2026, 11:30 AM",
        rewards: 70,
        upvotes: 35,
        hasUpvoted: false
      },
      {
        id: "SVC-2026-302C",
        title: "Elderly Home Digital Wallet Literacy Program",
        category: "Elderly Assistance",
        caption: "Educated 35 veteran citizens to safely checkout with Google-styled e-Rupee red envelope vouchers.",
        hashtags: "#DigitalLiteracy #SeniorsMatter #ERupeeRevolution",
        description: "Conducted a 2-hour offline tutorial seminar at Siripuram veteran wellness park. Assisted elderly women with security codes, NFC scanning, and automated utility bill scheduling instructions.",
        reporter: "ANISH RAJU",
        video: "siripuram_literacy_coaching.mp4",
        submitTime: "6/16/2026, 05:10 PM",
        rewards: 50,
        upvotes: 21,
        hasUpvoted: false
      }
    ];
    localStorage.setItem("vizag_social_posts", JSON.stringify(state.socialPosts));
  }

  // Set up drag and drop handler for Social Work file upload
  setTimeout(() => {
    bindSocialDragDropZone();
  }, 500);
};

function bindSocialDragDropZone() {
  const zone = document.getElementById("social-drag-zone");
  if (!zone) return;

  // Prevent browser default routing behaviors
  ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {
    zone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
    }, false);
  });

  // Toggle active zone styles
  ["dragenter", "dragover"].forEach(eventName => {
    zone.addEventListener(eventName, () => {
      zone.classList.add("border-rose-500", "bg-rose-50/40");
    }, false);
  });

  ["dragleave", "drop"].forEach(eventName => {
    zone.addEventListener(eventName, () => {
      zone.classList.remove("border-rose-500", "bg-rose-50/40");
    }, false);
  });

  // Catch file drops
  zone.addEventListener("drop", (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files && files[0]) {
      const fileInput = document.getElementById("social-file-input");
      if (fileInput) {
        fileInput.files = files;
        // Trigger select logic
        const eventObj = { target: { files: files } };
        window.handleSocialFileSelect(eventObj);
      }
    }
  });
}

window.triggerSocialFileInput = function() {
  const fileInput = document.getElementById("social-file-input");
  if (fileInput) fileInput.click();
};

window.handleSocialFileSelect = function(event) {
  const file = event.target.files[0];
  if (!file) return;

  // Store in state
  state.socialUploadedVideo = file.name;

  const dragText = document.getElementById("social-drag-text");
  const indicator = document.getElementById("social-attachment-indicator");
  const nameSpan = document.getElementById("social-attachment-name");

  if (dragText) dragText.textContent = "Welfare Video Loaded";
  if (nameSpan) nameSpan.textContent = `🎥 ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
  if (indicator) indicator.classList.remove("hidden");
};

window.clearSocialAttachment = function(event) {
  if (event) event.stopPropagation();

  state.socialUploadedVideo = null;

  const dragText = document.getElementById("social-drag-text");
  const indicator = document.getElementById("social-attachment-indicator");
  const fileInput = document.getElementById("social-file-input");

  if (dragText) dragText.textContent = "Tap or drop welfare video proof";
  if (indicator) indicator.classList.add("hidden");
  if (fileInput) fileInput.value = "";
};

window.toggleCustomSocialCategoryInput = function() {
  const select = document.getElementById("social-category-input");
  const customDiv = document.getElementById("social-custom-category-div");
  const customInput = document.getElementById("social-custom-category-input");

  if (select && customDiv) {
    if (select.value === "Custom") {
      customDiv.classList.remove("hidden");
      if (customInput) customInput.required = true;
    } else {
      customDiv.classList.add("hidden");
      if (customInput) {
        customInput.required = false;
        customInput.value = "";
      }
    }
  }
};

window.submitSocialWorkPost = function(event) {
  event.preventDefault();

  const titleVal = document.getElementById("social-title-input")?.value?.trim();
  let categoryVal = document.getElementById("social-category-input")?.value;
  const rewardVal = parseInt(document.getElementById("social-reward-input")?.value || "50", 10);
  const captionVal = document.getElementById("social-hashtags-input")?.value?.trim() || "";
  const descVal = document.getElementById("social-desc-input")?.value?.trim();

  // Custom Category Handling
  if (categoryVal === "Custom") {
    const customText = document.getElementById("social-custom-category-input")?.value?.trim();
    if (!customText) {
      alert("Please specify your custom social service category.");
      return;
    }
    categoryVal = customText;
  }

  if (!titleVal || !descVal) {
    alert("Please fill out the public service title and descriptive writeup.");
    return;
  }

  // Fallback video filename if none uploaded
  const videoFile = state.socialUploadedVideo || `civic_work_recording_${Math.floor(100+Math.random()*900)}.mp4`;

  const newId = `SVC-2026-${Math.floor(100 + Math.random() * 900)}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
  const reporterName = state.currentUser ? state.currentUser.name.toUpperCase() : "GUEST CITIZEN";
  const currentTime = new Date().toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  // Extract first hashtag or generate some if none supplied
  let hashtags = captionVal;
  if (!hashtags.includes("#")) {
    // Convert text or generate defaults based on category
    hashtags = "#" + categoryVal.replace(/\s+/g, "") + " " + (captionVal ? captionVal.split(" ").map(w => w.startsWith("#") ? w : "#" + w).join(" ") : "#KolkataSeva");
  }

  // Create new Post
  const newPost = {
    id: newId,
    title: titleVal,
    category: categoryVal,
    caption: titleVal,
    hashtags: hashtags,
    description: descVal,
    reporter: reporterName,
    video: videoFile,
    submitTime: currentTime,
    rewards: rewardVal,
    upvotes: 1,
    hasUpvoted: true
  };

  // Add to State
  state.socialPosts.unshift(newPost);
  state.socialCredits = Math.min(1000, state.socialCredits + rewardVal); // Max credit score is 1000

  // Persist State
  localStorage.setItem("vizag_social_posts", JSON.stringify(state.socialPosts));
  localStorage.setItem("vizag_social_credits", state.socialCredits.toString());

  // Reset form
  const form = document.getElementById("social-submit-form");
  if (form) form.reset();
  
  // Custom Reset custom field
  const customDiv = document.getElementById("social-custom-category-div");
  if (customDiv) customDiv.classList.add("hidden");

  clearSocialAttachment();

  // Toast notification
  showNotificationToast(`Welfare proof validated. Received +${rewardVal} Social Credit Score!`);

  // Enhance green score slightly for community diligence
  state.greenScore = Math.min(100, state.greenScore + 3);
  if (state.currentUser) {
    state.currentUser.greenScore = state.greenScore;
    localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
  }
  syncUserDisplays();

  updateUI();
};

window.upvoteSocialPost = function(postId) {
  state.socialPosts = state.socialPosts.map(post => {
    if (post.id === postId) {
      if (post.hasUpvoted) {
        return {
          ...post,
          upvotes: Math.max(0, post.upvotes - 1),
          hasUpvoted: false
        };
      } else {
        return {
          ...post,
          upvotes: post.upvotes + 1,
          hasUpvoted: true
        };
      }
    }
    return post;
  });

  localStorage.setItem("vizag_social_posts", JSON.stringify(state.socialPosts));
  updateUI();
};

window.withdrawSocialPost = function(postId) {
  const post = state.socialPosts.find(p => p.id === postId);
  if (!post) return;

  if (!confirm(`Are you sure you want to withdraw this social service post? This will detract the prior ${post.rewards} Social Credits from your citizen profile.`)) return;

  // Subtract credits
  state.socialCredits = Math.max(300, state.socialCredits - post.rewards); // Min rating is 300
  state.socialPosts = state.socialPosts.filter(p => p.id !== postId);

  localStorage.setItem("vizag_social_posts", JSON.stringify(state.socialPosts));
  localStorage.setItem("vizag_social_credits", state.socialCredits.toString());

  showNotificationToast(`Post withdrawn. Deducted -${post.rewards} from State Credit profile.`);
  updateUI();
};

window.setSocialCategoryFilter = function(category) {
  state.socialCategoryFilter = category;

  // Highlight active filter tab visually
  const btns = {
    "All": "flt-social-cat-All",
    "NGO Missions": "flt-social-cat-ngo",
    "Seva": "flt-social-cat-seva",
    "Public Cleanliness": "flt-social-cat-clean",
    "Elderly Assistance": "flt-social-cat-elderly",
    "Blood Donation": "flt-social-cat-medical"
  };

  for (const cat in btns) {
    const el = document.getElementById(btns[cat]);
    if (el) {
      if (cat === category) {
        el.className = "px-3 py-1.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-600 border border-rose-100 transition-all cursor-pointer";
      } else {
        el.className = "px-3 py-1.5 rounded-full text-[10px] font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all cursor-pointer";
      }
    }
  }

  updateUI();
};

window.filterSocialPosts = function() {
  const input = document.getElementById("social-search-bar");
  state.socialSearchQuery = input ? input.value.trim().toLowerCase() : "";
  updateUI();
};

// Simulate pseudo video playing overlay
window.simulateVideoPlay = function(postId, videoName) {
  // Find the video frame element
  const frame = document.getElementById(`video-frame-${postId}`);
  if (!frame) return;

  const btn = document.getElementById(`play-btn-${postId}`);
  const timeline = document.getElementById(`video-timeline-${postId}`);

  if (frame.classList.contains("playing-active")) {
    // Pause
    frame.classList.remove("playing-active");
    if (btn) btn.innerHTML = "▶ PLAY VIDEO PROOF";
    showNotificationToast("Buffered video playback paused.");
    return;
  }

  frame.classList.add("playing-active");
  if (btn) btn.innerHTML = "⏸ PAUSE SIMULATOR";
  showNotificationToast(`Streaming offline proof chunk: ${videoName}`);

  // Simulating playback scrubbing logic
  let pct = 0;
  const interval = setInterval(() => {
    if (!frame.classList.contains("playing-active")) {
      clearInterval(interval);
      return;
    }
    pct += 5;
    if (timeline) timeline.style.width = `${pct}%`;
    if (pct >= 100) {
      clearInterval(interval);
      frame.classList.remove("playing-active");
      if (btn) btn.innerHTML = "▶ REPLAY PROOF";
      if (timeline) timeline.style.width = "0%";
      showNotificationToast("Welfare transaction video validation loop complete!");
    }
  }, 250);
};

window.changeSocialSubTab = function(tab) {
  state.socialSubTab = tab;
  updateUI();
};

window.renderSocialLeaderboard = function() {
  const barsContainer = document.getElementById("leaderboard-bars-container");
  const tableContainer = document.getElementById("leaderboard-table-container");
  
  if (!barsContainer || !tableContainer) return;
  
  // Base list of premium citizens loaded dynamically
  let citizens = window.getCitizensList();
  
  // Sort by score descending
  citizens.sort((a, b) => b.score - a.score);
  
  // Update Podium labels
  const p1Name = document.getElementById("podium-rank-1-name");
  const p1Score = document.getElementById("podium-rank-1-score");
  const p2Name = document.getElementById("podium-rank-2-name");
  const p2Score = document.getElementById("podium-rank-2-score");
  const p3Name = document.getElementById("podium-rank-3-name");
  const p3Score = document.getElementById("podium-rank-3-score");
  
  if (p1Name && citizens[0]) p1Name.textContent = citizens[0].name + (citizens[0].isCurrent ? " (YOU)" : "");
  if (p1Score && citizens[0]) p1Score.textContent = `${citizens[0].score} Pts`;
  
  if (p2Name && citizens[1]) p2Name.textContent = citizens[1].name + (citizens[1].isCurrent ? " (YOU)" : "");
  if (p2Score && citizens[1]) p2Score.textContent = `${citizens[1].score} Pts`;
  
  if (p3Name && citizens[2]) p3Name.textContent = citizens[2].name + (citizens[2].isCurrent ? " (YOU)" : "");
  if (p3Score && citizens[2]) p3Score.textContent = `${citizens[2].score} Pts`;

  // Render Visual Bar Density
  barsContainer.innerHTML = citizens.map((citizen, index) => {
    const percentage = Math.round((citizen.score / 1000) * 100);
    const accentColor = citizen.isCurrent ? 'bg-rose-500 shadow-sm' : 'bg-blue-500';
    const borderAccent = citizen.isCurrent ? 'border-l-4 border-rose-500 pl-2.5' : 'pl-1';
    const nameHighlight = citizen.isCurrent ? 'font-bold text-rose-600' : 'text-gray-700 font-medium';
    
    return `
      <div class="space-y-1.5 ${borderAccent} transition-all duration-150 py-0.5">
        <div class="flex justify-between items-center text-xs">
          <span class="font-sans flex items-center gap-1.5">
            <span class="text-gray-400 font-mono text-[9.5px]">#${index + 1}</span>
            <span class="${nameHighlight}">${citizen.name}</span>
            ${citizen.isCurrent ? `<span class="bg-rose-100 text-rose-700 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider scale-[0.9]">You</span>` : ''}
          </span>
          <span class="font-mono text-gray-500 text-[10px] font-semibold">${citizen.score} Pts</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden flex">
          <div class="${accentColor} h-full rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
        </div>
      </div>
    `;
  }).join('');
  
  function getCitizenTierName(score) {
    if (score >= 900) return "Tier IV";
    if (score >= 850) return "Tier III";
    if (score >= 700) return "Tier II";
    return "Tier I";
  }

  // Render Table List
  tableContainer.innerHTML = citizens.map((citizen, index) => {
    let trMedal = `<span class="h-6 w-6 bg-gray-100 border border-gray-200 text-gray-600 text-[10px] rounded-full flex items-center justify-center font-mono font-bold select-none">${index + 1}</span>`;
    if (index === 0) trMedal = `<span class="text-base select-none">🥇</span>`;
    if (index === 1) trMedal = `<span class="text-base select-none">🥈</span>`;
    if (index === 2) trMedal = `<span class="text-base select-none">🥉</span>`;
    
    const highlightRow = citizen.isCurrent ? 'bg-rose-50/50 font-semibold' : '';
    const badgeColor = citizen.score >= 900 ? 'bg-yellow-50 text-yellow-800 border-yellow-200' :
                       citizen.score >= 850 ? 'bg-blue-50 text-blue-800 border-blue-200' :
                       citizen.score >= 700 ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                                              'bg-rose-50 text-rose-800 border-rose-200';
                                              
    return `
      <div class="px-4 py-3 flex justify-between items-center gap-4 ${highlightRow} hover:bg-gray-50/70 transition-all">
        <div class="flex items-center gap-3.5 min-w-0">
          <div class="flex-shrink-0 flex items-center justify-center">${trMedal}</div>
          <div class="min-w-0 font-sans text-left">
            <span class="text-xs font-bold text-gray-800 block truncate flex items-center gap-1.5 leading-tight">
              ${citizen.name}
              ${citizen.isCurrent ? `<span class="bg-rose-500 h-1.5 w-1.5 rounded-full animate-ping"></span>` : ''}
            </span>
            <span class="text-[9.5px] text-[#5f6368] block mt-0.5">${citizen.count} Certified Missions &bull; ${citizen.tier} Class</span>
          </div>
        </div>
        <div class="flex items-center gap-2.5">
          <span class="border ${badgeColor} text-[9.5px] px-2 py-0.5 rounded font-bold font-mono">
            ${citizen.score} Pts
          </span>
          <button 
            onclick="congratulateCitizen('${citizen.name}')" 
            class="text-[10px] bg-white hover:bg-rose-50 hover:text-rose-600 border border-gray-200 hover:border-rose-200 text-gray-600 rounded px-2.5 py-1.5 font-medium transition-all cursor-pointer font-sans"
          >
            👏 Applaud
          </button>
        </div>
      </div>
    `;
  }).join('');
};

window.congratulateCitizen = function(name) {
  showNotificationToast(`Acknowledged ${name}'s stellar community contribution! Applaud broadcasted successfully.`);
};

window.renderSocialUI = function() {
  const container = document.getElementById("social-feed-view");
  if (!container) return;

  // Sync subtabs UI classes and states
  const subTabBtnFeed = document.getElementById("subtab-btn-feed");
  const subTabBtnLeaderboard = document.getElementById("subtab-btn-leaderboard");
  const secFeed = document.getElementById("social-feed-section");
  const secLeaderboard = document.getElementById("social-leaderboard-section");

  if (state.socialSubTab === "leaderboard") {
    if (subTabBtnFeed) {
      subTabBtnFeed.className = "px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-50 border border-transparent";
    }
    if (subTabBtnLeaderboard) {
      subTabBtnLeaderboard.className = "px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer bg-amber-50 text-amber-700 border border-amber-250";
    }
    if (secFeed) secFeed.classList.add("hidden");
    if (secLeaderboard) secLeaderboard.classList.remove("hidden");
    renderSocialLeaderboard();
  } else {
    if (subTabBtnFeed) {
      subTabBtnFeed.className = "px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer bg-rose-50 text-rose-600 border border-rose-100";
    }
    if (subTabBtnLeaderboard) {
      subTabBtnLeaderboard.className = "px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer text-gray-500 hover:text-gray-700 hover:bg-gray-50 border border-transparent";
    }
    if (secFeed) secFeed.classList.remove("hidden");
    if (secLeaderboard) secLeaderboard.classList.add("hidden");
  }

  // Sync top score badges
  const ratingGauge = document.getElementById("social-rating-gauge");
  const tierText = document.getElementById("social-tier-text");
  const missionsCount = document.getElementById("social-missions-count");
  const totalCountHeader = document.getElementById("cnt-social-total");
  const creditsEarnedHeader = document.getElementById("cnt-social-credits-earned");

  // Determine Tier and class rating
  let tierLabel = "Citizen Class: Tier I (Standard)";
  let scoreClass = "Excellent";
  let gaugeColor = "border-emerald-500 text-emerald-600 font-bold";

  if (state.socialCredits >= 900) {
    tierLabel = "Citizen Class: Master Tier IV (Elite)";
    scoreClass = "Outstanding A+";
    gaugeColor = "border-amber-500 text-amber-600 font-extrabold shadow-sm ring-2 ring-amber-100";
  } else if (state.socialCredits >= 850) {
    tierLabel = "Citizen Class: Tier III (Honorary)";
    scoreClass = "Superior A";
    gaugeColor = "border-blue-500 text-blue-600 font-bold";
  } else if (state.socialCredits >= 700) {
    tierLabel = "Citizen Class: Tier II (Active)";
    scoreClass = "Excellent B";
    gaugeColor = "border-emerald-500 text-emerald-600 font-bold";
  } else {
    tierLabel = "Citizen Class: Tier I (Standard)";
    scoreClass = "Standard C";
    gaugeColor = "border-rose-400 text-rose-500 font-bold";
  }

  if (ratingGauge) {
    ratingGauge.textContent = state.socialCredits;
    ratingGauge.className = `h-16 w-16 rounded-full border-4 flex items-center justify-center font-bold text-base transition-all ${gaugeColor}`;
    const badgeLabel = ratingGauge.nextElementSibling;
    if (badgeLabel) {
      badgeLabel.textContent = scoreClass;
      badgeLabel.className = `absolute -bottom-1 text-white rounded-full px-2 py-0.5 text-[8px] uppercase tracking-wider font-bold ${
        state.socialCredits >= 900 ? "bg-amber-500" : state.socialCredits >= 850 ? "bg-blue-500" : state.socialCredits >= 700 ? "bg-emerald-600" : "bg-rose-500"
      }`;
    }
  }

  if (tierText) tierText.textContent = tierLabel;
  if (missionsCount) missionsCount.textContent = `${state.socialPosts.length} Verified`;
  if (totalCountHeader) totalCountHeader.textContent = `${state.socialPosts.length} Active`;
  
  const totalCreditsEarned = state.socialPosts.reduce((acc, p) => acc + p.rewards, 0);
  if (creditsEarnedHeader) creditsEarnedHeader.textContent = `+${totalCreditsEarned} Credits Earned`;

  // Start building the list
  let filteredList = [...state.socialPosts];

  // Apply Category Filter
  if (state.socialCategoryFilter !== "All") {
    filteredList = filteredList.filter(p => p.category === state.socialCategoryFilter);
  }

  // Apply Keyword Search filter
  if (state.socialSearchQuery) {
    const q = state.socialSearchQuery;
    filteredList = filteredList.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.caption.toLowerCase().includes(q) ||
      p.hashtags.toLowerCase().includes(q) ||
      p.reporter.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  if (filteredList.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 bg-gray-50 rounded-xl border border-[#dadce0] text-gray-500 text-xs font-sans">
        No social contribution posts matching the filter parameters. Certify your first service to update the ledger!
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  filteredList.forEach(post => {
    const isSelfPost = state.currentUser && post.reporter === state.currentUser.name.toUpperCase();
    
    // Choose styling based on category
    let catBadgeColor = "bg-rose-50 text-rose-700 border-rose-200";
    if (post.category === "Seva") {
      catBadgeColor = "bg-amber-50 text-amber-800 border-amber-200";
    } else if (post.category === "Public Cleanliness") {
      catBadgeColor = "bg-emerald-50 text-emerald-800 border-emerald-200";
    } else if (post.category === "Elderly Assistance") {
      catBadgeColor = "bg-blue-50 text-blue-800 border-blue-200";
    }

    const upvoteBtnStyle = post.hasUpvoted
      ? "flex items-center gap-1 bg-rose-50 text-rose-600 border border-rose-200 px-3 py-1.5 rounded-lg text-xs font-bold transition-all scale-[1.01]"
      : "flex items-center gap-1 bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-lg text-xs font-medium transition-all";

    const card = document.createElement("div");
    card.className = "bg-white border border-[#dadce0] rounded-xl p-5 hover:shadow-md transition-all text-left flex flex-col gap-4";

    // Split hashtags into styled visual pills
    const tagsHtml = post.hashtags.split(/\s+/).filter(t => t.startsWith("#")).map(tag => {
      return `<span class="text-[10px] filter hover:brightness-95 transition-all text-blue-600 font-mono font-medium">${tag}</span>`;
    }).join(" ");

    card.innerHTML = `
      <!-- Card top metrics -->
      <div class="flex justify-between items-start gap-2">
        <div class="space-y-0.5">
          <div class="flex flex-wrap items-center gap-1.5">
            <span class="text-[9px] font-mono font-bold bg-gray-100 text-gray-600 border border-gray-300 px-1.5 py-0.5 rounded">${post.id}</span>
            <span class="text-[9px] font-sans font-bold px-2 py-0.5 rounded border ${catBadgeColor}">${post.category}</span>
            <span class="text-[9px] font-mono bg-amber-50 text-amber-700 font-extrabold border border-amber-200 px-2 py-0.5 rounded">👑 VALUE: +${post.rewards} PTS</span>
          </div>
          <h4 class="text-xs font-bold text-gray-800 pt-1 leading-snug">${post.title}</h4>
        </div>
        <span class="text-[9.5px] font-sans text-gray-400 font-medium whitespace-nowrap">${post.submitTime}</span>
      </div>

      <!-- Descriptive writeup -->
      <div class="space-y-2 pointer-events-auto">
        <p class="text-[11.5px] font-sans text-gray-600 leading-relaxed">${post.description}</p>
        <div class="flex flex-wrap gap-2 pt-1 border-t border-gray-100 mt-2">
          ${tagsHtml}
        </div>
      </div>

      <!-- Highly interactive Video Proof Mock Panel -->
      <div 
        id="video-frame-${post.id}"
        class="group relative h-40 bg-[#121212] overflow-hidden rounded-xl border border-gray-800 flex flex-col items-center justify-center transition-all"
      >
        <!-- Overlay pseudo overlay controls -->
        <div class="absolute inset-x-0 top-0 bg-gradient-to-b from-black/80 to-transparent p-3 text-white flex justify-between items-center z-10 select-none">
          <span class="text-[9.5px] font-mono tracking-wide flex items-center gap-1.5 font-bold text-rose-400">
            <span class="h-1.5 w-1.5 rounded-full bg-rose-500 animate-ping"></span>
            LEDGER VIDEO PROOF VALIDATION
          </span>
          <span class="text-[9px] text-gray-400 font-mono">${post.video}</span>
        </div>

        <!-- Center big icon -->
        <div class="flex flex-col items-center gap-1 text-center text-white/90 z-10 transition-transform hover:scale-105 select-none">
          <div class="h-12 w-12 bg-rose-600/90 text-white rounded-full flex items-center justify-center text-lg shadow-md cursor-pointer border border-rose-400/30" onclick="simulateVideoPlay('${post.id}', '${post.video}')">
            🎬
          </div>
          <button 
            id="play-btn-${post.id}"
            onclick="simulateVideoPlay('${post.id}', '${post.video}')" 
            class="text-[10px] font-mono font-bold uppercase tracking-wider bg-black/60 hover:bg-black/95 transition-all text-white px-3 py-1.5 rounded-lg border border-white/10 mt-1 cursor-pointer"
          >
            ▶ PLAY VIDEO PROOF
          </button>
        </div>

        <!-- Video progress bar mock -->
        <div class="absolute inset-x-0 bottom-0 bg-gray-900 border-t border-white/5 h-2 w-full z-10">
          <div id="video-timeline-${post.id}" class="bg-rose-500 h-full w-0 transition-all duration-300"></div>
        </div>

        <!-- Decorative background mesh referencing video context -->
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent)] group-hover:scale-110 duration-1000"></div>
      </div>

      <!-- Action Footer with upvote support and reporter credentials -->
      <div class="flex justify-between items-center flex-wrap gap-2 text-xs pt-1 border-t border-gray-100">
        <div class="text-[10px] text-gray-400">
          Certified by: <strong class="text-gray-700 font-semibold uppercase">${post.reporter}</strong>
        </div>

        <div class="flex items-center gap-2">
          <!-- Upvote support -->
          <button 
            onclick="upvoteSocialPost('${post.id}')"
            class="${upvoteBtnStyle}"
            title="${post.hasUpvoted ? 'Retract endorsement' : 'Endorse this citizen action to build communal trust'}"
          >
            <span>👍 Support Community</span>
            <span>(${post.upvotes})</span>
          </button>

          <!-- Deletion drawer -->
          ${isSelfPost 
            ? `
              <button 
                onclick="withdrawSocialPost('${post.id}')"
                class="bg-red-50 hover:bg-red-100 text-red-600 border border-red-100 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                title="Immediately delete post and retract credits"
              >
                🗑️ Withdraw Post
              </button>
              `
            : `
              <button 
                disabled
                class="bg-gray-50 text-gray-400 border border-gray-100 px-3 py-1.5 rounded-lg text-xs cursor-not-allowed opacity-40 select-none"
                title="Only available for actions submitted by yourself."
              >
                🗑️ Withdraw Post
              </button>
              `
          }
        </div>
      </div>
    `;

    container.appendChild(card);
  });
};

// =====================================================================
// NEW FEATURES: CITY EVENTS PLANNER & GOVT ADMIN PORTAL
// =====================================================================

window.getCitizenTierName = function(score) {
  if (score >= 900) return "Tier IV";
  if (score >= 850) return "Tier III";
  if (score >= 700) return "Tier II";
  return "Tier I";
};

window.getCitizensList = function() {
  const activeUserName = state.currentUser ? state.currentUser.name : "Guest Citizen";
  
  const cachedScores = localStorage.getItem("vizag_citizen_scores");
  let otherScores = cachedScores ? JSON.parse(cachedScores) : {
    "DR. RAMA DEVI": 950,
    "HARITHA RAO": 880,
    "SURESH KUMAR": 840,
    "ANISH RAJU": 720,
    "PRANAV ARYA": 680
  };
  
  return [
    { name: "DR. RAMA DEVI", score: otherScores["DR. RAMA DEVI"] ?? 950, isCurrent: false, tier: "Tier IV", count: 8 },
    { name: "HARITHA RAO", score: otherScores["HARITHA RAO"] ?? 880, isCurrent: false, tier: "Tier III", count: 5 },
    { name: "SURESH KUMAR", score: otherScores["SURESH KUMAR"] ?? 840, isCurrent: false, tier: "Tier III", count: 4 },
    { name: activeUserName.toUpperCase(), score: state.socialCredits, isCurrent: true, tier: window.getCitizenTierName(state.socialCredits), count: state.socialPosts.length + 3 },
    { name: "ANISH RAJU", score: otherScores["ANISH RAJU"] ?? 720, isCurrent: false, tier: "Tier II", count: 2 },
    { name: "PRANAV ARYA", score: otherScores["PRANAV ARYA"] ?? 680, isCurrent: false, tier: "Tier I", count: 1 }
  ];
};

window.renderEventsUI = function() {
  const listContainer = document.getElementById("city-events-list-container");
  const registeredCountSpan = document.getElementById("my-registered-events-count");
  const registeredContainer = document.getElementById("my-registered-events-container");
  const totalEventsSpan = document.getElementById("city-events-count");

  if (!listContainer) return;

  // 1. Filter and search
  let filtered = [...state.cityEvents];
  if (state.eventFilterCategory !== "All") {
    filtered = filtered.filter(e => e.category === state.eventFilterCategory);
  }
  if (state.eventSearchQuery) {
    const q = state.eventSearchQuery.toLowerCase();
    filtered = filtered.filter(e => 
      e.title.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.location.toLowerCase().includes(q)
    );
  }

  if (totalEventsSpan) totalEventsSpan.textContent = `${filtered.length} Available`;

  // Render events finder list
  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-12 bg-gray-50 border border-gray-200 rounded-xl text-gray-500 text-xs font-sans">
        No scheduled events found matching "${state.eventSearchQuery || state.eventFilterCategory}". Add custom ones via Admin Portal!
      </div>
    `;
  } else {
    listContainer.innerHTML = filtered.map(evt => {
      const isBooked = state.registeredEvents.includes(evt.id);
      const feeLabel = evt.fee === 0 ? "FREE ENTRY" : `₹${evt.fee}`;
      const badgeStyle = evt.category === "Government" 
        ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
        : "bg-sky-50 text-sky-700 border-sky-100";
      
      const buttonHtml = isBooked 
        ? `<button onclick="cancelEventPass('${evt.id}')" class="bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer font-sans">Cancel Booking</button>`
        : `<button onclick="bookEventPass('${evt.id}')" class="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm transition-all cursor-pointer font-sans">
            ${evt.fee === 0 ? 'Claim Free Pass' : 'Book Ticket Pass'}
           </button>`;

      return `
        <div class="bg-white border border-[#dadce0] rounded-xl p-5 hover:border-sky-300 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-5 relative overflow-hidden shadow-xs">
          <!-- Left styling bar -->
          <div class="absolute inset-y-0 left-0 w-1 ${evt.category === 'Government' ? 'bg-emerald-500' : 'bg-sky-500'}"></div>
          
          <div class="space-y-2.5 max-w-xl pl-1 font-sans">
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="text-xs font-bold text-gray-800 tracking-tight leading-tight block">
                ${evt.title}
              </span>
              <span class="border ${badgeStyle} text-[9px] font-bold px-2 py-0.5 rounded-full uppercase leading-none">
                ${feeLabel}
              </span>
              ${isBooked ? `<span class="bg-emerald-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded animate-pulse">✔ BOOKED</span>` : ""}
            </div>
            
            <p class="text-[#5f6368] text-xs leading-relaxed">
              ${evt.description}
            </p>

            <div class="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10.5px] text-[#3c4043] font-sans">
              <span class="flex items-center gap-1">
                <span class="text-sky-500">📍</span> <strong>${evt.location}</strong>
              </span>
              <span class="text-gray-300">•</span>
              <span class="flex items-center gap-1 font-mono text-[10px]">
                <span>⏰</span> ${evt.timings}
              </span>
            </div>
          </div>

          <div class="shrink-0 pt-2 md:pt-0 self-end md:self-center">
            ${buttonHtml}
          </div>
        </div>
      `;
    }).join("");
  }

  // 2. Render booked passes lists
  if (registeredCountSpan) registeredCountSpan.textContent = `${state.registeredEvents.length} Tickets`;

  const myBookedList = state.cityEvents.filter(e => state.registeredEvents.includes(e.id));
  if (myBookedList.length === 0) {
    if (registeredContainer) {
      registeredContainer.innerHTML = `
        <div class="text-center py-10 bg-gray-50 border border-gray-150 rounded-lg text-gray-405 text-xs font-sans">
          No active tickets booked. Claim free or paid tickets to view secure passes here!
        </div>
      `;
    }
  } else {
    if (registeredContainer) {
      registeredContainer.innerHTML = myBookedList.map(evt => {
        const passId = `VZG-EVT-${evt.id.replace('evt-', '')}-${Math.floor(100+Math.random()*900)}`;
        return `
          <div class="bg-white border-l-4 border-l-emerald-500 border border-y-[#dadce0] border-r-[#dadce0] rounded-lg p-4 space-y-3 shadow-xs font-sans relative overflow-hidden transition-all hover:shadow-xs">
            <!-- Cutout circles left/right design mimicking elegant voucher -->
            <div class="absolute -left-2 top-11 h-4 w-4 rounded-full bg-slate-50 border border-gray-100 shadow-inner"></div>
            <div class="absolute -right-2 top-11 h-4 w-4 rounded-full bg-slate-50 border border-gray-100 shadow-inner"></div>
            
            <div class="flex justify-between items-start">
              <div class="space-y-0.5 font-sans">
                <span class="text-[9px] font-bold text-emerald-600 block uppercase tracking-wider">MUNICIPAL PASS GATEWAY</span>
                <strong class="text-[11.5px] font-bold text-gray-805 block truncate max-w-[150px] leading-tight">${evt.title}</strong>
              </div>
              <button onclick="cancelEventPass('${evt.id}')" class="text-[10px] text-rose-500 hover:text-rose-700 font-semibold transition-all cursor-pointer">
                Cancel
              </button>
            </div>

            <div class="grid grid-cols-2 gap-2 text-[9.5px] text-[#5f6368] border-t border-dashed border-gray-200 pt-2 leading-relaxed font-sans">
              <div>
                <span>Timings:</span>
                <strong class="text-gray-700 block font-mono text-[8.5px] mt-0.5">${evt.timings}</strong>
              </div>
              <div>
                <span>Booked For:</span>
                <strong class="text-gray-700 block uppercase font-sans font-bold mt-0.5 truncate max-w-[90px]">${(state.currentUser ? state.currentUser.name : "GUEST").substring(0, 15)}</strong>
              </div>
            </div>

            <!-- Authentic Cryptographic Barcode rendering for ticket checking -->
            <div class="bg-gray-50 border border-gray-150 p-2.5 rounded flex flex-col items-center justify-center space-y-1.5 font-mono select-none">
              <div class="text-[9.5px] font-bold tracking-widest text-gray-700 -scale-x-125 select-all">
                █ █ █▄ ▄█ █ ▄█▀██ █ ▄███ █
              </div>
              <span class="text-[8px] text-gray-400 font-bold block scale-[0.9]">${passId}</span>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // Update telemetry total
  const telBooking = document.getElementById("telemetry-booking-count");
  if (telBooking) {
    telBooking.textContent = `${state.registeredEvents.length + 15} Total`;
  }
};

window.bookEventPass = function(eventId) {
  const target = state.cityEvents.find(e => e.id === eventId);
  if (!target) return;

  if (state.registeredEvents.includes(eventId)) {
    showNotificationToast("Pass for this municipal segment already claimed!");
    return;
  }

  // Deduct eRupee if paid special event
  if (target.category === "Special" && target.fee > 0) {
    if (state.walletBalance < target.fee) {
      alert("Inadequate e-Rupee balance inside Virtual City Card ledger. Please top up before ticketing paid special events!");
      return;
    }
    state.walletBalance -= target.fee;
    if (state.currentUser) {
      state.currentUser.walletBalance = state.walletBalance;
      localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
    }
    syncUserDisplays();
  }

  state.registeredEvents.push(eventId);
  localStorage.setItem("vizag_registered_events", JSON.stringify(state.registeredEvents));
  showNotificationToast(`Reserved pass for: ${target.title}! Dynamic ticket issued.`);
  updateUI();
};

window.cancelEventPass = function(eventId) {
  const target = state.cityEvents.find(e => e.id === eventId);
  if (!target) return;

  // Refund money if paid event
  if (target.category === "Special" && target.fee > 0) {
    state.walletBalance += target.fee;
    if (state.currentUser) {
      state.currentUser.walletBalance = state.walletBalance;
      localStorage.setItem("vizag_active_citizen", JSON.stringify(state.currentUser));
    }
    syncUserDisplays();
  }

  state.registeredEvents = state.registeredEvents.filter(id => id !== eventId);
  localStorage.setItem("vizag_registered_events", JSON.stringify(state.registeredEvents));
  showNotificationToast(`Booking cancelled. e-Rupee value refunded where applicable.`);
  updateUI();
};

window.filterCityEvents = function() {
  const bar = document.getElementById("event-search-bar");
  state.eventSearchQuery = bar ? bar.value.trim() : "";
  renderEventsUI();
};

window.setEventFilter = function(cat) {
  const cats = { "All": "All", "Government": "Govt", "Special": "Special" };
  Object.keys(cats).forEach(key => {
    const btn = document.getElementById(`flt-event-${cats[key]}`);
    if (btn) {
      if (cat === key) {
        btn.className = "px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-150 transition-all cursor-pointer";
      } else {
        btn.className = "px-3.5 py-2.5 rounded-lg text-xs font-medium text-gray-650 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all cursor-pointer";
      }
    }
  });
  state.eventFilterCategory = cat;
  renderEventsUI();
};

window.renderAdminUI = function() {
  const loginWrap = document.getElementById("admin-login-wrapper");
  const dashWrap = document.getElementById("admin-dashboard-wrapper");
  const citizenSelector = document.getElementById("admin-citizen-audit-select");
  const complaintsContainer = document.getElementById("admin-complaints-list");

  if (!loginWrap || !dashWrap) return;

  if (state.adminSession) {
    loginWrap.classList.add("hidden");
    dashWrap.classList.remove("hidden");

    // Display active admin name
    const titleEl = document.getElementById("active-admin-title");
    if (titleEl) {
      titleEl.textContent = `Administrator Command Node -- ${state.adminSession.name.toUpperCase()}`;
    }

    // Populate citizens selecting dropdown
    if (citizenSelector) {
      const list = window.getCitizensList();
      citizenSelector.innerHTML = list.map(c => `
        <option value="${c.name}">${c.name} (${c.score} Pts - ${c.tier})</option>
      `).join("");
    }

    // Populate active complaints and status adjustments
    if (complaintsContainer) {
      if (state.complaints.length === 0) {
        complaintsContainer.innerHTML = `
          <div class="text-center py-6 text-xs text-gray-400 font-sans">
            No active municipal grievance reports available to digest.
          </div>
        `;
      } else {
        complaintsContainer.innerHTML = state.complaints.map(comp => {
          return `
            <div class="p-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3.5 hover:bg-gray-50 transition-all">
              <div class="space-y-1 text-left font-sans flex-1">
                <div class="flex items-center gap-2">
                  <strong class="text-xs font-bold text-gray-800 leading-none">${comp.title}</strong>
                  <span class="text-[8.5px] font-bold font-mono bg-indigo-50 border border-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded leading-none">
                    ${comp.status.toUpperCase()}
                  </span>
                </div>
                <p class="text-[11px] text-[#5f6368] leading-relaxed max-w-xl">${comp.description}</p>
                <div class="text-[9px] text-[#70757a] block mt-0.5">Reported by: ${comp.reporter} &bull; Location: ${comp.location}</div>
              </div>
              <div class="flex items-center gap-1 shrink-0 self-end sm:self-center font-sans">
                <button 
                  onclick="adminResolveComplaint('${comp.id}', 'Dispatched')" 
                  class="bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 text-[10px] font-bold px-2.5 py-1.5 rounded border border-blue-200 transition-all cursor-pointer"
                >
                  🚀 Dispatch
                </button>
                <button 
                  onclick="adminResolveComplaint('${comp.id}', 'Investigating')" 
                  class="bg-purple-50 hover:bg-purple-100 text-purple-700 hover:text-purple-800 text-[10px] font-bold px-2.5 py-1.5 rounded border border-purple-200 transition-all cursor-pointer"
                >
                  🔍 Assess
                </button>
                <button 
                  onclick="adminResolveComplaint('${comp.id}', 'Resolved')" 
                  class="bg-[#e6f4ea] hover:bg-[#ceead6] text-[#137333] text-[10px] font-bold px-2.5 py-1.5 rounded border border-[#ceead6] transition-all cursor-pointer"
                >
                  ✔ Close
                </button>
              </div>
            </div>
          `;
        }).join("");
      }
    }

  } else {
    loginWrap.classList.remove("hidden");
    dashWrap.classList.add("hidden");
  }
};

window.handleAdminLoginSubmit = function() {
  const emailVal = document.getElementById("admin-email-input").value.trim().toLowerCase();
  const passkeyVal = document.getElementById("admin-passkey-input").value.trim();

  if (!emailVal || !passkeyVal) {
    showNotificationToast("Credentials cannot be empty!");
    return;
  }

  // Lookup admin
  const found = govtAdmins.find(adm => adm.email === emailVal && adm.key === passkeyVal);
  if (found) {
    state.adminSession = found;
    localStorage.setItem("vizag_admin_session", JSON.stringify(found));
    showNotificationToast(`Session granted: Administrator ${found.name}. Clearance Verified!`);
    updateUI();
  } else {
    alert("Administrative login failed: Registered Email and Passkey mismatched or invalid. Verification failure reported to security node!");
  }
};

window.handleAdminLogout = function() {
  state.adminSession = null;
  localStorage.removeItem("vizag_admin_session");
  showNotificationToast("Administrative session closed. Command keys revoked.");
  updateUI();
};

window.toggleEventPriceInput = function(cat) {
  const feeInput = document.getElementById("ev-fee-input");
  if (!feeInput) return;

  if (cat === "Special") {
    feeInput.disabled = false;
    feeInput.className = "w-full bg-white border border-gray-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-indigo-500 text-gray-850";
    feeInput.value = "100";
  } else {
    feeInput.disabled = true;
    feeInput.className = "w-full bg-gray-50 border border-gray-300 rounded px-2.5 py-1.5 text-xs focus:outline-none focus:border-indigo-500 text-gray-500";
    feeInput.value = "0";
  }
};

window.submitAdminNewEvent = function() {
  const titleEl = document.getElementById("ev-title-input");
  const catEl = document.getElementById("ev-cat-input");
  const feeEl = document.getElementById("ev-fee-input");
  const timeEl = document.getElementById("ev-time-input");
  const locEl = document.getElementById("ev-loc-input");
  const descEl = document.getElementById("ev-desc-input");

  if (!titleEl || !catEl || !feeEl || !timeEl || !locEl || !descEl) return;

  const titleVal = titleEl.value.trim();
  const catVal = catEl.value;
  const feeVal = parseInt(feeEl.value, 10) || 0;
  const timeVal = timeEl.value.trim();
  const locVal = locEl.value.trim();
  const descVal = descEl.value.trim();

  if (!titleVal || !timeVal || !locVal || !descVal) {
    alert("Please complete all event properties before broadcasting.");
    return;
  }

  // Build event item
  const newEvt = {
    id: "evt-" + Date.now(),
    title: titleVal,
    category: catVal,
    fee: catVal === "Government" ? 0 : feeVal,
    timings: timeVal,
    location: locVal,
    description: descVal
  };

  state.cityEvents.unshift(newEvt);
  localStorage.setItem("vizag_city_events", JSON.stringify(state.cityEvents));
  showNotificationToast(`Event published successfully! Synergized on live Smart City rosters.`);
  
  // Clear form
  titleEl.value = "";
  timeEl.value = "";
  locEl.value = "";
  descEl.value = "";
  if (catVal === "Special") {
    catEl.value = "Government";
    window.toggleEventPriceInput("Government");
  }

  updateUI();
};

window.adjustCitizenCredits = function(amount) {
  const selector = document.getElementById("admin-citizen-audit-select");
  if (!selector) return;

  const targetName = selector.value;
  if (!targetName) return;

  const activeUserName = state.currentUser ? state.currentUser.name : "Guest Citizen";

  if (targetName.toUpperCase() === activeUserName.toUpperCase()) {
    // Current user Adjustments
    state.socialCredits = Math.max(300, Math.min(1000, state.socialCredits + amount));
    localStorage.setItem("vizag_social_credits", state.socialCredits.toString());
    showNotificationToast(`Audited score for ${targetName}: Adjusted score by ${amount}!`);
  } else {
    // Other Citizens Adjustments
    const cachedScores = localStorage.getItem("vizag_citizen_scores");
    let otherScores = cachedScores ? JSON.parse(cachedScores) : {
      "DR. RAMA DEVI": 950,
      "HARITHA RAO": 880,
      "SURESH KUMAR": 840,
      "ANISH RAJU": 720,
      "PRANAV ARYA": 680
    };

    const currentScore = otherScores[targetName] ?? 700;
    otherScores[targetName] = Math.max(300, Math.min(1000, currentScore + amount));
    localStorage.setItem("vizag_citizen_scores", JSON.stringify(otherScores));
    showNotificationToast(`Audited score for ${targetName}: Adjusted score by ${amount}!`);
  }

  updateUI();
};

window.adminResolveComplaint = function(id, status) {
  const target = state.complaints.find(c => c.id === id);
  if (!target) return;

  target.status = status;
  localStorage.setItem("vizag_complaints", JSON.stringify(state.complaints));
  showNotificationToast(`Grievance resolved: ${target.title} changed status to ${status.toUpperCase()}!`);
  updateUI();
};
