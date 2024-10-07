import { NavBar } from "@/components/NavBar";
import { MostrarNoticias } from "@/components/Noticias";


export default async function Noticias(){
    return (
        <div className="container max-w-screen-xl mx-auto px-4 py-4">
            <NavBar/>
            <MostrarNoticias/>
        </div>
    )
}