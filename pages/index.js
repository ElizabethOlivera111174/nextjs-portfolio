import Layout from "../Component/Layout";
import { skills, experiencia, proyectos } from "../profile";
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
                        <div className="col-md-4">
                            <h1>Elizabeth Olivera</h1>
                            <h3>FullStack Developer</h3>
                            <p>Dale</p>
                            <a href="">Contrateme</a>
                        </div>
                        <div className="col-md-4">
                            <div><img src="https://img.icons8.com/cute-clipart/48/000000/github.png"/><span className="py-2"><Link href="/"><a> Github </a></Link></span></div>
                            <div><img src="https://img.icons8.com/color/48/000000/gmail--v1.png"/><Link href="/"><a> E-mail </a></Link></div>
                            <div><img src="https://img.icons8.com/external-justicon-flat-justicon/48/000000/external-linkedin-social-media-justicon-flat-justicon.png"/><Link href="/"><a> Likedin </a></Link></div>
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
                        <h1>Experiencia</h1>
                        <ul> 
                            {
                                experiencia.map(({titulo,desde,hasta,descripcion}, i)=>(
                                    <li key={i}>
                                        <h3>{titulo}</h3>
                                        <h5>{desde} - {hasta}</h5>
                                        <p>{descripcion}</p>    
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
                            proyectos.map(({nombre,descripcion,imagen}, i)=>(
                                <div className="col-md-4  py-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={imagen} alt="" className="card-img-top"/>
                                        </div>
                                        
                                        <div className="card-body">
                                            <h1>{nombre}</h1> 
                                            <p>{descripcion}</p>
                                            <a href="#">Saber Mas</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-md-12">
                        <div className="text-center">
                            <Link href="/portfolio">
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