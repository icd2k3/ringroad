(function () {
  const DAYS = window.DAYS || {};
  const tabsEl = document.getElementById("tabs");
  const panelsEl = document.getElementById("day-panels");
  const indexEl = document.getElementById("day-index");

  const HEROES = {
    1: ["gunnuhver.jpg", "reykjanesviti.jpg", "brimketill.jpg"],
    2: ["blue-lagoon.jpg", "seljalandsfoss.jpg", "reynisfjara.jpg"],
    3: ["solheimajokull.jpg", "fjadrargljufur.jpg", "svartifoss.jpg"],
    4: ["jokulsarlon.jpg", "vestrahorn.jpg", "seydisfjordur.jpg"],
    5: ["vok-baths.jpg", "dettifoss.jpg", "hverir.jpg"],
    6: ["hverfjall.jpg", "husavik.jpg", "godafoss.jpg"],
    7: ["akureyri.jpg", "hvitserkur.jpg", "seals.jpg"],
    8: ["grabrok.jpg", "sky-lagoon.jpg", "reykjavik.jpg"],
    9: ["braud.jpg", { src: "keflavik-airport.jpg", day: 1 }, "icelandair.jpg"],
  };

  const CHECK_SVG =
    '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f2f2f3" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"><path d="M20 6 9 17l-5-5"></path></svg>';

  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const formatClockTime = (time) => {
    const m = /^(.*?)(\d{1,2}):(\d{2})\s*([AaPp][Mm])\s*$/.exec(String(time).trim());
    if (!m) return { label: time, alt: null };
    const hour12 = +m[2];
    const min = m[3];
    let hour24 = hour12 % 12;
    if (m[4].toUpperCase() === "PM") hour24 += 12;
    return {
      label: `${m[1]}${String(hour24).padStart(2, "0")}:${min}`,
      alt: hour24 > 12 ? `${hour12}:${min}` : null,
    };
  };

  const withLinks = (s) => {
    const re = /<a href="(https?:\/\/[^"]+)">([^<]*)<\/a>/g;
    let out = "";
    let last = 0;
    let m;
    const str = String(s);
    while ((m = re.exec(str))) {
      out += esc(str.slice(last, m.index));
      out += `<a href="${esc(m[1])}" target="_blank" rel="noopener">${esc(m[2])}</a>`;
      last = m.index + m[0].length;
    }
    return out + esc(str.slice(last));
  };

  const imgSrc = (dayId, img) => {
    if (!img) return null;
    const file = typeof img === "string" ? img : img.src;
    if (!file) return null;
    return { src: `./images/day-${img.day || dayId}/${file}`, credit: img.credit || "" };
  };

  const linkRow = (links) =>
    links && links.length
      ? `<div class="links">${links
          .map(
            ([label, url]) =>
              `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a>`
          )
          .join("")}</div>`
      : "";

  const stopImages = (dayId, stop) => {
    const imgs = stop.imgs || (stop.img ? [stop.img] : []);
    return imgs.map((img) => imgSrc(dayId, img)).filter(Boolean);
  };

  const renderFigures = (dayId, stop) => {
    const resolved = stopImages(dayId, stop);
    if (!resolved.length) return "";
    const figures = resolved
      .map(
        (img) => `<figure>
          <img src="${esc(img.src)}" alt="${esc(stop.title)}" loading="lazy">
        </figure>`
      )
      .join("");
    return resolved.length > 1 ? `<div class="gallery">${figures}</div>` : figures;
  };

  const stopHasDetails = (s) =>
    (s.body && s.body.length) ||
    (s.list && s.list.length) ||
    (s.links && s.links.length) ||
    s.flag ||
    s.img ||
    (s.imgs && s.imgs.length);

  const renderStopBody = (dayId, s) => `
        ${linkRow(s.links)}
        ${(s.body || []).map((p) => `<p>${withLinks(p)}</p>`).join("")}
        ${
          s.list && s.list.length
            ? `<ul class="stop-list">${s.list
                .map((item) => `<li>${withLinks(item)}</li>`)
                .join("")}</ul>`
            : ""
        }
        ${s.flag ? `<div class="flag">${withLinks(s.flag)}</div>` : ""}
        ${renderFigures(dayId, s)}`;

  const renderStopHead = (dayId, s) => {
    const thumb = stopImages(dayId, s)[0];
    const clock = formatClockTime(s.time);
    return `
      <span class="clock">${esc(clock.label)}${clock.alt ? `<span class="clock-12">(${esc(clock.alt)})</span>` : ""}${s.sub ? `<span>${esc(s.sub)}</span>` : ""}</span>
      <span class="stop-rule" aria-hidden="true"></span>
      <span class="stop-heading">
        ${thumb ? `<img class="stop-thumb" src="${esc(thumb.src)}" alt="" loading="lazy">` : ""}
        <span class="stop-copy">
          <h2>${esc(s.title)}</h2>
          ${s.cost ? `<span class="cost">${esc(s.cost)}</span>` : ""}
          ${s.optional ? `<span class="opt-tag">optional</span>` : ""}
        </span>
      </span>`;
  };

  const renderStop = (dayId, s) => {
    const head = renderStopHead(dayId, s);
    const body = renderStopBody(dayId, s);
    const inner = stopHasDetails(s)
      ? `<details class="content">
        <summary>${head}</summary>
        <div class="stop-body">${body}</div>
      </details>`
      : `<div class="content content--static">
        <div class="stop-static-head">${head}</div>
      </div>`;

    return `
    <li class="stop${s.rest ? " stop--rest" : ""}${s.optional ? " stop--opt" : ""}">
      <div class="stop-card blueprint">
        ${inner}
      </div>
    </li>`;
  };

  const renderConnector = (c) => {
    const parts = String(c.label || "").split(/\s*→\s*/);
    const from = parts[0] || c.label || "Drive";
    const to = parts[1] || "";
    const mode = c.mode === "walk" ? "walk" : "drive";
    return `
    <li class="connector">
      <a class="connector-inner" href="${esc(c.url)}" target="_blank" rel="noopener">
        <span class="connector-place">${esc(from)}</span>
        <span class="dot" aria-hidden="true"></span>
        <span class="line" aria-hidden="true"></span>
        <span class="connector-time">${esc(c.time)} ${mode}</span>
        <span class="line" aria-hidden="true"></span>
        <span class="dot" aria-hidden="true"></span>
        <span class="connector-place">${esc(to)}</span>
      </a>
    </li>`;
  };

  const driveStat = (items) => {
    const mins = (items || [])
      .filter((i) => i.type === "connector" && i.mode !== "walk")
      .reduce((t, c) => {
        const h = /(\d+)\s*h/.exec(c.time);
        const m = /(\d+)\s*m/.exec(c.time);
        return t + (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0);
      }, 0);
    if (!mins) return null;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h}h ${String(m).padStart(2, "0")}m`;
  };

  const OPTION_KEY = "ringroad-night";

  const savedOption = () => {
    try {
      return localStorage.getItem(OPTION_KEY);
    } catch (_) {
      return null;
    }
  };

  const persistOption = (id) => {
    try {
      localStorage.setItem(OPTION_KEY, id);
    } catch (_) {}
  };

  const pickOption = (day, requested) => {
    const opts = day && day.options;
    if (!opts || !opts.length) return null;
    return (
      opts.find((o) => o.id === requested) ||
      opts.find((o) => o.id === savedOption()) ||
      opts[0]
    );
  };

  const viewFor = (day, option) =>
    option ? Object.assign({}, day, option, { id: day.id, title: day.title }) : day;

  const renderOptionTabs = (day, selectedId) =>
    `<div class="day-opts" role="tablist" aria-label="Day ${day.id} options">
      ${day.options
        .map(
          (o) => `<button type="button" class="day-opt" role="tab"
            data-option="${esc(o.id)}"
            aria-selected="${o.id === selectedId ? "true" : "false"}">
            <span class="day-opt-kicker">${esc(o.kicker)}</span>
            <span class="day-opt-name">${esc(o.name)}</span>
          </button>`
        )
        .join("")}
    </div>`;

  const renderHeadMeta = (view) => {
    const displayStats = [...(view.stats || [])];
    if (view.budget) displayStats.push({ label: "Estimate", value: formatMoney(daySpend(view)) });
    const stats = displayStats.map((s) => {
      const value =
        s.id === "drive" ? driveStat(view.items) || s.value : s.value;
      return `<div>${esc(s.label)}<b>${esc(value)}</b></div>`;
    });

    const route = view.route
      ? `<a class="route-link" href="${esc(view.route.url)}" target="_blank" rel="noopener">
          <span class="route-label">${esc(view.route.label)}</span>
          ${view.route.note ? `<span class="route-note">${esc(view.route.note)}</span>` : ""}
        </a>`
      : "";

    return `
      ${view.date ? `<p class="kicker">${esc(view.date)}</p>` : ""}
      <p class="sub">${esc(view.sub || "")}</p>
      ${view.flag ? `<div class="flag">${withLinks(view.flag)}</div>` : ""}
      <div class="stats-row">
        <div class="stats">${stats.join("")}</div>
        <button type="button" class="expand-all">Expand all</button>
      </div>
      ${route}`;
  };

  const renderTimeline = (view) => {
    const before = (view.before || [])
      .map((item) => `<li>${item}</li>`)
      .join("");

    return `
      <ol class="day">
        ${(view.items || [])
          .map((i) =>
            i.type === "connector" ? renderConnector(i) : renderStop(view.id, i)
          )
          .join("")}
      </ol>
      <footer class="day-foot">
        ${
          before
            ? `<div class="before-box blueprint">
                <h3>Before you go</h3>
                <ul>${before}</ul>
              </div>`
            : ""
        }
        ${view.budget ? `<details class="before-box blueprint budget-detail">
          <summary>Estimated cost for two · ${formatMoney(daySpend(view))}</summary>
          <ul>${view.budget.map((entry) => `<li>${esc(entry.label)}: ${formatMoney(entry.amount)}</li>`).join("")}</ul>
          <p>USD planning allowances, not confirmed quotes. Fuel and rental are counted separately in the overview. Optional extras are excluded unless an allowance is listed here.</p>
        </details>` : ""}
        ${view.note ? `<p class="after">${esc(view.note)}</p>` : ""}
      </footer>`;
  };

  const heroList = (id) => HEROES[id] || HEROES[8];

  const renderHeroImgs = (id, alt) =>
    heroList(id)
      .map((img, i) => {
        const resolved = imgSrc(id, img);
        if (!resolved) return "";
        return `<img src="${esc(resolved.src)}" alt="${i === 0 ? esc(alt || "") : ""}">`;
      })
      .join("");

  const renderHero = (day) => {
    if (!heroList(day.id).length) return "";
    return `<figure class="hero hero-collage blueprint">
      ${renderHeroImgs(day.id, day.title)}
    </figure>`;
  };

  const renderDay = (day) => {
    const hero = renderHero(day);
    if (!day.options) {
      return `
      ${hero}
      <header class="day-head">
        <h2>${esc(day.title)}</h2>
        ${renderHeadMeta(day)}
      </header>
      ${renderTimeline(day)}`;
    }

    const selected = pickOption(day);
    return `
      ${hero}
      <header class="day-head day-head--opts">
        <h2>${esc(day.title)}</h2>
        ${renderOptionTabs(day, selected.id)}
      </header>
      ${day.options
        .map((o) => {
          const view = viewFor(day, o);
          const on = o.id === selected.id;
          return `<div class="day-option${on ? " is-active" : ""}" data-option="${esc(o.id)}" data-print-label="${esc(o.label)}"${on ? "" : " hidden"}>
            <div class="option-head">
              ${renderHeadMeta(view)}
            </div>
            ${renderTimeline(view)}
          </div>`;
        })
        .join("")}`;
  };

  const ids = Object.keys(DAYS)
    .map(Number)
    .sort((a, b) => a - b);

  const parseSpend = (value) => {
    const n = Number(String(value).replace(/[^0-9.]/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  const spendSource = (day) => (day.options && day.options[0]) || day;

  const daySpend = (day) => {
    if (day.budget) return day.budget.reduce((sum, entry) => sum + entry.amount, 0);
    const stat = (spendSource(day).stats || []).find((s) => s.label === "Spend");
    return stat ? parseSpend(stat.value) : 0;
  };

  const formatMoney = (n) => `~$${Math.round(n).toLocaleString("en-US")}`;

  const TRIP_EXTRAS = [
    { label: "Flights — not booked", value: null },
    { label: "Rental car — Toyota RAV4, 9 days, to confirm", value: 1050 },
    { label: "Fuel — entire trip, including final top-up (~1,850 km)", value: 340 },
    { label: "Berg early access / preceding night — quote pending", value: null },
  ];

  const tabBtn = (id, label, selected) => {
    const btn = document.createElement("button");
    btn.className = "tab";
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.dataset.id = id;
    btn.setAttribute("aria-selected", selected ? "true" : "false");
    btn.textContent = label;
    return btn;
  };

  ids.forEach((id) => {
    tabsEl.appendChild(tabBtn(String(id), String(id), false));
  });

  const overviewLink = document.getElementById("overview-link");
  const packingLink = document.getElementById("packing-link");

  indexEl.innerHTML = ids
    .map((id) => {
      const d = DAYS[id];
      return `<li>
        <a href="#day-${id}">
          <span class="hero-strip">${renderHeroImgs(id, "")}</span>
          <span>
            <span class="n">Day ${id} · ${esc((d.date || "").split(" 2027")[0])}</span>
            <h3>${esc(d.title)}</h3>
            <p>${esc(d.blurb || d.sub)}</p>
          </span>
        </a>
      </li>`;
    })
    .join("");

  const overviewRow = (row, className) => `<li${className ? ` class="${className}"` : ""}>
      <span><b>${esc(row.label)}</b>${row.detail ? ` · ${esc(row.detail)}` : ""}</span>
      <span class="amt">${row.amt}</span>
    </li>`;

  const costEl = document.getElementById("trip-cost");
  if (costEl) {
    const dayRows = ids.map((id) => {
      const d = DAYS[id];
      return { label: `Day ${id}`, detail: d.title, amount: daySpend(d) };
    });
    const extraRows = TRIP_EXTRAS.map((x) => ({
      label: x.label,
      detail: "",
      amount: x.value,
    }));
    const total =
      dayRows.reduce((sum, row) => sum + row.amount, 0) +
      extraRows.reduce((sum, row) => sum + (row.amount || 0), 0);

    costEl.innerHTML = [
      ...dayRows.map((row) =>
        overviewRow({ ...row, amt: formatMoney(row.amount) })
      ),
      ...extraRows.map((row) =>
        overviewRow(
          { ...row, amt: row.amount == null ? "—" : formatMoney(row.amount) },
          row.amount == null ? "costs-pending" : ""
        )
      ),
      overviewRow(
        {
          label: "Planning subtotal",
          detail: "excludes pending costs and optional extras",
          amt: formatMoney(total),
        },
        "costs-total"
      ),
    ].join("");
  }

  const driveEl = document.getElementById("trip-drive");
  if (driveEl) {
    const plannedDriveMinutes = (value) => {
      const base = String(value || "").split(/\s*[;+]/)[0];
      const h = /(\d+)\s*h/.exec(base);
      const m = /(\d+)\s*m/.exec(base);
      return (h ? +h[1] * 60 : 0) + (m ? +m[1] : 0);
    };
    const formatDriveTotal = (mins) => {
      if (!mins) return "—";
      const hours = Math.floor(mins / 60);
      const minutes = mins % 60;
      if (!hours) return `~${minutes} min`;
      if (!minutes) return `~${hours}h`;
      return `~${hours}h ${minutes}m`;
    };
    const dayDrive = (day) =>
      ((spendSource(day).stats || []).find((s) => s.label === "Driving") || {}).value || "";
    const driveRows = ids.map((id) => {
      const d = DAYS[id];
      const mins = plannedDriveMinutes(dayDrive(d));
      return {
        label: `Day ${id}`,
        detail: d.title,
        amt: formatDriveTotal(mins),
        mins,
      };
    });
    const driveTotal = driveRows.reduce((sum, row) => sum + row.mins, 0);
    driveEl.innerHTML = [
      ...driveRows.map((row) => overviewRow(row)),
      overviewRow(
        {
          label: "Planning total",
          detail: "excludes optional extras",
          amt: formatDriveTotal(driveTotal),
        },
        "costs-total"
      ),
    ].join("");
  }

  ids.forEach((id) => {
    const section = document.createElement("section");
    section.className = "panel";
    section.id = `panel-${id}`;
    section.setAttribute("role", "tabpanel");
    section.dataset.panel = String(id);
    section.innerHTML = renderDay(DAYS[id]);
    panelsEl.appendChild(section);
  });

  const PACK_KEY = "ringroad-packed";
  const packListEl = document.getElementById("pack-list");
  const packCountEl = document.getElementById("pack-count");

  const loadChecks = () => {
    try {
      return JSON.parse(localStorage.getItem(PACK_KEY) || "{}");
    } catch (_) {
      return {};
    }
  };

  const saveChecks = (checks) => {
    try {
      localStorage.setItem(PACK_KEY, JSON.stringify(checks));
    } catch (_) {}
  };

  let checks = loadChecks();

  const renderPacking = () => {
    if (!packListEl || !packCountEl) return;
    const sections = window.PACKING || [];
    let total = 0;
    let packed = 0;
    packListEl.innerHTML = sections
      .map((sec, si) => {
        const items = sec.items
          .map((text, ii) => {
            const key = `${si}-${ii}`;
            const done = !!checks[key];
            total += 1;
            if (done) packed += 1;
            return `<button type="button" class="pack-item${done ? " is-done" : ""}" data-key="${esc(key)}" aria-pressed="${done}">
              <span class="pack-box" aria-hidden="true">${done ? CHECK_SVG : ""}</span>
              <span class="pack-text">${esc(text)}</span>
            </button>`;
          })
          .join("");
        return `<div class="pack-sec">
          <h3>${esc(sec.title)}</h3>
          <div class="pack-box-list">${items}</div>
        </div>`;
      })
      .join("");
    packCountEl.textContent = `${packed} of ${total} packed`;
  };

  if (packListEl) {
    packListEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".pack-item");
      if (!btn) return;
      const key = btn.dataset.key;
      if (checks[key]) delete checks[key];
      else checks[key] = 1;
      saveChecks(checks);
      renderPacking();
    });
    renderPacking();
  }

  const applyOption = (panel, day, optionId) => {
    const opt = pickOption(day, optionId);
    persistOption(opt.id);
    panel.querySelectorAll(".day-option").forEach((el) => {
      const on = el.dataset.option === opt.id;
      el.classList.toggle("is-active", on);
      el.hidden = !on;
    });
    panel.querySelectorAll(".day-opt").forEach((btn) => {
      btn.setAttribute(
        "aria-selected",
        btn.dataset.option === opt.id ? "true" : "false"
      );
    });
    return opt.id;
  };

  const dayHash = (id, optionId) => {
    const day = DAYS[+id];
    const opt = day && day.options ? pickOption(day, optionId) : null;
    return opt ? `day-${id}/${opt.id}` : `day-${id}`;
  };

  let currentPanel = null;

  const show = (state) => {
    const id = typeof state === "string" ? state : state.panel;
    const optionId = typeof state === "string" ? null : state.option;
    const panelChanged = currentPanel !== id;
    currentPanel = id;

    document.querySelectorAll(".panel").forEach((p) => {
      p.classList.toggle("is-active", p.dataset.panel === id);
    });
    document.querySelectorAll(".tab").forEach((t) => {
      t.setAttribute("aria-selected", t.dataset.id === id ? "true" : "false");
    });
    if (overviewLink) {
      overviewLink.classList.toggle("is-active", id === "overview");
      overviewLink.setAttribute("aria-current", id === "overview" ? "page" : "false");
    }
    if (packingLink) {
      packingLink.classList.toggle("is-active", id === "packing");
      packingLink.setAttribute("aria-current", id === "packing" ? "page" : "false");
    }

    const day = DAYS[+id];
    if (day && day.options) {
      const panel = document.querySelector(`[data-panel="${id}"]`);
      if (panel) applyOption(panel, day, optionId);
    }

    const active = tabsEl.querySelector(`.tab[data-id="${id}"]`);
    if (active && id !== "overview" && id !== "packing") {
      active.scrollIntoView({ inline: "center", block: "nearest" });
    }
    if (panelChanged) window.scrollTo(0, 0);
  };

  const fromHash = () => {
    const h = (location.hash || "#overview").replace(/^#/, "");
    const m = /^day-(\d+)(?:\/([a-z0-9-]+))?$/.exec(h);
    if (m && DAYS[+m[1]]) {
      return { panel: m[1], option: m[2] || null };
    }
    if (h === "overview") return { panel: "overview", option: null };
    if (h === "packing") return { panel: "packing", option: null };
    if (DAYS[+h]) return { panel: h, option: null };
    return { panel: "overview", option: null };
  };

  tabsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab");
    if (!btn) return;
    const id = btn.dataset.id;
    location.hash = id === "overview" ? "overview" : dayHash(id);
  });

  const stopDetails = (root) => {
    const active =
      root.matches && root.matches(".day-option")
        ? root
        : root.querySelector(".day-option.is-active") || root;
    return active.querySelectorAll(".stop details");
  };

  const syncExpandBtn = (panel) => {
    const roots = [...panel.querySelectorAll(".day-option.is-active")];
    const targets = roots.length ? roots : [panel];
    targets.forEach((root) => {
      const btn = root.querySelector(".expand-all");
      const details = [...stopDetails(root)];
      if (!btn || !details.length) return;
      const allOpen = details.every((d) => d.open);
      btn.textContent = allOpen ? "Collapse all" : "Expand all";
      btn.setAttribute("aria-pressed", allOpen ? "true" : "false");
    });
  };

  panelsEl.addEventListener("click", (e) => {
    const optBtn = e.target.closest(".day-opt");
    if (optBtn) {
      const panel = optBtn.closest(".panel");
      location.hash = `day-${panel.dataset.panel}/${optBtn.dataset.option}`;
      return;
    }
    const btn = e.target.closest(".expand-all");
    if (!btn) return;
    const root = btn.closest(".day-option") || btn.closest(".panel");
    if (!root) return;
    const details = [...stopDetails(root)];
    const expand = !details.every((d) => d.open);
    details.forEach((d) => {
      d.open = expand;
    });
    syncExpandBtn(btn.closest(".panel"));
  });

  panelsEl.addEventListener(
    "toggle",
    (e) => {
      if (e.target.matches && e.target.matches(".stop details")) {
        syncExpandBtn(e.target.closest(".panel"));
      }
    },
    true
  );

  window.addEventListener("hashchange", () => show(fromHash()));
  show(fromHash());

  const setPrintOpen = (printing) => {
    document.querySelectorAll(".stop details").forEach((el) => {
      if (printing) {
        if (!el.open) el.dataset.wasClosed = "1";
        el.open = true;
      } else if (el.dataset.wasClosed) {
        el.open = false;
        delete el.dataset.wasClosed;
      }
    });
    document.querySelectorAll(".panel[data-panel]").forEach(syncExpandBtn);
  };
  window.addEventListener("beforeprint", () => setPrintOpen(true));
  window.addEventListener("afterprint", () => setPrintOpen(false));

  const local =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";

  if (local && "serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.unregister());
    });
  } else if (!local && location.protocol !== "file:" && "serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js", { updateViaCache: "none" })
      .then((reg) => {
        const worker = reg.active || reg.waiting || reg.installing;
        if (worker) worker.postMessage({ type: "refresh" });
      })
      .catch(() => {});
  }
})();
