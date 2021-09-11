import Navbar from "./navbar"
import { useEffect } from "react";
import {useRouter} from "next/router";
import nProgress from "nprogress";
const Layout= ({children, footer = true})=> {

    const router= useRouter();
   
    useEffect(()=>{
        const handleRouteChange= url => {
            nProgress.start();
        }
        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', ()=> nProgress.done())
        return ()=>{
            router.events.off('routeChangeStart', handleRouteChange)
        }
    },[])

    return(
        <>
        <Navbar />
        <main className="container py-4">
            {children}  
        </main>
        {
             footer && (
                <footer className="bg-dark text-light text-center footer">
                    <div className="container p-4">
                        <h1>&copy; Elizabeth Olivera Portfolio</h1>
                        <p>Derechos Reservados</p>
                    </div>
                </footer>
            ) 
        }
       
    </>
    )}
export default Layout;