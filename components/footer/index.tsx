import { IoLogoGithub as Github } from 'react-icons/io'
import { IoLogoTwitter as Twitter } from 'react-icons/io'
import { FaDev as Dev } from 'react-icons/fa'
import { footerStyle } from './style'
import { leakedList } from '@shared/style-helper'
import { metadata } from 'config'

const Footer = () => (
  <footer css={footerStyle}>
    <ul css={leakedList} style={{ listStyleType: 'none' }}>
      <li>
        <a href={metadata.author.githubURL} target="_blank">
          <Github />
        </a>
      </li>
      <li>
        <a href={metadata.author.twitterURL} target="_blank">
          <Twitter />
        </a>
      </li>
      <li>
        <a href={metadata.author.devURL} target="_blank">
          <Dev />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
