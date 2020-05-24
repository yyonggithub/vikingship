import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <Button type="primary" size={"lg"}>hello</Button>
      <Button type="default" size={"sm"}>sm</Button>
      <Button type="default" size={"sm"} disabled>sm</Button>
      <Button type="link" size={'sm'} href={'https://www.baidu.com'} disabled>baidu link</Button>
    </div>
  );
}

export default App;
