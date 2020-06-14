import React,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import ContentCreate from './ContentCreate';
const App =() => {
    let countState =  useState(1);
    // let [count, setCount] = useState(30);
    return (
        <ContentCreate.Provider value= {countState}> 
        <div>
            <Parent/>
        </div>
        </ContentCreate.Provider>
    );
} 
 export default App;