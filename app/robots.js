export default function robots() {
    return {
      rules: [
        {
          userAgent: '*',
          allow: '/',
          // disallow: ['/', '/about'],
        },
      ],
      sitemap: 'https://web.devsriwararak.com/sitemap.xml',
    }
  }