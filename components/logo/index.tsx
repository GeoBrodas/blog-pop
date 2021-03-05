import { css } from '@emotion/react'
import { GiTimeBomb as Bomb } from 'react-icons/gi'

const bombLogo = css`
  position: relative;
  top: 0.2em;
`

const logoStyles = css`
  color: var(--color-text-invert);
  font-size: 4rem;
  display: block;
  text-align: center;
  font-variant: small-caps;
`

const logo = () => (
  <span css={logoStyles}>
    BLOGP
    <Bomb css={bombLogo} />P
  </span>
)

export default logo
