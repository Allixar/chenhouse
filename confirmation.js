document.addEventListener('DOMContentLoaded', () => {
    const orderDetailsContainer = document.getElementById('confirmation-details');
    const savedOrder = sessionStorage.getItem('customerOrder');

    if (savedOrder) {
        const order = JSON.parse(savedOrder);
        let orderHtml = '<div class="space-y-2">';
        let subtotal = 0;

        order.forEach(item => {
            orderHtml += `
                <div class="flex justify-between">
                    <span>${item.name}</span>
                    <span class="font-semibold">$${item.price.toFixed(2)}</span>
                </div>
            `;
            subtotal += item.price;
        });

        const tax = subtotal * 0.06;
        const total = subtotal + tax;

        orderHtml += '</div>';
        orderHtml += `
            <div class="border-t mt-4 pt-4 space-y-2">
                <div class="flex justify-between">
                    <span>Subtotal</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="flex justify-between">
                    <span>Tax (6%)</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <div class="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            </div>
        `;

        orderDetailsContainer.innerHTML = orderHtml;
    } else {
        orderDetailsContainer.innerHTML = '<p class="text-center text-gray-500">No order details found.</p>';
    }
});
