import React, { useContext } from 'react';
import Private from './Private';
import { TokenContext } from './context/tokenContext';
import Public from './Public';

function App() {
  const {token} = useContext(TokenContext)
    if (token) {
    return  <Private/>
    }

    return <Public/>

}

export default App;
