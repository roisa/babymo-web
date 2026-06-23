"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

type Block = { type: "p" | "quote"; html: string };

type Sheet =
  | { kind: "cover" }
  | { kind: "content"; blocks: Block[]; motif?: string }
  | { kind: "end" };

/**
 * Keyword → emoji "spot illustration" for a page. Ordered: more specific /
 * evocative matches first. Bilingual (id + en). Used to give roughly every
 * other content page a soft decorative motif that reflects what it's about.
 */
const MOTIFS: [RegExp, string][] = [
  [/matahari|sinar|\bsun\b|sunny|sunshine|cerah/i, "☀️"],
  [/tunas|tumbuh|grow|sprout|biji|kacang|seed|menanam|tanam|\bplant/i, "🌱"],
  [/bunga|flower|mawar|tulip|melati/i, "🌸"],
  [/hujan|\brain/i, "🌧️"],
  [/awan|cloud/i, "☁️"],
  [/bintang|\bstar/i, "⭐"],
  [/bulan|malam|moon|night|tidur|sleep|selimut|blanket|mengantuk|menguap/i, "🌙"],
  [/masjid|mosque|sholat|salat|\bpray|sujud|takbir/i, "🕌"],
  [/stoples|toples|\bjar\b/i, "🫙"],
  [/cokelat|chocolate|cocoa/i, "🍫"],
  [/susu|\bmilk\b/i, "🥛"],
  [/roti|bread|sarapan|\bmakan|\beat\b|breakfast/i, "🍞"],
  [/kucing|\bcat\b/i, "🐱"],
  [/\bair\b|water|siram/i, "💧"],
  [/koin|coin|sedekah|charity|amal|donas/i, "🪙"],
  [/buku|\bbook\b|baca|\bread|cerita|story/i, "📚"],
  [/nenek|kakek|grandma|grandpa|grandmother|grandfather/i, "👵"],
  [/telepon|telpon|phone|\bcall|menelepon/i, "📞"],
  [/taman|\bpark\b|garden|kebun|pohon|\btree/i, "🌳"],
  [/menara|balok|tower|block/i, "🧱"],
  [/jendela|window/i, "🪟"],
  [/kertas|paper|gulung/i, "📜"],
  [/sepatu|\bshoe/i, "👟"],
  [/tepuk|\bclap|girang|tertawa|laugh|gembira|riang|senang|happy|\bjoy/i, "😄"],
  [/\bdoa\b|\bdua\b|bismillah|berdoa|alhamdulillah|syukur|grateful/i, "🤲"],
  [/hati|sayang|\blove\b|heart|peluk|\bhug/i, "💚"],
  [/tangan|\bhand\b|genggam/i, "🤝"],
];

function pageEmoji(text: string, exclude?: string): string | null {
  // Prefer a match that isn't the one used on the previous motif page, so
  // motifs feel varied rather than repeating the story's central theme.
  for (const [re, em] of MOTIFS) if (em !== exclude && re.test(text)) return em;
  for (const [re, em] of MOTIFS) if (re.test(text)) return em;
  return null;
}

type Props = {
  locale: "id" | "en";
  title: string;
  hook: string;
  body: string;
  takeaway: string;
  poseSrc?: string | null;
  /** Optional different pose for the closing page (e.g. a waving goodbye). */
  endPose?: string | null;
  byline?: string;
  /** Decorative drifting emoji themed to the story (ambient layer). */
  accent?: string[];
};

const FONT_STEPS = [19, 22, 26, 30];

function parseBlocks(body: string): Block[] {
  return body
    .trim()
    .split(/\n\s*\n/)
    .map((raw) => {
      const quote = raw.startsWith("> ");
      let text = quote
        ? raw
            .split("\n")
            .map((l) => l.replace(/^>\s?/, ""))
            .join(" ")
        : raw;
      text = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*]+)\*/g, "<em>$1</em>");
      return { type: quote ? ("quote" as const) : ("p" as const), html: text };
    });
}

export function BookReader({
  locale,
  title,
  hook,
  body,
  takeaway,
  poseSrc,
  endPose,
  byline = "Baby Mo",
  accent = ["✨", "🌙", "⭐"],
}: Props) {
  const t =
    locale === "id"
      ? {
          open: "Baca Mode Buku",
          openSub: "Tampilan buku interaktif untuk dibaca bareng si kecil",
          close: "Tutup",
          prev: "Sebelumnya",
          next: "Berikutnya",
          cover: "Cerita Baby Mo",
          start: "Buka buku →",
          end: "Tamat",
          endSub: "Sampai jumpa di cerita berikutnya, ya!",
          page: "Halaman",
          font: "Ukuran huruf",
          bye: "Dadah! 👋",
          tapHint: "Ketuk Baby Mo 👆",
          wave: "Lambaikan tangan Baby Mo",
        }
      : {
          open: "Read in Book Mode",
          openSub: "An interactive book view to read with your little one",
          close: "Close",
          prev: "Previous",
          next: "Next",
          cover: "A Baby Mo Story",
          start: "Open the book →",
          end: "The End",
          endSub: "See you in the next story!",
          page: "Page",
          font: "Text size",
          bye: "Bye-bye! 👋",
          tapHint: "Tap Baby Mo 👆",
          wave: "Make Baby Mo wave",
        };

  const blocksRef = useRef<Block[]>(parseBlocks(body));
  const [open, setOpen] = useState(false);
  const [isSpread, setIsSpread] = useState(false);
  const [fontIdx, setFontIdx] = useState(1);
  const [sheets, setSheets] = useState<Sheet[] | null>(null);
  const [pos, setPos] = useState(0); // sheet index (single) / left sheet index (spread)
  const [dir, setDir] = useState<"next" | "prev" | "open">("open");
  const [waved, setWaved] = useState(0); // bump to replay the goodbye wave
  const waveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const bookRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef<HTMLDivElement>(null);

  const fontPx = FONT_STEPS[fontIdx];

  // Track spread vs single by viewport width.
  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 860px)");
    const apply = () => setIsSpread(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [open]);

  // Lock scroll + Escape to close while open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, sheets, pos, isSpread]);

  // Paginate the body to fit the measured page-content box.
  const paginate = useCallback(() => {
    const content = sizeRef.current;
    if (!content) return;
    const maxH = content.clientHeight;
    const width = content.clientWidth;
    if (maxH < 40 || width < 40) return;

    const measurer = document.createElement("div");
    measurer.className = "bk-prose";
    measurer.style.cssText = `position:absolute;left:-99999px;top:0;visibility:hidden;width:${width}px;`;
    // The .bk-prose rules read var(--bk-fs); set it here so the measurer
    // reflows at the chosen size (it's outside .bk-book, so the var would
    // otherwise fall back to the default and pagination would never change).
    measurer.style.setProperty("--bk-fs", `${fontPx}px`);
    document.body.appendChild(measurer);

    const contentPages: Block[][] = [];
    let cur: Block[] = [];
    const blocks = blocksRef.current;

    const reset = () => {
      measurer.innerHTML = "";
    };
    const addEl = (b: Block) => {
      const el = document.createElement(b.type === "quote" ? "blockquote" : "p");
      el.innerHTML = b.html;
      measurer.appendChild(el);
    };

    for (const b of blocks) {
      addEl(b);
      if (measurer.scrollHeight > maxH && cur.length > 0) {
        // adding this block overflows — close the current page, then start a
        // fresh page that begins with this block.
        contentPages.push(cur);
        cur = [];
        reset();
        addEl(b);
      }
      cur.push(b);
    }
    if (cur.length) contentPages.push(cur);
    document.body.removeChild(measurer);

    // Assign a content-derived "spot illustration" to roughly every other
    // page (gap >= 2) so motifs feel special rather than constant.
    const motifs: (string | undefined)[] = [];
    let lastMotif = -2;
    let lastEmoji: string | undefined;
    contentPages.forEach((p, i) => {
      let m: string | undefined;
      if (i - lastMotif >= 2) {
        const text = p.map((b) => b.html.replace(/<[^>]+>/g, "")).join(" ");
        const e = pageEmoji(text, lastEmoji);
        if (e) {
          m = e;
          lastMotif = i;
          lastEmoji = e;
        }
      }
      motifs.push(m);
    });

    const out: Sheet[] = [{ kind: "cover" }];
    contentPages.forEach((p, i) =>
      out.push({ kind: "content", blocks: p, motif: motifs[i] }),
    );
    out.push({ kind: "end" });
    setSheets(out);
    setPos((prev) => Math.min(prev, out.length - 1));
  }, [fontPx]);

  // Recompute pagination on open / font / layout change.
  useLayoutEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(paginate);
    const ro = new ResizeObserver(() => paginate());
    if (bookRef.current) ro.observe(bookRef.current);
    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, [open, isSpread, fontPx, paginate]);

  const total = sheets?.length ?? 1;

  const go = (delta: number) => {
    setPos((p) => {
      const nextLeft = isSpread
        ? Math.max(0, Math.min(p + delta * 2, (total % 2 === 0 ? total : total + 1) - 2))
        : Math.max(0, Math.min(p + delta, total - 1));
      if (nextLeft !== p) setDir(delta > 0 ? "next" : "prev");
      return nextLeft;
    });
  };

  const waveNow = () => {
    setWaved((w) => w + 1);
    if (waveTimer.current) clearTimeout(waveTimer.current);
    waveTimer.current = setTimeout(() => setWaved(0), 2200);
  };
  useEffect(() => () => {
    if (waveTimer.current) clearTimeout(waveTimer.current);
  }, []);

  // Touch swipe (phone).
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const p = e.touches[0];
    if (p) touch.current = { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const p = e.changedTouches[0];
    if (!touch.current || !p) return;
    const dx = p.clientX - touch.current.x;
    const dy = p.clientY - touch.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  const renderSheet = (s: Sheet | undefined, key: string) => {
    if (!s) return <div className="bk-page bk-page--blank" key={key} aria-hidden />;
    if (s.kind === "cover") {
      return (
        <div className="bk-page bk-page--cover" key={key}>
          <div className="bk-page-content bk-cover-inner">
            <span className="bk-cover-badge">📖 {t.cover}</span>
            {poseSrc && (
              <img className="bk-cover-pose" src={poseSrc} alt="Baby Mo" draggable={false} />
            )}
            <h2 className="bk-cover-title">{title}</h2>
            <p className="bk-cover-hook">{hook}</p>
          </div>
          <div className="bk-page-foot">{t.start}</div>
        </div>
      );
    }
    if (s.kind === "end") {
      const endImg = endPose ?? poseSrc;
      return (
        <div className="bk-page bk-page--end" key={key}>
          <div className="bk-page-content bk-end-inner">
            <div className="bk-end-quote" dangerouslySetInnerHTML={{ __html: parseBlocks(takeaway)[0]?.html ?? takeaway }} />
            {endImg && (
              <div className="bk-end-pose-wrap">
                <button type="button" className="bk-end-pose-btn" onClick={waveNow} aria-label={t.wave}>
                  <img
                    key={waved}
                    className={`bk-end-pose${waved ? " bk-wave" : ""}`}
                    src={endImg}
                    alt="Baby Mo"
                    draggable={false}
                  />
                </button>
                {waved > 0 && (
                  <>
                    <span className="bk-bubble" key={`b${waved}`}>{t.bye}</span>
                    <span className="bk-burst" key={`x${waved}`} aria-hidden>
                      {accent.slice(0, 4).map((e, i) => (
                        <i key={i} style={{ "--n": i } as React.CSSProperties}>{e}</i>
                      ))}
                    </span>
                  </>
                )}
                <span className="bk-tap-hint">{t.tapHint}</span>
              </div>
            )}
            <p className="bk-end-word">{t.end}</p>
            <p className="bk-end-sub">{t.endSub}</p>
          </div>
          <div className="bk-page-foot">— {byline}</div>
        </div>
      );
    }
    const idx = sheets ? sheets.indexOf(s) : 0;
    return (
      <div className="bk-page" key={key}>
        {s.motif && (
          <span className="bk-motif" aria-hidden>
            {s.motif}
          </span>
        )}
        <div className="bk-prose bk-page-content">
          {s.blocks.map((b, i) =>
            b.type === "quote" ? (
              <blockquote key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
            ) : (
              <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
            ),
          )}
        </div>
        <div className="bk-page-foot">
          {t.page} {idx}
        </div>
      </div>
    );
  };

  const atStart = pos <= 0;
  const atEnd = isSpread ? pos + 2 >= total : pos >= total - 1;

  return (
    <>
      <button type="button" className="bk-trigger" onClick={() => { setDir("open"); setPos(0); setOpen(true); }}>
        <span className="bk-trigger-em" aria-hidden>📖</span>
        <span className="bk-trigger-text">
          <span className="bk-trigger-title">{t.open}</span>
          <span className="bk-trigger-sub">{t.openSub}</span>
        </span>
      </button>

      {open && (
        <div className="bk-overlay" role="dialog" aria-modal="true" aria-label={title}>
          <div className="bk-ambient" aria-hidden>
            {accent.map((em, i) => (
              <span key={i} className="bk-amb" style={{ "--i": i } as React.CSSProperties}>
                {em}
              </span>
            ))}
          </div>

          <div className="bk-topbar">
            <button type="button" className="bk-icon" onClick={() => setOpen(false)} aria-label={t.close}>
              ✕
            </button>
            <div className="bk-fontctl" role="group" aria-label={t.font}>
              <button
                type="button"
                className="bk-icon bk-icon--sm"
                onClick={() => setFontIdx((f) => Math.max(0, f - 1))}
                disabled={fontIdx === 0}
                aria-label="A-"
              >
                A−
              </button>
              <button
                type="button"
                className="bk-icon bk-icon--sm"
                onClick={() => setFontIdx((f) => Math.min(FONT_STEPS.length - 1, f + 1))}
                disabled={fontIdx === FONT_STEPS.length - 1}
                aria-label="A+"
              >
                A+
              </button>
            </div>
          </div>

          <div className="bk-stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <button
              type="button"
              className="bk-nav bk-nav--prev"
              onClick={() => go(-1)}
              disabled={atStart}
              aria-label={t.prev}
            >
              ‹
            </button>

            <div
              ref={bookRef}
              className={`bk-book ${isSpread ? "bk-book--spread" : "bk-book--single"}`}
              style={{ ["--bk-fs" as string]: `${fontPx}px` }}
            >
              {/* Invisible sizer — measures the page content box for pagination */}
              <div className="bk-sizer" aria-hidden>
                <div className="bk-page">
                  <div className="bk-prose bk-page-content" ref={sizeRef} />
                  <div className="bk-page-foot">0</div>
                </div>
              </div>

              <div className={`bk-leaf bk-leaf--${dir}`} key={`${pos}-${isSpread}`}>
                {isSpread ? (
                  <>
                    {renderSheet(sheets?.[pos], "L")}
                    <div className="bk-spine" aria-hidden />
                    {renderSheet(sheets?.[pos + 1], "R")}
                  </>
                ) : (
                  renderSheet(sheets?.[pos], "S")
                )}
              </div>
            </div>

            <button
              type="button"
              className="bk-nav bk-nav--next"
              onClick={() => go(1)}
              disabled={atEnd}
              aria-label={t.next}
            >
              ›
            </button>
          </div>

          <div className="bk-botbar">
            <button type="button" className="bk-pgbtn" onClick={() => go(-1)} disabled={atStart}>
              ‹ {t.prev}
            </button>
            <span className="bk-pgcount">
              {Math.min(pos + 1, total)} / {total}
            </span>
            <button type="button" className="bk-pgbtn" onClick={() => go(1)} disabled={atEnd}>
              {t.next} ›
            </button>
          </div>
        </div>
      )}

      <style>{`
        .bk-trigger{display:flex;align-items:center;gap:12px;width:100%;text-align:left;margin-top:14px;padding:14px 18px;border-radius:18px;cursor:pointer;
          border:1px solid var(--color-clay);background:linear-gradient(135deg,var(--color-clay-soft),var(--color-paper-2));
          transition:transform .12s ease, box-shadow .2s ease;}
        .bk-trigger:hover{transform:translateY(-1px);box-shadow:0 10px 26px -16px rgba(0,0,0,.5);}
        .bk-trigger:active{transform:scale(.99);}
        .bk-trigger-em{font-size:26px;line-height:1;}
        .bk-trigger-text{display:flex;flex-direction:column;gap:2px;}
        .bk-trigger-title{font-weight:800;font-size:15px;color:var(--color-ink);}
        .bk-trigger-sub{font-size:12px;color:var(--color-whisper);}

        .bk-overlay{position:fixed;inset:0;z-index:120;display:flex;flex-direction:column;
          background:radial-gradient(120% 90% at 50% -10%, rgba(60,46,20,.55), rgba(10,9,7,.82));
          -webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);animation:bkFade .25s ease;}
        @keyframes bkFade{from{opacity:0}to{opacity:1}}

        .bk-ambient{position:absolute;inset:0;overflow:hidden;pointer-events:none;}
        .bk-amb{position:absolute;bottom:-10%;left:calc(8% + (var(--i)) * 17%);font-size:clamp(20px,3vw,30px);opacity:.5;
          animation:bkDrift calc(11s + var(--i) * 2.5s) linear infinite;animation-delay:calc(var(--i) * -3s);}
        @keyframes bkDrift{0%{transform:translateY(0) rotate(0);opacity:0}10%{opacity:.55}90%{opacity:.4}100%{transform:translateY(-115vh) rotate(220deg);opacity:0}}

        .bk-topbar{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:14px 16px;padding-top:calc(14px + env(safe-area-inset-top));}
        .bk-fontctl{display:flex;gap:8px;}
        .bk-icon{display:inline-flex;align-items:center;justify-content:center;min-width:42px;height:42px;padding:0 12px;border-radius:14px;cursor:pointer;
          border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.12);color:#fff;font-weight:800;font-size:15px;}
        .bk-icon--sm{height:38px;min-width:44px;font-size:14px;}
        .bk-icon:disabled{opacity:.4;cursor:default;}
        .bk-icon:active{transform:scale(.95);}

        .bk-stage{position:relative;z-index:1;flex:1;display:flex;align-items:center;justify-content:center;gap:10px;padding:0 8px;min-height:0;}
        .bk-book{position:relative;perspective:2200px;}
        .bk-book--spread{width:min(94vw,1060px);height:min(80vh,720px);}
        .bk-book--single{width:min(92vw,540px);height:min(78vh,760px);}

        .bk-sizer{position:absolute;inset:0;visibility:hidden;pointer-events:none;display:flex;}
        .bk-book--spread .bk-sizer .bk-page{width:50%;}
        .bk-book--single .bk-sizer .bk-page{width:100%;}

        .bk-leaf{position:absolute;inset:0;display:flex;border-radius:16px;
          box-shadow:0 30px 60px -28px rgba(0,0,0,.7);transform-style:preserve-3d;}
        .bk-leaf--next{animation:bkTurnNext .5s cubic-bezier(.2,.7,.3,1);}
        .bk-leaf--prev{animation:bkTurnPrev .5s cubic-bezier(.2,.7,.3,1);}
        .bk-leaf--open{animation:bkOpenIn .45s ease;}
        @keyframes bkTurnNext{from{transform:rotateY(-26deg) translateX(6%);opacity:.35;transform-origin:left center}to{transform:none;opacity:1}}
        @keyframes bkTurnPrev{from{transform:rotateY(26deg) translateX(-6%);opacity:.35;transform-origin:right center}to{transform:none;opacity:1}}
        @keyframes bkOpenIn{from{transform:scale(.94) translateY(8px);opacity:0}to{transform:none;opacity:1}}

        .bk-page{flex:1;min-width:0;position:relative;display:flex;flex-direction:column;
          background:linear-gradient(180deg,var(--color-paper),var(--color-paper-2));
          padding:clamp(20px,3.4vw,46px);overflow:hidden;}
        .bk-book--single .bk-page{border-radius:16px;}
        .bk-book--spread .bk-page:first-child{border-radius:16px 6px 6px 16px;}
        .bk-book--spread .bk-page:last-child{border-radius:6px 16px 16px 6px;}
        .bk-page--blank{background:var(--color-paper-2);opacity:.55;}
        .bk-spine{width:2px;align-self:stretch;background:linear-gradient(180deg,transparent,rgba(0,0,0,.18),transparent);}

        .bk-page-content{position:relative;z-index:1;flex:1;min-height:0;overflow:hidden;}
        .bk-page-foot{position:relative;z-index:1;flex-shrink:0;padding-top:10px;text-align:center;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--color-whisper);}
        .bk-motif{position:absolute;z-index:0;bottom:clamp(-4px,-1vw,-10px);right:clamp(-2px,-0.8vw,-8px);
          font-size:clamp(92px,18vw,156px);line-height:1;opacity:.26;pointer-events:none;user-select:none;
          transform:rotate(-8deg);filter:drop-shadow(0 4px 10px rgba(0,0,0,.12));animation:bkMotif 8s ease-in-out infinite;}
        @keyframes bkMotif{0%,100%{transform:rotate(-8deg) translateY(0)}50%{transform:rotate(-3deg) translateY(-8px)}}

        .bk-prose{font-family:var(--font-serif);color:var(--color-ink);}
        .bk-prose p{font-size:var(--bk-fs,22px);line-height:1.82;margin:0 0 .72em;}
        .bk-prose p:last-child{margin-bottom:0;}
        .bk-prose strong{font-weight:700;}
        .bk-prose em{font-style:italic;color:var(--color-ink-soft,var(--color-ink));}
        .bk-prose blockquote{margin:.4em 0;padding:.2em 0 .2em 1em;border-left:3px solid var(--color-clay);
          font-style:italic;font-size:calc(var(--bk-fs,22px) * 1.02);line-height:1.7;color:var(--color-sage-deep);}

        .bk-cover-inner,.bk-end-inner{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:14px;height:100%;}
        .bk-cover-badge{font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--color-clay);}
        .bk-cover-pose{width:clamp(120px,22vw,168px);height:auto;object-fit:contain;filter:drop-shadow(0 12px 22px rgba(0,0,0,.18));}
        .bk-cover-title{font-family:var(--font-display);font-size:clamp(26px,calc(var(--bk-fs,22px) * 1.55),48px);line-height:1.12;color:var(--color-ink);margin:0;}
        .bk-cover-hook{font-family:var(--font-serif);font-size:calc(var(--bk-fs,22px) * 0.86);line-height:1.6;color:var(--color-whisper);max-width:34ch;margin:0;}
        .bk-end-quote{font-family:var(--font-serif);font-style:italic;font-size:calc(var(--bk-fs,22px) * 0.98);line-height:1.6;color:var(--color-ink);max-width:32ch;}
        .bk-end-pose-wrap{position:relative;display:flex;flex-direction:column;align-items:center;}
        .bk-end-pose-btn{background:none;border:none;padding:0;cursor:pointer;line-height:0;}
        .bk-end-pose-btn:active{transform:scale(.97);}
        .bk-end-pose{width:clamp(110px,19vw,150px);height:auto;object-fit:contain;transform-origin:62% 88%;}
        .bk-end-pose.bk-wave{animation:bkWave .85s ease;}
        @keyframes bkWave{0%{transform:rotate(0)}14%{transform:rotate(-13deg)}30%{transform:rotate(10deg)}46%{transform:rotate(-8deg)}62%{transform:rotate(6deg)}78%{transform:rotate(-3deg)}100%{transform:rotate(0)}}
        .bk-bubble{position:absolute;top:-6px;left:50%;transform:translateX(-50%);white-space:nowrap;
          background:linear-gradient(135deg,#FFE3A0,#F0C463);color:#06231a;font-weight:800;font-size:14px;
          padding:7px 14px;border-radius:16px;box-shadow:0 6px 16px -8px rgba(0,0,0,.5);animation:bkBubble 1.8s ease forwards;}
        .bk-bubble::after{content:"";position:absolute;bottom:-6px;left:50%;transform:translateX(-50%);
          border:7px solid transparent;border-top-color:#F0C463;border-bottom:0;}
        @keyframes bkBubble{0%{opacity:0;transform:translateX(-50%) translateY(6px) scale(.7)}15%{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}80%{opacity:1}100%{opacity:0;transform:translateX(-50%) translateY(-4px)}}
        .bk-burst{position:absolute;top:14%;left:50%;width:0;height:0;pointer-events:none;}
        .bk-burst i{position:absolute;font-style:normal;font-size:22px;left:0;top:0;opacity:0;
          animation:bkBurst 1.1s ease-out forwards;animation-delay:calc(var(--n) * .05s);}
        .bk-burst i:nth-child(1){--dx:-54px}.bk-burst i:nth-child(2){--dx:-18px}
        .bk-burst i:nth-child(3){--dx:18px}.bk-burst i:nth-child(4){--dx:54px}
        @keyframes bkBurst{0%{opacity:0;transform:translate(0,0) scale(.5)}25%{opacity:1}100%{opacity:0;transform:translate(var(--dx,0),-60px) scale(1.1)}}
        .bk-tap-hint{margin-top:6px;font-size:11px;font-weight:700;letter-spacing:.04em;color:var(--color-clay);opacity:.9;animation:bkHint 2s ease-in-out infinite;}
        @keyframes bkHint{0%,100%{opacity:.5}50%{opacity:1}}
        .bk-end-word{font-family:var(--font-display);font-size:clamp(24px,calc(var(--bk-fs,22px) * 1.45),44px);color:var(--color-clay);margin:0;}
        .bk-end-sub{font-size:calc(var(--bk-fs,22px) * 0.62);color:var(--color-whisper);margin:0;}

        .bk-nav{flex-shrink:0;width:54px;height:54px;border-radius:50%;cursor:pointer;font-size:30px;line-height:1;
          display:flex;align-items:center;justify-content:center;color:#fff;
          border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.12);transition:background .15s,transform .1s;}
        .bk-nav:hover:not(:disabled){background:rgba(255,255,255,.22);}
        .bk-nav:active:not(:disabled){transform:scale(.92);}
        .bk-nav:disabled{opacity:.25;cursor:default;}

        .bk-botbar{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;gap:14px;
          padding:14px 16px;padding-bottom:calc(14px + env(safe-area-inset-bottom));}
        .bk-pgbtn{padding:12px 18px;border-radius:14px;cursor:pointer;font-weight:800;font-size:14px;color:#06231a;
          border:none;background:linear-gradient(135deg,#FFE3A0,#F0C463);box-shadow:0 6px 18px -8px rgba(0,0,0,.5);}
        .bk-pgbtn:disabled{opacity:.4;cursor:default;filter:saturate(.6);}
        .bk-pgbtn:active:not(:disabled){transform:scale(.97);}
        .bk-pgcount{font-size:13px;font-weight:700;color:rgba(255,255,255,.85);min-width:64px;text-align:center;}

        /* Phone: hide the big side arrows, rely on the bottom bar + swipe */
        @media (max-width: 859px){ .bk-nav{display:none;} }
        /* Desktop/tablet: keep the bottom bar minimal (count only via arrows) */
        @media (min-width: 860px){ .bk-botbar .bk-pgbtn{display:none;} }

        @media (prefers-reduced-motion: reduce){
          .bk-leaf--next,.bk-leaf--prev,.bk-leaf--open,.bk-amb,.bk-motif,
          .bk-wave,.bk-burst i,.bk-tap-hint{animation:none;}
        }
      `}</style>
    </>
  );
}
