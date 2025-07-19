import DocumentContent from '@/components/DocumentContent'

const PrivacyPolicy = async () => {
  return (
    <section className="flex flex-col max-w-7xl mx-auto py-6 px-4" aria-labelledby="privacy policy">
      <DocumentContent namespace="privacyPolicy" />
    </section>
  )
}

export default PrivacyPolicy
