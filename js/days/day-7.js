window.DAYS = window.DAYS || {};
window.DAYS[7] = {
  id: 7,
  date: "Thu 1 July 2027 · tentative",
  title: "Vatnsnes",
  blurb: "Akureyri morning, then Route 1 west to Hvammstangi and the Vatnsnes peninsula for Hvítserkur and seals.",
  sub: "Akureyri morning, then Route 1 west to Hvammstangi and the Vatnsnes peninsula for Hvítserkur and seals.",
  stats: [
    { label: "Driving", value: "~3h 15m" },
    { label: "Walking", value: "~3 km" },
    { label: "Lodging", value: "Hótel Hvammstangi" },
  ],
  budget: [
    { label: "Hótel Hvammstangi", amount: 220 },
    { label: "Food", amount: 200 },
  ],
  before: [
    "<b>Hvammstangi is functional lodging, not a destination.</b> It exists here to break up a 5-hour leg, and that's a fair reason.",
    "<b>Scenic alternative: Tröllaskagi</b> — Dalvík, Ólafsfjörður, Siglufjörður (Herring Era Museum, Segull 67), then Route 76 south through Skagafjörður. The better drive by some margin. Adds ~1h 20m, putting the day at ~4h 35m.",
  ],
  items: [
    {
      type: "stop",
      time: "9:00 AM",
      title: "Akureyri morning",
      sub: "1h 30m",
      body: [
        "Botanical Garden (northernmost in the world, in full bloom late June), Akureyrarkirkja, coffee at Bláa Kannan.",
      ],
      links: [
        ["Botanical Garden", "https://www.google.com/maps/search/?api=1&query=Akureyri%20Botanical%20Garden"],
        ["Bláa Kannan", "https://www.google.com/maps/search/?api=1&query=Bl%C3%A1a%20Kannan%20Akureyri"],
      ],
      imgs: ["botanical-garden.jpg", "akureyrarkirkja.jpg", "blaa-kannan.jpg"],
    },
    {
      type: "connector",
      time: "1h 05m",
      label: "Akureyri → Varmahlíð",
      url: "https://www.google.com/maps/dir/?api=1&origin=Hotel%20Kea%20Akureyri&destination=Varmahl%C3%AD%C3%B0&travelmode=driving",
    },
    {
      type: "stop",
      time: "12:00 PM",
      title: "Lunch in Varmahlíð or Sauðárkrókur",
      sub: "45 min",
      body: ["A practical sit-down before Vatnsnes. Confirm hours."],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Varmahl%C3%AD%C3%B0"],
      ],
      cost: "counted in food",
      img: "varmahlid.jpg",
    },
    {
      type: "connector",
      time: "50 min",
      label: "Varmahlíð → Hvammstangi",
      url: "https://www.google.com/maps/dir/?api=1&origin=Varmahl%C3%AD%C3%B0&destination=Hvammstangi&travelmode=driving",
    },
    {
      type: "stop",
      time: "2:30 PM",
      title: "Vatnsnes peninsula",
      sub: "3 hrs",
      body: [
        "Hvítserkur — a 15 m basalt troll standing in the surf — and the Illugastaðir or Ósar seal colonies. Iceland's most reliable land-based seal watching. Walk the shore; don't crowd the seals.",
      ],
      links: [
        ["Hvítserkur", "https://www.google.com/maps/search/?api=1&query=Hv%C3%ADtserkur"],
        ["Illugastaðir", "https://www.google.com/maps/search/?api=1&query=Illugasta%C3%B0ir%20seals"],
      ],
      imgs: ["hvitserkur.jpg", "seals.jpg"],
    },
    {
      type: "stop",
      time: "6:00 PM",
      title: "Hvammstangi — dinner and check in",
      body: ["Dinner at Sjávarborg on the harbour. Hotel is a bed, not a scene."],
      links: [
        ["Hótel Hvammstangi", "https://www.hotelhvammstangi.is/"],
        ["Sjávarborg", "https://www.sjavarborg-restaurant.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=H%C3%B3tel%20Hvammstangi"],
      ],
      cost: "~$220 lodging",
      rest: true,
      imgs: ["hotel-hvammstangi.jpg", "sjavarborg.jpg"],
    },
  ],
  note: "Tröllaskagi instead of Route 1 if you'd rather drive than rest. It adds about 1h 20m.",
};
