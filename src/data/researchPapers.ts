export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  conference: string;
  year: number;
  category: string;
  doi: string;
  ieeLink: string;
  coverImage: string;
}

import DepressionDetectionImg from "../assets/DepressionDetection.webp";
import EmotionDetectionImg from "../assets/EmotionDetection.webp";
import AIInterviewSystemImg from "../assets/AI-InterviewSystem.webp";

export const researchPapers: ResearchPaper[] = [
  {
    id: "10441612",
    title: "Depression Detection From Social Media Textual Data Using Natural Language Processing and Machine Learning Techniques",
    abstract:
      "Depression, a widespread mental health condition, necessitates early detection for effective intervention. This thesis crafts a dependable system to identify depression from social media text using NLP and ML techniques. NLP methods like tokenization, stemming, and TF-IDF convert raw content into meaningful representations. Machine learning algorithms including SGD, Naive Bayes, Decision Tree, Random Forest, SVM, and KNN are employed to discern depressive from nondepressive posts. Results underscore high accuracy and performance in detecting depression from social media text.",
    conference: "2023 26th International Conference on Computer and Information Technology (ICCIT)",
    year: 2023,
    category: "Machine Learning",
    doi: "10.1109/ICCIT60459.2023.10441612",
    ieeLink: "https://ieeexplore.ieee.org/document/10441612",
    coverImage: DepressionDetectionImg,
  },
  {
    id: "11013284",
    title: "Emotion Detection From Textual Data Using Natural Language Processing and Machine Learning Techniques",
    abstract:
      "This paper presents a machine learning-based approach for emotion classification in text using NLP. The study utilizes a Kaggle dataset with labeled emotional expressions. Preprocessing includes removing stopwords and special characters, while CountVectorizer and TF-IDF extract meaningful numerical features. Multiple ML models were trained and evaluated using accuracy and precision metrics. Results demonstrate robustness in recognizing emotional variations, providing reliable sentiment analysis for applications including customer engagement and mental health monitoring.",
    conference: "2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)",
    year: 2025,
    category: "Natural Language Processing",
    doi: "10.1109/ECCE60754.2025.11013284",
    ieeLink: "https://ieeexplore.ieee.org/document/11013284",
    coverImage: EmotionDetectionImg,
  },
  {
    id: "11491403",
    title: "AI-Driven Live Interview System for Real-Time Candidate Evaluation Using NLP and Computer Vision",
    abstract:
      "This paper presents an AI-driven interview system integrating NLP and Computer Vision for real-time candidate evaluation. It utilizes OpenAI's Whisper for speech-to-text, BERT embeddings for semantic analysis, and a CNN for facial emotion recognition. A study with 50 candidates achieved 93.51% average accuracy with 1.5-second latency. By combining speech, text, and visual cues, the system offers objective, scalable candidate assessment while minimizing subjective bias in traditional recruitment.",
    conference: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
    year: 2025,
    category: "Computer Vision",
    doi: "10.1109/ICCIT60459.2025.11491403",
    ieeLink: "https://ieeexplore.ieee.org/document/11491403",
    coverImage: AIInterviewSystemImg,
  },
];
