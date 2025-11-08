import { Link } from "react-router-dom";
import "./Home.css";
import Quinowrap from "./empaquetado_quinograps.webp";
import Quinoa from "./quinoa.webp";
import Matcha from './matcha.jpg'
import HarinaArroz from './harina-arroz.jpeg'

export default function Home() {
  return (
    <>
      <div className='landing-header'>
        <div className="background-opacity">
          <h1 className="text-8xl font-bold text-white">Descubre las Quinowraps</h1>
          <h2 className="text-4xl text-white">Vivir saludable es fácil y delicioso. Libres de glúten hechos a base de quinoa y matcha.</h2>
          <button className="bg-white text-black font-bold py-2 px-4 rounded mt-4"><Link to='/recipes'>¡Descubre una receta con Quinowraps!</Link></button>
        </div>
      </div>
      <div className="flex">
        <div>
          <img
            className="w-xl"
            src={Quinowrap} alt="Imagen de Quinowrap" />
        </div>
        <div className="flex flex-col justify-center p-4 pl-10 pr-10">
          <h1 className="text-5xl font-bold text-green-950">¿Qué son las Quinowraps?</h1>
          <p className="text-xl m-2 w-2xl">Tortillas elaboradas a base de quinoa, matcha y harina de arroz, libres de gluten y con un perfil nutricional mejorado, diseñadas para consumidores que buscan opciones más saludables y funcionales en su alimentación diaria.</p>
          <div>
            <h1 className="text-4xl font-bold text-green-950">Una alternativa deliciosa para personas celíacas</h1>
            <p className="text-xl m-2 w-2xl">Destinada para aquellas  personas que padecen la enfermedad celíaca, una afección autoinmune que les impide tolerar el gluten.</p>
          </div>
        </div>
      </div>
      <div className="landing-ingredients">
        <h1 className="text-5xl font-bold text-white pl-5 pr-5">Hecho con ingredientes de calidad</h1>
        <div className="flex flex-3 mt-6 gap-3 p-5">
          <div className="flex-1 bg-green-950 rounded-2xl">
            <img className="w-2xl rounded-t-2xl" src={Quinoa} alt="Quinoa" />
            <p className="text-3xl p-4 text-white"><span className="font-bold">1. Quinoa:</span> Rica en proteínas y aminoácidos esenciales.</p>
          </div>
          <div className="flex-1 bg-green-950 rounded-2xl">
            <img className="w-2xl rounded-t-2xl" src={Matcha} alt="Matcha" />
            <p className="text-3xl p-4 text-white"><span className="font-bold">2. Matcha:</span> Un superalimento lleno de antioxidantes.</p>
          </div>
          <div className="flex-1 bg-green-950 rounded-2xl">
            <img className="w-2xl rounded-t-2xl" src={HarinaArroz} alt="Harina de Arroz" />
            <p className="text-3xl p-4 text-white"><span className="font-bold">3. Harina de arroz:</span> Buena fuente de carbohidratos completos, es rica en vitamina B, hierro y magnesio, es de fácil digestión.</p>
          </div>
        </div>
      </div>
      <div className="bg-green-950 text-white text-center p-10">
        <h1 className="text-2xl font-semibold">Síguenos en nuestras redes sociales</h1>
        <p className="text-lg">Para más información y recetas:</p>
        <p><i className="fab fa-facebook"></i><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
        <p><i className="fab fa-instagram"></i><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        <p><i className="fas fa-phone"></i><a href="https://wa.me/50372920073" target="_blank" rel="noopener noreferrer">Tel (Whatsapp): (+503) 7292 0073</a></p>
      </div>
    </>
  );
}