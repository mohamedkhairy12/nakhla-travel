import { GetServerSideProps } from 'next';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>https://www.nakhlatravel.com/en</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
        <xhtml:link rel="alternate" hrefLang="es" href="https://www.nakhlatravel.com/es" />
        <xhtml:link rel="alternate" hrefLang="pt" href="https://www.nakhlatravel.com/pt" />
        <xhtml:link rel="alternate" hrefLang="x-default" href="https://www.nakhlatravel.com/en" />
      </url>
      <url>
        <loc>https://www.nakhlatravel.com/es</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
        <xhtml:link rel="alternate" hrefLang="en" href="https://www.nakhlatravel.com/en" />
        <xhtml:link rel="alternate" hrefLang="pt" href="https://www.nakhlatravel.com/pt" />
        <xhtml:link rel="alternate" hrefLang="x-default" href="https://www.nakhlatravel.com/en" />
      </url>
      <url>
        <loc>https://www.nakhlatravel.com/pt</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
        <xhtml:link rel="alternate" hrefLang="en" href="https://www.nakhlatravel.com/en" />
        <xhtml:link rel="alternate" hrefLang="es" href="https://www.nakhlatravel.com/es" />
        <xhtml:link rel="alternate" hrefLang="x-default" href="https://www.nakhlatravel.com/en" />
      </url>
    </urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {}
