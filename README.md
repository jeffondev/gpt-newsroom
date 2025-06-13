# GPT Newsroom

AI-powered news summarization platform that automatically scrapes and summarizes IT/Science news using OpenAI GPT.

## Features

- 🔍 **News Scraping**: Automatically scrapes IT/Science news from Naver
- 🤖 **AI Summarization**: Uses OpenAI GPT to generate concise summaries
- 📱 **Modern UI**: Clean and responsive interface built with Next.js and Tailwind CSS
- ⚡ **Real-time**: Get the latest news with AI-powered summaries

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
