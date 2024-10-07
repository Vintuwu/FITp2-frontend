import { Index } from "@/components/Index";
import Deportes from "@/components/Deportes";
import Noticias from "@/components/Noticias";

export default function Home() {
  return (
    <div className="">
      <Index/>
      <section className="bg-white py-16">
        <Deportes/>
      </section>
      <section className="bg-white py-16">
        <Noticias/>
      </section>
    </div>
  );
}
