import React, { useEffect, useRef, useState } from 'react';

const CalculateForm = (props) => {

    const maxCreditHours = useRef(0);
    const studentsForConsideration = useRef();
    const [studentNames, setStudentNames] = useState([]);
    const [sum, setSum] = useState(0);
    const [result, setResult] = useState('');

    // props.users
    useEffect(() => {
        studentsForConsideration.current.value = props.users.length
    }, [props])

    const calculate = e => {
        e.preventDefault();
        const students = find_ideal_candidates([...props.users], maxCreditHours.current.value);
        console.log(students);

        let studentNames = [];
        let sum = 0;

        for (const student of students ) {
            studentNames.push(student.name);
            sum += student.earningPotential;
        }

        setStudentNames(studentNames);
        setSum(sum);

        setResult('Max Earnings of $' + sum + ' with ' + studentNames.join(', '))
    }


    return (

        <div>

            <form>
                <br /><br /><br />
                <label>Max Credit Hours</label>
                <input className="u-full-width" type="number" ref={maxCreditHours} name="maxCreditHours"
                       onChange={() => (maxCreditHours)} />

                <label>Number of Students for Consideration</label>
                <input className="u-full-width" type="number" ref={studentsForConsideration} name="studentsForConsideration" />

                <button className="button-primary" type="button" onClick={calculate} >calculate</button>
            </form>

            <div>
                {result}
            </div>

        </div>

    )


}

function find_ideal_candidates(users, maxCreditHours) {
    let hoursAccumulated = 0;
    return users.sort((userA, userB) => {
        const userAPerHour = userA.earningPotential / userA.instructionHours;
        const userBPerHour = userB.earningPotential / userB.instructionHours;
        if (userAPerHour === userBPerHour) {
            return 0;
        }
        return userAPerHour > userBPerHour ? -1 : 1;
    }).filter(user => {
        if (user.instructionHours + hoursAccumulated <= maxCreditHours) {
            hoursAccumulated += user.instructionHours;
            return true;
        }
        return false;
    });

}

export default CalculateForm;
