import React, { useState } from 'react';
import Table from '../Components/Dashboard/Table';
import './Paper.css';
import useInput from "../Components/useInput";
import Data from '../Components/Dashboard/Data/Data'

function Home() {
 
  const [value,handleChange,reset] = useInput();

  const data = [];
  
  const [info, setInfo] = useState(data);

  const addInfo = (newName, newSurname, newBook) =>  {
    
    setInfo([...info, { id: Math.random(), name: newName, surname: newSurname, bookInfo: newBook }]);
    
  }

    return (
        <div class="container mt-5">
        <div class="row">
          <div class="col-xxl-6">
            <Table info={info} key={info.id}/>
                </div>
          <div class="col">
            <Data add={addInfo}/>
          </div>
            </div>
            </div>
          
    )
}

export default Home
