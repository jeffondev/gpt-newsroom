import { NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";
import OpenAI from "openai";

interface NewsItem {
  title: string;
  link: string;
  press: string;
  time: string;
  summary?: string;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getNewsContent(url: string): Promise<string> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    return $("#dic_area").text().trim();
  } catch (error) {
    console.error("Error fetching news content:", error);
    return "";
  }
}

async function summarizeContent(content: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "너는 IT 분야의 전문가입니다. 사용자가 제공하는 IT/과학 뉴스를 읽고, 핵심 단어(키워드)와 함께, 무료버전에서 허용하는 최대 길이에 맞춰 한국어로 자연스럽고 읽기 좋게, 문장이 어색하지 않게 마무리하여 요약해 주세요.",
        },
        {
          role: "user",
          content: `다음 뉴스를 요약해 주세요:\n\n${content}`,
        },
      ],
      temperature: 0.5,
      max_tokens: 500,
    });

    return response.choices[0].message.content || "요약 실패";
  } catch (error) {
    console.error("Error summarizing content:", error);
    return "요약 실패";
  }
}

export async function GET() {
  try {
    const response = await axios.get("https://news.naver.com/section/105");
    const $ = cheerio.load(response.data);

    const newsItems: NewsItem[] = [];

    for (const element of $(".sa_item").toArray()) {
      const title = $(element).find(".sa_text_title").text().trim();
      const link = $(element).find(".sa_text_title").attr("href");
      const press = $(element).find(".sa_text_press").text().trim();
      const time = $(element).find(".sa_text_time").text().trim();

      if (title && link) {
        const absoluteLink = link.startsWith("http")
          ? link
          : `https://news.naver.com${link}`;
        const content = await getNewsContent(absoluteLink);
        const summary = content
          ? await summarizeContent(content)
          : "내용을 가져올 수 없습니다.";

        newsItems.push({
          title,
          link: absoluteLink,
          press,
          time,
          summary,
        });
      }
    }

    return NextResponse.json(newsItems);
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
