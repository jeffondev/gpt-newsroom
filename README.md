# GPT Newsroom

OpenAI GPT를 사용하여 IT/과학 뉴스를 자동으로 스크랩하고 요약하는 AI 기반 뉴스 요약 플랫폼입니다.

## Features

- 🔍 **뉴스 스크래핑**: 네이버의 IT/과학 뉴스를 자동으로 스크랩합니다
- 🤖 **AI 요약**: OpenAI GPT를 사용하여 간결한 요약을 생성합니다
- ⚡ **Real-time**: AI 기반 요약으로 최신 뉴스를 제공합니다.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Set up your environment variables by creating a `.env.local` file:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-3.5-turbo
- **Web Scraping**: Cheerio + Axios
- **Deployment**: Vercel (recommended)

## API Endpoints

- `GET /api/news`: Fetches and summarizes IT/Science news from Naver

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

The easiest way to deploy your GPT Newsroom app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
