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
    <section
      className="absolute flex flex-col justify-center bottom-20 w-full md:w-3/5 bg-red-600/80 h-auto md:right-0"
      aria-labelledby="hero-news-title"
    >
      <h2 id="hero-news-title" className='text-white mt-2 ml-6'>
        {t('headline')}
      </h2>
      <CarouselNews loop labels={{ prev: t('prev'), next: t('next') }}>
        {news.map((news: News) => (
          <article
            className="flex-[0_0_100%] text-white p-6 last:mr-4"
            key={news.newsId}
            role="region"
            aria-labelledby={`news-${news.newsId}`}
          >
            <h3 id={`news-${news.newsId}`} className="text-xl font-semibold">
              {news.title}
            </h3>
            <div className="mb-4">{news.description}</div>
          </article>
        ))}
      </CarouselNews>
    </section>
  )
}

export default HeroNews
