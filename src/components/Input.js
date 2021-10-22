import React, { useState } from 'react';
import {
  Button, Form, Container, Header,
} from 'semantic-ui-react';
import '../styles/App.css';
import axios from 'axios';

/* eslint-disable */

const InputForm = () => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [hobby, setHobby] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name, salary, hobby, age,
    };
    axios.post('https://sheet.best/api/sheets/e972f109-e16d-44b7-8177-a1fe9345f648', data)
      // .then((response) => {
      //   console.log(response);
      // });
  };

  return (
    <Container fluid className="container">
      <Header as="h2">React Google Sheets</Header>
      <Form className="form">
        <Form.Field>
          <label htmlFor={name}>Name</label>
          <input value={name} id={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
        </Form.Field>
        <Form.Field>
          <label htmlFor={age}>Age</label>
          <input value={age} id={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
        </Form.Field>
        <Form.Field>
          <label htmlFor={salary}>Salary</label>
          <input value={salary} id={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter your salary" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="hobby">Hobby</label>
          <input value={hobby} id={hobby} onChange={(e) => setHobby(e.target.value)} placeholder="Enter your hobby" />
        </Form.Field>
        <Button color="blue" type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}
/* eslint-enable */

export default InputForm;
