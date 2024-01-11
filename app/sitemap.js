export default async function sitemap() {
    const page = ['/', '/about','/review', '/contact']

    const allPage = page.map((item)=>({
        url: `https://web.devsriwararak.com${item}`,
        lastModified : new Date()
    }))
    return [
        ...allPage
    ]
}