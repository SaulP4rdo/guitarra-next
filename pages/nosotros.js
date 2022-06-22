import Image from "next/image";
import Layout from "../components/Layout";
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
    return (
        <Layout
            pagina='Nosotros'
        >
            <main className="contenedor" >
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido} >

                    <Image layout="responsive" width={600} height={450} src='/img/nosotros.jpg' alt="imagen nosotros" />


                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum pretium consectetur massa, eget interdum leo imperdiet a.Fusce a ullamcorper erat.Etiam molestie diam ac diam aliquam, et ultricies sapien tincidunt.Pellentesque pellentesque euismod porttitor.Curabitur gravida lacus id eros congue, et sodales nibh fringilla.Etiam ullamcorper eros sagittis, vestibulum eros nec, pharetra dolor.Fusce et malesuada metus.Donec porttitor nibh et libero congue rhoncus.Fusce quam mauris, ornare quis massa et, tempor sollicitudin neque.Fusce vitae dui eget leo ultricies egestas.Morbi posuere enim non risus gravida posuere.Proin semper, neque at scelerisque rutrum, nisl velit iaculis justo, blandit finibus ligula tellus at lectus.Cras mi erat, euismod at euismod quis, mattis eu arcu.Morbi facilisis vitae tellus non condimentum.Nulla facilisi. </p>
                    </div>
                </div>

            </main>
        </Layout>
    )
}

export default Nosotros
