/* @ds-bundle: {"format":3,"namespace":"NoonAcademyDesignSystem_9d9961","components":[],"sourceHashes":{"preview/dir-toggle.js":"8831e73e8a17","ui_kits/student_app/AtlasScreen.jsx":"163f38d185ab","ui_kits/student_app/CrewScreen.jsx":"e669f0dbd1fe","ui_kits/student_app/HeatmapScreen.jsx":"5237c7bf9a54","ui_kits/student_app/PassageScreen.jsx":"d0f30d227a38","ui_kits/student_app/PracticeScreen.jsx":"06b2c4af7cb1","ui_kits/student_app/ResultScreen.jsx":"07345e7f88f3","ui_kits/student_app/ScheduleScreen.jsx":"c95f3046dfef","ui_kits/student_app/TodayScreen.jsx":"8f516a80eb0f","ui_kits/student_app/WaterScreen.jsx":"280334c4d53f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NoonAcademyDesignSystem_9d9961 = window.NoonAcademyDesignSystem_9d9961 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// preview/dir-toggle.js
try { (() => {
/* Shared LTR/RTL toggle for component cards.
   Markup contract:
     <html> must omit dir; body inherits.
     Elements with [data-en] / [data-ar] swap textContent.
     Toggle sets document.documentElement.dir.
     Persists in localStorage under 'noon.dir'.
*/
(function () {
  const KEY = 'noon.dir';
  const saved = localStorage.getItem(KEY) || 'ltr';
  const bar = document.createElement('div');
  bar.className = 'dir-toggle';
  bar.innerHTML = `
    <button data-dir="ltr">EN · LTR</button>
    <button data-dir="rtl">AR · RTL</button>
  `;
  const style = document.createElement('style');
  style.textContent = `
    .dir-toggle{position:fixed;top:12px;right:12px;display:flex;gap:0;background:#10172a;
      box-shadow:inset 0 0 0 1px rgba(232,228,220,.12);border-radius:3px;padding:2px;z-index:99;font-family:'JetBrains Mono',monospace}
    html[dir="rtl"] .dir-toggle{right:auto;left:12px}
    .dir-toggle button{background:transparent;border:0;color:rgba(232,228,220,.55);
      font:600 10px/1 'JetBrains Mono',monospace;letter-spacing:.08em;padding:7px 10px;cursor:pointer;border-radius:2px}
    .dir-toggle button.on{background:rgba(100,216,174,.14);color:#64D8AE}
  `;
  document.head.appendChild(style);
  function apply(dir) {
    document.documentElement.dir = dir;
    document.documentElement.lang = dir === 'rtl' ? 'ar' : 'en';
    bar.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.dir === dir));
    document.querySelectorAll('[data-en]').forEach(el => {
      const t = dir === 'rtl' ? el.dataset.ar : el.dataset.en;
      if (t != null) el.textContent = t;
    });
    // mirror icon wrappers tagged with .flip-rtl
    document.querySelectorAll('.flip-rtl').forEach(el => {
      el.style.transform = dir === 'rtl' ? 'scaleX(-1)' : '';
    });
    localStorage.setItem(KEY, dir);
    // Let the card know font family for arabic content should swap
    document.body.classList.toggle('rtl', dir === 'rtl');
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(bar);
    bar.addEventListener('click', e => {
      const b = e.target.closest('button[data-dir]');
      if (b) apply(b.dataset.dir);
    });
    apply(saved);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/dir-toggle.js", error: String((e && e.message) || e) }); }

// ui_kits/student_app/AtlasScreen.jsx
try { (() => {
// Atlas — void-first
function AtlasScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a0f1a',
      minHeight: '100%',
      paddingBottom: 32,
      color: '#e8e4dc'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 22px 18px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)'
    }
  }, "Qudrat \xB7 Day 14 / 28"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: FONTS.serif,
      fontSize: 26,
      color: '#e8e4dc',
      fontStyle: 'italic',
      letterSpacing: '-.02em'
    }
  }, "You're on pace for"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 68,
      fontWeight: 500,
      color: '#e0b83a',
      lineHeight: 1,
      letterSpacing: '-.03em',
      marginTop: 2
    }
  }, "92"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: 'rgba(232,228,220,.55)'
    }
  }, "target 90 \xB7 +6.2 this week")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#1a2236',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONTS.serif,
      fontSize: 15,
      fontWeight: 500,
      boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.14)'
    }
  }, "FA")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '8px 18px',
      background: '#10172a',
      borderRadius: 4,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.08)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 220",
    style: {
      display: 'block',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "mapG",
    x: "0",
    y: "0",
    width: "8",
    height: "8",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 L 0 0 0 8",
    fill: "none",
    stroke: "#e8e4dc",
    strokeWidth: "0.3",
    opacity: "0.06"
  })), /*#__PURE__*/React.createElement("path", {
    id: "ridge",
    d: "M -20 180 C 60 172, 120 160, 180 140 C 240 120, 300 92, 380 70"
  }), /*#__PURE__*/React.createElement("radialGradient", {
    id: "arrZ",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#7a8e64",
    stopOpacity: ".26"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#7a8e64",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "attZ",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#c55a4e",
    stopOpacity: ".22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#c55a4e",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "360",
    height: "220",
    fill: "url(#mapG)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "298",
    cy: "72",
    r: "52",
    fill: "url(#arrZ)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "78",
    cy: "152",
    r: "42",
    fill: "url(#attZ)"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#e8e4dc",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#ridge",
    transform: "translate(0, 18)",
    strokeWidth: ".7",
    opacity: ".14"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#ridge",
    transform: "translate(0, 6)",
    strokeWidth: ".7",
    opacity: ".22"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#ridge",
    transform: "translate(0, -6)",
    strokeWidth: ".8",
    opacity: ".3"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#ridge",
    transform: "translate(0, -18)",
    strokeWidth: ".8",
    opacity: ".38"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#ridge",
    transform: "translate(0, -30)",
    strokeWidth: ".9",
    opacity: ".48"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#ridge",
    transform: "translate(0, -42)",
    strokeWidth: "1",
    opacity: ".6"
  }), /*#__PURE__*/React.createElement("use", {
    href: "#ridge",
    transform: "translate(0, -54)",
    strokeWidth: "1",
    opacity: ".42"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M 30 194 C 100 180, 150 168, 200 142 C 240 120, 270 96, 295 72",
    stroke: "#c9a227",
    strokeWidth: "1.75",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 30 194 C 100 180, 150 168, 200 142 C 240 120, 270 96, 295 72",
    stroke: "#c9a227",
    strokeWidth: "5",
    fill: "none",
    strokeLinecap: "round",
    opacity: ".12"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#e8e4dc",
    opacity: ".45"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "116",
    cy: "176",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "158",
    cy: "160",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "182",
    cy: "150",
    r: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "224",
    cy: "128",
    r: "1.8"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "30",
    y1: "194",
    x2: "30",
    y2: "210",
    stroke: "#c9a227",
    strokeWidth: ".75",
    opacity: ".55"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "210",
    width: "48",
    height: "14",
    fill: "#10172a",
    stroke: "rgba(201,162,39,.45)",
    strokeWidth: ".75"
  }), /*#__PURE__*/React.createElement("text", {
    x: "30",
    y: "220",
    textAnchor: "middle",
    fontFamily: "Work Sans",
    fontWeight: "700",
    fontSize: "8",
    letterSpacing: ".18em",
    fill: "#c9a227"
  }, "START"), /*#__PURE__*/React.createElement("g", {
    transform: "translate(30,194)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "5.5",
    fill: "#10172a"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 -4 L 4 0 L 0 4 L -4 0 Z",
    fill: "#c9a227"
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "200",
    y1: "131",
    x2: "200",
    y2: "116",
    stroke: "#e0b83a",
    strokeWidth: ".75"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "180",
    y: "102",
    width: "40",
    height: "14",
    fill: "#10172a",
    stroke: "#e0b83a",
    strokeWidth: ".75"
  }), /*#__PURE__*/React.createElement("text", {
    x: "200",
    y: "112",
    textAnchor: "middle",
    fontFamily: "Work Sans",
    fontWeight: "700",
    fontSize: "8",
    letterSpacing: ".18em",
    fill: "#e0b83a"
  }, "YOU"), /*#__PURE__*/React.createElement("g", {
    transform: "translate(200,142)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "9",
    fill: "#10172a"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "9",
    fill: "none",
    stroke: "#e0b83a",
    strokeWidth: "1.25"
  }), /*#__PURE__*/React.createElement("circle", {
    r: "3.2",
    fill: "#e0b83a"
  }))), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "295",
    y1: "72",
    x2: "252",
    y2: "55",
    stroke: "#7a8e64",
    strokeWidth: ".75",
    opacity: ".7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "196",
    y: "48",
    width: "56",
    height: "14",
    fill: "#10172a",
    stroke: "rgba(122,142,100,.55)",
    strokeWidth: ".75"
  }), /*#__PURE__*/React.createElement("text", {
    x: "224",
    y: "58",
    textAnchor: "middle",
    fontFamily: "Work Sans",
    fontWeight: "700",
    fontSize: "8",
    letterSpacing: ".18em",
    fill: "#7a8e64"
  }, "ARRIVAL \xB7 92"), /*#__PURE__*/React.createElement("g", {
    transform: "translate(295,72)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "6",
    fill: "#10172a"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M -5 3.5 L 0 -5 L 5 3.5 Z",
    fill: "none",
    stroke: "#7a8e64",
    strokeWidth: "1.25"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 14,
      right: 14,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'rgba(232,228,220,.65)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Mastery \xB7 Reading"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONTS.mono,
      letterSpacing: 0
    }
  }, "ELEV 412M"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 6px',
      display: 'flex',
      gap: 18
    }
  }, [['#7a8e64', 'Arrived'], ['#c9a227', 'On pace'], ['#c55a4e', 'Attn']].map(([c, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      background: c,
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'rgba(232,228,220,.55)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 8px',
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)',
      borderBottom: '1px solid rgba(232,228,220,.08)',
      margin: '0 8px'
    }
  }, "Today's passages"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [{
    c: 'QDR-08',
    t: 'Reading · Inference',
    d: 'Sarah can help',
    s: 'gold'
  }, {
    c: 'QDR-09',
    t: 'Main Idea',
    d: 'Arrived last week',
    s: 'green'
  }, {
    c: 'QDR-10',
    t: 'Analogies',
    d: 'Attention',
    s: 'red'
  }, {
    c: 'QDR-11',
    t: 'Sentence Completion',
    d: 'Unlocks Thu',
    s: 'flat'
  }].map(p => {
    const col = {
      gold: '#e0b83a',
      green: '#7a8e64',
      red: '#c55a4e',
      flat: 'rgba(232,228,220,.35)'
    }[p.s];
    return /*#__PURE__*/React.createElement("div", {
      key: p.c,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 16px',
        background: '#10172a',
        borderRadius: 4,
        boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.mono,
        fontSize: 10,
        color: 'rgba(232,228,220,.5)'
      }
    }, p.c), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 6,
        height: 6,
        background: col,
        transform: 'rotate(45deg)',
        marginTop: 6
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.serif,
        fontSize: 17,
        fontWeight: 500,
        color: '#e8e4dc',
        letterSpacing: '-.01em'
      }
    }, p.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.mono,
        fontSize: 11,
        color: 'rgba(232,228,220,.5)',
        marginTop: 3
      }
    }, p.d)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.mono,
        fontSize: 14,
        color: col
      }
    }, "\u2192"));
  })));
}
Object.assign(window, {
  AtlasScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/AtlasScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student_app/CrewScreen.jsx
try { (() => {
function CrewScreen() {
  const crew = [{
    n: 'Sarah Al-Rashid',
    i: 'SA',
    s: 94,
    pos: 'Arrived',
    t: 'helping Farida'
  }, {
    n: 'Farida Al-Qahtani',
    i: 'FA',
    s: 86,
    pos: 'On pace',
    t: 'you',
    you: true
  }, {
    n: 'Mohammed Al-Harbi',
    i: 'MH',
    s: 82,
    pos: 'On pace',
    t: 'QDR-08'
  }, {
    n: 'Omar Al-Rashid',
    i: 'OR',
    s: 74,
    pos: 'Attention',
    t: 'stuck on QDR-10'
  }, {
    n: 'Nada Al-Shehri',
    i: 'NS',
    s: 88,
    pos: 'On pace',
    t: 'finishing QDR-07'
  }, {
    n: 'Yazeed Al-Zahrani',
    i: 'YZ',
    s: 91,
    pos: 'On pace',
    t: 'drill mode'
  }];
  const col = p => ({
    Arrived: '#7a8e64',
    'On pace': '#c9a227',
    Attention: '#c55a4e'
  })[p];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a0f1a',
      minHeight: '100%',
      paddingBottom: 32,
      color: '#e8e4dc'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 22px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)'
    }
  }, "Crew \xB7 Dune Six"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 34,
      fontWeight: 500,
      letterSpacing: '-.02em',
      marginTop: 6
    }
  }, "Six travel together"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontStyle: 'italic',
      fontSize: 15,
      color: 'rgba(232,228,220,.6)',
      marginTop: 6
    }
  }, "Facilitator Omar \xB7 basecamp Riyadh 3")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 18px 14px',
      padding: '12px 14px',
      background: '#10172a',
      borderRadius: 4,
      boxShadow: 'inset 0 0 0 1px rgba(100,216,174,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#64D8AE'
    }
  }, "Prompt from Omar"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 16,
      color: '#e8e4dc',
      marginTop: 4,
      lineHeight: 1.35
    }
  }, "Sarah, can you walk Omar through QDR-10 before 14:00?")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, crew.map((c, idx) => /*#__PURE__*/React.createElement("div", {
    key: c.i,
    style: {
      display: 'flex',
      gap: 14,
      padding: '14px 2px',
      alignItems: 'center',
      borderTop: idx ? '1px solid rgba(232,228,220,.08)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: c.you ? '#64D8AE' : '#1a2236',
      color: c.you ? '#0a3326' : '#e8e4dc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONTS.serif,
      fontSize: 14,
      fontWeight: 500,
      boxShadow: c.you ? 'none' : 'inset 0 0 0 1px rgba(232,228,220,.14)'
    }
  }, c.i), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '-.01em'
    }
  }, c.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: 'rgba(232,228,220,.5)',
      marginTop: 2
    }
  }, c.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 22,
      fontWeight: 500,
      color: '#e8e4dc',
      lineHeight: 1
    }
  }, c.s), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5,
      justifyContent: 'flex-end',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      background: col(c.pos),
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: col(c.pos)
    }
  }, c.pos)))))));
}
Object.assign(window, {
  CrewScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/CrewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student_app/HeatmapScreen.jsx
try { (() => {
// Heatmap — full-page mastery grid across all topic domains
function HeatmapScreen() {
  // 7 domains x 8 topics each. Value = mastery 0-4.
  // 0=untouched, 1=attention, 2=working, 3=on pace, 4=arrived
  const rows = [{
    d: 'Reading',
    v: [3, 3, 2, 1, 3, 4, 3, 2]
  }, {
    d: 'Verbal',
    v: [2, 3, 3, 2, 1, 2, 3, 0]
  }, {
    d: 'Quantitative',
    v: [4, 4, 3, 3, 2, 3, 2, 1]
  }, {
    d: 'Analogies',
    v: [3, 2, 1, 1, 2, 3, 0, 0]
  }, {
    d: 'Completion',
    v: [3, 3, 4, 3, 2, 3, 3, 0]
  }, {
    d: 'Chem (Ta.)',
    v: [2, 2, 1, 2, 2, 0, 0, 0]
  }, {
    d: 'Physics (Ta.)',
    v: [1, 1, 2, 1, 0, 0, 0, 0]
  }];
  const col = v => ['rgba(232,228,220,.06)',
  // untouched
  '#c55a4e',
  // attention
  '#8a6e2b',
  // working (dim gold)
  '#c9a227',
  // on pace (gold)
  '#7a8e64' // arrived (green)
  ][v];
  const stats = [{
    k: 'ARRIVED',
    v: '9'
  }, {
    k: 'ON PACE',
    v: '21'
  }, {
    k: 'WORKING',
    v: '14'
  }, {
    k: 'ATTENTION',
    v: '6'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a0f1a',
      minHeight: '100%',
      color: '#e8e4dc',
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 22px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)'
    }
  }, "Terrain \xB7 All domains"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: '-.02em',
      marginTop: 6
    }
  }, "Where you stand"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: 'rgba(232,228,220,.5)',
      marginTop: 4
    }
  }, "56 passages \xB7 9 arrived")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 18px 18px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 1,
      background: 'rgba(232,228,220,.08)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    style: {
      background: '#10172a',
      padding: '12px 8px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', system-ui",
      fontWeight: 300,
      fontSize: 24,
      color: '#e8e4dc',
      letterSpacing: '-.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.14em',
      fontWeight: 700,
      color: 'rgba(232,228,220,.5)',
      marginTop: 3
    }
  }, s.k)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: FONTS.mono,
      fontSize: 10,
      color: 'rgba(232,228,220,.4)',
      padding: '0 0 6px 88px'
    }
  }, /*#__PURE__*/React.createElement("span", null, "01"), /*#__PURE__*/React.createElement("span", null, "02"), /*#__PURE__*/React.createElement("span", null, "03"), /*#__PURE__*/React.createElement("span", null, "04"), /*#__PURE__*/React.createElement("span", null, "05"), /*#__PURE__*/React.createElement("span", null, "06"), /*#__PURE__*/React.createElement("span", null, "07"), /*#__PURE__*/React.createElement("span", null, "08")), rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.d,
    style: {
      display: 'grid',
      gridTemplateColumns: '84px repeat(8,1fr)',
      gap: 3,
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 13,
      fontWeight: 500,
      color: '#e8e4dc',
      letterSpacing: '-.005em',
      paddingTop: 6
    }
  }, r.d), r.v.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: '1/1',
      background: col(v),
      borderRadius: 2,
      position: 'relative',
      boxShadow: v === 0 ? 'inset 0 0 0 1px rgba(232,228,220,.06)' : 'none'
    }
  }, v === 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONTS.mono,
      fontSize: 10,
      color: '#0a0f1a',
      fontWeight: 600
    }
  }, "\u2713")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 0',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12,
      rowGap: 10
    }
  }, [['#7a8e64', 'Arrived'], ['#c9a227', 'On pace'], ['#8a6e2b', 'Working'], ['#c55a4e', 'Attention'], ['rgba(232,228,220,.1)', 'Not yet']].map(([c, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      background: c,
      borderRadius: 2,
      boxShadow: l === 'Not yet' ? 'inset 0 0 0 1px rgba(232,228,220,.08)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'rgba(232,228,220,.55)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '22px 18px 0',
      padding: '14px 18px',
      background: '#10172a',
      borderRadius: 4,
      boxShadow: 'inset 0 0 0 1px rgba(197,90,78,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#c55a4e'
    }
  }, "\u25CF Attention \xB7 6 passages"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 15,
      color: '#e8e4dc',
      marginTop: 6,
      lineHeight: 1.35
    }
  }, "Physics has the thinnest coverage. Start with PHY-01 this weekend.")));
}
Object.assign(window, {
  HeatmapScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/HeatmapScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student_app/PassageScreen.jsx
try { (() => {
// Passage — the brief before MCQ. No bottom nav. Pinned CTA.
function PassageScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0f1a',
      color: '#e8e4dc',
      backgroundImage: 'linear-gradient(to right, rgba(201,162,39,.03) 1px, transparent 1px),linear-gradient(to bottom, rgba(201,162,39,.03) 1px, transparent 1px)',
      backgroundSize: '64px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 22px 10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 12,
      color: 'rgba(232,228,220,.55)'
    }
  }, "\u2190 Atlas"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: '#e0b83a'
    }
  }, "QDR-08")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 20px',
      borderBottom: '1px solid rgba(232,228,220,.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#e0b83a'
    }
  }, "Reading \xB7 Inference"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 26,
      fontWeight: 500,
      marginTop: 10,
      letterSpacing: '-.02em',
      lineHeight: 1.15
    }
  }, "The difficult passage"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: 'rgba(232,228,220,.5)',
      marginTop: 6
    }
  }, "hard \xB7 10 questions \xB7 est 7 min \xB7 +6.2 pts on arrival")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'rgba(232,228,220,.45)'
    }
  }, "The passage"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'rgba(232,228,220,.92)',
      marginTop: 12
    }
  }, "The merchant had travelled the same route for thirty years. He knew the places where the camels refused to drink, the dunes that shifted overnight, and the ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'rgba(224,184,58,.22)',
      padding: '0 3px',
      color: '#e8e4dc'
    }
  }, "small boy who would point north"), " even in a storm.")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4px 18px 24px',
      padding: '14px 16px',
      background: '#10172a',
      borderRadius: 4,
      boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'rgba(232,228,220,.45)'
    }
  }, "Crew context"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 15,
      color: '#e8e4dc',
      marginTop: 6,
      lineHeight: 1.35
    }
  }, "Sarah cleared this last Thursday. Three teammates are working it now."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '14px 18px 30px',
      background: '#0a0f1a',
      borderTop: '1px solid rgba(232,228,220,.08)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      background: 'transparent',
      color: 'rgba(232,228,220,.65)',
      border: 0,
      padding: '16px',
      fontFamily: FONTS.sans,
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 4,
      boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.18)',
      cursor: 'pointer'
    }
  }, "Save for later"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 2,
      background: '#64D8AE',
      color: '#0a3326',
      border: 0,
      padding: '16px',
      fontFamily: FONTS.sans,
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 4,
      cursor: 'pointer'
    }
  }, "Begin \xB7 10 questions")));
}
Object.assign(window, {
  PassageScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/PassageScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student_app/PracticeScreen.jsx
try { (() => {
// Practice — MCQ mid-session. No bottom nav. Pinned action bar at bottom.
function PracticeScreen() {
  const options = [{
    l: 'A',
    t: 'The merchant distrusted weather more than people.',
    s: null
  }, {
    l: 'B',
    t: 'Experience includes knowing whose judgement to trust.',
    s: 'pick'
  }, {
    l: 'C',
    t: 'The boy was the merchant\'s apprentice.',
    s: null
  }, {
    l: 'D',
    t: 'Camels choose routes by instinct alone.',
    s: null
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0f1a',
      color: '#e8e4dc',
      backgroundImage: 'linear-gradient(to right, rgba(201,162,39,.025) 1px, transparent 1px),linear-gradient(to bottom, rgba(201,162,39,.025) 1px, transparent 1px)',
      backgroundSize: '48px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 18px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(232,228,220,.55)',
      fontFamily: FONTS.mono,
      fontSize: 20
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
    const done = i < 2,
      cur = i === 2;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: 3,
        background: done ? '#c9a227' : cur ? '#e0b83a' : 'rgba(232,228,220,.12)'
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      fontFamily: FONTS.mono,
      fontSize: 10,
      color: 'rgba(232,228,220,.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "QDR-08 \xB7 Inference"), /*#__PURE__*/React.createElement("span", null, "3 / 10"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 10px',
      background: '#10172a',
      boxShadow: 'inset 0 0 0 1px rgba(224,184,58,.35)',
      borderRadius: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      background: '#e0b83a',
      transform: 'rotate(45deg)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 12,
      color: '#e0b83a',
      letterSpacing: '.04em'
    }
  }, "04:12"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 18px 0',
      padding: '18px 20px',
      background: '#10172a',
      borderRadius: 4,
      boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'rgba(232,228,220,.4)'
    }
  }, "Passage"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 16,
      lineHeight: 1.55,
      color: 'rgba(232,228,220,.9)',
      marginTop: 10
    }
  }, "The merchant had travelled the same route for thirty years. He knew the dunes that shifted overnight, and the ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'rgba(224,184,58,.22)',
      padding: '0 3px',
      color: '#e8e4dc'
    }
  }, "small boy who would point north"), " even in a storm.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'rgba(232,228,220,.55)'
    }
  }, "Q3 \xB7 What is being implied?")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, options.map(o => {
    const picked = o.s === 'pick';
    return /*#__PURE__*/React.createElement("div", {
      key: o.l,
      style: {
        display: 'flex',
        gap: 14,
        padding: '14px 16px',
        background: picked ? 'rgba(100,216,174,.1)' : '#10172a',
        borderRadius: 4,
        boxShadow: `inset 0 0 0 ${picked ? 2 : 1}px ${picked ? '#64D8AE' : 'rgba(232,228,220,.08)'}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: picked ? '#64D8AE' : 'transparent',
        color: picked ? '#0a3326' : 'rgba(232,228,220,.55)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONTS.mono,
        fontSize: 11,
        fontWeight: 600,
        boxShadow: picked ? 'none' : 'inset 0 0 0 1px rgba(232,228,220,.2)'
      }
    }, o.l), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontFamily: FONTS.serif,
        fontSize: 15,
        color: '#e8e4dc',
        lineHeight: 1.4
      }
    }, o.t));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '14px 18px 30px',
      background: '#0a0f1a',
      borderTop: '1px solid rgba(232,228,220,.08)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      background: 'transparent',
      color: 'rgba(232,228,220,.65)',
      border: 0,
      padding: '16px',
      fontFamily: FONTS.sans,
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 4,
      boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.18)',
      cursor: 'pointer'
    }
  }, "Ask crew"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 2,
      background: '#64D8AE',
      color: '#0a3326',
      border: 0,
      padding: '16px',
      fontFamily: FONTS.sans,
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 4,
      cursor: 'pointer'
    }
  }, "Submit & continue")));
}
Object.assign(window, {
  PracticeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/PracticeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student_app/ResultScreen.jsx
try { (() => {
// Result — pinned actions; no bottom nav.
function ResultScreen() {
  const qs = [{
    n: 1,
    ok: true,
    t: 'Inference · easy',
    time: '0:42'
  }, {
    n: 2,
    ok: true,
    t: 'Inference · med',
    time: '1:18'
  }, {
    n: 3,
    ok: true,
    t: 'Inference · med',
    time: '1:05'
  }, {
    n: 4,
    ok: false,
    t: 'Main idea · hard',
    time: '2:08'
  }, {
    n: 5,
    ok: true,
    t: 'Detail · med',
    time: '0:58'
  }, {
    n: 6,
    ok: true,
    t: 'Detail · easy',
    time: '0:33'
  }, {
    n: 7,
    ok: false,
    t: 'Vocab-in-context',
    time: '2:21'
  }, {
    n: 8,
    ok: true,
    t: 'Inference · hard',
    time: '1:42'
  }, {
    n: 9,
    ok: true,
    t: 'Tone · med',
    time: '1:04'
  }, {
    n: 10,
    ok: true,
    t: 'Main idea · easy',
    time: '0:51'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      background: '#0a0f1a',
      color: '#e8e4dc'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '56px 22px 10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 12,
      color: 'rgba(232,228,220,.55)'
    }
  }, "\xD7 Close"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#64D8AE'
    }
  }, "\u25CF Arrived")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 20px',
      borderBottom: '1px solid rgba(232,228,220,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'rgba(232,228,220,.45)'
    }
  }, "QDR-08 \xB7 Reading inference"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', system-ui",
      fontWeight: 300,
      fontSize: 88,
      lineHeight: .95,
      letterSpacing: '-.035em',
      color: '#e8e4dc',
      fontVariantNumeric: 'tabular-nums'
    }
  }, "8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', system-ui",
      fontWeight: 300,
      fontSize: 36,
      color: 'rgba(232,228,220,.3)'
    }
  }, "/10")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 10,
      color: 'rgba(232,228,220,.45)',
      letterSpacing: '.08em'
    }
  }, "PACE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 13,
      color: '#64D8AE',
      marginTop: 2
    }
  }, "+1.4 pts")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 10,
      color: 'rgba(232,228,220,.45)',
      letterSpacing: '.08em'
    }
  }, "TIME"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 13,
      color: 'rgba(232,228,220,.85)',
      marginTop: 2
    }
  }, "12:42")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 10,
      color: 'rgba(232,228,220,.45)',
      letterSpacing: '.08em'
    }
  }, "RANK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 13,
      color: 'rgba(232,228,220,.85)',
      marginTop: 2
    }
  }, "2 of 6")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 18,
      fontStyle: 'italic',
      color: 'rgba(232,228,220,.82)',
      lineHeight: 1.4
    }
  }, "You cleared inference. Main idea & vocab are where the points are waiting.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)',
      paddingBottom: 10,
      borderBottom: '1px solid rgba(232,228,220,.08)'
    }
  }, "Review \xB7 10 questions"), qs.map(q => /*#__PURE__*/React.createElement("div", {
    key: q.n,
    style: {
      display: 'flex',
      gap: 14,
      padding: '10px 0',
      alignItems: 'center',
      borderBottom: '1px solid rgba(232,228,220,.05)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: 'rgba(232,228,220,.4)',
      width: 22
    }
  }, String(q.n).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      background: q.ok ? '#64D8AE' : '#c55a4e',
      transform: 'rotate(45deg)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: FONTS.serif,
      fontSize: 15,
      color: '#e8e4dc'
    }
  }, q.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: 'rgba(232,228,220,.45)'
    }
  }, q.time))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '14px 18px 30px',
      background: '#0a0f1a',
      borderTop: '1px solid rgba(232,228,220,.08)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 1,
      background: 'transparent',
      color: 'rgba(232,228,220,.65)',
      border: 0,
      padding: '16px',
      fontFamily: FONTS.sans,
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 4,
      boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.18)',
      cursor: 'pointer'
    }
  }, "Review wrong"), /*#__PURE__*/React.createElement("button", {
    style: {
      flex: 2,
      background: '#64D8AE',
      color: '#0a3326',
      border: 0,
      padding: '16px',
      fontFamily: FONTS.sans,
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 4,
      cursor: 'pointer'
    }
  }, "Continue route")));
}
Object.assign(window, {
  ResultScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/ResultScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student_app/ScheduleScreen.jsx
try { (() => {
// Schedule — week view with live-now, upcoming stations, and crew-wide events
function ScheduleScreen() {
  const days = [{
    d: 'Mon',
    n: 14,
    today: false,
    load: 2
  }, {
    d: 'Tue',
    n: 15,
    today: true,
    load: 4
  }, {
    d: 'Wed',
    n: 16,
    today: false,
    load: 3
  }, {
    d: 'Thu',
    n: 17,
    today: false,
    load: 3
  }, {
    d: 'Fri',
    n: 18,
    today: false,
    load: 2
  }, {
    d: 'Sat',
    n: 19,
    today: false,
    load: 0
  }, {
    d: 'Sun',
    n: 20,
    today: false,
    load: 1
  }];
  const blocks = [{
    t: '08:30',
    dur: 45,
    k: 'live',
    title: 'Star teacher · Reading',
    who: 'Dr Noura Al-Saadi',
    loc: 'broadcast'
  }, {
    t: '09:30',
    dur: 25,
    k: 'next',
    title: 'Crew debrief',
    who: 'Dune Six',
    loc: 'basecamp'
  }, {
    t: '10:15',
    dur: 22,
    k: 'solo',
    title: 'QDR-08 drill',
    who: 'Solo',
    loc: 'device'
  }, {
    t: '14:00',
    dur: 45,
    k: 'crew',
    title: 'Evening review',
    who: 'Facilitator Omar',
    loc: 'basecamp'
  }, {
    t: '16:30',
    dur: 30,
    k: 'water',
    title: 'Help Omar · analogies',
    who: 'Omar Al-Rashid',
    loc: 'in-app chat'
  }];
  const col = k => ({
    live: '#e0b83a',
    next: '#64D8AE',
    solo: 'rgba(232,228,220,.7)',
    crew: '#B08AF9',
    water: '#64D8AE'
  })[k];
  const lbl = k => ({
    live: '● LIVE NOW',
    next: 'NEXT · 09:30',
    solo: 'SOLO',
    crew: 'CREW',
    water: 'WATER · +1'
  })[k];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a0f1a',
      minHeight: '100%',
      color: '#e8e4dc',
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 22px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)'
    }
  }, "Schedule \xB7 Week 4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 32,
      fontWeight: 500,
      letterSpacing: '-.02em',
      marginTop: 6
    }
  }, "Four stations today")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 14px 18px',
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6
    }
  }, days.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.n,
    style: {
      textAlign: 'center',
      padding: '10px 0 8px',
      borderRadius: 3,
      background: d.today ? 'rgba(100,216,174,.08)' : 'transparent',
      boxShadow: d.today ? 'inset 0 0 0 1px rgba(100,216,174,.4)' : 'inset 0 0 0 1px rgba(232,228,220,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: d.today ? '#64D8AE' : 'rgba(232,228,220,.4)'
    }
  }, d.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Inter', system-ui",
      fontSize: 18,
      fontWeight: 400,
      marginTop: 4,
      color: d.today ? '#e8e4dc' : 'rgba(232,228,220,.75)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, d.n), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 2,
      marginTop: 6,
      height: 4
    }
  }, Array(d.load).fill(0).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 3,
      height: 3,
      background: d.today ? '#64D8AE' : 'rgba(232,228,220,.3)'
    }
  })), !d.load && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      height: 3,
      background: 'rgba(232,228,220,.12)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px'
    }
  }, blocks.map((b, i) => {
    const c = col(b.k);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        gap: 12,
        paddingBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Inter', system-ui",
        fontSize: 15,
        fontWeight: 500,
        color: '#e8e4dc',
        fontVariantNumeric: 'tabular-nums'
      }
    }, b.t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.mono,
        fontSize: 10,
        color: 'rgba(232,228,220,.4)',
        marginTop: 2
      }
    }, b.dur, "m")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        background: c,
        transform: 'rotate(45deg)',
        marginTop: 6,
        boxShadow: b.k === 'live' ? '0 0 0 4px rgba(224,184,58,.15)' : 'none'
      }
    }), i < blocks.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        flex: 1,
        background: 'rgba(232,228,220,.1)',
        marginTop: 6
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: '4px 14px 14px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.sans,
        fontSize: 9,
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: c
      }
    }, lbl(b.k)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.serif,
        fontSize: 17,
        fontWeight: 500,
        letterSpacing: '-.01em',
        marginTop: 4
      }
    }, b.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.mono,
        fontSize: 11,
        color: 'rgba(232,228,220,.5)',
        marginTop: 4
      }
    }, b.who, " \xB7 ", b.loc)));
  })));
}
Object.assign(window, {
  ScheduleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/ScheduleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student_app/TodayScreen.jsx
try { (() => {
function TodayScreen() {
  const items = [{
    t: '08:30',
    k: 'live',
    title: 'Star teacher · Reading',
    sub: 'Dr Noura · 45 min',
    by: 'broadcast'
  }, {
    t: '09:30',
    k: 'next',
    title: 'Crew debrief · Inference',
    sub: 'Dune Six · 25 min',
    by: 'in person'
  }, {
    t: '10:15',
    k: 'queued',
    title: 'Solo · QDR-08 drill',
    sub: '22 min',
    by: 'on device'
  }, {
    t: '14:00',
    k: 'queued',
    title: 'Evening review',
    sub: 'Crew + Facilitator Omar',
    by: 'basecamp'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a0f1a',
      minHeight: '100%',
      paddingBottom: 32,
      color: '#e8e4dc'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 22px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)'
    }
  }, "Tuesday \xB7 14 Rabi II"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 36,
      fontWeight: 500,
      letterSpacing: '-.02em',
      marginTop: 6
    }
  }, "Today's route"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontStyle: 'italic',
      fontSize: 16,
      color: 'rgba(232,228,220,.6)',
      marginTop: 4
    }
  }, "Four stations. Estimated 3 h 10 m.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((i, idx) => {
    const live = i.k === 'live';
    const next = i.k === 'next';
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        display: 'flex',
        gap: 14,
        padding: '16px 4px',
        borderTop: idx ? '1px solid rgba(232,228,220,.08)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.mono,
        fontSize: 13,
        color: live ? '#e0b83a' : 'rgba(232,228,220,.65)'
      }
    }, i.t)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        background: live ? '#c9a227' : 'rgba(232,228,220,.14)',
        marginTop: 2,
        marginBottom: 2
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        paddingLeft: 4
      }
    }, live && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.sans,
        fontSize: 9,
        letterSpacing: '.16em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: '#e0b83a',
        marginBottom: 4
      }
    }, "\u25CF Live now"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.serif,
        fontSize: 18,
        fontWeight: 500,
        letterSpacing: '-.01em'
      }
    }, i.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.mono,
        fontSize: 11,
        color: 'rgba(232,228,220,.55)',
        marginTop: 4
      }
    }, i.sub, " \xB7 ", i.by), next && /*#__PURE__*/React.createElement("button", {
      style: {
        marginTop: 12,
        background: '#64D8AE',
        color: '#0a3326',
        border: 0,
        padding: '10px 18px',
        fontFamily: FONTS.sans,
        fontSize: 13,
        fontWeight: 600,
        borderRadius: 4,
        cursor: 'pointer'
      }
    }, "Begin")));
  })));
}
Object.assign(window, {
  TodayScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/TodayScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/student_app/WaterScreen.jsx
try { (() => {
function WaterScreen() {
  const ledger = [{
    d: 'Mon',
    self: 3,
    help: 1
  }, {
    d: 'Tue',
    self: 2,
    help: 2
  }, {
    d: 'Wed',
    self: 3,
    help: 0
  }, {
    d: 'Thu',
    self: 2,
    help: 2
  }, {
    d: 'Fri',
    self: 1,
    help: 2
  }, {
    d: 'Sat',
    self: 0,
    help: 0
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0a0f1a',
      minHeight: '100%',
      paddingBottom: 32,
      color: '#e8e4dc'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 22px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)'
    }
  }, "Water \xB7 Week 4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 12,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 72,
      fontWeight: 500,
      letterSpacing: '-.03em',
      lineHeight: 1
    }
  }, "18"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontStyle: 'italic',
      fontSize: 20,
      color: 'rgba(232,228,220,.6)'
    }
  }, "jugs filled")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: '#7a8e64',
      marginTop: 8
    }
  }, "minimum 12 \xB7 crossed Thursday")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '4px 18px 22px',
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 8
    }
  }, ledger.map((l, idx) => {
    const total = l.self + l.help;
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        background: '#10172a',
        padding: '10px 6px',
        borderRadius: 4,
        textAlign: 'center',
        boxShadow: 'inset 0 0 0 1px rgba(232,228,220,.06)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.sans,
        fontSize: 9,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: 'rgba(232,228,220,.4)'
      }
    }, l.d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        marginTop: 8,
        height: 28,
        alignItems: 'flex-end'
      }
    }, Array(l.self).fill(0).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: 's' + i,
      style: {
        width: 5,
        height: 14 + i * 2,
        background: '#c9a227'
      }
    })), Array(l.help).fill(0).map((_, i) => /*#__PURE__*/React.createElement("div", {
      key: 'h' + i,
      style: {
        width: 5,
        height: 14 + i * 2,
        background: '#64D8AE'
      }
    })), !total && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 5,
        height: 5,
        background: 'rgba(232,228,220,.2)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONTS.mono,
        fontSize: 11,
        color: 'rgba(232,228,220,.55)',
        marginTop: 6
      }
    }, total || '·'));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'rgba(232,228,220,.45)',
      paddingBottom: 10,
      borderBottom: '1px solid rgba(232,228,220,.1)'
    }
  }, "Last entries"), [{
    when: 'Fri 14:22',
    what: 'Helped Farida with QDR-08 inference',
    k: 'help'
  }, {
    when: 'Fri 11:04',
    what: 'QDR-09 main idea · arrived',
    k: 'self'
  }, {
    when: 'Thu 17:30',
    what: 'Helped Omar with analogies',
    k: 'help'
  }, {
    when: 'Thu 09:15',
    what: 'Morning drill · 22 min',
    k: 'self'
  }].map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14,
      padding: '12px 0',
      borderBottom: '1px solid rgba(232,228,220,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      background: e.k === 'help' ? '#64D8AE' : '#c9a227',
      transform: 'rotate(45deg)',
      marginTop: 8,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.serif,
      fontSize: 15,
      color: '#e8e4dc'
    }
  }, e.what), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.mono,
      fontSize: 11,
      color: 'rgba(232,228,220,.45)',
      marginTop: 2
    }
  }, e.when)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONTS.sans,
      fontSize: 9,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: e.k === 'help' ? '#64D8AE' : '#c9a227',
      alignSelf: 'center'
    }
  }, "+1")))));
}
Object.assign(window, {
  WaterScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/student_app/WaterScreen.jsx", error: String((e && e.message) || e) }); }

})();
