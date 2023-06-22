import React from 'react';
import CountryContext from './context/CountryContext';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <CountryContext>
        <Country/>
      </CountryContext>
    </div>
  );
}

export default App;
