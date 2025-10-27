import Separator from '@/components/Separator'
import { getTranslations } from 'next-intl/server'

interface Section {
  title: string
  content?: string[]
  items?: string[]
  footer?: string
}

const CookiePolicy = async () => {
  const CONTACT_EMAIL = 'info@redvet.se'
  const EMAIL_LINK = `<a href="mailto:${CONTACT_EMAIL}" class="font-bold">${CONTACT_EMAIL}</a>`
  const t = await getTranslations('cookiePolicy')
  const sections: Section[] = t.raw('sections')

  const footerData = t.has('footer') ? t.raw('footer') : null

  return (
    <section
      className="flex flex-col max-w-7xl mx-auto py-6 px-4"
      aria-labelledby="terms-of-service"
    >
      <h2 className="mt-10">{t('title')}</h2>
      <p className="italic font-semibold mt-4">{t('lastUpdated')}</p>
      <Separator className="my-6" />
      <ol>
        {sections.map(({ title, content, items, footer }, index) => (
          <li key={title}>
            <h4>
              {index + 1}. {title}
            </h4>

            {content &&
              content.map((paragraph, i) => {
                const replaced = paragraph.replace('{emailLink}', EMAIL_LINK)
                return <p key={i} className="my-4" dangerouslySetInnerHTML={{ __html: replaced }} />
              })}

            {items && (
              <ul className="list-disc list-inside">
                {items.map((item, i) => (
                  <li key={i} className="pl-6 my-4" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            )}

            {footer && <p>{footer}</p>}
            <Separator className="my-6" />
          </li>
        ))}
      </ol>
      <h4>{footerData?.title}</h4>
      {footerData ? (
        footerData.content ? (
          <p dangerouslySetInnerHTML={{ __html: t('footer.content', { emailLink: EMAIL_LINK }) }} />
        ) : footerData.items ? (
          <ul className="list-disc list-inside">
            {footerData.items.map((item: string, i: number) => (
              <li key={i} className="pl-6 my-4" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        ) : null
      ) : null}

      <Separator className="mt-6 mb-10" />
    </section>
  )
}

export default CookiePolicy
