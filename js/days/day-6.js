window.DAYS = window.DAYS || {};
window.DAYS[6] = {
  id: 6,
  date: "Wed 30 June 2027 · tentative",
  title: "Whales to Akureyri",
  blurb: "Hverfjall and Mývatn in the morning, humpbacks out of Húsavík, GeoSea, then Goðafoss on the way to Akureyri.",
  sub: "Hverfjall and Mývatn in the morning, humpbacks out of Húsavík, GeoSea, then Goðafoss on the way to Akureyri.",
  stats: [
    { label: "Driving", value: "~2h 00m" },
    { label: "Walking", value: "~4 km" },
    { label: "Lodging", value: "Hotel Kea" },
  ],
  budget: [
    { label: "Hotel Kea", amount: 290 },
    { label: "Whale watching for two", amount: 260 },
    { label: "GeoSea for two", amount: 100 },
    { label: "Food", amount: 180 },
  ],
  before: [
    "<b>Book whale watching early.</b> Late June is peak for humpbacks in Skjálfandi. North Sailing (oak schooner) or Gentle Giants. ~$130 pp, about 3 hours.",
    "<b>Bjórböðin at Árskógssandur</b> — soak in a tub of beer, hops and live yeast, with a tap at the side. ~$110 pp. Swap it in for GeoSea rather than stacking both; adds about an hour round trip from Akureyri.",
    "<b>Hverfjall</b> is 45 minutes of steep scree to the rim. Closest footing on this route to Bláhnukur, at a fraction of the length.",
  ],
  items: [
    {
      type: "stop",
      time: "8:30 AM",
      title: "Hverfjall crater",
      sub: "1 hr",
      body: [
        "Steep scree to the rim, then a loop around it. Wind can be fierce on top; stay off the inner slope.",
      ],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Hverfjall"],
      ],
      img: "hverfjall.jpg",
    },
    {
      type: "stop",
      time: "10:00 AM",
      title: "Dimmuborgir or Skútustaðagígar",
      sub: "45 min",
      body: [
        "Lava formations at Dimmuborgir, or the pseudocraters at Skútustaðagígar if you want something shorter and flatter.",
      ],
      links: [
        ["Dimmuborgir", "https://www.google.com/maps/search/?api=1&query=Dimmuborgir"],
        ["Skútustaðagígar", "https://www.google.com/maps/search/?api=1&query=Sk%C3%BAtusta%C3%B0ag%C3%ADgar"],
      ],
      img: "dimmuborgir.jpg",
    },
    {
      type: "connector",
      time: "45 min",
      label: "Mývatn → Húsavík",
      url: "https://www.google.com/maps/dir/?api=1&origin=Hverfjall&destination=H%C3%BAsav%C3%ADk&travelmode=driving",
    },
    {
      type: "stop",
      time: "12:00 PM",
      title: "Lunch at Gamli Baukur",
      sub: "45 min",
      body: ["Harbour-side, before the boat. Confirm hours."],
      links: [
        ["Gamli Baukur", "https://gamlibaukur.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Gamli%20Baukur%20H%C3%BAsav%C3%ADk"],
      ],
      cost: "counted in food",
      img: "gamli-baukur.jpg",
    },
    {
      type: "stop",
      time: "1:00 PM",
      title: "Whale watching",
      sub: "3 hrs",
      body: [
        "North Sailing on an oak schooner, or Gentle Giants. Late June is peak for humpbacks in Skjálfandi. Dress warmer than the harbour feels.",
      ],
      links: [
        ["North Sailing", "https://www.northsailing.is/"],
        ["Gentle Giants", "https://gentlegiants.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=H%C3%BAsav%C3%ADk%20harbour"],
      ],
      cost: "~$130 pp",
      imgs: ["husavik.jpg", "whale-watch.jpg"],
    },
    {
      type: "stop",
      time: "4:30 PM",
      title: "GeoSea",
      sub: "1 hr",
      body: [
        "Cliff-edge geothermal sea baths looking out over the bay you just sailed. ~$50 pp. Swap for Bjórböðin if you'd rather the beer-tub story.",
      ],
      links: [
        ["GeoSea", "https://www.geosea.is/"],
        ["Bjórböðin alternative", "https://bjorbodin.com/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=GeoSea%20H%C3%BAsav%C3%ADk"],
      ],
      cost: "~$50 pp",
      rest: true,
      img: "geosea.jpg",
    },
    {
      type: "connector",
      time: "40 min",
      label: "Húsavík → Goðafoss",
      url: "https://www.google.com/maps/dir/?api=1&origin=GeoSea%20H%C3%BAsav%C3%ADk&destination=Go%C3%B0afoss&travelmode=driving",
    },
    {
      type: "stop",
      time: "5:45 PM",
      title: "Goðafoss",
      sub: "30 min",
      body: ["Short walk from the car park to both banks if time allows."],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Go%C3%B0afoss"],
      ],
      img: "godafoss.jpg",
    },
    {
      type: "connector",
      time: "35 min",
      label: "Goðafoss → Hotel Kea, Akureyri",
      url: "https://www.google.com/maps/dir/?api=1&origin=Go%C3%B0afoss&destination=Hotel%20Kea%20Akureyri&travelmode=driving",
    },
    {
      type: "stop",
      time: "6:45 PM",
      title: "Akureyri — Hotel Kea",
      sub: "check in and dinner",
      body: [
        "Dinner at Strikið or Rub23. Einstök Bar and Ölur are the quieter beer version of Bjórböðin if you skipped the tubs.",
      ],
      links: [
        ["Hotel Kea", "https://www.keahotels.is/hotel-kea"],
        ["Strikið", "https://strikid.is/"],
        ["Rub23", "https://rub23.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Hotel%20Kea%20Akureyri"],
      ],
      cost: "~$290 lodging",
      imgs: ["hotel-kea.jpg", "akureyri.jpg"],
    },
  ],
  note: "Don't stack GeoSea and Bjórböðin. Whale watching is the booking that fills.",
};
