//Rafaela Omena de Souza ID 76122 
// *** SAMPLE DATA ***
const products = [
    { id: 101, name: "Quantum Processor X1", price: 499.99, availability: true },
    { id: 102, name: "Nebula Graphics Card", price: 899.50, availability: false },
    { id: 103, name: "HyperSpeed RAM 32GB", price: 159.00, availability: true },
    { id: 104, name: "Solid State Drive 2TB", price: 220.00, availability: true },
    { id: 105, name: "MechKeyboard RGB", price: 129.99, availability: true },
    { id: 106, name: "ErgoMouse Pro", price: 89.99, availability: false },
    { id: 107, name: "UltraWide Monitor 34\"", price: 450.00, availability: true },
    { id: 108, name: "CoolMaster Liquid Cooler", price: 110.00, availability: true },
    { id: 109, name: "Phantom Gaming Case", price: 199.99, availability: false },
    { id: 110, name: "Thunderbolt Dock", price: 299.00, availability: true }
];

// *** RENDER FUNCTION ***
function renderListView() {
    const container = document.getElementById('listview-container');
    
    // 1. Generate Header Row (Visible only on Desktop via 'hidden md:flex')
    let html = `
        <div class="hidden md:flex bg-gray-900/50 p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-700 items-center">
            <div class="w-16 text-gray-500">ID</div>
            <div class="flex-1">Product Name</div>
            <div class="w-32 text-right">Price</div>
            <div class="w-32 text-center">Status</div>
            <div class="w-24 text-center">Action</div>
        </div>
        <div class="divide-y divide-gray-700">
    `;

    // 2. Generate List Items
    products.forEach(product => {
        // Styling logic for availability
        const statusClass = product.availability 
            ? 'bg-green-500/10 text-green-400 border-green-500/20' 
            : 'bg-red-500/10 text-red-400 border-red-500/20';
        
        const statusLabel = product.availability ? 'In Stock' : 'Out of Stock';

        // Note: Layout uses flex-col for mobile, switching to flex-row for desktop
        html += `
            <div class="p-4 hover:bg-gray-700/50 transition duration-150 ease-in-out flex flex-col md:flex-row md:items-center gap-4">
                
                <div class="hidden md:block w-16 text-gray-500 text-sm font-mono">
                    #${product.id}
                </div>

                <div class="flex-1">
                    <span class="text-blue-400 font-bold text-lg md:text-base block">
                        ${product.name}
                    </span>
                    <span class="md:hidden text-xs text-gray-500 font-mono">ID: ${product.id}</span>
                </div>

                <div class="flex justify-between items-center w-full md:w-auto md:contents">
                    
                    <div class="text-gray-200 font-medium md:w-32 md:text-right">
                        <span class="md:hidden text-gray-500 text-sm mr-2">Price:</span>
                        $${product.price.toFixed(2)}
                    </div>

                    <div class="md:w-32 md:text-center">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusClass}">
                            ${statusLabel}
                        </span>
                    </div>
                </div>

                <div class="md:w-24 md:text-center mt-2 md:mt-0">
                    <button 
                        id="btn-${product.id}"
                        class="w-full md:w-auto bg-gray-700 hover:bg-blue-600 text-white text-xs font-semibold py-1.5 px-3 rounded border border-gray-600 hover:border-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        View ID
                    </button>
                </div>

            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;

    // 3. Attach Event Listeners
    attachEventListeners();
}

function attachEventListeners() {
    products.forEach(product => {
        const btnId = `btn-${product.id}`;
        const button = document.getElementById(btnId);
        
        if (button) {
            button.addEventListener('click', () => {
                alert(`Product ID: ${product.id}`);
            });
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', renderListView);