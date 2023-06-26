import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <div className='flex flex-col w-full justify-center items-center gap-5 pt-10'>
          <h1 className='text-3xl'>
            EEE 192 [WYZ] Group 3 Readings
          </h1>
          <iframe width="450" height="260" src="https://thingspeak.com/channels/2136247/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=100000&title=SGP30+Readings&type=line&xaxis=CO2+levels+%28ppm%29&yaxis=Time"></iframe>
        </div>
    </>
  );
}

export default App;
