// /sitemap.xml — @astrojs/sitemap only generates sitemap-index.xml + sitemap-0.xml,
// so this serves the common /sitemap.xml URL pointing at the generated sitemap.
export function GET({ site }) {
  const base = (site ? site.href : 'https://dhrivaa.com/').replace(/\/$/, '');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${base}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
