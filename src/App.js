import './App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <><div>
    <BrowserRouter>
    <Header/>
    <Body/>
    <Footer/>
    </BrowserRouter></div>
    </>
  );
}

export default App;
