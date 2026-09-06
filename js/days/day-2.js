window.DAYS = window.DAYS || {};
window.DAYS[2] = {
  id: 2,
  date: "Sat 26 June 2027 · tentative",
  title: "Retreat Spa to Vík",
  blurb: "A four-hour Retreat Spa visit, then Seljalandsfoss, Skógafoss, Dyrhólaey and Reynisfjara on the way to Vík.",
  sub: "A four-hour Retreat Spa visit, then Seljalandsfoss, Skógafoss, Dyrhólaey and Reynisfjara on the way to Vík.",
  stats: [
    { label: "Driving", value: "~3h 15m" },
    { label: "Walking", value: "~3 km" },
    { label: "Lodging", value: "Black Beach Suites" },
  ],
  budget: [
    { label: "Black Beach Suites, one overnight", amount: 380 },
    { label: "Retreat Spa day passes for two — USD planning allowance", amount: 1270 },
    { label: "Food, including spa lunch and dinner", amount: 180 },
  ],
  before: [
    "<b>Planned Retreat Spa visit: 08:45–13:00.</b> Four-hour entrance; slots are capped and sell out months ahead. Confirm whether the published rate is per person or per changing room before budgeting.",
    "<b>Book with free cancellation</b> and have a Day 2 fallback (drive east in the morning) if Blue Lagoon closes for volcanic activity.",
    "<b>Waterproof shell</b> for Seljalandsfoss — you walk behind the falls. Grip shoes; a dry change in the car.",
    "<b>Reynisfjara:</b> sneaker waves kill people most years. Stay well back from the waterline. Follow current hazard lights.",
    "<b>Late June sunset in Vík is around 11:30pm.</b> A 6pm–8pm sightseeing block is comfortable and the crowds have thinned.",
  ],
  items: [
    {
      type: "stop",
      time: "7:15 AM",
      title: "Breakfast and checkout at Berg",
      sub: "30 min",
      body: [
        "Pack swimsuits and dry clothes within reach. Leave by 08:15 for the 20-minute drive to the lagoon.",
      ],
      links: [["Hotel Berg", "https://www.hotelberg.is/"]],
      cost: "allowance counted on Day 1",
      img: { src: "hotel-berg.jpg", day: 1 },
    },
    {
      type: "connector",
      time: "20 min",
      label: "Hotel Berg → The Retreat at Blue Lagoon",
      url: "https://www.google.com/maps/dir/?api=1&origin=Hotel+Berg&destination=The+Retreat+at+Blue+Lagoon+Iceland&travelmode=driving",
    },
    {
      type: "stop",
      time: "8:45 AM",
      title: "Retreat Spa",
      sub: "4 hrs",
      body: [
        "Private changing room for two, the Blue Lagoon Ritual, the subterranean sanctuary, steam cave and cold well, the Retreat Lagoon, and full access to the main Blue Lagoon. Lunch at Spa Restaurant in a robe.",
        "Day passes run roughly $630–735 per person depending on source, so ~$1,270 for two — more than a night in a Retreat suite would have cost. Confirm a live quote. Capacity is roughly 20 guests per two-hour window.",
      ],
      links: [
        ["Retreat Spa", "https://www.bluelagoon.com/day-visit/retreat-spa"],
        ["Spa Restaurant", "https://www.bluelagoon.com/restaurant/spa-restaurant"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=The%20Retreat%20at%20Blue%20Lagoon%20Iceland"],
      ],
      cost: "~$1,270 for two; quote pending",
      imgs: ["blue-lagoon.jpg", "retreat-lagoon.jpg", "spa-lunch.jpg"],
    },
    {
      type: "connector",
      time: "1h 55m",
      label: "The Retreat at Blue Lagoon → Seljalandsfoss",
      url: "https://www.google.com/maps/dir/?api=1&origin=The%20Retreat%20at%20Blue%20Lagoon%20Iceland&destination=Seljalandsfoss&travelmode=driving",
    },
    {
      type: "stop",
      time: "3:00 PM",
      title: "Seljalandsfoss and Gljúfrabúi",
      sub: "1 hr",
      body: [
        "Walk behind Seljalandsfoss — waterproof shell mandatory. Gljúfrabúi is five minutes north, hidden in a slot canyon and half as crowded.",
        "Pay the posted parking fee.",
      ],
      links: [
        ["Parking — Maps", "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss%20Parking"],
      ],
      imgs: ["seljalandsfoss.jpg", "gljufrabui.jpg"],
    },
    {
      type: "connector",
      time: "25 min",
      label: "Seljalandsfoss → Skógafoss",
      url: "https://www.google.com/maps/dir/?api=1&origin=Seljalandsfoss&destination=Sk%C3%B3gafoss&travelmode=driving",
    },
    {
      type: "stop",
      time: "4:30 PM",
      title: "Skógafoss and Kvernufoss",
      sub: "1 hr",
      body: [
        "Climb the 527 steps for the top view. Kvernufoss is a 15-minute walk from the Skógar museum car park and almost nobody goes.",
      ],
      links: [
        ["Skógafoss", "https://www.google.com/maps/search/?api=1&query=Sk%C3%B3gafoss"],
        ["Kvernufoss", "https://www.google.com/maps/search/?api=1&query=Kvernufoss"],
      ],
      imgs: ["skogafoss.jpg", "kvernufoss.jpg"],
    },
    {
      type: "connector",
      time: "20 min",
      label: "Skógafoss → Dyrhólaey",
      url: "https://www.google.com/maps/dir/?api=1&origin=Sk%C3%B3gafoss&destination=Dyrh%C3%B3laey&travelmode=driving",
    },
    {
      type: "stop",
      time: "6:15 PM",
      title: "Dyrhólaey",
      sub: "45 min",
      body: [
        "Arch, lighthouse, and puffins. Late June is peak nesting. Check 2027 nesting restrictions before walking out to the point.",
      ],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Dyrh%C3%B3laey"],
      ],
      imgs: ["dyrholaey.jpg", "puffins.jpg"],
    },
    {
      type: "connector",
      time: "15 min",
      label: "Dyrhólaey → Reynisfjara",
      url: "https://www.google.com/maps/dir/?api=1&origin=Dyrh%C3%B3laey&destination=Reynisfjara&travelmode=driving",
    },
    {
      type: "stop",
      time: "7:15 PM",
      title: "Reynisfjara",
      sub: "30 min",
      body: [
        "Black sand and basalt columns. Stay well back from the waterline and don't turn your back on the sea — this applies double when you're tired at the end of a long day.",
      ],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Reynisfjara"],
        ["Safetravel", "https://safetravel.is/"],
      ],
      flag: "Sneaker waves. Follow hazard lights and barriers; low tide does not make the beach safe.",
      img: "reynisfjara.jpg",
    },
    {
      type: "connector",
      time: "15 min",
      label: "Reynisfjara → Black Beach Suites, Vík",
      url: "https://www.google.com/maps/dir/?api=1&origin=Reynisfjara&destination=Black+Beach+Suites%2C+V%C3%ADk&travelmode=driving",
    },
    {
      type: "stop",
      time: "8:00 PM",
      title: "Vík — Smiðjan Brugghús",
      sub: "dinner",
      body: [
        "Check in at Black Beach Suites, then dinner at Smiðjan — their own beer, good burgers.",
      ],
      links: [
        ["Black Beach Suites", "https://www.blackbeachsuites.is/"],
        ["Smiðjan Brugghús", "https://smidjanbrugghus.is/"],
        ["Maps — suites", "https://www.google.com/maps/search/?api=1&query=Black%20Beach%20Suites%2C%20V%C3%ADk"],
      ],
      cost: "~$380 lodging + dinner in food",
      imgs: ["black-beach-suites.jpg", "smidjan.jpg"],
    },
  ],
  note: "This looks like a punishing evening on paper and isn't — late-June light makes 6–8pm sightseeing comfortable. Moss at the Retreat is Wed–Sun if you ever reshuffle, but it doesn't fit this day.",
};
