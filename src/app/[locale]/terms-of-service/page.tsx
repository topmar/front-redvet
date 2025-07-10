import DocumentContent from "@/components/DocumentContent"

const TermsOfService = async () => {
  return (
    <main>
      <section className="flex flex-col max-w-7xl mx-auto py-6 px-4" aria-labelledby="terms-of-service">
        <DocumentContent namespace="termsOfService" />
      </section>
    </main>
  )
}

export default TermsOfService
