

const { default: axios } = require('axios');

async function fetchAllBlogs() {
  try {
    const data = {
      page: 1,      
      search: '',  
    };

    const res = await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/api/blogs/all`, data);
    if (res.status === 200) {
      return res.data.data; 
    }
    return [];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://web.thaibusinessmate.com',
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const staticPages = [
      '/',
      '/about/',
      '/review/',
      '/contact/',
      '/blogs/',
      '/pricing/program/',
      '/pricing/website/',
      '/pricing/seo/',
    ];

    const staticPaths = staticPages.map((path) => ({
      loc: path,
      lastmod: new Date().toISOString(),
    }));

    const blogs = await fetchAllBlogs();

    const dynamicPaths = blogs.map((blog) => ({
      loc: `/blogs/list/${blog.id}/`,
      lastmod: new Date(blog.updatedAt).toISOString(),
    }));



    return [...staticPaths, ...dynamicPaths];
  },
};