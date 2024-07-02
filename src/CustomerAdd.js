import React, { useState } from 'react';
import CustomerView from './CustomerView';

export default function CustomerAdd() {
    // creating useState function from React that allows us to create and manage state variables.
    // creatinh two state variables: 'input' to store the text input from the user,
    // and 'customers' to store a list of customer names.
    const [input, setInput] = useState(""); // 'input' starts as an empty string
    const [customers, setCustomers] = useState([]); // 'customers' starts as an empty array

    // This function is called when the user clicks the 'Add' button.
    function addCustomer() {
        // Check if 'input' is not empty
        if (input) {
            // setCustomers is used to update the 'customers' array.
            // We use a special syntax with a function inside setCustomers to ensure
            // we correctly update the state based on the previous state.
            setCustomers((previousState) => [...previousState, input]);
            // 'input' is added to the 'customers' array
        }
    }

    // getting the component on the screen.
    return (
        <>
        <div>
            <h3>Add New Customer</h3>
{/* 
                Setting up an event listener ('onChange') on the input field.
                When the user types something ('e' represents the event), 
                'e.target.value' retrieves the text typed by the user.
                'setInput' updates the 'input' state with the typed text.
            */}
            <input type="text" onChange={(e) => setInput(e.target.value)} />

            {/* When the user clicks this button, it goes the 'addCustomer' function that is defined above. */}
            <button onClick={addCustomer}>Add</button>
        </div>
        {/* adding customer view  */}
        <CustomerView customers={customers}/>
        </>
    );
}
