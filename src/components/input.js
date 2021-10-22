import React, {useState} from "react";
import {Button, Form, Container, Header} from 'semantic-ui-react';
import '../styles/App.css';
import axios from "axios";

const InputForm = () => {
        const [name, setName] = useState('');
        const [salary, setSalary] = useState('');
        const [hobby, setHobby] = useState('');
        const [age, setAge] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            alert('Submitted!');

            axios.post('https://sheet.best/api/sheets/e972f109-e16d-44b7-8177-a1fe9345f648', )
        }

        return (
            <Container fluid className="container">
                <Header as="h2">React Google Sheets</Header>
                <Form className="form" onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Age</label>
                        <input value={age} onChange={e => setAge(e.target.value)} placeholder="Enter your age" />
                    </Form.Field>
                    <Form.Field>
                        <label>Salary</label>
                        <input value={salary} onChange={e => setSalary(e.target.value)} placeholder="Enter your salary" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hobby</label>
                        <input value={hobby} onChange={e => setHobby(e.target.value)} placeholder="Enter your hobby" />
                    </Form.Field>
                    <Button color="blue" type="submit">Submit</Button>
                </Form>
            </Container>
        )
}

export default InputForm;