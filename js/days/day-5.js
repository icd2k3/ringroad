window.DAYS = window.DAYS || {};
window.DAYS[5] = {
  id: 5,
  date: "Tue 29 June 2027 · tentative",
  title: "Vök, Dettifoss, Mývatn",
  blurb: "A slow Seyðisfjörður morning, floating pools at Vök, then Dettifoss and Hverir on the way to Mývatn.",
  sub: "A slow Seyðisfjörður morning, floating pools at Vök, then Dettifoss and Hverir on the way to Mývatn.",
  stats: [
    { label: "Driving", value: "~3h 15m" },
    { label: "Walking", value: "~3 km" },
    { label: "Lodging", value: "Vogafjós Farm Resort" },
  ],
  budget: [
    { label: "Vogafjós Farm Resort", amount: 320 },
    { label: "Vök Baths for two", amount: 120 },
    { label: "Food", amount: 180 },
  ],
  before: [
    "<b>Vök is the soak; Hengifoss is the hike alternative</b> — 5 km round trip, ~2 h, Iceland's third-tallest falls striped with red clay. Don't stack both.",
    "<b>Dettifoss east side (Rd 864)</b> is gravel and the more dramatic viewpoint; west side (862) is paved. Confirm the RAV4 rental allows 864 and that the road is open.",
    "<b>Selfoss</b> is a 15-minute walk upstream from Dettifoss and worth it.",
  ],
  items: [
    {
      type: "stop",
      time: "9:00 AM",
      title: "Seyðisfjörður morning",
      sub: "1h 30m",
      body: [
        "The blue church, Rainbow Street, Skaftfell art centre, coffee. Genuinely charming and worth the slow start.",
      ],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Sey%C3%B0isfj%C3%B6r%C3%B0ur%20blue%20church"],
        ["Skaftfell", "https://skaftfell.is/"],
      ],
      imgs: ["blue-church.jpg", "rainbow-street.jpg"],
    },
    {
      type: "connector",
      time: "30 min",
      label: "Seyðisfjörður → Vök Baths",
      url: "https://www.google.com/maps/dir/?api=1&origin=Sey%C3%B0isfj%C3%B6r%C3%B0ur&destination=V%C3%B6k%20Baths&travelmode=driving",
    },
    {
      type: "stop",
      time: "11:00 AM",
      title: "Vök Baths",
      sub: "2 hrs",
      body: [
        "Floating geothermal pools set into Urriðavatn lake, with a cold lake plunge and a swim-up bar. A fraction of Blue Lagoon's crowd. Lunch at Vök's bistro.",
        "Hengifoss instead if you'd rather hike — don't do both today.",
      ],
      links: [
        ["Vök Baths", "https://vokbaths.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=V%C3%B6k%20Baths"],
        ["Hengifoss alternative", "https://www.google.com/maps/search/?api=1&query=Hengifoss"],
      ],
      cost: "~$60 pp",
      rest: true,
      img: "vok-baths.jpg",
    },
    {
      type: "connector",
      time: "1h 30m",
      label: "Vök Baths → Möðrudalur",
      url: "https://www.google.com/maps/dir/?api=1&origin=V%C3%B6k%20Baths&destination=M%C3%B6%C3%B0rudalur&travelmode=driving",
    },
    {
      type: "stop",
      time: "2:30 PM",
      title: "Möðrudalsöræfi and Fjalladýrð",
      sub: "30 min",
      body: [
        "Route 1 north across stark high desert. Coffee and kleinur at Möðrudalur (Fjalladýrð).",
      ],
      links: [
        ["Fjalladýrð", "https://www.fjalladyrd.is/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=M%C3%B6%C3%B0rudalur"],
      ],
      img: "modrudalur.jpg",
    },
    {
      type: "connector",
      time: "45 min",
      label: "Möðrudalur → Dettifoss",
      url: "https://www.google.com/maps/dir/?api=1&origin=M%C3%B6%C3%B0rudalur&destination=Dettifoss&travelmode=driving",
    },
    {
      type: "stop",
      time: "4:30 PM",
      title: "Dettifoss and Selfoss",
      sub: "1 hr",
      body: [
        "Europe's most powerful waterfall. East side (Rd 864, gravel) is the more dramatic viewpoint; west side (862, paved) is easier. Selfoss is a 15-minute walk upstream.",
      ],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Dettifoss"],
        ["Road conditions", "https://umferdin.is/en"],
      ],
      imgs: ["dettifoss.jpg", "selfoss.jpg"],
    },
    {
      type: "connector",
      time: "45 min",
      label: "Dettifoss → Hverir",
      url: "https://www.google.com/maps/dir/?api=1&origin=Dettifoss&destination=Hverir%20N%C3%A1maskar%C3%B0&travelmode=driving",
    },
    {
      type: "stop",
      time: "6:00 PM",
      title: "Hverir at Námaskarð",
      sub: "30 min",
      body: ["Boiling mud pots and sulphur. Stay on marked paths — the crust is thin."],
      links: [
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Hverir%20N%C3%A1maskar%C3%B0"],
      ],
      img: "hverir.jpg",
    },
    {
      type: "connector",
      time: "15 min",
      label: "Hverir → Vogafjós Farm Resort",
      url: "https://www.google.com/maps/dir/?api=1&origin=Hverir%20N%C3%A1maskar%C3%B0&destination=Vogafj%C3%B3s%20Farm%20Resort&travelmode=driving",
    },
    {
      type: "stop",
      time: "6:45 PM",
      title: "Vogafjós — dinner and check in",
      body: ["Their own dairy, geothermal rye bread. Stay on the farm."],
      links: [
        ["Vogafjós", "https://vogafjosfarmresort.is/en/home/"],
        ["Maps", "https://www.google.com/maps/search/?api=1&query=Vogafj%C3%B3s%20Farm%20Resort"],
      ],
      cost: "~$320 lodging",
      rest: true,
      imgs: ["vogafjos.jpg", "vogafjos-dinner.jpg"],
    },
  ],
  note: "Hengifoss instead of Vök if you'd rather walk than soak. Don't stack both with Dettifoss on the same afternoon.",
};
