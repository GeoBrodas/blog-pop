import Link from 'next/link'
import { GiAstronautHelmet as Astronaut } from 'react-icons/gi'
import { navigationStyles } from './styles'

const Navigation = () => (
  <nav css={navigationStyles}>
    <Link href="/">
      <a aria-label="back to home">
        <Astronaut />
      </a>
    </Link>
    <Link href="/about">
      <a aria-label="about page">About Dev</a>
    </Link>
  </nav>
)

export default Navigation
