async function fetchUserData() {
    // Fetch the resource and get a Response (status, headers, body stream)
    const response = await fetch("data/users.json");

    // Parse the response object to JSON
    const data = await response.json();

    console.log(`Type: ${response.type}`); // e.g. "basic", "cors", "opaque", "opaqueredirect"
    console.log(`Status: ${response.status}`); // e.g. 200
    console.log(`OK: ${response.ok}`); // true or false
    console.log(`URL: ${response.url}`); // the final URL (may differ if redirected)
    console.log(`Content-Type: ${response.headers.get('Content-Type')}`);

    displayUsers(data);
    
    // Verify the code is working by logging the data to the console
    console.log(data);
}

// Call the function to run the fetch request
fetchUserData();

// Function to handle the DOM output
function displayUsers(usersArray) {
    const container = document.getElementById("users-container");
    let htmlOutput = "";

    // Loop through each user in the array
    usersArray.forEach(user => {
        /* Build the HTML string using the compound assignment operator 
        and template literals.
        Line breaks added for readability */
        htmlOutput += `
            <p>
            <b>First Name:</b> ${user.firstName}
            <b>Last Name:</b> ${user.lastName}
            <b>Age:</b> ${user.age}  
            <b>Is Active?:</b> ${user.isActive ? "Yes" : "No"}
            </p>
        `;
    });

    /* Output the final HTML to the "users-container"
    DIV element on the web page */
    container.innerHTML = htmlOutput;
}