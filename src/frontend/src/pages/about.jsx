import About from "@/components/about/about";
import Nav from "../components/navbar";
import Footer from "@/components/footer";

export default function Home() {
return (
    <main className="bg-white">
    <Nav />
    <About/>
    <Footer />
    </main>
    );
}
