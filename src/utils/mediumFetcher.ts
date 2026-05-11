export interface MediumArticle {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  image?: string;
  category: string;
  readTime?: number;
}

const MEDIUM_RSS_URL = "https://medium.com/feed/@farhankabir133";

export const fetchMediumArticles = async (): Promise<MediumArticle[]> => {
  try {
    // Using a CORS-enabled API to parse the RSS feed
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        MEDIUM_RSS_URL
      )}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Medium articles");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return [];
    }

    // Parse the RSS feed items
    const articles: MediumArticle[] = data.items
      .slice(0, 8) // Limit to 8 latest articles
      .map((item: any) => {
        // Extract read time from description if available
        const descriptionText = item.description || "";
        const readTimeMatch = descriptionText.match(/(\d+)\s+min read/);
        const readTime = readTimeMatch ? parseInt(readTimeMatch[1]) : undefined;

        // Extract image from description (Medium embeds images in HTML)
        const imageMatch = descriptionText.match(/<img[^>]*src="([^">]*)"[^>]*>/);
        const image = imageMatch ? imageMatch[1] : undefined;

        // Extract category from content (Medium uses tags)
        const categoryMatch = descriptionText.match(/<em>(.*?)<\/em>/);
        const category = categoryMatch ? categoryMatch[1] : "Article";

        return {
          title: item.title || "Untitled",
          description: stripHtml(descriptionText).substring(0, 150) + "...",
          pubDate: item.pubDate || new Date().toISOString(),
          link: item.link || "#",
          image,
          category,
          readTime,
        };
      });

    return articles;
  } catch (error) {
    console.error("Error fetching Medium articles:", error);
    return [];
  }
};

// Helper function to strip HTML tags
const stripHtml = (html: string): string => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};
