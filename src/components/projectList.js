import React from 'react';
import data from './projectData.json';

function ProjectList(props) {
    const filteredData = data.filter((e) => {
        if (props.input === '') {
            return e;
        } else {
            return e.name.includes(props.input);
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.project_id}>
                    <p>{item.name}. Total: ${item.total}</p>
                </li>
            ))}
        </ul>
    )
}

export default ProjectList;