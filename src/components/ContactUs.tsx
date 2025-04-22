'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { sendContactForm } from '@/lib/actions'
import { ContactFormValues } from '@/types/contact'

export default function ContactUs() {
  const t = useTranslations('ContactUs')

  const formSchema = z.object({
    ownerName: z.string().min(1, { message: t('Error-owner') }),
    animalName: z.string(),
    email: z.string().email({ message: t('Error-email') }),
    tel: z.union([
      z
        .string()
        .min(9, { message: t('Error-tel-too-short') })
        .max(12, { message: t('Error-tel-too-long') }),
      z.literal('')
    ]),
    message: z
      .string()
      .min(1, { message: t('Error-message-too-short') })
      .max(600, { message: t('Error-message-too-long') })
  })

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ownerName: '',
      animalName: '',
      email: '',
      tel: '',
      message: ''
    }
  })

  async function onSubmit(values: ContactFormValues) {
    try {
      await sendContactForm(values)
      // toast.success(t('Send-success'))

      form.reset()
    } catch (error) {
      console.log(error)
      // toast.error(t('Error-send'))
    }
  }

  return (
    <section className="bg-red-800">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-left text-white">{t('title')}</h2>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-7">
              <div className="relative flex flex-col">
                <label className="text-white">{t('Owner-label')}</label>
                <input
                  type="text"
                  placeholder={t('Owner-placeholder')}
                  {...form.register('ownerName')}
                  className="bg-amber-50 focus-visible:ring-[1px] h-9 p-2"
                />
                {form.formState.errors.ownerName && (
                  <span className="absolute text-white top-full w-full px-2 bg-red-600 rounded-b-lg">
                    {form.formState.errors.ownerName.message}
                  </span>
                )}
              </div>

              <div className="relative flex flex-col">
                <label className="text-white">{t('Animal-label')}</label>
                <input
                  type="text"
                  placeholder={t('Animal-placeholder')}
                  {...form.register('animalName')}
                  className="bg-amber-50 focus-visible:ring-[1px] h-9 p-2"
                />
                {form.formState.errors.animalName && (
                  <span className="absolute text-white top-full w-full px-2 bg-red-600 rounded-b-lg">
                    {form.formState.errors.animalName.message}
                  </span>
                )}
              </div>

              <div className="relative flex flex-col">
                <label className="text-white">{t('Email-label')}</label>
                <input
                  type="email"
                  placeholder={t('Email-placeholder')}
                  {...form.register('email')}
                  className="bg-amber-50 focus-visible:ring-[1px] h-9 p-2"
                />
                {form.formState.errors.email && (
                  <span className="absolute text-white top-full w-full px-2 bg-red-600 rounded-b-lg">
                    {form.formState.errors.email.message}
                  </span>
                )}
              </div>

              <div className="relative flex flex-col">
                <label className="text-white">{t('Tel-label')}</label>
                <input
                  type="tel"
                  placeholder={t('Tel-placeholder')}
                  {...form.register('tel')}
                  className="bg-amber-50 focus-visible:ring-[1px] h-9 p-2"
                />
                {form.formState.errors.tel && (
                  <span className="text-red-500">{form.formState.errors.tel.message}</span>
                )}
              </div>
            </div>

            <div className="space-y-6 h-full">
              <div className="relative h-full grid grid-rows-[auto_1fr]">
                <label className="text-white">{t('Message-label')}</label>
                <textarea
                  placeholder={t('Message-placeholder')}
                  {...form.register('message')}
                  className="resize-none h-50 md:h-full bg-amber-50 focus-visible:ring-[1px] p-2"
                />
                {form.formState.errors.message && (
                  <span className="absolute text-white top-full w-full px-2 bg-red-600 rounded-b-lg">
                    {form.formState.errors.message.message}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-transparent border-2 border-amber-50 focus-visible:ring-[1px] w-full mt-10 hover:border-0 hover:bg-amber-50 hover:text-black text-white h-10 text-lg"
          >
            {t('Button-submit')}
          </button>
        </form>
      </div>
    </section>
  )
}
