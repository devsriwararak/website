export default async function sitemap() {
    const page = ['/', '/about','/review', '/contact', '/blogs', '/blogs/devsriwararak_com', '/blogs/reviewmoviehit_com', '/blogs/travelandexplore_co_1', '/blogs/travelandexplore_co_2']

    const allPage = page.map((item)=>({
        url: `https://web.devsriwararak.com${item}`,
        lastModified : new Date()
    }))
    return [
        ...allPage
    ]
}