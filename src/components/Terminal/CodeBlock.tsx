import React, { useEffect, useState, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "../styles/Terminal.css";

export interface CodeLine {
  content: string;
  type?: "keyword" | "value" | "comment" | "string" | "number" | "normal";
  indent?: number;
}

interface CodeBlockProps {
  lines: (string | CodeLine)[];
  animateOnScroll?: boolean;
  animationDelay?: number;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  lines,
  animateOnScroll = true,
  animationDelay = 50,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (!animateOnScroll || !isVisible) {
      setVisibleLines(lines.length);
      return;
    }

    let lineIndex = 0;
    const interval = setInterval(() => {
      if (lineIndex < lines.length) {
        setVisibleLines(lineIndex + 1);
        lineIndex++;
      } else {
        clearInterval(interval);
      }
    }, animationDelay);

    return () => clearInterval(interval);
  }, [isVisible, animateOnScroll, lines.length, animationDelay]);

  const parseContent = (content: string) => {
    // Simple syntax highlighting patterns
    const comments = /\/\/.*$/;

    let parsed: React.ReactNode[] = [];
    let lastIndex = 0;

    // Handle comments
    const commentMatch = content.match(comments);
    let contentToParse = content;
    let comment: React.ReactNode | null = null;

    if (commentMatch) {
      contentToParse = content.substring(0, commentMatch.index);
      comment = <span className="syntax-comment">{commentMatch[0]}</span>;
    }

    // Parse keywords, strings, and numbers
    const regex = /\b(const|let|var|function|return|if|else|for|while|import|export|async|await|new|true|false|null|undefined)\b|"[^"]*"|'[^']*'|`[^`]*`|\b\d+\b/g;

    let match;
    while ((match = regex.exec(contentToParse)) !== null) {
      if (match.index > lastIndex) {
        parsed.push(contentToParse.substring(lastIndex, match.index));
      }

      const text = match[0];
      if (
        /^(const|let|var|function|return|if|else|for|while|import|export|async|await|new|true|false|null|undefined)$/.test(
          text
        )
      ) {
        parsed.push(<span className="syntax-keyword">{text}</span>);
      } else if (/^["'`]/.test(text)) {
        parsed.push(<span className="syntax-string">{text}</span>);
      } else if (/^\d+$/.test(text)) {
        parsed.push(<span className="syntax-number">{text}</span>);
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < contentToParse.length) {
      parsed.push(contentToParse.substring(lastIndex));
    }

    if (comment) {
      parsed.push(" ");
      parsed.push(comment);
    }

    return parsed;
  };

  const getLineContent = (line: string | CodeLine) => {
    if (typeof line === "string") {
      return { content: line, type: "normal", indent: 0 };
    }
    return { content: line.content, type: line.type || "normal", indent: line.indent || 0 };
  };

  return (
    <div ref={ref} className="code-block">
      {lines.map((line, idx) => {
        const { content, type, indent } = getLineContent(line);
        const isVisible = idx < visibleLines;

        return (
          <div
            key={idx}
            className={`code-line ${type} ${isVisible ? "visible" : ""}`}
            style={{ "--indent": indent } as React.CSSProperties}
          >
            <span className="line-number">{idx + 1}</span>
            <span className="line-content">{parseContent(content)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CodeBlock;
