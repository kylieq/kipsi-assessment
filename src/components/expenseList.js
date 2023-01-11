import React from 'react';
import data from './expensesData.json';

function ExpenseList(props) {
    const filteredData = data.filter((e) => {
        if (props.input === '') {
            return null;
        } else {
            return e.project_name.includes(props.input);
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.expense_id}>
                    <p>{item.project_name}: ${item.amount}</p>
                </li>
            ))}
        </ul>
    )
}

export default ExpenseList;