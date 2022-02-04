import React, {useState} from 'react';
import './App.css';
import FormInput from '../FormInput/FormInput'
import CasesTable from "../CasesTable/CasesTable";

function App() {

    const [declinedWord, setDeclinedWord] = useState([]);

    return (
        <div className="App">
            <FormInput setCurrDeclinedWord={setDeclinedWord}/>
            <CasesTable currentDeclinedWord={declinedWord}/>
        </div>
    );
}

export default App;
