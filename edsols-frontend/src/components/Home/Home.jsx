import About from "../About/About";
import Contact from "../Contact/Contact";
import Owner from "../Owner/Owner";
import Quote from "../Quote/Quote";
import Services from "../Services/Services";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import NavbarPhone from "../NavbarPhone/NavbarPhone";

const Home = () => {
  return (
    <div>
      {window.innerWidth > 768 ? <Navbar /> : <NavbarPhone/>}
      <Landing />
      <About />
      <Services />
      <Quote />
      <Owner />
      <Contact />
    </div>
  );
};

export default Home;
