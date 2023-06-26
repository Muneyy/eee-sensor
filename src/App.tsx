import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';
import Navbar from './Navbar';

function App() {
  const [results, setResults] = useState('960');


  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-5 pt-5">
        <h1 className="text-3xl">EEE 192 [WYZ] Group 3 Readings</h1>
        <iframe
          width="450"
          height="260"
          src={`https://thingspeak.com/channels/2136247/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=${results}&title=SGP30+Readings&type=column&xaxis=CO2+levels+%28ppm%29&yaxis=Time`}
        ></iframe>
        <iframe 
        width="450" 
        height="260" 
        src={`https://thingspeak.com/channels/2201833/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=${results}&type=line`}>
        </iframe>
      </div>
      <div>
        <label htmlFor="results">Choose interval:</label>
        <select
          name="results"
          id="results"
          className="border-2 ml-3 rounded-full"
          value={results}
          onChange={(event) => setResults(event.target.value)}
        >
          <option value="960">4 Hours</option>
          <option value="1920">8 Hours</option>
          <option value="2880">12 Hours</option>
          <option value="5760">24 Hours</option>
          <option value="11520">48 Hours</option>
          <option value="23040">72 Hours</option>
        </select>
      </div>
    </>
  );
}

export default App;
