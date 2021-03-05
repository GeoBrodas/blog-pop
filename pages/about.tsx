import { css, keyframes } from '@emotion/react'
import { RiReactjsFill as Neutron } from 'react-icons/ri'
import Image from 'next/image'
import Page from '@layouts/page'

const Rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`

const reactIconStyles = css`
  font-size: 2.2rem;
  margin-left: 0.7rem;
  position: relative;
  top: 7px;
  color: var(--color-accent);
  animation: ${Rotate} 5s linear infinite;
`

const Header = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    font-size: 0.9rem;

    h2 {
      width: 60%;
      text-align: center;
    }
  }
`

const Bio = css`
  margin-top: 5rem;

  p {
    max-width: 80%;
    margin: 0 auto;
  }

  > p + p {
    margin-top: 3rem;
  }
`

const Footer = css`
  margin-top: 5rem;
  margin-right: 1rem;
  text-align: right;
  margin-bottom: 5rem;
`

export default function About() {
  return (
    <Page
      meta={{
        title: 'About Developer',
        description: "Georgey's biodata",
      }}
    >
      <section css={Header}>
        <Image src="/Profile.png" width={250} height={250} />
        <h2>
          Georgey VB
          <Neutron css={reactIconStyles} />
        </h2>
      </section>
      <section css={Bio}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor
          at risus viverra adipiscing. Sit amet facilisis magna etiam tempor
          orci eu. Morbi quis commodo odio aenean sed adipiscing. At augue eget
          arcu dictum varius duis at consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor
          at risus viverra adipiscing. Sit amet facilisis magna etiam tempor
          orci eu. Morbi quis commodo odio aenean sed adipiscing. At augue eget
          arcu dictum varius duis at consectetur.
        </p>
      </section>
      <section css={Footer}>
        <span>Follow on Twitter @</span>
        <a
          href="https://twitter.com/BrodasGeo"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            textDecorationLine: 'underline',
            textDecorationColor: 'rgb(100, 64, 100)',
          }}
        >
          geobrodas
        </a>
      </section>
    </Page>
  )
}
