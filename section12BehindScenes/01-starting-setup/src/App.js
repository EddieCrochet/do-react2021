import React, {useState} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/demoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING!');
  // should get this cl everytime the btn is pushed, since
  // components re render with state or prop changes

  const toggleParagraphHandler = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
