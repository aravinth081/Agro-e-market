document.addEventListener('DOMContentLoaded', () => {

    // --- Data for Dynamic Content ---
    const modules = [
        { title: 'Agro E-Market', description: 'Direct from farmers to you.', icon: 'fa-store', section: 'agro-market', colorClass: 'agro-market' }
    ];

    const products = [
        // Original 8
        { name: 'Fresh Apples', price: 120, unit: 'kg', image: 'apple.jpg' },
        { name: 'Ripe Tomatoes', price: 40, unit: 'kg', image: 'tomato.jpg' },
        { name: 'Potatoes', price: 30, unit: 'kg', image: 'potato.jpg' },
        { name: 'Onions', price: 45, unit: 'kg', image: 'onion.jpg' },
        { name: 'Carrots', price: 60, unit: 'kg', image: 'carrot.jpg' },
        { name: 'Bananas', price: 50, unit: 'dozen', image: 'banana.jpg' },
        { name: 'Mangoes', price: 150, unit: 'kg', image: 'mango.jpg' },
        { name: 'Spinach', price: 20, unit: 'bunch', image: 'spinach.jpg' },

        
        { name: 'Garlic', price: 30, unit: '100g', image: 'garlic.jpg' },
        { name: 'Ginger', price: 25, unit: '100g', image: 'ginger.jpg' },
        { name: 'Cauliflower', price: 40, unit: 'piece', image: 'cauliflower.jpg' },
        { name: 'Cabbage', price: 35, unit: 'piece', image: 'cabbage.jpg' },
        { name: 'Bell Peppers', price: 80, unit: 'kg', image: 'bell_pepper.jpg' },
        { name: 'Grapes', price: 100, unit: 'kg', image: 'grapes.jpg' },
        { name: 'Oranges', price: 90, unit: 'kg', image: 'orange.jpg' },
        { name: 'Lemons', price: 5, unit: 'piece', image: 'lemon.jpg' },
        { name: 'Cucumber', price: 40, unit: 'kg', image: 'cucumber.jpg' },
        { name: 'Brinjal ', price: 50, unit: 'kg', image: 'brinjal.jpg' },
        { name: 'Okra (Lady\'s Finger)', price: 55, unit: 'kg', image: 'okra.jpg' },
        { name: 'Pomegranate', price: 180, unit: 'kg', image: 'pomegranate.jpg' },
        { name: 'Watermelon', price: 60, unit: 'piece', image: 'watermelon.jpg' },
        { name: 'Guava', price: 70, unit: 'kg', image: 'guava.jpg' },
        { name: 'Green Peas', price: 120, unit: 'kg', image: 'peas.jpg' },
        { name: 'Coriander', price: 15, unit: 'bunch', image: 'coriander.jpg' },
        { name: 'Mint Leaves', price: 10, unit: 'bunch', image: 'mint.jpg' },
        { name: 'Green Chili', price: 15, unit: '100g', image: 'chili.jpg' },
        { name: 'Beetroot', price: 50, unit: 'kg', image: 'beetroot.jpg' },
        { name: 'Radish', price: 40, unit: 'kg', image: 'radish.jpg' },
        { name: 'Sweet Potato', price: 60, unit: 'kg', image: 'sweet_potato.jpg' },
        { name: 'Corn', price: 25, unit: 'piece', image: 'corn.jpg' },
        { name: 'Pineapple', price: 70, unit: 'piece', image: 'pineapple.jpg' },
        { name: 'Papaya', price: 50, unit: 'kg', image: 'papaya.jpg' },
        { name: 'Chickoo (Sapodilla)', price: 80, unit: 'kg', image: 'chickoo.jpg' },
        { name: 'Broccoli', price: 60, unit: 'piece', image: 'broccoli.jpg' },
        { name: 'Mushroom', price: 45, unit: 'packet', image: 'mushroom.jpg' },
        { name: 'Bottle Gourd', price: 40, unit: 'kg', image: 'bottle_gourd.jpg' },
        { name: 'Pumpkin', price: 30, unit: 'kg', image: 'pumpkin.jpg' },
        { name: 'Bitter Gourd', price: 60, unit: 'kg', image: 'bitter_gourd.jpg' },
        { name: 'Drumstick', price: 10, unit: 'piece', image: 'drumstick.jpg' },
        { name: 'Jackfruit', price: 100, unit: 'kg', image: 'jackfruit.jpg' },
        { name: 'Turnip', price: 50, unit: 'kg', image: 'turnip.jpg' },
        { name: 'Fenugreek (Methi)', price: 20, unit: 'bunch', image: 'fenugreek.jpg' },
        { name: 'Spring Onion', price: 25, unit: 'bunch', image: 'spring_onion.jpg' },
        { name: 'Coconut', price: 30, unit: 'piece', image: 'coconut.jpg' }
    ];


    // --- Dynamic Content Generation ---
    const moduleGrid = document.getElementById('module-grid');
    if (moduleGrid) {
        moduleGrid.innerHTML = modules.map(module => `
            <div class="col-md-6 col-lg-4 mx-auto d-flex">
                <div class="card module-card flex-fill ${module.colorClass}" data-section="${module.section}">
                    <div class="card-body text-center p-4">
                        <div class="module-icon"><i class="fas ${module.icon}"></i></div>
                        <h3>${module.title}</h3>
                        <p>${module.description}</p>
                    </div>
                </div>
            </div>`).join('');
    }

    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        productGrid.innerHTML = products.map(product => {
            const imageUrl = STATIC_URL_BASE + product.image;
            return `
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card product-card h-100">
                        <img src="${imageUrl}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text"><strong>Price:</strong> ₹${product.price} / ${product.unit}</p>
                            <div class="mt-auto d-grid gap-2">
                                <button class="btn btn-secondary add-to-cart-btn" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                                <button class="btn btn-success buy-now-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }

    // --- Core Navigation & UI Logic ---
    const sections = document.querySelectorAll('.app-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const actionButtons = document.querySelectorAll('[data-section]');

    function showSection(sectionId) {
        sections.forEach(section => section.classList.toggle('d-none', section.id !== `${sectionId}-section`));
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === sectionId));
        window.scrollTo(0, 0);
    }
    window.showSection = showSection;

    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (button.dataset.section) showSection(button.dataset.section);
        });
    });

    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            showSection('agro-market');
        });
    }

    // --- Cart & Checkout Wizard Logic ---
    const cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Bootstrap Modal instances
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    const deliveryModal = new bootstrap.Modal(document.getElementById('deliveryModal'));
    const invoiceModal = new bootstrap.Modal(document.getElementById('invoiceModal'));
    const trackerModal = new bootstrap.Modal(document.getElementById('trackerModal'));

    let selectedPaymentMode = '';
    let customerDetails = {};

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price);
            cart.push({ name, price });
            updateCart();
        }
        if (e.target.classList.contains('buy-now-btn')) {
            // "Buy Now" triggers checkout instantly for that item
            const card = e.target.closest('.card-body');
            const name = card.querySelector('.card-title').textContent;
            const priceText = card.querySelector('.card-text').textContent;
            const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            cart.length = 0; // Clear cart for single item Buy Now
            cart.push({ name, price });
            updateCart();
            document.getElementById('qrContainer').classList.add('d-none');
            checkoutModal.show();
        }
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            cartModal.hide();
            document.getElementById('qrContainer').classList.add('d-none');
            checkoutModal.show();
        } else {
            alert('Your cart is empty.');
        }
    });

    // Payment Selection Controllers
    document.getElementById('payOnlineBtn').addEventListener('click', () => {
        selectedPaymentMode = 'Online Payment (GPay/UPI)';
        document.getElementById('qrContainer').classList.remove('d-none');
    });

    document.getElementById('payCodBtn').addEventListener('click', () => {
        selectedPaymentMode = 'Cash on Delivery (COD)';
        checkoutModal.hide();
        deliveryModal.show();
    });

    document.getElementById('qrPaidBtn').addEventListener('click', () => {
        checkoutModal.hide();
        deliveryModal.show();
    });

    // Address Form Submission and Invoice Generation
    document.getElementById('deliveryForm').addEventListener('submit', (e) => {
        e.preventDefault();
        customerDetails = {
            name: document.getElementById('deliveryName').value,
            phone: document.getElementById('deliveryPhone').value,
            whatsapp: document.getElementById('deliveryWhatsapp').value,
            address: document.getElementById('deliveryAddress').value,
            landmark: document.getElementById('deliveryLandmark').value
        };
        
        // Generate Invoice details
        document.getElementById('invoiceNo').textContent = '#INV-' + Math.floor(10000 + Math.random() * 90000);
        const today = new Date();
        document.getElementById('invoiceDate').textContent = today.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
        
        document.getElementById('billName').textContent = customerDetails.name;
        document.getElementById('billPhone').textContent = 'Phone: ' + customerDetails.phone;
        document.getElementById('billWhatsapp').textContent = 'WhatsApp: ' + customerDetails.whatsapp;
        document.getElementById('billAddress').textContent = customerDetails.address;
        document.getElementById('billLandmark').textContent = customerDetails.landmark;
        
        const paymentBadge = document.getElementById('billPaymentMode');
        paymentBadge.textContent = selectedPaymentMode;
        if (selectedPaymentMode.includes('COD')) {
            paymentBadge.className = 'badge bg-secondary';
        } else {
            paymentBadge.className = 'badge bg-success';
        }

        // Generate Item List
        const invoiceTableBody = document.getElementById('invoiceTableBody');
        invoiceTableBody.innerHTML = '';
        
        const itemCounts = {};
        cart.forEach(item => {
            if (!itemCounts[item.name]) {
                itemCounts[item.name] = { price: item.price, qty: 0 };
            }
            itemCounts[item.name].qty++;
        });
        
        let total = 0;
        for (const name in itemCounts) {
            const item = itemCounts[name];
            const subtotal = item.price * item.qty;
            total += subtotal;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td class="text-center">₹${item.price.toFixed(2)}</td>
                <td class="text-center">${item.qty}</td>
                <td class="text-end">₹${subtotal.toFixed(2)}</td>
            `;
            invoiceTableBody.appendChild(row);
        }
        
        document.getElementById('invoiceTotal').textContent = '₹' + total.toFixed(2);
        
        deliveryModal.hide();
        invoiceModal.show();
    });

    // Invoice Action Buttons (PDF & WhatsApp)
    document.getElementById('downloadPdfBtn').addEventListener('click', () => {
        const element = document.getElementById('invoiceContent');
        const invoiceNo = document.getElementById('invoiceNo').textContent;
        const opt = {
            margin:       0.5,
            filename:     `invoice_${invoiceNo}.pdf`,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });

    document.getElementById('shareWhatsappBtn').addEventListener('click', () => {
        let message = `*AGRO E-MARKET ORDER CONFIRMATION*\n`;
        message += `Invoice: ${document.getElementById('invoiceNo').textContent}\n`;
        message += `Total Amount: ${document.getElementById('invoiceTotal').textContent}\n`;
        message += `Payment Mode: ${selectedPaymentMode}\n\n`;
        message += `*Delivery Details:*\n`;
        message += `Name: ${customerDetails.name}\n`;
        message += `Address: ${customerDetails.address}\n`;
        message += `Landmark: ${customerDetails.landmark}\n\n`;
        message += `Thank you for shopping with us!`;
        
        const whatsappUrl = `https://api.whatsapp.com/send?phone=91${customerDetails.whatsapp}&text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Transition from Invoice to Delivery Tracker
    document.getElementById('closeInvoiceBtn').addEventListener('click', () => {
        invoiceModal.hide();
        
        // Populate Tracker
        const estDate = new Date();
        estDate.setDate(estDate.getDate() + 3);
        document.getElementById('trackEstDate').textContent = estDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
        
        document.getElementById('trackName').textContent = customerDetails.name;
        document.getElementById('trackAddress').textContent = `${customerDetails.address} (Landmark: ${customerDetails.landmark})`;
        
        trackerModal.show();
    });

    // Close Tracker & Complete Process (Clear Cart, Navigate to Shop Grid)
    const handleTrackerClose = () => {
        trackerModal.hide();
        cart.length = 0;
        updateCart();
        showSection('agro-market');
    };

    document.getElementById('closeTrackerBtn').addEventListener('click', handleTrackerClose);
    document.getElementById('closeTrackerIconBtn').addEventListener('click', handleTrackerClose);

    function updateCart() {
        cartCount.textContent = cart.length;
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            let total = 0;
            cartItemsContainer.innerHTML = `<ul class="list-group">${cart.map(item => {
                total += item.price;
                return `<li class="list-group-item d-flex justify-content-between"><span>${item.name}</span><span>₹${item.price.toFixed(2)}</span></li>`;
            }).join('')}<li class="list-group-item d-flex justify-content-between active"><strong>Total</strong><strong>₹${total.toFixed(2)}</strong></li></ul>`;
        }
    }
});
