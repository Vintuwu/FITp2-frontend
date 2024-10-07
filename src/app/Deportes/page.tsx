import Deportes from "@/components/Deportes";
import { Navbar } from "@/components/Navbar";

export default async function Deporte(){
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-10">
      <Navbar/>
      <Deportes />
    </div>
  )
}