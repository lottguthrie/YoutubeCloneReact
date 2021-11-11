import React, {useState,useEffect } from 'react';
import { Search } from './component/search';


export function App() {
  const [currentChannelId, setCurrentChannelId] = useState();

  return (
    <div className="app-container">
      <h1>YouTube Channel</h1>
      <Search setCurrentChannelId={id => setCurrentChannelId(id)}/>
    </div>
  );
}

 






export default App