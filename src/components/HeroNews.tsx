import { fetchNews } from '@/lib/actions'
import { getLocale, getTranslations } from 'next-intl/server'
import CarouselNews from './CarouselNews'

interface News {
  newsId: number
  title: string
  description: string
  expiration: Date
}

const HeroNews = async () => {
  const t = await getTranslations('HeroNews')
  const news = await fetchNews(await getLocale())

  if (!news || news.length === 0) return null

  return (
    <section className="bg-red-800/[75%] py-5" aria-labelledby="hero-news-title">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="hero-news-title" className="text-white">
          {t('headline')}
        </h2>
        <CarouselNews loop labels={{ prev: t('prev'), next: t('next') }}>
          {news.map((news: News) => (
            <article
              className="flex-[0_0_100%] text-white pb-6"
              key={news.newsId}
              role="region"
              aria-labelledby={`news-${news.newsId}`}
            >
              <div className="w-fit mx-auto">
                <h3 id={`news-${news.newsId}`} className="text-xl font-semibold mb-1">
                  {news.title}
                </h3>
                <div className="mb-4">{news.description}</div>
              </div>
            </article>
          ))}
        </CarouselNews>
      </div>
    </section>
  )
}

export default HeroNews
