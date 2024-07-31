import Navigation from "./components/navigation/navigation.component";
import Home from "./components/container/container.component";
import Containers from "./components/littleContainers/containers.component";
import Footer from "./components/footer/footer.component";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (      
    <><><><Navigation />
      <Home />
    </><Containers /></>
    <Footer></Footer></>
  );
};
export default App;