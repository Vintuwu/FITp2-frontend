import { Index } from "@/components/Index";
import Deportes from "@/components/Deportes";

export default function Home() {
  return (
    <div className="">
      <Index/>
      <section className="bg-white py-16">
        <Deportes/>
      </section>
    </div>
  );
}
