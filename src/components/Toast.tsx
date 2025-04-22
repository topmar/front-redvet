"use client"
import { useEffect, useState } from 'react'

type ToastProps = {
  message: string
  type: 'success' | 'error'
  onClose: () => void
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 500)
    }, 4000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    visible && (
      <div
        className={`fixed top-4 right-4 p-4 rounded-md shadow-md transition-all transform ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } ${visible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <span className="text-white">{message}</span>
      </div>
    )
  )
}

export default Toast
