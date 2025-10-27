import { getTranslations } from 'next-intl/server'
import Separator from './Separator'

interface Section {
  title: string
  content?: string[]
  items?: string[]
  footer?: string
}

interface Props {
  namespace: string
}

const DocumentContent = async ({ namespace }: Props) => {
  const CONTACT_EMAIL = 'info@redvet.se'
  const EMAIL_LINK = `<a href="mailto:${CONTACT_EMAIL}" class="font-bold">${CONTACT_EMAIL}</a>`

  const t = await getTranslations(namespace)
  const sections: Section[] = t.raw('sections')

  const footerData = t.has('footer') ? t.raw('footer') : null

  return (
    <>
      <h2 className="mt-10">{t('title')}</h2>
      <p className="italic font-semibold mt-4">{t('lastUpdated')}</p>
      <p
        className="italic font-semibold my-4"
        dangerouslySetInnerHTML={{ __html: t('contact', { emailLink: EMAIL_LINK }) }}
      />
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
    </>
  )
}

export default DocumentContent
