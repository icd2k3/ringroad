window.DAYS = window.DAYS || {};
window.DAYS[3] = {
  id: 3,
  date: "Sun 27 June 2027 · tentative",
  title: "Glacier and canyon",
  blurb: "Sólheimajökull glacier hike, Fjaðrárgljúfur, then evening Svartifoss from Fosshotel Glacier Lagoon.",
  sub: "The only backtrack of the trip is the 25 minutes west to the glacier. Worth it.",
  stats: [
    { label: "Driving", value: "~2h 55m" },
    { label: "Walking", value: "~4 km · glacier hike 3h" },
    { label: "Lodging", value: "Fosshotel Glacier Lagoon" },
  ],
  budget: [
    { label: "Fosshotel Glacier Lagoon", amount: 400 },
    { label: "Sólheimajökull glacier hike for two", amount: 280 },
    { label: "Food", amount: 180 },
  ],
  before: [
    "<b>Book the glacier hike early</b> — it fills for late June. Guided, crampons and axe provided, 3–3.5 hours on the ice. ~$140 pp.",
    "<b>This is the most physical thing on the itinerary.</b> Waterproofs and grip boots; follow the guide on the ice.",
    "<b>Dining at Freysnes is thin.</b> The hotel restaurant is effectively it — plan on that rather than being disappointed by it.",
    "<b>The 25–50 minutes back to Sólheimajökull</b> is the only repeated road on the whole trip.",
  ],
  items: [
    {
      type: "stop",
      time: "8:00 AM",
      title: "Leave Black Beach Suites",
      body: ["Drive west to Sólheimajökull. Packed snacks from Vík if you have them."],
      img: { src: "black-beach-suites.jpg", day: 2 },
    },
    {
      type: "connector",
      time: "25 min",
      label: "Black Beach Suites, Vík → Sólheimajökull",
      url: "https://www.google.com/maps/dir/?api=1&origin=Black+Beach+Suites%2C+V%C3%ADk&destination=S%C3%B3lheimaj%C3%B6kull&travelmode=driving",
    },
    {
      type: "stop",
      time: "9:00 AM",
      title: "Sólheimajökull glacier hike",
      sub: "3–3.5 hrs",
      body: [
        "Guided walk on the ice. Crampons and axe provided. This is the accessible glacier hike — alternatives out of Skaftafell need a longer window than Day 4 allows.",
      ],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=S%C3%B3lheimaj%C3%B6kull"],
        ["Safetravel", "https://safetravel.is/"],
      ],
      cost: "~$140 pp",
      img: "solheimajokull.jpg",
    },
    {
      type: "connector",
      time: "25 min",
      label: "Sólheimajökull → Vík",
      url: "https://www.google.com/maps/dir/?api=1&origin=S%C3%B3lheimaj%C3%B6kull&destination=V%C3%ADk&travelmode=driving",
    },
    {
      type: "stop",
      time: "12:45 PM",
      title: "Lunch — Skool Beans or Black Crust",
      sub: "45 min",
      body: [
        "Skool Beans coffee bus if open, or Black Crust Pizzeria in Vík on the way through.",
      ],
      links: [
        ["Skool Beans", "https://www.google.com/maps/search/?api=1&query=Skool%20Beans%20V%C3%ADk"],
        ["Black Crust", "https://blackcrustpizzeria.com/"],
      ],
      cost: "counted in food",
      imgs: ["skool-beans.jpg", { src: "black-crust.jpg", day: 2 }],
    },
    {
      type: "connector",
      time: "50 min",
      label: "Vík → Fjaðrárgljúfur",
      url: "https://www.google.com/maps/dir/?api=1&origin=V%C3%ADk&destination=Fja%C3%B0r%C3%A1rglj%C3%BAfur&travelmode=driving",
    },
    {
      type: "stop",
      time: "2:15 PM",
      title: "Fjaðrárgljúfur",
      sub: "1 hr",
      body: ["The mossy serpentine canyon. Stay on marked paths; parking is posted."],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Fja%C3%B0r%C3%A1rglj%C3%BAfur"],
      ],
      img: "fjadrargljufur.jpg",
    },
    {
      type: "connector",
      time: "1h 15m",
      label: "Fjaðrárgljúfur → Fosshotel Glacier Lagoon",
      url: "https://www.google.com/maps/dir/?api=1&origin=Fja%C3%B0r%C3%A1rglj%C3%BAfur&destination=Fosshotel%20Glacier%20Lagoon&travelmode=driving",
    },
    {
      type: "stop",
      time: "4:30 PM",
      title: "Check in at Fosshotel Glacier Lagoon",
      sub: "30 min",
      body: ["Unload, then walk to Svartifoss while the evening light is still high."],
      links: [
        ["Fosshotel Glacier Lagoon", "https://www.islandshotel.is/hotels-in-iceland/fosshotel-glacier-lagoon"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Fosshotel%20Glacier%20Lagoon"],
      ],
      cost: "~$400",
      imgs: ["fosshotel-glacier.jpg", "fosshotel-room.jpg"],
    },
    {
      type: "stop",
      time: "5:30 PM",
      title: "Svartifoss",
      sub: "1h 30m round trip",
      body: [
        "Basalt columns above Skaftafell. By 7pm you'll have it close to yourself. Easy trail from the visitor-centre car park.",
      ],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Svartifoss"],
      ],
      img: "svartifoss.jpg",
    },
    {
      type: "stop",
      time: "7:30 PM",
      title: "Dinner at the hotel",
      body: ["The hotel restaurant is the realistic option out here. Reserve a table at check-in."],
      rest: true,
      cost: "counted in food",
      img: "fosshotel-dinner.jpg",
    },
  ],
  note: "Allow about 2h 55m driving plus the glacier hike. Book the hike before the hotel.",
};
