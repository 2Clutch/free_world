import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Earning Potential</th>
                    <th>Instruction Hours</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, name, earningPotential, instructionHours } = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>${earningPotential}</td>
                                <td>{instructionHours}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                        <tr>
                            <td colSpan={4}>No users found</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable;