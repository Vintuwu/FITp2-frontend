import Deportes from "@/components/Deportes";
import { NavBar } from "@/components/NavBar";

export default async function Deporte(){
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-4">
      <NavBar/>
      <Deportes />
    </div>
  )
}