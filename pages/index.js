import Head from 'next/head'
import Layout, { siteTitle, name } from '../components/layout'
import utilStyles from '../components/styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{name}</p>
        <p>This is {name}. I'm a full stack engineer from Antipolo Philippines. You can contact me on <a href="twitter.com/jzandag">Twitter</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}