import { insights, publications, testimonials } from "../data/portfolio";
import "./styles/Highlights.css";

const Highlights = () => {
  return (
    <div className="highlights-section section-container" id="highlights">
      <div className="highlights-header">
        <h2>What Clients Say, Latest Insight, and My Publications</h2>
        <p>
          A compact view of the feedback, writing, and research that sit
          alongside the product work.
        </p>
      </div>

      <div className="highlights-grid">
        <section className="highlights-panel">
          <h3>What Clients Say</h3>
          <div className="highlight-stack">
            {testimonials.map((testimonial) => (
              <article className="highlight-quote" key={testimonial.name}>
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <p>{testimonial.quote}</p>
                  <h4>{testimonial.name}</h4>
                  <span>
                    {testimonial.role} - {testimonial.organization}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="highlights-panel">
          <h3>Latest Insight</h3>
          <div className="highlight-stack highlight-stack-tight">
            {insights.slice(0, 3).map((post) => (
              <article className="highlight-post" key={post.title}>
                <img src={post.image} alt={post.title} />
                <div>
                  <p className="highlight-meta">
                    {post.category} - {post.date} - {post.readTime}
                  </p>
                  <h4>{post.title}</h4>
                  <p>{post.summary}</p>
                  <a href={post.href} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="highlights-panel">
          <h3>My Publications</h3>
          <div className="highlight-stack highlight-stack-tight">
            {publications.map((publication) => (
              <article className="highlight-post" key={publication.title}>
                <img src={publication.image} alt={publication.title} />
                <div>
                  <p className="highlight-meta">{publication.venue}</p>
                  <h4>{publication.title}</h4>
                  <p>{publication.summary}</p>
                  <div className="highlight-tags">
                    {publication.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href={publication.href} target="_blank" rel="noreferrer">
                    Open Paper
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Highlights;