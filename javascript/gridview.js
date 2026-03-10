// Sample Data Generation

// Rafaela Omena de Souza ID 76122 

const products = [
    { name: "Ultra-Wide Monitor", price: 450.00, availability: true },
    { name: "Mechanical Keypad", price: 85.50, availability: true },
    { name: "Gaming Mouse", price: 55.00, availability: false },
    { name: "Graphics Tablet", price: 220.00, availability: true },
    { name: "Portable Charger", price: 35.99, availability: true },
    { name: "Smart Watch Series 5", price: 299.00, availability: false },
    { name: "VR Headset", price: 399.99, availability: true },
    { name: "Wireless Earbuds", price: 129.00, availability: true },
    { name: "Microphone Arm", price: 45.00, availability: false },
    { name: "Stream Deck", price: 149.99, availability: true }
];

// Function to render the Grid View
function renderGridView() {
    const container = document.getElementById('product-grid');
    
    // Clear existing content
    container.innerHTML = '';

    products.forEach(product => {
        // Determine styling based on availability
        const isAvailable = product.availability;
        const statusColor = isAvailable 
            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
            : 'bg-red-500/10 text-red-400 border-red-500/20';
        
        const statusText = isAvailable ? 'In Stock' : 'Out of Stock';
        const priceFormatted = product.price.toFixed(2);

        // Create Card Element
        const card = document.createElement('div');
        
        // Card Styling:
        // - bg-gray-800: Dark card background
        // - rounded-xl: Smooth corners
        // - hover:scale-[1.02]: Subtle zoom effect on hover
        // - flex flex-col: Ensures footer aligns at the bottom
        card.className = "group bg-gray-800 rounded-xl border border-gray-700 p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:border-gray-600 hover:-translate-y-1";

        card.innerHTML = `
            <div class="mb-4">
                <h2 class="text-xl font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    ${product.name}
                </h2>
            </div>

            <div class="flex-grow"></div>

            <div class="flex items-center justify-between pt-4 border-t border-gray-700/50 mt-4">
                
                <div class="flex flex-col">
                    <span class="text-xs text-gray-500 uppercase font-bold tracking-wider">Price</span>
                    <span class="text-2xl font-mono text-white">$${priceFormatted}</span>
                </div>

                <div class="px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide ${statusColor}">
                    ${statusText}
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderGridView);