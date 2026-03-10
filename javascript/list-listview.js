//Rafaela Omena de Souza ID 76122
// Sample Data Generation
const products = [
    { name: "Ergonomic Office Chair", price: 249.99, availability: true },
    { name: "Mechanical Keyboard", price: 120.00, availability: true },
    { name: "Wireless Mouse", price: 45.50, availability: false },
    { name: "27-inch 4K Monitor", price: 399.99, availability: true },
    { name: "Noise-Cancelling Headphones", price: 199.00, availability: true },
    { name: "USB-C Docking Station", price: 89.99, availability: false },
    { name: "Webcam 1080p", price: 59.95, availability: true },
    { name: "Laptop Stand", price: 29.99, availability: true },
    { name: "Bluetooth Speaker", price: 75.00, availability: false },
    { name: "External SSD 1TB", price: 110.00, availability: true }
];

// Function to render the listview
function renderListView() {
    const container = document.getElementById('product-list-container');
    
    // Clear container
    container.innerHTML = '';

    products.forEach(product => {
        // Determine styling based on availability
        const statusColor = product.availability ? 'text-green-400 bg-green-900/30 border-green-900' : 'text-red-400 bg-red-900/30 border-red-900';
        const statusText = product.availability ? 'In Stock' : 'Out of Stock';
        const statusDot = product.availability ? 'bg-green-400' : 'bg-red-400';

        // Create Item Element
        const item = document.createElement('div');
        
        // Tailwind classes explanation:
        // - hover:bg-gray-700/50: Hover effect for interactivity
        // - flex flex-col: Stack content vertically on mobile
        // - md:grid md:grid-cols-12: Switch to 12-column grid on desktop
        item.className = "group p-5 md:py-4 hover:bg-gray-700/50 transition-colors duration-200 flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center";

        item.innerHTML = `
            <div class="md:col-span-6 mb-2 md:mb-0">
                <span class="text-lg md:text-base font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                    ${product.name}
                </span>
            </div>

            <div class="md:col-span-3 flex justify-between md:block mb-2 md:mb-0">
                <span class="md:hidden text-sm text-gray-500 font-medium">Price</span>
                <span class="text-gray-200 font-mono">
                    $${product.price.toFixed(2)}
                </span>
            </div>

            <div class="md:col-span-3 flex justify-between md:justify-end items-center">
                <span class="md:hidden text-sm text-gray-500 font-medium">Status</span>
                
                <div class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusColor}">
                    <span class="w-1.5 h-1.5 mr-2 rounded-full ${statusDot}"></span>
                    ${statusText}
                </div>
            </div>
        `;

        container.appendChild(item);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', renderListView);