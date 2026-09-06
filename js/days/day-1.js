window.DAYS = window.DAYS || {};
window.DAYS[1] = {
  id: 1,
  date: "Fri 25 June 2027 · tentative",
  title: "Keflavík",
  blurb: "Arrive, a short Reykjanes loop, then rest. Tomorrow starts with the spa.",
  sub: "Arrive, a short Reykjanes loop, then rest. Tomorrow starts with the spa.",
  stats: [
    { label: "Driving", value: "~1h 15m" },
    { label: "Walking", value: "~3 km" },
    { label: "Lodging", value: "Hotel Berg" },
  ],
  budget: [
    { label: "Hotel Berg, one overnight", amount: 250 },
    { label: "Breakfast, lunch and dinner", amount: 150 },
  ],
  before: [
    "<b>ATM:</b> bring a physical debit card and PIN; check international withdrawal fees and limits.",
    "<b>Arrival is unbooked.</b> June 25 assumes an overnight flight from Portland on June 24. Set the morning sequence once flights are confirmed.",
    "<b>Guarantee a bed before planning the nap.</b> Ask Berg for guaranteed early room access and its price. If unavailable, reserve the preceding night and confirm next-morning arrival so the hotel holds the room.",
    "<b>Reykjanes vents close during eruptions.</b> Gunnuhver, Brimketill and the lighthouse were inaccessible at points in 2024. Check almannavarnir.is that morning. If they're shut, sleep instead.",
    "<b>Rental:</b> Toyota RAV4 for nine days. Inspect the car at pickup. Confirm gravel-road terms for 864 / 939 before counting on Day 4–5 fallbacks.",
  ],
  items: [
    {
      type: "stop",
      time: "6:30 AM",
      title: "Land at KEF",
      sub: "about 1 hr",
      body: [
        "No arrival flight is booked yet. Work through this sequence before driving.",
      ],
      list: [
        "Clear immigration and collect bags. Allow 1–1½ hours, longer if delayed.",
        "Duty-free before you leave arrivals if you want anything; you cannot return after exiting.",
        "ATM: about US$200 equivalent in ISK for two, on a debit card. Choose ISK and decline conversion to USD.",
        "Collect the RAV4 (30–45 min). Inspect the car and photograph any existing damage.",
      ],
      links: [
        ["KEF — ATMs and currency", "https://www.kefairport.com/currency-exchange-and-tax-refund"],
        ["Blue Car Rental", "https://www.bluecarrental.is/"],
        ["Pickup — Maps", "https://www.google.com/maps/search/?api=1&query=Blue%20Car%20Rental%2C%20Blikav%C3%B6llur%203%2C%20Keflav%C3%ADk"],
      ],
      imgs: ["keflavik-airport.jpg", "blue-car-rental.jpg"],
    },
    {
      type: "connector",
      time: "10 min",
      label: "Blue Car Rental Keflavík → Kaffi Duus",
      url: "https://www.google.com/maps/dir/?api=1&origin=Blue%20Car%20Rental%20Keflav%C3%ADk&destination=Kaffi%20Duus%20Keflav%C3%ADk&travelmode=driving",
    },
    {
      type: "stop",
      time: "8:00 AM",
      title: "Breakfast at Kaffi Duus",
      sub: "45 min",
      body: [
        "Harbour-side breakfast before the peninsula loop. Confirm opening hours for this date; use another nearby café if closed.",
      ],
      links: [
        ["Kaffi Duus", "https://duus.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Kaffi%20Duus%20Keflav%C3%ADk"],
      ],
      cost: "counted in food",
      img: "kaffi-duus.jpg",
    },
    {
      type: "connector",
      time: "25 min",
      label: "Kaffi Duus → Gunnuhver",
      url: "https://www.google.com/maps/dir/?api=1&origin=Kaffi%20Duus%20Keflav%C3%ADk&destination=Gunnuhver%20Hot%20Springs&travelmode=driving",
    },
    {
      type: "stop",
      time: "9:30 AM",
      title: "Reykjanes loop",
      sub: "~2–3 hrs",
      body: [
        "Gunnuhver steam vents, Reykjanesviti lighthouse, Brimketill lava rock pool, and the Bridge Between Continents. All within 30 minutes of Keflavík, all short walks.",
        "Stay on marked boardwalks. Skip any stop that is closed or if you are too tired to drive — this is deliberately the lightest day.",
      ],
      links: [
        ["Gunnuhver", "https://www.google.com/maps/search/?api=1&query=Gunnuhver%20Hot%20Springs"],
        ["Reykjanesviti", "https://www.google.com/maps/search/?api=1&query=Reykjanes%20Lighthouse"],
        ["Brimketill", "https://www.google.com/maps/search/?api=1&query=Brimketill"],
        ["Bridge Between Continents", "https://www.google.com/maps/search/?api=1&query=Bridge%20Between%20Continents%20Reykjanes"],
        ["Civil protection", "https://www.almannavarnir.is/"],
        ["Road conditions", "https://umferdin.is/en"],
      ],
      imgs: ["gunnuhver.jpg", "reykjanesviti.jpg", "brimketill.jpg", "bridge-continents.jpg"],
    },
    {
      type: "connector",
      time: "25 min",
      label: "Reykjanesviti → Hotel Berg",
      url: "https://www.google.com/maps/dir/?api=1&origin=Reykjanes%20Lighthouse&destination=Hotel%20Berg%20Keflav%C3%ADk&travelmode=driving",
    },
    {
      type: "stop",
      time: "1:00 PM",
      title: "Hotel Berg — check in and rest",
      sub: "settle, then sleep off the flight",
      body: [
        "Lunch nearby or at the hotel, then sleep. Day 2 starts with a spa morning and three hours of driving, so bank the rest here.",
      ],
      links: [
        ["Hotel Berg", "https://www.hotelberg.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Hotel%20Berg%20Keflav%C3%ADk"],
      ],
      cost: "~$250 overnight",
      rest: true,
      imgs: ["hotel-berg.jpg", "hotel-berg-room.jpg"],
    },
    {
      type: "stop",
      time: "6:30 PM",
      title: "Dinner in Keflavík",
      sub: "1½ hrs",
      body: [
        "Library Bistro at the hotel, or Hjá Höllu if you want to walk into town. Keep it early — tomorrow's Retreat slot is first thing.",
      ],
      links: [
        ["Library Bistro", "https://www.hotelberg.is/dining"],
        ["Hjá Höllu", "https://www.google.com/maps/search/?api=1&query=Hj%C3%A1%20H%C3%B6llu%20Keflav%C3%ADk"],
      ],
      cost: "counted in food",
      img: "library-bistro.jpg",
    },
    {
      type: "stop",
      time: "Later",
      title: "Rooftop pool",
      body: [
        "A short marina-view soak if you feel like it. Confirm guest hours at reception, or go straight to bed.",
      ],
      rest: true,
      img: "hotel-berg-pool.jpg",
    },
  ],
  note: "This is deliberately the lightest day of the trip. If Reykjanes stops are shut, sleep instead — you lose nothing important.",
};
