import React, { useState } from 'react';
import '../styles.css';

import ProjectList from './projectList';
import ExpenseList from './expenseList';

const Panel = (props) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    
    return (
        <div>
            <div class="search-container">
                <form>
                    <input
                    type="text"
                    placeholder="Search..."
                    onChange={handleChange}
                    value={searchInput} />
                </form>
            </div>
            {props.view === "projects" ? <ProjectList input={searchInput} /> : null}
            {props.view === "expenses" ? <ExpenseList input={searchInput} /> : null}
        </div>
      );
}

export default Panel;