import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useInput from "../../useInput";
function Data({ add }) {
  
  const [value, handleChange,reset] = useInput("");
 
  return (
    <div className='container sm-col-1'>
      <Form onSubmit={e => {
        e.preventDefault()
        add(value.name, value.surname, value.bookvalue);
        console.log(value);
        reset("name","surname","bookvalue");
      }}
      style={{ width: '450px', fontSize: "45px" }}>
        <FormGroup >
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Please Enter the Name"
            onChange={handleChange("name")}
            value={value.name}
            
          />
        </FormGroup>
        <FormGroup>
          <Label for="surname">Surname</Label>
          <Input
            type="text"
            name="surname"
            placeholder="Please Enter Surname"
            onChange={handleChange('surname')}
            value={value.surname}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bookname">Bookname</Label>
          <Input
            type="text"
            name="bookname"
            placeholder="Please Enter BookName"
            id='bookname'
            onChange={handleChange('bookvalue')}
            value={value.bookvalue}
          />
              </FormGroup>
        <Button>Submit</Button>
      </Form>

    </div>
  );
}

export default Data;
