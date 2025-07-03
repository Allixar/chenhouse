document.addEventListener('DOMContentLoaded', () => {
 // --- DATA ---
    const menuData = {
        "Appetizers 前菜": [
            { name: "Jiaozi 饺子", description: "Pork and vegetable dumplings.", price: 6.00, img: "https://www.carolinescooking.com/wp-content/uploads/2022/03/vegetable-dumplings-jiaozi-featured-pic-sq.jpg" },
            { name: "Spring Rolls 春卷", description: "Crispy rolls with vegetables.", price: 5.00, img: "https://redhousespice.com/wp-content/uploads/2021/12/whole-spring-rolls-and-halved-ones-scaled.jpg" },
            { name: "Baozi 包子", description: "Steamed buns with savory pork.", price: 4.50, img: "https://thewoksoflife.com/wp-content/uploads/2019/06/pork-baozi-11.jpg" },
            { name: "Boiled Eggs 煮鸡蛋 ", description: "A clean high-protein option.", price: 4.50, img: "https://afoodcentriclife.com/wp-content/uploads/2018/06/hard-boiled-eggs-37.jpg" },
            { name: "Oyster Cookies 蚵仔煎 ", description: "Deep-fried cookies made of oyster batter.", price: 4.50, img: "https://whattocooktoday.com/wp-content/uploads/2021/06/fuzhou-oyster-cake-16-500x500.jpg" },
        ],
        "Main Entrees 主菜": [
            { name: "Beef and Broccoli 芥蓝牛肉", description: "Stir-fried beef with tender broccoli.", price: 12.00, img: "https://christieathome.com/wp-content/uploads/2020/09/Chinese-Beef-and-Broccoli-9.jpg" },
            { name: "General Tso's Chicken 左宗梦鸡", description: "Crispy chicken in a tangy sauce.", price: 11.50, img: "https://www.recipetineats.com/tachyon/2020/10/General-Tsao-Chicken_1-SQ.jpg?resize=500%2C500" },
            { name: "Orange Chicken 橙香鸡", description: "Battered chicken in orange sauce.", price: 11.00, img: "https://thenoshery.com/wp-content/uploads/2017/05/Orange-Chicken-9.jpg" },
            { name: "Szechuan Pork 四川辣肉", description: "Spicy Szechuan-style stir-fried pork.", price: 13.00, img: "https://www.grandpajoesitaliankitchen.com/uploads/4/7/3/4/4734633/9692919_orig.jpg" },
            { name: "Roasted Duck 烤鸭", description: "Duck roasted with a crispy skin.", price: 13.00, img: "https://omnivorescookbook.com/wp-content/uploads/2025/01/250114_Chinese-Roast-Duck_4.jpg" },
        ],
         "Soups 汤品": [
            { name: "Wonton Soup 馄饨汤", description: "Light broth with shrimp and pork wontons.", price: 8.00, img: "https://iamhomesteader.com/wp-content/uploads/2022/03/wonton-soup-1-500x375.jpg" },
            { name: "Hot and Sour Soup 酸辣汤", description: "Spicy soup with mushrooms and tofu.", price: 7.50, img: "https://www.recipetineats.com/tachyon/2019/02/Hot-and-Sour-Soup_1_6.jpg" },
            { name: "Clam Soup 蛤蜊汤", description: "Savory light soup with clam shells.", price: 8.50, img: "https://charinthekitchen.com/wp-content/uploads/2019/03/img_20190328_134316_214.jpg?w=1268&h=1050&crop=1" },
        ],
        "Boba Tea Drinks 玻璃茶饮料": [
             { name: "Classic Milk Tea 原味奶茶", description: "Traditional black milk tea with boba.", price: 5.50, img: "https://assets.epicurious.com/photos/5953ca064919e41593325d97/1:1/w_3744,h_3744,c_limit/bubble_tea_recipe_062817.jpg" },
             { name: "Taro Milk Tea 芋头奶茶", description: "Creamy taro-flavored milk tea with boba.", price: 6.00, img: "https://www.foodandwine.com/thmb/pYz-Ef6P46Tho4MJotrw-Aqok6U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taro-bubble-tea-XL-RECIPE0316-6a4d5b49afcd41ab8ea6b5ef5805858a.jpg" },
             { name: "Strawberry Milk Tea 草莓奶茶", description: "Creamy strawberry-flavored milk tea with boba.", price: 6.00, img: "https://greenheartlove.com/wp-content/uploads/2023/12/strawberry-boba-6.jpg" },
        ]
    };
    
    const comboData = {
        "Main Entree": ["Beef and Broccoli", "General Tso's Chicken", "Orange Chicken", "Szechuan Pork", "Roasted Duck"],
        "Appetizer": ["Spring Rolls", "Boiled Eggs", "Jiao Zi", "Baozi", "Oyster Cookies"],
        "Side Dish": ["Meat Fried Rice", "Vegetable Fried Rice", "Meat Fried Noodles", "Vegetable Fried Noodles", "Steamed Rice"]
    };

    const reviews = [
        { author: "— Savannah D.", text: "Absolutely the best Chinese food in Tampa! My Boyfriend and I love Jiaozi so much!" },
        { author: "— Hannah D.", text: "Incredible flavor and great service. The Szechuan Pork has the perfect amount of spice." },
        { author: "— Nicole C.", text: "I order from Chen's House every Friday. Consistent, delicious, and always fresh. The combo is a great deal!" },
        { author: "— Ally S.", text: "Chen's House customer service is top notch. The owner Allen always throws in extra cookies on top of order" },
        { author: "— Miguel L.", text: "Allen puts in crazy amount of work on cooking the best food in town!" }, 
        { author: "— Sarah E.", text: "The strawberry boba is so creamy and sweet!" }
    ];

    let order = [];
    let comboSelection = { "Main Entree": null, "Appetizer": null, "Side Dish": null };

    // --- DOM ELEMENTS ---
    const menuContainer = document.getElementById('menu-categories');
    const comboContainer = document.getElementById('combo-options');
    const orderItemsContainer = document.getElementById('order-items');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    const clearOrderBtn = document.getElementById('clear-order');
    const reviewSlider = document.getElementById('review-slider');

    // --- RENDER FUNCTIONS ---
    
    // Render Menu
    const renderMenu = () => {
        menuContainer.innerHTML = '';
        for (const category in menuData) {
            const categorySection = document.createElement('div');
            categorySection.innerHTML = `<h3 class="text-2xl font-bold mt-8 mb-4">${category}</h3>`;
            const grid = document.createElement('div');
            grid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
            
            menuData[category].forEach(item => {
                const itemEl = document.createElement('div');
                itemEl.className = 'bg-white rounded-lg shadow-md overflow-hidden flex flex-col';
                itemEl.innerHTML = `
                    <img src="${item.img}" alt="${item.name}" class="w-full h-40 object-cover">
                    <div class="p-4 flex flex-col flex-grow">
                        <h4 class="text-xl font-semibold text-amber-800">${item.name}</h4>
                        <p class="text-gray-600 mt-1 flex-grow">${item.description}</p>
                        <div class="flex justify-between items-center mt-4">
                            <span class="font-bold text-lg text-gray-800">$${item.price.toFixed(2)}</span>
                            <button data-name="${item.name}" data-price="${item.price}" class="add-to-order-btn bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors">Add</button>
                        </div>
                    </div>
                `;
                grid.appendChild(itemEl);
            });
            categorySection.appendChild(grid);
            menuContainer.appendChild(categorySection);
        }
    };

    // Render Combo Builder
    const renderComboBuilder = () => {
        comboContainer.innerHTML = '';
        for (const category in comboData) {
            const column = document.createElement('div');
            column.innerHTML = `<h4 class="text-xl font-semibold mb-3 text-center">${category}</h4>`;
            const list = document.createElement('ul');
            list.className = 'space-y-2';
            comboData[category].forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                li.dataset.category = category;
                li.dataset.item = item;
                li.className = 'combo-item cursor-pointer p-3 bg-white rounded-md border-2 border-gray-200 text-center transition-all duration-200';
                list.appendChild(li);
            });
            column.appendChild(list);
            comboContainer.appendChild(column);
        }
    };

    // Render Order
    const renderOrder = () => {
        if (order.length === 0) {
            orderItemsContainer.innerHTML = '<p class="text-gray-500">Your cart is empty. Add items from the menu!</p>';
        } else {
            orderItemsContainer.innerHTML = '';
            order.forEach((item, index) => {
                const itemEl = document.createElement('div');
                itemEl.className = 'flex justify-between items-center mb-2';
                itemEl.innerHTML = `
                    <div>
                        <p class="font-semibold">${item.name}</p>
                        <p class="text-sm text-gray-500">${item.isCombo ? 'Combo Deal' : ''}</p>
                    </div>
                    <div class="flex items-center">
                        <span class="font-bold mr-3">$${item.price.toFixed(2)}</span>
                        <button data-index="${index}" class="remove-item-btn text-red-500 hover:text-red-700">&times;</button>
                    </div>
                `;
                orderItemsContainer.appendChild(itemEl);
            });
        }
        updateTotals();
    };

     const addToOrder = (item) => {
        order.push(item);
        renderOrder();
    
        // Ring the cart icon here
        const cartIcon = document.getElementById('cart-icon');
        cartIcon.classList.add('animate-bounce');
        setTimeout(() => {
            cartIcon.classList.remove('animate-bounce');
        }, 500);
    };

    // Update Totals
    const updateTotals = () => {
        const subtotal = order.reduce((sum, item) => sum + item.price, 0);
        const tax = subtotal * 0.06;
        const total = subtotal + tax;
        subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        taxEl.textContent = `$${tax.toFixed(2)}`;
        totalEl.textContent = `$${total.toFixed(2)}`;
    };

    // Render Reviews
    let currentReviewIndex = 0;
    const renderReviews = () => {
        reviewSlider.innerHTML = '';
        reviews.forEach((review, index) => {
            const slide = document.createElement('div');
            // Use hidden class to control visibility, preventing overlap
            slide.className = `review-slide text-center p-4 ${index === 0 ? '' : 'hidden'}`;
            slide.innerHTML = `
                <p class="text-lg italic text-gray-700">"${review.text}"</p>
                <p class="font-semibold mt-2 text-amber-700">${review.author}</p>
            `;
            reviewSlider.appendChild(slide);
        });
    };
    
    const cycleReviews = () => {
        const slides = reviewSlider.querySelectorAll('.review-slide');
        if (slides.length === 0) return;
        
        // Hide the current slide
        slides[currentReviewIndex].classList.add('hidden');
        
        // Move to the next index
        currentReviewIndex = (currentReviewIndex + 1) % slides.length;
        
        // Show the new slide
        slides[currentReviewIndex].classList.remove('hidden');
    };

    // --- EVENT HANDLERS ---
    
    // Add to Order
    menuContainer.addEventListener('click', e => {
        if (e.target.classList.contains('add-to-order-btn')) {
            const name = e.target.dataset.name;
            const price = parseFloat(e.target.dataset.price);
            order.push({ name, price, isCombo: false });
            renderOrder();
        }
    });

    // Handle Combo Selection
    comboContainer.addEventListener('click', e => {
        if (e.target.classList.contains('combo-item')) {
            const { category, item } = e.target.dataset;
            
            // Deselect previous in the same category
            const previousSelected = comboContainer.querySelector(`.combo-item.selected[data-category="${category}"]`);
            if (previousSelected) {
                previousSelected.classList.remove('selected');
            }
            
            // Select new item
            e.target.classList.add('selected');
            comboSelection[category] = item;
            
            // Check if combo is complete
            if (Object.values(comboSelection).every(val => val !== null)) {
                // Remove previous combo from order if it exists
                const existingComboIndex = order.findIndex(o => o.isCombo);
                if (existingComboIndex > -1) {
                    order.splice(existingComboIndex, 1);
                }
                
                // Add new combo
                const comboName = `Combo: ${comboSelection['Main Entree']}, ${comboSelection['Appetizer']}, ${comboSelection['Side Dish']}`;
                order.push({ name: comboName, price: 12.00, isCombo: true });
                renderOrder();
            }
        }
    });

    // Remove from Order
    orderItemsContainer.addEventListener('click', e => {
        if (e.target.classList.contains('remove-item-btn')) {
            const index = parseInt(e.target.dataset.index);
            const removedItem = order[index];
            
            // If removing a combo, also clear selections
            if (removedItem.isCombo) {
                comboSelection = { "Main Entree": null, "Appetizer": null, "Side Dish": null };
                comboContainer.querySelectorAll('.combo-item.selected').forEach(el => el.classList.remove('selected'));
            }
            
            order.splice(index, 1);
            renderOrder();
        }
    });

    // Clear Order
    clearOrderBtn.addEventListener('click', () => {
        order = [];
        comboSelection = { "Main Entree": null, "Appetizer": null, "Side Dish": null };
        comboContainer.querySelectorAll('.combo-item.selected').forEach(el => el.classList.remove('selected'));
        renderOrder();
    });
    const placeOrderBtn = document.getElementById('place-order');

    // Place Order
    placeOrderBtn.addEventListener('click', () => {
        if (order.length === 0) {
            alert('Your cart is empty. Please add items before placing an order.');
            return;
        }

        sessionStorage.setItem('customerOrder', JSON.stringify(order));
        window.location.href = 'confirmation.html';
    });

    // --- INITIALIZATION ---
    renderMenu();
    renderComboBuilder();
    renderOrder();
    renderReviews();
    setInterval(cycleReviews, 5000); // Cycle reviews every 5 seconds
});


