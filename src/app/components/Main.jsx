import Image from "next/image";
import '../styles/Main.css'
export default function Main() {
    return (
        <section className="main-section">
            <div className="main-container">
                <div className="image-grid">
                    <div className="image-box">
                        <Image src="/assets/Carousel/slide3.png" alt="Imagen 1" width='200' height='200' />
                        <div className="image-overlay"></div>
                    </div>
                    <div className="image-box">
                        <Image src="/assets/Carousel/slide3.png" alt="Imagen 2" width='100' height='100' />
                        <div className="image-overlay"></div>
                    </div>
                    <div className="image-box">
                        <Image src="/assets/Carousel/slide3.png" alt="Imagen 3" width='100' height='100' />
                        <div className="image-overlay"></div>
                    </div>
                </div>


                <div className="text-section">
                    <h2>¿Quiénes somos?</h2>
                    <p>
                        Somos una empresa consolidada desde el 2016, especializada en diseño, construcción y remodelación de obras civiles, residenciales, comerciales e industriales.
                    </p>
                </div>
            </div>

            <div className="experience-section">
                <div className="experience-text">
                    <h2>Tenemos más de <span style={{ color: '#e3342f' }}>8 años de experiencia</span> construyendo en México</h2>
                    <p>
                        <strong>Vlock Constructora</strong> nació con el proposito de ofrecer soluciones innovadoras y de alta calidad en el sector de la construcción. Contamos con un equipo de profesionales altamente capacitados, comprometidos con la excelencia y la mejora continua, garantizando un servicio integral y personalizado para cada proyecto. Nuestro objetivo es superar las expectativas de nuestros clientes con responsabilidad, honestidad y trabajo en equipo.
                    </p>
                </div>
                <div className="experience-image">
                    <Image
                        src="/assets/country.svg"
                        alt="Experiencia"
                        width={700}
                        height={500}
                    />
                </div>

            </div>


        </section>



    );
}
