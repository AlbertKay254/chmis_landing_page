import Head from "next/head";
import { useRouter } from "next/router";


// Default value for some meta data
const defaultMeta = {
  title: 'CHMIS',
  siteName: 'CHMIS',
  description:
    'Landing page for CHMIS',
  // change base url of your web (without '/' at the end)
  url: 'https://chmis-landing-page.vercel.app/',
  type: 'website',
  robots: 'follow, index',
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status 
  //image: '../public/assets/chak_logo.png',
  author: 'CHMIS'
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@F2aldi' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content={meta.author}
          />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      {/* Windows 8 app icon */}
      <meta name='msapplication-TileColor' content='#F53838' />
      <meta
        name='msapplication-TileImage'
        content='public/assets/chaklogo.svg'
      />
      {/* Accent color on supported browser */}
      <meta name='theme-color' content='#F53838' />
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'mask-icon',
    href: 'public/assets/chaklogo.svg',
    color: '#F59A9A',
  },
  {
    rel: 'icon',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: 'public/assets/chaklogo.svg',
  },
  {
    rel: 'manifest',
    href: 'public/assets/chaklogo.svg',
  },
];

export default SeoHead;