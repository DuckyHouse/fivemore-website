export default {
	async fetch(): Promise<Response> {
		return new Response(html, {
			headers: { "Content-Type": "text/html;charset=utf-8" },
		});
	},
} satisfies ExportedHandler;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>FiveMore — AI-Powered Strength Training for iOS</title>
<meta name="description" content="FiveMore is a strength training companion with AI voice logging, Apple Watch integration, ranked progression, and insights. Coming soon to the App Store." />
<link rel="canonical" href="https://fivemore.duckyhouse.dev/" />
<meta property="og:title" content="FiveMore — AI-Powered Strength Training for iOS" />
<meta property="og:description" content="AI voice logging, Apple Watch & Live Activities, ranked progression, and strength insights. Coming soon." />
<meta property="og:url" content="https://fivemore.duckyhouse.dev/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
<style>
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --background: 0 0% 4%;
  --foreground: 0 0% 96%;
  --muted-foreground: 0 0% 45%;
  --accent: 142 71% 45%;
  --border: 0 0% 12%;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, "Courier New", monospace;
}

html {
  scroll-behavior: smooth;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  font-family: var(--font-sans);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ─── Header ─── */
.header {
  border-bottom: 1px solid hsl(var(--border));
  background-color: hsl(var(--background) / 0.95);
  backdrop-filter: blur(4px);
}

.header-inner {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.025em;
}

.brand-muted {
  color: hsl(var(--muted-foreground));
}

.back-link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
  transition: color 0.2s;
}
.back-link:hover {
  color: hsl(var(--foreground));
}

/* ─── Hero ─── */
.hero {
  max-width: 64rem;
  margin: 0 auto;
  padding: 8rem 1.5rem 6rem;
}

.hero-content {
  max-width: 36rem;
}

.section-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: hsl(var(--accent));
  letter-spacing: 0.025em;
  margin-bottom: 1.5rem;
}

.hero-headline {
  font-family: var(--font-mono);
  font-size: 1.875rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.025em;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .hero-headline {
    font-size: 3rem;
  }
}

.hero-sub {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.625;
  margin-bottom: 2.5rem;
}

.status-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: hsl(var(--accent));
  border: 1px solid hsl(var(--accent));
  padding: 0.25rem 0.75rem;
}

/* ─── Divider ─── */
.divider-wrap {
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.divider {
  border-top: 1px solid hsl(var(--border));
}

/* ─── Features ─── */
.features {
  max-width: 64rem;
  margin: 0 auto;
  padding: 6rem 1.5rem;
}

.section-heading {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  list-style: none;
}

@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-item {
  padding: 1.5rem 0;
  border-top: 1px solid hsl(var(--border));
}

.feature-name {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.feature-desc {
  font-family: var(--font-sans);
  font-size: 0.8125rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.625;
}

/* ─── CTA ─── */
.cta {
  max-width: 64rem;
  margin: 0 auto;
  padding: 6rem 1.5rem;
}

.cta-body {
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: hsl(var(--muted-foreground));
  line-height: 1.625;
  max-width: 28rem;
  margin-bottom: 1.5rem;
}

.cta-link {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: hsl(var(--foreground));
  transition: color 0.2s;
}
.cta-link:hover {
  color: hsl(var(--accent));
}

/* ─── Footer ─── */
.footer {
  border-top: 1px solid hsl(var(--border));
  margin-top: auto;
}

.footer-inner {
  max-width: 64rem;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

@media (min-width: 768px) {
  .footer-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.footer-brand {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  letter-spacing: -0.025em;
}

.footer-copy {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: hsl(var(--muted-foreground));
}
</style>
</head>
<body>

<header class="header">
  <div class="header-inner">
    <span class="brand">FiveMore <span class="brand-muted">by Ducky House</span></span>
    <a href="https://duckyhouse.dev" class="back-link">duckyhouse.dev</a>
  </div>
</header>

<main>
  <section class="hero">
    <div class="hero-content">
      <p class="section-label">// FiveMore</p>
      <h1 class="hero-headline">You always have a little more in you.</h1>
      <p class="hero-sub">FiveMore is an AI-powered strength training companion for iOS. Voice-log sets with Siri, track progress on your Apple Watch, climb the ranks, and get insights that actually tell you something.</p>
      <span class="status-badge">Coming soon to the App Store</span>
    </div>
  </section>

  <div class="divider-wrap"><div class="divider"></div></div>

  <section class="features">
    <p class="section-label">// features</p>
    <h2 class="section-heading">Built for people who train.</h2>
    <ul class="features-grid">
      <li class="feature-item">
        <p class="feature-name">AI voice logging</p>
        <p class="feature-desc">Log sets hands-free through Siri. Just say what you did — FiveMore figures out the rest.</p>
      </li>
      <li class="feature-item">
        <p class="feature-name">Apple Watch & Live Activities</p>
        <p class="feature-desc">Your workout lives on your wrist and lock screen. Glanceable, always current.</p>
      </li>
      <li class="feature-item">
        <p class="feature-name">Ranked progression</p>
        <p class="feature-desc">A rank system tied to your actual performance. Watch yourself level up over weeks and months.</p>
      </li>
      <li class="feature-item">
        <p class="feature-name">Strength & muscle balance</p>
        <p class="feature-desc">See where you're strong and where you're lagging. Insights based on real data, not guesswork.</p>
      </li>
      <li class="feature-item">
        <p class="feature-name">Daily challenges</p>
        <p class="feature-desc">Short, targeted training challenges to keep sessions sharp and consistent.</p>
      </li>
      <li class="feature-item">
        <p class="feature-name">Templates & splits</p>
        <p class="feature-desc">Build workout templates and weekly splits. Structure your training, then just show up and go.</p>
      </li>
    </ul>
  </section>

  <div class="divider-wrap"><div class="divider"></div></div>

  <section class="cta">
    <p class="section-label">// stay in the loop</p>
    <h2 class="section-heading">Launching soon.</h2>
    <p class="cta-body">FiveMore is in active development. Follow Ducky House for updates, or get in touch if you want early access.</p>
    <a href="https://duckyhouse.dev/contact" class="cta-link">Get in touch &rarr;</a>
  </section>
</main>

<footer class="footer">
  <div class="footer-inner">
    <a href="https://duckyhouse.dev" class="footer-brand">ducky_house</a>
    <span class="footer-copy">&copy; 2026 Ducky House</span>
  </div>
</footer>

</body>
</html>`;
