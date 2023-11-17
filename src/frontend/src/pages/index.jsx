import Nav from "../components/navbar";
import Footer from "@/components/footer";
import Home from "../components/home/Home";

export default function Index() {
    return (
      <main className="bg-white">
        <Nav />
        
        <Home/>

        <Footer />
      </main>
    );
  }
  