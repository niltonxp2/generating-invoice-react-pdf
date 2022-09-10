import { useState } from 'react';
import { InvoicePDF } from './components/Pdf';
import './App.css';

function App() {
  const [isInvoicePdfVisible, setIsInvoicePdfVisible] = useState(false);

  return (
    <div className='app-wrapper '>
      {isInvoicePdfVisible ? (
        <InvoicePDF />
      ) : (
        <button onClick={() => setIsInvoicePdfVisible(true)}>Generate Invoice</button>
      )}
    </div>
  );
}

export default App;
