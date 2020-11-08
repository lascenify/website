import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ascen Salmerón</title>
      </Head>
      <Container>Hello, I'm Ascen, a software developer</Container>
    </Layout>
  );
}
