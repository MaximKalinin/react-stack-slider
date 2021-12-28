import 'react-app-polyfill/ie11';
import './index.css';
import ca from './assets/ca.jpg';
import sm from './assets/sm.jpg';
import h from './assets/h.jpg';
import dd from './assets/dd.jpg';
import nf from './assets/nf.jpg';
import c from './assets/c.jpg';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '../.';

const images = [ca, sm, h, dd, nf, c];

function Image({ src }: { src: string }) {
  return <img draggable={false} src={src} alt="" className="img" />;
}

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Slider images={images} Image={Image} />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
