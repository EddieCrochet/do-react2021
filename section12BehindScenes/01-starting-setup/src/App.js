import React, {useCallback, useState} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/demoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING!');
  // should get this cl everytime the btn is pushed, since
  // components re render with state or prop changes

  const toggleParagraphHandler = useCallback(() => {
    // the showParagraph state is only changed if allowToggle state is true
    if(allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);
  // using allowToggle as a dependency for useCallback ensures we are using the latest 
  // snapshop of that state for this stored function

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle paragraph!</Button>
    </div>
  );
}

export default App;
