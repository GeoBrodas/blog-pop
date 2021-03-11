import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import Page from '@layouts/page'
import { getPosts } from '@shared/get-posts'

export default function Home({
  Posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <ul>
        {Posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}>
              <a>{post.frontMatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export const getStaticProps = async () => {
  const Posts = await getPosts('./posts')
  const allMdx = Posts.map(({ slug, frontMatter }) => ({
    slug,
    frontMatter,
  }))

  return {
    props: {
      Posts: allMdx,
    },
  }
}
