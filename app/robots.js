export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/privacy'],
      },
      sitemap: 'https://web.devsriwararak.com/sitemap.xml',
    }
  }