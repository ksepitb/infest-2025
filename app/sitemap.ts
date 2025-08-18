import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {

    return [
    {
        url: "https://www.infestbdg.com",
        lastModified: new Date(),
    },
    {
        url: "https://www.infestbdg.com/event",
        lastModified: new Date(),
    },
        {
        url: "https://www.infestbdg.com/erc",
        lastModified: new Date(),
    },
        {
        url: "https://www.infestbdg.com/bcc",
        lastModified: new Date(),
    },
        {
        url: "https://www.infestbdg.com/daftar",
        lastModified: new Date(),
    },
]
}