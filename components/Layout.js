import Head from "next/head"
import Header from "./Header"

const Layout = ({ children, pagina }) => {
    return (
        <div>
            <Head>
                <title>GuitarLa - {pagina}</title>
                <meta name="descripcion" content="Sitio web de guitarras " />
            </Head>

            <Header />
            {children}
        </div>
    )
}

export default Layout