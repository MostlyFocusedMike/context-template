import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import AppContext from './context';

const App = () => {
    const { example, setExample } = useContext(AppContext);
    const [formText, setFormText] = useState('');

    useEffect(() => {
        console.log('context here: ', example);
    }, [example]);

    const handleChange = (e) => {
        setFormText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setExample(formText);
    };

    return (
        <div className="App">
            Hello there
            <form onSubmit={handleSubmit}>
                <label htmlFor="example">Example: </label>
                <input
                    type='text'
                    value={formText}
                    onChange={handleChange}
                />
                <button>DO IT</button>
            </form>

        </div>
    );
};

export default App;
