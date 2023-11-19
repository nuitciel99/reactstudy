import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/home/Content';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Header />
      <Content />
      <Banner />
      <Footer />

    </div>
  );
}

export default App;
