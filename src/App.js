import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel'
import defaultSlides from './defaultSlides';

function App() {
    return ( 
        <Carousel slides = { defaultSlides }/>
    );
}

export default App;
