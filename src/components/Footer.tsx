import ContactUs from './ContactUs'
import FooterCopyright from './FooterCopyright'
import FooterInfo from './FooterInfo'
import OpeningTime from './OpeningTime'

const Footer = () => {
  return (
    <footer>
      <OpeningTime />
      <FooterInfo />
      <FooterCopyright />
      <ContactUs />
    </footer>
  )
}

export default Footer
