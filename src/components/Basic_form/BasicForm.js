import React from 'react';
import { useState } from 'react';

const BasicForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handelNameChange = (e) => {
        setName(e.target.value);

    };
    const handelEmailChange = (e) => {
        setEmail(e.target.value);

    }
    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(name, email);
        // clearing the values***********
        setName('');
        setEmail('')

    };
    return (
        <div>
            <h1>Basic Form</h1>

            <form onSubmit={handelFormSubmit}>

                <label >User Name:
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={name}
                        // onChange={(e) => setName(e.target.value)}
                        onChange={handelNameChange}
                    />
                </label>

                <br /> <br />

                <label>Email:
                    <input
                        type='text'
                        name='email'
                        placeholder='email'
                        value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        onChange={handelEmailChange}
                    />
                </label>

                <br />
                <br />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default BasicForm;









