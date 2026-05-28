import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mind Palette — 당신을 설명하지 않습니다. 당신을 보게 합니다." },
      {
        name: "description",
        content:
          "Mind Palette는 단어가 아닌 색·명도·채도로 지금 당신의 정서를 비춥니다. 말하지 않아도, 이미 드러나고 있던 상태를 봅니다.",
      },
      { property: "og:title", content: "Mind Palette" },
      {
        property: "og:description",
        content: "말하지 않아도, 이미 드러나고 있었다.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <Statement />
      <ConceptCards />
      <ToneStrip />
      <Closing />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 py-6 md:px-14 md:py-8">
      <div className="font-display text-lg tracking-wide">
        Mind <span className="italic font-light">Palette</span>
      </div>
      <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        2026 · 정서 인터페이스
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative grain flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* breathing color auras */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="aura-1 absolute left-[15%] top-[20%] h-[55vh] w-[55vh] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--tone-blue) 70%, transparent), transparent 70%)",
          }}
        />
        <div
          className="aura-2 absolute right-[10%] top-[40%] h-[50vh] w-[50vh] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--tone-warm) 60%, transparent), transparent 70%)",
          }}
        />
        <div
          className="aura-1 absolute left-[40%] bottom-[5%] h-[40vh] w-[40vh] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--highlight) 35%, transparent), transparent 70%)",
            animationDelay: "-6s",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-10 text-[11px] uppercase tracking-[0.45em] text-muted-foreground">
          말하지 않아도, 이미 드러나고 있었다
        </p>
        <h1 className="font-display text-4xl font-light leading-[1.2] md:text-6xl">
          지금, 당신의 상태를
          <br />
          <span className="italic">말로 설명할 수 있나요?</span>
        </h1>
        <p className="mx-auto mt-10 max-w-md text-sm leading-relaxed text-muted-foreground">
          Mind Palette는 단어 대신 색·명도·채도로
          <br />
          지금의 당신을 비춥니다.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">
        scroll
      </div>
    </section>
  );
}

const FADING_WORDS = ["피곤함", "우울", "불안", "평온", "공허", "설렘", "무기력"];

function Statement() {
  return (
    <section className="relative border-t border-border/40 px-6 py-32 md:px-14 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            01 — 선언
          </p>
          <h2 className="font-display text-3xl font-light leading-snug md:text-5xl">
            굳이 말로
            <br />
            하지 않아도
            <br />
            <span className="italic">됩니다.</span>
          </h2>
          <p className="mt-10 max-w-sm text-sm leading-relaxed text-muted-foreground">
            우리는 매일 감정을 단어로 추궁받습니다.
            <br />
            "오늘 기분이 어때?" — "…어, 모르겠는데."
            <br />
            이 앱은 당신의 감정을 묻지 않습니다.
          </p>
        </div>

        <div className="relative flex min-h-[300px] items-center justify-center md:min-h-[420px]">
          <div className="relative h-full w-full">
            {FADING_WORDS.map((w, i) => (
              <span
                key={w}
                className="font-hand absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-2xl md:text-4xl"
                style={{
                  animation: `fadeWord 14s ease-in-out infinite`,
                  animationDelay: `${i * 2}s`,
                  color:
                    i % 2 === 0
                      ? "color-mix(in oklch, var(--tone-blue) 70%, var(--foreground))"
                      : "color-mix(in oklch, var(--tone-warm) 50%, var(--foreground))",
                }}
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConceptCards() {
  return (
    <section className="relative border-t border-border/40 px-6 py-32 md:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              02 — 작동 방식
            </p>
            <h2 className="font-display text-3xl font-light md:text-5xl">
              색이 먼저 <span className="italic">말합니다.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
            세 단계로 나를 비춥니다 — 직관 선택, 상태 반영, 미세 조정.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card index="i" title="직관 선택" caption="가장 끌리는 색을 터치">
            <div className="grid h-full grid-cols-3 gap-1 p-4">
              {[
                "oklch(0.62 0.22 25)",
                "oklch(0.7 0.18 55)",
                "oklch(0.85 0.17 95)",
                "oklch(0.55 0.18 145)",
                "oklch(0.55 0.16 175)",
                "oklch(0.5 0.18 230)",
                "oklch(0.5 0.2 280)",
                "oklch(0.55 0.22 340)",
                "oklch(0.25 0.01 260)",
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-sm"
                  style={{ background: c, opacity: 0.85 }}
                />
              ))}
            </div>
          </Card>

          <Card index="ii" title="상태 반영" caption="화면이 당신의 톤으로 물듭니다">
            <div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(95deg, color-mix(in oklch, var(--tone-blue) 80%, black) 0 38%, color-mix(in oklch, var(--tone-warm) 60%, #2a2a2a) 38% 100%)",
              }}
            />
          </Card>

          <Card index="iii" title="미세 조정" caption="명도와 채도로 결을 맞춥니다">
            <div className="flex h-full flex-col justify-center gap-5 p-6">
              {[
                { label: "에너지", on: 3 },
                { label: "긴장", on: 4 },
                { label: "명확성", on: 2 },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-4">
                  <span className="w-16 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {row.label}
                  </span>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <span
                        key={i}
                        className="h-2.5 w-2.5 rounded-[2px]"
                        style={{
                          background:
                            i < row.on
                              ? "var(--foreground)"
                              : "color-mix(in oklch, var(--foreground) 18%, transparent)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  index,
  title,
  caption,
  children,
}: {
  index: string;
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <article className="group relative overflow-hidden rounded-md border border-border/60 bg-card">
      <div className="aspect-[4/5] w-full overflow-hidden">{children}</div>
      <div className="flex items-start justify-between gap-4 border-t border-border/60 px-5 py-4">
        <div>
          <p className="font-display text-base">{title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{caption}</p>
        </div>
        <span className="font-display text-xs italic text-muted-foreground">
          {index}
        </span>
      </div>
    </article>
  );
}

function ToneStrip() {
  const tones: { code: string; name: string; color: string }[] = [
    { code: "wh", name: "whitish",       color: "oklch(0.93 0.02 260)" },
    { code: "lt", name: "light",         color: "oklch(0.78 0.13 230)" },
    { code: "sf", name: "soft",          color: "oklch(0.7 0.08 200)" },
    { code: "dl", name: "dull",          color: "oklch(0.5 0.07 280)" },
    { code: "dp", name: "deep",          color: "oklch(0.38 0.13 250)" },
    { code: "dk", name: "dark",          color: "oklch(0.27 0.06 260)" },
    { code: "bk", name: "blackish",      color: "oklch(0.18 0.02 260)" },
  ];
  return (
    <section className="relative border-t border-border/40 px-6 py-32 md:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <h2 className="font-display text-3xl font-light leading-tight md:text-5xl">
            감정에는 정답이 없습니다.
            <br />
            <span className="italic">농도</span>가 있을 뿐입니다.
          </h2>
          <p className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            03 — 톤 시스템
          </p>
        </div>

        <div className="grid grid-cols-7 overflow-hidden rounded-md border border-border/60">
          {tones.map((t) => (
            <div key={t.code} className="group relative">
              <div
                className="aspect-[2/5] w-full transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ background: t.color }}
              />
              <div className="px-2 py-3 text-center">
                <p className="font-display text-xs">{t.code}</p>
                <p className="hidden text-[10px] uppercase tracking-widest text-muted-foreground md:block">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative grain overflow-hidden border-t border-border/40 px-6 py-40 md:px-14 md:py-56">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="aura-2 absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--tone-blue) 60%, transparent), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
          당신을 <span className="italic">설명하지</span> 않습니다.
          <br />
          당신을 <span className="italic">보게</span> 합니다.
        </h2>

        <div className="mx-auto mt-12 inline-block">
          <span
            className="font-hand inline-block px-2 py-0.5 text-base md:text-lg"
            style={{
              background:
                "linear-gradient(180deg, transparent 55%, color-mix(in oklch, var(--highlight) 80%, transparent) 55% 90%, transparent 90%)",
              color: "var(--background)",
            }}
          >
            아… 맞네.
          </span>
        </div>

        <div className="mt-16">
          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-full border border-foreground/40 px-8 py-3 text-sm tracking-widest transition-all hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <span>내 팔레트 열기</span>
            <span className="font-display italic">→</span>
          </button>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            곧 만나요
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-10 md:px-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:items-center">
        <span className="font-display text-sm normal-case tracking-normal text-foreground">
          Mind Palette
        </span>
        <span>2026 · 정서 인터페이스 프로젝트</span>
        <span>© Mind Palette</span>
      </div>
    </footer>
  );
}
