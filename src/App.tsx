import { useState, } from 'react';
import Confirm from './confirm';

function App() {

  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="App fixed inset-0 flex items-center justify-center justify-items-center">
      <button className="text-blue-600 hover:underline" onClick={()=>setIsOpen(!isOpen)}>Click to Open Confirm Modal</button>
      <Confirm okText="Select" open={isOpen} onClose={setIsOpen}></Confirm>
    </div>
  );
}

export default App;
