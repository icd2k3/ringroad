window.DAYS = window.DAYS || {};
window.DAYS[8] = {
  id: 8,
  date: "Fri 2 July 2027 · tentative",
  title: "Sky Lagoon, Reykjavík",
  blurb: "South over Holtavörðuheiði, Grábrók, then Sky Lagoon and an anniversary dinner in Reykjavík.",
  sub: "South over Holtavörðuheiði, Grábrók, then Sky Lagoon and an anniversary dinner in Reykjavík.",
  stats: [
    { label: "Driving", value: "~3h 00m" },
    { label: "Walking", value: "~4 km" },
    { label: "Lodging", value: "Hotel Borg" },
  ],
  budget: [
    { label: "Hotel Borg", amount: 400 },
    { label: "Sky Lagoon for two", amount: 200 },
    { label: "Anniversary dinner", amount: 400 },
    { label: "Lunch and beers", amount: 100 },
  ],
  before: [
    "<b>Dill books out months ahead.</b> Reserve when you book flights. Sumac, Matur og Drykkur, or Grillmarkaðurinn if Dill is gone.",
    "<b>Sky Lagoon:</b> ocean-edge infinity pool and the seven-step ritual. ~$200 for two, 2–2.5 hours. A different character from Day 2's lava-field soak.",
    "<b>Deildartunguhver / Krauma / Hraunfossar</b> inland loop in Borgarfjörður is beautiful and adds ~1h 20m. On this day it's one thing too many, but it's the obvious swap if you'd rather skip Sky Lagoon.",
    "<b>Reykjavík to KEF is 45 min</b> — fine for a morning flight tomorrow.",
  ],
  items: [
    {
      type: "stop",
      time: "8:30 AM",
      title: "Leave Hvammstangi",
      body: ["Route 1 south over Holtavörðuheiði. Fuel if the tank is low — easier here than in Borgarnes traffic."],
      links: [["Road conditions", "https://umferdin.is/en"]],
      img: { src: "hotel-hvammstangi.jpg", day: 7 },
    },
    {
      type: "connector",
      time: "2h",
      label: "Hvammstangi → Grábrók",
      url: "https://www.google.com/maps/dir/?api=1&origin=H%C3%B3tel%20Hvammstangi&destination=Gr%C3%A1br%C3%B3k&travelmode=driving",
    },
    {
      type: "stop",
      time: "10:30 AM",
      title: "Grábrók crater",
      sub: "30 min",
      body: [
        "15-minute climb right off Route 1, big view over the lava field. Or the Settlement Center in Borgarnes for the saga history if you'd rather not climb.",
      ],
      links: [
        ["Grábrók", "https://www.google.com/maps/search/?api=1&query=Gr%C3%A1br%C3%B3k"],
        ["Settlement Center", "https://www.landnam.is/"],
      ],
      img: "grabrok.jpg",
    },
    {
      type: "connector",
      time: "1h",
      label: "Grábrók → Hotel Borg, Reykjavík",
      url: "https://www.google.com/maps/dir/?api=1&origin=Gr%C3%A1br%C3%B3k&destination=Hotel%20Borg%20Reykjav%C3%ADk&travelmode=driving",
    },
    {
      type: "stop",
      time: "1:00 PM",
      title: "Hotel Borg — check in and lunch",
      sub: "1 hr",
      body: [
        "Via the Hvalfjörður tunnel. Request a king and Austurvöllur view at booking. Lunch downtown, then Sky Lagoon.",
      ],
      links: [
        ["Hotel Borg", "https://www.keahotels.is/hotel-borg"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Hotel%20Borg%20P%C3%B3sth%C3%BAsstr%C3%A6ti%2011%20Reykjav%C3%ADk"],
      ],
      cost: "~$400",
      img: "hotel-borg.jpg",
    },
    {
      type: "connector",
      time: "15 min",
      label: "Hotel Borg → Sky Lagoon",
      url: "https://www.google.com/maps/dir/?api=1&origin=Hotel%20Borg%20Reykjav%C3%ADk&destination=Sky%20Lagoon&travelmode=driving",
    },
    {
      type: "stop",
      time: "2:30 PM",
      title: "Sky Lagoon",
      sub: "2–2.5 hrs",
      body: [
        "Ocean-edge infinity pool and the seven-step ritual. Open ocean instead of lava field — a genuinely different soak from Day 2.",
      ],
      links: [
        ["Sky Lagoon", "https://www.skylagoon.com/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Sky%20Lagoon"],
      ],
      cost: "~$200 for two",
      rest: true,
      img: "sky-lagoon.jpg",
    },
    {
      type: "connector",
      time: "15 min",
      label: "Sky Lagoon → Hallgrímskirkja",
      url: "https://www.google.com/maps/dir/?api=1&origin=Sky%20Lagoon&destination=Hallgr%C3%ADmskirkja&travelmode=driving",
    },
    {
      type: "stop",
      time: "5:15 PM",
      title: "Reykjavík afternoon",
      sub: "2 hrs",
      body: [
        "Hallgrímskirkja tower for the view over the coloured roofs, Laugavegur, and a beer at Skúli Craft Bar or RVK Brewing Co.",
      ],
      links: [
        ["Hallgrímskirkja", "https://www.google.com/maps/search/?api=1&query=Hallgr%C3%ADmskirkja"],
        ["Skúli Craft Bar", "https://www.google.com/maps/search/?api=1&query=Sk%C3%BAli%20Craft%20Bar"],
        ["RVK Brewing Co", "https://rvkbrewing.com/"],
      ],
      imgs: ["hallgrimskirkja.jpg", "reykjavik.jpg"],
    },
    {
      type: "stop",
      time: "7:30 PM",
      title: "Anniversary dinner",
      sub: "2–3 hrs",
      body: [
        "Dill (Michelin, tasting menu ~$200 pp) first. Sumac, Matur og Drykkur, or Grillmarkaðurinn if Dill is gone. Reserve months ahead.",
      ],
      links: [
        ["Dill", "https://dillrestaurant.is/"],
        ["Sumac", "https://sumac.is/"],
        ["Matur og Drykkur", "https://maturogdrykkur.is/"],
        ["Grillmarkaðurinn", "https://grillmarkadurinn.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Dill%20Restaurant%20Reykjav%C3%ADk"],
      ],
      cost: "~$400 for two",
      img: "dill.jpg",
    },
  ],
  note: "Ending in Reykjavík rather than at the Blue Lagoon gives you the one real city evening on an itinerary that otherwise has none.",
};
