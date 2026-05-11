import { researchPapers } from "../data/researchPapers";
import "./styles/ResearchPapers.css";

const ResearchPapers = () => {
  return (
    <section className="research-papers" id="research-papers">
      <div className="research-papers-container">
        <div className="research-papers-header">
          <h2>Research Papers</h2>
          <p>Peer-reviewed publications on AI, NLP, and Computer Vision</p>
        </div>

        {researchPapers.length > 0 && (
          <div className="papers-grid">
            {researchPapers.map((paper) => (
              <div key={paper.id} className="paper-card">
                <div className="paper-cover">
                  <img src={paper.coverImage} alt={paper.title} />
                  <div className="paper-cover-overlay"></div>
                </div>

                <div className="paper-content">
                  <div className="paper-header">
                    <span className="paper-category">{paper.category}</span>
                    <span className="paper-year">{paper.year}</span>
                  </div>

                  <h3 className="paper-title">{paper.title}</h3>

                  <p className="paper-conference">{paper.conference}</p>

                  <p className="paper-abstract">{paper.abstract}</p>

                  <div className="paper-footer">
                    <div className="paper-doi">
                      <span className="doi-label">DOI:</span>
                      <span className="doi-value">{paper.doi}</span>
                    </div>
                    <a
                      href={paper.ieeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-paper-button"
                      data-cursor="disable"
                    >
                      Read Full Paper
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResearchPapers;
