"use client";

import { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  link: string;
  press: string;
  time: string;
  summary?: string;
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news");
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data);
      } catch (err) {
        setError("뉴스를 불러오는데 실패했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <main className="news-container">
      <h1 className="news-title">GPT Newsroom</h1>
      <div className="news-list">
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              <h2 className="news-item-title">{item.title}</h2>
              <div className="news-item-meta">
                <span className="news-item-press">{item.press}</span>
                <span className="news-item-time">{item.time}</span>
              </div>
              {item.summary && (
                <div className="news-item-summary">
                  <h3 className="news-item-summary-title">요약</h3>
                  <p className="news-item-summary-text">{item.summary}</p>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
