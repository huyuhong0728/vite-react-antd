import React, { useState } from 'react';
import './App.less';
import { Button } from 'antd';
import * as wjInput from '@grapecity/wijmo.react.input';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header container">
        <Button type="primary">哈哈</Button>
        <wjInput.InputNumber value={0} />
      </header>
    </div>
  );
}

export default App;
