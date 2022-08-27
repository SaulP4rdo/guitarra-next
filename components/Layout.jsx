import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pagina, guitarra }) => {
  return (
    <div>
      <Head>
        <title>GuitarLa - {pagina}</title>

        <meta name="descripcion" content="Sitio web de guitarras " />
      </Head>

      <Header guitarra={guitarra} />
      {children}

      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null,
};

export default Layout;
