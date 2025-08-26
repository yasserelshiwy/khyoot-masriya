import FloatingImages from "./components/FloatingImages";
import Header from "./components/Header";
import LandingLinks from "./components/Links";
import headerImage from "/images/header.png";

function App() {
  return (
    <>
     <FloatingImages
        images={["/images/logo1.png", "/images/logo1.png", "/images/logo1.png"]}
      />
      <div className="container mx-auto">
        <Header headerImage={headerImage} />
        <section>
          <LandingLinks />
        </section>
        <footer className="pb-5">
          <p className="mt-10 text-sm text-center mb-2 text-[#c79d56]">
            © {new Date().getFullYear()} Khyoot Masriya
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
