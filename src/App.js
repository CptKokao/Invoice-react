import './index.scss';

import Slider from './components/Slider/Slider';
import Adv from './components/Adv/Adv';
import About from './components/About/About';
import Work from './components/Work/Work';
import Video from './components/Video/Video';
import Footer from './components/Footer/Footer';
import './components/Bl/Bl.scss';

function App() {
  return (
    <>
      <Slider/>
      <Adv/>
      <Work/>
      <Video/>
      <About/>
      <Footer/>
    </>

  );
}

export default App;
