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

    const headers = {
      'Content-Type': 'multipart/form-data',
      'apikey': '84019BAEB9FCDD13E5CA68857D140E89240954F6645C2E48C54F27385DDE8D99',
      'payload': '9AE97C64C752B25250561EDA13BDA91446BDD2CBD872DA9DB814C7E0A746A85F'
    }

    const generateQrEndpoint = 'https://my.veridocglobal.com/api/generateqr';
    axios.post(generateQrEndpoint, data, {
        headers: headers
    })
      .then((response) => {
        console.log(response);
      });
  };

  return (
		<Container fluid className="container">
			<Header as="h2">Batch Form</Header>
			<Form className="form">
				<Form.Field>
					<label>Batch Name</label>
					<input
						placeholder="Enter the Batch Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Batch Serial No.</label>
					<input
						placeholder="Enter the Batch Serial No."
						onChange={(e) => setAge(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Product Details</label>
					<input
						placeholder="Enter the Product Details"
						onChange={(e) => setSalary(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>No. of Events</label>
					<input
						placeholder="Enter the No. of Events"
						onChange={(e) => setHobby(e.target.value)}
					/>
				</Form.Field>

				<Button color="blue" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>
		</Container>
	);
}
/* eslint-enable */

export default InputForm;
