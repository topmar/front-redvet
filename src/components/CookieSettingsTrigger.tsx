'use client'
type Props = { title: string}
export const CookieSettingsModalTrigger = ({title}: Props) => {
  const openSettingsModal = () => {
    const modal = document.getElementById('cookie-settings-modal') as HTMLDialogElement | null
    modal?.showModal()
  }

  return (
    <button onClick={openSettingsModal} className="hover:underline cursor-pointer">
      {title}
    </button>
  )
}
