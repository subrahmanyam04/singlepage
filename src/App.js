
import './App.css';
import Cards from './components/Cards';
import Corosel from './components/Corosel';
import Footer from './components/Footer';
import Header from './components/Header';
import Information from './components/Information';
import Form from './components/Form'

function App() {
  return (
    <div>
        <Header />
        <Corosel />
        <Cards />
        <Information />
        <Form />
        <Footer />
    </div>
  );
}

export default App;
