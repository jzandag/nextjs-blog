import Link from "next/link";
import Head from "next/head"

import Layout from "../../components/layout";

export default () => {
    //return <h1>First Post</h1>

    return (
        <Layout>
            <Head>
                <title>First page</title>
            </Head>
            <h1>First Post</h1>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </Layout>
    )
}