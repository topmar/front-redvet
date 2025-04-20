import { fetchContact } from '@/lib/actions'
import clsx from 'clsx'
import { Mail, Phone } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

interface ContactFooterProps {
  className?: string
}

const ContactFooter = async ({ className = '' }:ContactFooterProps) => {
  const t = await getTranslations('FooterContact')
  const contact = await fetchContact()

  return (
    <div className={clsx('flex flex-col', className)}>
      <a
        href={`mailto:${contact?.email}`}
        className="flex items-center mt-4 text-xl font-medium"
        // aria-label={`${t('mail')}${contact?.email}`}
        aria-label={`${t('contact-us')} ${t('by-email')}: ${contact?.email}`}
      >
        <Mail className="w-5 h-5 mr-3" />
        {contact?.email}
      </a>
      <a
        href={`tel:${contact.telephone}`}
        className="flex items-center mt-2 text-xl font-medium"
        // aria-label={`${t('phone')} ${contact.telephone}`}
        aria-label={`${t('contact-us')} ${t('by-phone')}: ${contact.telephone}`}
      >
        <Phone className="w-5 h-5 mr-3" />
        {contact.telephone}
      </a>
    </div>
  )
}

export default ContactFooter
