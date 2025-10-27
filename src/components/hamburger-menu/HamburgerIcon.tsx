'use client'

import { useEffect } from 'react'

type HamburgerIconProps = {
  isOpen: boolean
  toggle: () => void
}

const HamburgerIcon = ({ isOpen, toggle }: HamburgerIconProps) => {
  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
  }, [isOpen])

  return (
    <div className="menu-icon" onClick={toggle}>
      <div className={`line top`} />
      <div className={`line middle`} />
      <div className={`line bottom`} />
    </div>
  )
}

export default HamburgerIcon
