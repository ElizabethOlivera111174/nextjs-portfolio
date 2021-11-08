import Layout from "../Component/Layout";
import { skills, experiencia, proyectos, Estudios,foto,descripcion } from "../profile";
const Blog= ()=>(
    <Layout footer={false}>
        <h1>Mas Proyectos</h1>
        
        <div className="col-md-12">
            
            {foto.map(({imagen,descripcion,titulo,alkemy,tecnologias,repositorio}, i )=>(
                <div className="card card-body bg-secondary text-light  mb-3">
                    <div className="row">
                        <div className="col-md-3" key={i}>
                            <img src={imagen}/>
                        </div>
                        <div className="col-md-8" key={i}>
                            <h1>{titulo}</h1>
                            <p>{descripcion}</p>
                            <p>{alkemy}</p>
                            <p>{tecnologias}</p>
                            <a href={repositorio}>Repositorio de Git Hub</a>
                        </div>
                    </div>
                </div>
            ))}

                {/* <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        {foto.map(({imagen,descripcion,titulo}, i )=>(
                            <div className="row">
                                <div className="col-md-3" key={i}>
                                    <img src={imagen}/>
                                </div>
                                <div className="col-md-8" key={i}>
                                <h1>{titulo}</h1>
                                <p>{descripcion}</p>
                                <a href="/github">Repositorio de Git Hub</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
        </div>

    </Layout>
    
)
export default Blog;