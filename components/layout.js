import Alert from './alert';
import Footer from './footer';
import Meta from './alert';
import Header from '@components/header';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
