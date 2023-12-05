import Cards from "./pages/components/Cards";
import Footer from "./pages/components/Footer";
import Hero from "./pages/components/Hero";
import Navbar from "./pages/components/Nav";
import NewsLeter from "./pages/components/news_leter";
import Intro from "./pages/intro";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Intro />
        <NewsLeter />
        <Cards />
        <Footer />
      </main>
    </>
  );
}

export default App;
