import { useEffect, useState } from "react";
import { fetchMediumArticles, MediumArticle } from "../utils/mediumFetcher";
import "./styles/Publications.css";

const Publications = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const fetchedArticles = await fetchMediumArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        setError("Failed to load articles");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="publications" id="publications">
      <div className="publications-container">
        <div className="publications-header">
          <h2>Latest Insights</h2>
          <p>Thoughts on design, development, and digital experiences</p>
          <a
            href="https://medium.com/@farhankabir133"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-button"
            data-cursor="disable"
          >
            Follow on Medium
          </a>
        </div>

        {loading && <p className="loading-text">Loading articles...</p>}

        {error && <p className="error-text">{error}</p>}

        {!loading && articles.length === 0 && (
          <p className="no-articles-text">No articles found.</p>
        )}

        {!loading && articles.length > 0 && (
          <div className="articles-grid">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="article-card"
              >
                {article.image && (
                  <div className="article-image">
                    <img src={article.image} alt={article.title} />
                  </div>
                )}
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    {article.readTime && (
                      <span className="article-read-time">
                        {article.readTime} min read
                      </span>
                    )}
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-description">{article.description}</p>
                  <div className="article-footer">
                    <time className="article-date">
                      {formatDate(article.pubDate)}
                    </time>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Publications;
