import Layout from "../Component/Layout";
import { skills, experiencia, proyectos, Estudios } from "../profile";
import Link from "next/link";
const index= ()=> (
    <>
    
    <Layout>
        {/** Header Cards */}
        <header className="row">
         <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="eli.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Elizabeth Olivera Gutierrez</h1>
                            <h3>FullStack Developer</h3>
                            <p>Programadora web con trayectoria en el desarrollo de web api, api rest, asp .net, desarrollo fulstack .net, desarrollo de paginas web con c# y rect. Recientemente he tenido el privilegio de formar parte de Alkemi dodne participe en la creación de una api para la web de la Ong somos mas, la cual realizamos éxito, en el cual adquiri experiencia en el desarrollo, trabajo con la metodologia scrum e interaccion con colegas programadores. Busco formar parte de una empresa o proyecto que lleve al sigiente nivel mi capacidad creativa, aportando mis amplios conocimientos de Programacion.</p>
                            <a href="/github">Contacteme</a>
                        </div>
                    </div>
            </div>
         </div>
        </header>
        {/** Second Section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                            {skills.map(({skill,progress,icono}, i )=>(
                                <div className="py-3" key={i}>
                                    <img src={icono}/><span> {skill}</span>
                                    <div className="progress">
                                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width:`${progress}%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                 </div>
            </div>

            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Estudios</h1>
                        <ul> 
                            {
                                Estudios.map(({titulo,desde,hasta,descripcion}, i)=>(
                                    <li key={i}>
                                        <h3>{titulo}</h3>
                                        <h5>{desde} - {hasta}</h5>
                                        <p>{descripcion}</p> 
                                    </li>
                                ))  
                            }
                        </ul>
                        <h1>Experiencia</h1>
                        <ul> 
                            {
                                experiencia.map(({titulo,desde,hasta,descripcion,referencias,tel}, i)=>(
                                    <li key={i}>
                                        <h3>{titulo}</h3>
                                        <h5>{desde} - {hasta}</h5>
                                        <p>{descripcion}</p> 
                                        <p>{referencias}</p>  
                                        <p>{tel}</p>    
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         {/** Second Portfolio */}
         <div className="col-md-12">
                <div className="card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portafolio</h1>
                        </div>
                        {
                            proyectos.map(({nombre,descripcion,imagen,repositorio}, i)=>(
                                <div className="col-md-4  py-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={imagen} alt="" className="card-img-top"/>
                                        </div>
                                        
                                        <div className="card-body">
                                            <h1>{nombre}</h1> 
                                            <p>{descripcion}</p>
                                            <a href={repositorio} target="_blank" >Repositorio de git hub</a><br/>
                                            <a href="#">Saber Mas</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-12">
                        <div className="text-center">
                            <Link href="/blog">
                                <a className=" btn btn-outline-light">Mas Proyectos</a>
                            </Link>
                        </div>
                    </div>   
                </div>
         </div>
    </Layout>
    </>

)
export default index;