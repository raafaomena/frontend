async function fetchProductData() {

    // Fetch the resource and get a Response (status, headers, body stream)
    const response = await fetch("data/products.json");

    // Parse the response object to JSON
    const data = await response.json();
    console.log(`Type: ${response.type}`); // e.g. "basic", "cors", "opaque", "opaqueredirect"
    console.log(`Status: ${response.status}`); // e.g. 200
    console.log(`OK: ${response.ok}`); // true or false
    console.log(`URL: ${response.url}`); // the final URL (may differ if redirected)
    console.log(`Content-Type: ${response.headers.get('Content-Type')}`);

    displayProducts(data);

    // Verify the code is working by logging the data to the console
    console.log(data);
}

// Call the function to run the fetch request
fetchProductData();

// Function to handle the DOM output
function displayProducts(productsArray) {
    const container = document.getElementById("products-container");
    let htmlOutput = "";

    // Loop through each product in the array
    productsArray.forEach(product => {
        /* Build the HTML string using the compound assignment operator 
        and template literals.
        Line breaks added for readability */
        htmlOutput += `
            <p>
            <b>Name:</b> ${product.name}
            <b>Price:</b> $${product.price}  
            <b>Available?:</b> ${product.inStock ? "Yes" : "No"}
            </p>
        `;
    });

    /* Output the final HTML to the "products-container"
    DIV element on the web page */
    container.innerHTML = htmlOutput;
}


