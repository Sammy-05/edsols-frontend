import About from "../About/About";
import Contact from "../Contact/Contact";
import Owner from "../Owner/Owner";
import Quote from "../Quote/Quote";
import Services from "../Services/Services";
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Landing />
      <About />
      <Services />
      <Owner />
      <Quote />
      <Contact />
    </div>
  );
};

export default Home;
