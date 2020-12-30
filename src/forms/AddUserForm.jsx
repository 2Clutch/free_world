import React, { useState } from 'react';

const AddUserForm = (props) => {

    const initUser = { id: null, name: '', earningPotential: '', instructionHours: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.earningPotential && user.instructionHours) {
            user.earningPotential = parseInt(user.earningPotential);
            user.instructionHours = parseInt(user.instructionHours);
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form>

            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />

            <label>Earning Potential</label>
            <input className="u-full-width" type="number" value={user.earningPotential} name="earningPotential" onChange={handleChange} />

            <label>Instruction Hours</label>
            <input className="u-full-width" type="number" value={user.instructionHours} name="instructionHours" onChange={handleChange} />


            <button className="button-primary" type="button" onClick={handleSubmit} >Add user</button>

        </form>
    )
}

export default AddUserForm;