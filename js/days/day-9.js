window.DAYS = window.DAYS || {};
window.DAYS[9] = {
  id: 9,
  date: "Sat 3 July 2027 · tentative",
  title: "Home",
  blurb: "Breakfast as the flight allows, then a buffered rental return and departure from KEF.",
  sub: "Breakfast as the flight allows, then a buffered rental return and departure from KEF.",
  stats: [
    { label: "Driving", value: "~45 min" },
    { label: "Walking", value: "~1–2 km" },
    { label: "Lodging", value: "Depart from Hotel Borg" },
  ],
  budget: [
    { label: "Breakfast and airport food allowance", amount: 40 },
  ],
  before: [
    "<b>Flight time to be confirmed.</b> Give yourself 2.5 hours inside the terminal before an international departure.",
    "<b>Work backward:</b> 45 minutes from Reykjavík plus 30–45 minutes for fuel and return, then the terminal-arrival target.",
    "<b>Check in online</b> when available, save boarding passes and settle the hotel bill the evening before.",
    "<b>Fuel payment:</b> use a card and PIN accepted by the chosen station, with a backup. Any prepaid fuel card must match the station brand.",
    "<b>Tax-free paperwork:</b> complete forms beforehand and keep goods accessible for inspection before bag drop.",
  ],
  items: [
    {
      type: "stop",
      time: "As flight allows",
      title: "Breakfast and checkout",
      body: [
        "With a later flight, Brauð & Co can be a pleasant breakfast outing. Verify the chosen branch's hours.",
        "With an early flight, prepare food the evening before and skip the bakery walk. Hotel breakfast only if service hours fit.",
      ],
      links: [
        ["Brauð & Co", "https://www.braudogco.is/"],
        ["Branch hours", "https://www.braudogco.is/en-gb/stadsetningar-og-opnunartimar"],
      ],
      cost: "~$40",
      img: "braud.jpg",
    },
    {
      type: "stop",
      time: "About 4 hrs before flight",
      title: "Leave Hotel Borg",
      body: [
        "Choose the exact departure time using the flight, rental procedure and road report. Budget 45 minutes driving and 30–45 minutes for refueling and return before the terminal arrival target.",
      ],
      links: [
        ["Route 41", "https://umferdin.is/en/road/30100"],
      ],
      img: { src: "hotel-borg.jpg", day: 8 },
    },
    {
      type: "connector",
      time: "45 min",
      label: "Hotel Borg Reykjavík → Blue Car Rental Keflavík",
      url: "https://www.google.com/maps/dir/?api=1&origin=Hotel%20Borg%20Reykjav%C3%ADk&destination=Blue%20Car%20Rental%20Keflav%C3%ADk&travelmode=driving",
    },
    {
      type: "stop",
      time: "Before terminal arrival",
      title: "Fuel and rental return",
      sub: "allow 30–45 min",
      body: [
        "Follow the rental's agreed fuel policy, retain the receipt and allow time for inspection and the walk or transfer to the terminal.",
        "All trip fuel, including this final top-up, is counted once in the overview fuel allowance.",
      ],
      links: [
        ["Blue Car Rental", "https://www.bluecarrental.is/"],
        ["Return location", "https://www.google.com/maps/search/?api=1&query=Blue%20Car%20Rental%20Blikav%C3%B6llur%203%20Keflav%C3%ADk"],
      ],
      cost: "counted in trip fuel",
      img: { src: "blue-car-rental.jpg", day: 1 },
    },
    {
      type: "stop",
      time: "2½ hrs before flight",
      title: "Arrive inside KEF",
      body: [
        "Handle any tax-free inspection before bag drop. KEF recommends arriving 2½–3 hours before departure. Online check-in does not remove the need for airport margin.",
      ],
      links: [
        ["KEF check-in guidance", "https://www.kefairport.com/check-in-information"],
        ["Tax-free guidance", "https://www.skatturinn.is/english/individuals/customs-matters/travelling-to-iceland/tax-free-vat-refund/"],
      ],
      img: { src: "keflavik-airport.jpg", day: 1 },
    },
    {
      type: "stop",
      time: "Time to confirm",
      title: "Keflavík → home",
      body: [
        "Choose the date and flight before fixing this morning's timetable. No specific aircraft or arrival time is assumed.",
      ],
      links: [
        ["Icelandair schedule", "https://www.icelandair.com/support/pre-flight/flight-schedule/"],
      ],
      cost: "flights excluded; quote pending",
      img: "icelandair.jpg",
    },
  ],
  note: "July 3 is tentative. Give yourself 2.5 hours before an international departure.",
};
