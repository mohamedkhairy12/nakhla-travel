import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

interface SEOProps {
    page?: string;
    title?: string;
    description?: string;
    keywords?: string;
}

export const SEO = ({ page = "home", title, description, keywords }: SEOProps) => {
    const { t } = useTranslation("seo");
    const router = useRouter();

    const seoTitle = title || t(`${page}.title`);
    const seoDescription = description || t(`${page}.description`);
    const seoKeywords = keywords || t(`${page}.keywords`);

    const currentUrl = `https://www.nakhlatravel.com/${router.asPath}`;

    return (
        <Head>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Favicon */}
            <link rel="icon" href="/logo/iconTap.svg" type="image/svg+xml" />
            <link rel="shortcut icon" href="/logo/iconTap.svg" type="image/svg+xml" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            {/* <meta property="og:image" content="https://nakhlatravel.com/og-image.jpg" /> */}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={seoTitle} />
            <meta property="twitter:description" content={seoDescription} />
            {/* <meta property="twitter:image" content="https://nakhlatravel.com/og-image.jpg" /> */}

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />

            {/* Language Alternates */}
            <link rel="alternate" hrefLang="en" href={`https://www.nakhlatravel.com/en${router.asPath.replace(/^\/(en|es|pt)/, '')}`} />
            <link rel="alternate" hrefLang="es" href={`https://www.nakhlatravel.com/es${router.asPath.replace(/^\/(en|es|pt)/, '')}`} />
            <link rel="alternate" hrefLang="pt" href={`https://www.nakhlatravel.com/pt${router.asPath.replace(/^\/(en|es|pt)/, '')}`} />
            <link rel="alternate" hrefLang="x-default" href={`https://www.nakhlatravel.com${router.asPath.replace(/^\/(en|es|pt)/, '')}`} />
        </Head>
    );
};
