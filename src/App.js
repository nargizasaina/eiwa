import Experts from "./components/experts";
import Footer from "./components/footer";
import InstailletProd from "./components/instailletProd";
import News from "./components/news";
import Partners from "./components/Partners/Partners";
import Phone from "./components/Phone/Phone";
import { Content } from "./content/Content";
import { Header } from "./header/Header.jsx";
import { SecondContent } from "./secondContent/SecondContent";
const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <SecondContent />
      <Phone />
      <Partners />
      <Experts />
      <News />
      <InstailletProd />
      <Footer />
    </div>
  );
};

export default App;
