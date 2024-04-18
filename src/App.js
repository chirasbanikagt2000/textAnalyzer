import React, {useState} from 'react'

import Navbar  from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
    
     <Navbar title='Text Analyzer'/>
     <Alert alert={alert} />
     <div className='container'>
     <TextForm 
     showAlert = {showAlert}
     heading = 'Enter the text to analyse'/>
     </div>
    </>
   
  );
}

export default App;
