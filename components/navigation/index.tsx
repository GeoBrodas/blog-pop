import Link from 'next/link'
import { GiAstronautHelmet as Astronaut } from 'react-icons/gi'
import { leakedList } from '@shared/style-helper'

const Navigation = () => (
  <nav css={leakedList}>
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
