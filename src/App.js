import React, {useState} from 'react';
// import './App.css';
import SideNav from './components/Navigation/Toolbar';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee, faBars)

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <SideNav open={open} setOpen={setOpen}/>
      <main style={{marginTop: '64px'}}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}
