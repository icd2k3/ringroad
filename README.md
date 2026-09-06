# Iceland Ring Road itinerary

Static site for a nine-day counterclockwise loop. Day tabs, drop-in photos, Cloudflare Pages, and a phone copy that works without signal.

**Live URL:** (connect this repo to Cloudflare Pages — project name `ringroad`)

The plan assumes departure from Portland on June 24, 2027, Iceland arrival June 25, and departure July 3. Dates and bookings remain tentative. Two people, Toyota RAV4. Night 1 is Hotel Berg in Keflavík; Night 8 is Hotel Borg in Reykjavík after Sky Lagoon. The Retreat Spa is a Day 2 day visit, not an overnight.

## Put it on your iPhone (Safari Home Screen)

Do this **once per phone**, on Wi-Fi, in **Safari** — not Chrome. Chrome on iPhone cannot install a Home Screen web app.

1. Open the live URL above in **Safari**.
2. Tap the **Share** button (square with an arrow pointing up) at the bottom of the screen.
3. Scroll the share sheet and tap **Add to Home Screen**.
   - If you do not see it, tap **Edit Actions** at the bottom of the sheet and turn **Add to Home Screen** on.
4. Name it **Ring Road** (or whatever you like) and tap **Add**.
5. Find the new icon on the Home Screen and **open it while you still have Wi-Fi**. The first launch downloads the whole itinerary, including photos.
6. Confirm it worked: the site should open full-screen, without Safari’s address bar. Put the phone in airplane mode and tap a few day tabs — copy and photos should still load.

Repeat steps 1–6 on the other phone. Each phone caches its own copy.

Maps / hotel links still need a signal, or download Iceland in Google Maps or Apple Maps beforehand — including the East Fjords and Möðrudalsöræfi.

### After we change the itinerary

After deploying, open the Home Screen icon on Wi-Fi, let the itinerary refresh and check the day pages before going offline. For a coordinated content release, update the cache name in `sw.js`; activation preserves the freshly installed cache and removes only older Ring Road caches. Do not clear saved packing preferences.

## Local

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

Or `npx wrangler pages dev .`

The service worker does not run on localhost, so a refresh always shows what you just saved. No compiler.

## Edit a day

Each day is one file: [`js/days/day-1.js`](js/days/day-1.js) through `day-9.js`.

Stops and drives look like this:

```js
{ type: "stop", time: "10:00 AM", sub: "2 hrs", title: "Sky Lagoon",
  links: [["Maps", "https://…"]], body: ["…"], cost: "$200",
  flag: "optional warning", rest: true }

{ type: "connector", time: "45 min", label: "Hvammstangi → Sky Lagoon", url: "https://maps…" }
```

`rest`, `optional`, and `flag` are optional. `img: "skogafoss.jpg"` looks in `images/day-N/`.

## Add a photo

1. Drop a JPEG or PNG in `images/day-3/` (use the day number).
2. On that stop, set `img: "skogafoss.jpg"`.
3. Optional: run `python3 scripts/write-precache.py` so a later Wi-Fi open on the phones downloads the new photo even if you never scrolled to it.

Missing photos just omit the figure. No encoding, no build.

To (re)fetch stop photos: `python3 scripts/fetch-stop-images.py`

## Dates and estimates

Each day carries a tentative `date` and a `budget` list of USD planning allowances for two. The renderer computes the daily estimate and overview subtotal from these numbers; stop-level cost notes explain inclusions and optional extras. Rental and all-trip fuel are separate overview allowances. Flights and Berg early access are pending and excluded, not zero-cost bookings. Update the quoted booking and its budget together.

Driving statistics are explicit planning allowances because optional outings and local access cannot be accurately counted from route links alone. A photo reused from another day can specify `img: { src: "skool-beans.jpg", day: 3 }`.

### Do not

- Do not add the site from **Chrome**. Delete that icon if you already tried — it will not stay offline.
- Do not use **Settings → Safari → Clear History and Website Data** during the trip. That wipes the cached itinerary and you would need Wi-Fi to restore it.
- Do not leave the phone critically low on storage. iOS can evict website data when space is gone.

If the Home Screen app is ever empty, use the [zip backup](#github-zip-backup) below.

## GitHub zip backup

On a version tag (`v1.0.0`) or via Actions → release → Run workflow, a zip of the site is attached to a GitHub Release.

On iPhone: download the zip → **Files** → unzip → tap `index.html` (opens in Safari). Photos in the zip show up. This is the fallback if Safari ever clears the Home Screen app.

## Cloudflare Pages

Connect this GitHub repo in the Cloudflare dashboard.

- Build command: none
- Output directory: `/`

[`wrangler.jsonc`](wrangler.jsonc) is set for `npx wrangler pages deploy . --project-name=ringroad`.

Keep the repo private — hotels, bookings, and the itinerary are in the copy.
