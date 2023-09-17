import Experts from "./components/experts";
import Footer from "./components/footer";
import InstailletProd from "./components/instailletProd";
import News from "./components/news";
import Partners from "./components/Partners/Partners";
import Phone from "./components/Phone/Phone";
const App = () => {
  return (
    <div>
    <Phone/>
      <Partners/>
      <Experts />
      <News />
      <InstailletProd />
      <Footer/>
    </div>
  );
};


export default App;
