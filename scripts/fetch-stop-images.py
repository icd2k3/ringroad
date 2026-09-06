#!/usr/bin/env python3
"""Download itinerary stop photos and save as ~1400px JPEGs.

Private trip site — scrape official pages, booking galleries, Wikimedia,
whatever looks right. Skip files that already exist.
"""
from __future__ import annotations

import io
import json
import re
import ssl
import time
import urllib.request
from pathlib import Path
from urllib.parse import quote

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "images"
MAX_SIDE = 1400
QUALITY = 82
UA_WIKI = "RingRoadItinerary/1.0 (personal offline trip site)"
UA_WEB = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
)

CTX = ssl.create_default_context()


def wiki(name: str, width: int = 1600) -> str:
    name = name.replace(" ", "_")
    return (
        "https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/"
        + quote(name)
        + f"&width={width}"
    )


def ua_for(url: str) -> str:
    if "wikimedia.org" in url or "wikipedia.org" in url:
        return UA_WIKI
    return UA_WEB


def fetch_bytes(url: str) -> bytes:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": ua_for(url),
            "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            "Referer": url,
        },
    )
    with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
        return r.read()


def fetch_text(url: str) -> str:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": ua_for(url), "Accept": "text/html,*/*"},
    )
    with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
        return r.read().decode("utf-8", "replace")


def og_image(page_url: str) -> str:
    html = fetch_text(page_url)
    for pat in (
        r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']',
        r'content=["\']([^"\']+)["\']\s+property=["\']og:image["\']',
        r'name=["\']twitter:image["\']\s+content=["\']([^"\']+)["\']',
        r'content=["\']([^"\']+)["\']\s+name=["\']twitter:image["\']',
    ):
        m = re.search(pat, html, re.I)
        if m:
            return m.group(1).replace("&amp;", "&")
    raise RuntimeError(f"no og:image on {page_url}")


def commons_file(query: str) -> str:
    api = (
        "https://commons.wikimedia.org/w/api.php?action=query&list=search"
        f"&srsearch={quote(query)}&srnamespace=6&srlimit=5&format=json"
    )
    data = json.loads(fetch_text(api))
    hits = data.get("query", {}).get("search") or []
    if not hits:
        raise RuntimeError(f"no commons hit for {query}")
    title = hits[0]["title"].split(":", 1)[-1]
    return wiki(title)


def save_jpeg(dest: Path, data: bytes) -> None:
    im = Image.open(io.BytesIO(data))
    if im.mode in ("RGBA", "P", "LA"):
        bg = Image.new("RGB", im.size, (255, 255, 255))
        im = im.convert("RGBA")
        bg.paste(im, mask=im.split()[-1])
        im = bg
    else:
        im = im.convert("RGB")
    im.thumbnail((MAX_SIDE, MAX_SIDE), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "JPEG", quality=QUALITY, optimize=True)


# Each entry: (relpath, source) where source is a direct URL, wiki filename via wiki(),
# ("og", page_url), or ("commons", search query).
IMAGES: list[tuple[str, object]] = [
    ("day-1/kaffi-duus.jpg", ("og", "https://duus.is/")),
    ("day-1/brimketill.jpg", wiki("Brimketill, Iceland, 20230506 1112 5330.jpg")),
    ("day-1/bridge-continents.jpg", wiki("Bridge over continents.jpg")),
    ("day-1/library-bistro.jpg", "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400"),
    ("day-2/kvernufoss.jpg", wiki("Kvernufoss.JPG")),
    ("day-3/solheimajokull.jpg", wiki("Sólheimajökull iceland hdsr 2019 10 18 9999 250.jpg")),
    ("day-3/svartifoss.jpg", wiki("Svartifoss.jpg")),
    ("day-3/fosshotel-glacier.jpg", ("og", "https://www.islandshotel.is/hotels-in-iceland/fosshotel-glacier-lagoon/")),
    ("day-3/fosshotel-room.jpg", ("og", "https://www.islandshotel.is/hotels-in-iceland/fosshotel-glacier-lagoon/accommodation/")),
    ("day-3/fosshotel-dinner.jpg", ("og", "https://www.islandshotel.is/hotels-in-iceland/fosshotel-glacier-lagoon/restaurant/")),
    ("day-4/fjallsarlon.jpg", wiki("Fjallsárlón glacier lake, Iceland, 20240719 1720 2774.jpg")),
    ("day-4/vestrahorn.jpg", wiki("Vestrahorn and Stokksnes beach in Iceland.jpg")),
    ("day-4/pakkhus.jpg", ("og", "https://pakkhus.is/")),
    ("day-4/east-fjords.jpg", wiki("Berufjörður, Eastern Iceland, 20240718 1018 1936.jpg")),
    ("day-4/hotel-aldan.jpg", ("og", "https://www.hotelaldan.is/")),
    ("day-4/seydisfjordur.jpg", wiki("Seyðisfjörður.jpg")),
    ("day-4/nord-austur.jpg", "https://www.nordaustur.is/wp-content/uploads/salur.jpg"),
    ("day-5/blue-church.jpg", wiki("Church in Seyðisfjörður, Iceland, 20240717 1448 1737.jpg")),
    ("day-5/rainbow-street.jpg", wiki("Seyðisfjörður - Seydisfjordur, Iceland, Rainbow Road.jpg")),
    ("day-5/vok-baths.jpg", ("og", "https://www.vokbaths.is/")),
    ("day-5/modrudalur.jpg", wiki("Möðrudalur.jpg")),
    ("day-5/dettifoss.jpg", wiki("Dettifoss Waterfall, Iceland, 20240716 1514 1598.jpg")),
    ("day-5/selfoss.jpg", wiki("Selfoss waterfall, Iceland, 20240716 1537 1683.jpg")),
    ("day-5/hverir.jpg", wiki("Hverarönd July 2014.JPG")),
    ("day-5/vogafjos.jpg", "https://vogafjosfarmresort.is/wp-content/uploads/2025/06/Forsida-Tveggja-1024x683.jpg"),
    ("day-5/vogafjos-dinner.jpg", "https://vogafjosfarmresort.is/wp-content/uploads/2025/06/Forsida-Queen-2-1024x768.jpg"),
    ("day-6/hverfjall.jpg", wiki("Hverfjall.jpg")),
    ("day-6/dimmuborgir.jpg", wiki("Dimmuborgir.jpg")),
    ("day-6/gamli-baukur.jpg", "http://gamlibaukur.is/wp-content/uploads/2019/04/54446612_395453851005957_5412801491128112038_n.jpg"),
    ("day-6/husavik.jpg", wiki("Húsavík.jpg")),
    ("day-6/whale-watch.jpg", wiki("026b Humpback whale jump and splash Photo by Giles Laurent.jpg")),
    ("day-6/geosea.jpg", ("og", "https://www.geosea.is/")),
    ("day-6/godafoss.jpg", wiki("Goðafoss.jpg")),
    ("day-6/hotel-kea.jpg", "https://images.prismic.io/keahotels/ZowXKh5LeNNTw6RO_Fors%C3%AD%C3%B0umyndir-15-.png?auto=format,compress&fit=max&w=1600"),
    ("day-6/akureyri.jpg", wiki("Akureyri town centre.jpg")),
    ("day-7/botanical-garden.jpg", wiki("Akureyri Botanical Garden Fountain 01.jpg")),
    ("day-7/akureyrarkirkja.jpg", wiki("Akureyrarkirkja.jpg")),
    ("day-7/blaa-kannan.jpg", ("commons", "Akureyri cafe street")),
    ("day-7/varmahlid.jpg", wiki("2014-04-27 16-06-06 Iceland - Varmahlíð Varmahlíð.JPG")),
    ("day-7/hvitserkur.jpg", wiki("Hvítserkur, a basalt stack in northwest Iceland, 20240715 1124 0834.jpg")),
    ("day-7/seals.jpg", wiki("Harbor seals, Ytri Tunga Beach, Iceland, 20240714 1218 1015.jpg")),
    ("day-7/hotel-hvammstangi.jpg", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/16763841.jpg?k=e8ac9a93c939dde915ebf032b4af93dc48870dc5108974ec8a7e597ee65fbb82&o="),
    ("day-7/sjavarborg.jpg", "https://static.wixstatic.com/media/d3f737_c9f0acdd929d4665a155b814876c3b21~mv2.jpeg"),
    ("day-8/grabrok.jpg", wiki("Cráter Stóri Grábrók, Vesturland, Islandia, 2014-08-15, DD 094.JPG")),
    ("day-8/hallgrimskirkja.jpg", wiki("Hallgrímskirkja.jpeg")),
    ("day-8/dill.jpg", "https://www.dillrestaurant.is/wp-content/uploads/2019/10/Dill-3-543x724.jpg"),
]


def resolve(src) -> str:
    if isinstance(src, str):
        return src
    kind, value = src
    if kind == "og":
        return og_image(value)
    if kind == "commons":
        return commons_file(value)
    raise RuntimeError(f"unknown source {src}")


def main() -> None:
    failed = []
    for rel, src in IMAGES:
        dest = OUT / rel
        if dest.exists() and dest.stat().st_size > 2000:
            print(f"skip existing {rel}")
            continue
        print(f"get {rel}")
        try:
            url = resolve(src)
            print(f"  from {url[:120]}")
            data = fetch_bytes(url)
            if len(data) < 2000:
                raise RuntimeError(f"too small ({len(data)} bytes)")
            save_jpeg(dest, data)
            print(f"  ok {dest.stat().st_size} bytes")
        except Exception as e:
            print(f"  FAIL {e}")
            failed.append((rel, str(src), str(e)))
        time.sleep(0.4)
    print("\nDone. failures:", len(failed))
    for rel, src, err in failed:
        print(f" - {rel}: {err}\n   {src}")


if __name__ == "__main__":
    main()
