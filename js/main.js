
function formatCurrency(value) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(value);
}


function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function addToCart(productId) {
    const allProducts = JSON.parse(localStorage.getItem('db_products'));
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    let cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
}

function updateCartBadge() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

// User 
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Header Footer 
function renderHeader() {
    const user = getCurrentUser();
    const headerHTML = `
        <header class="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div class="container mx-auto px-4">
                <div class="flex h-16 items-center justify-between">
                    <a href="index.html" class="flex items-center space-x-2">
                        <span class="text-2xl font-bold tracking-tighter text-blue-600">Minh Laptop</span>
                    </a>
                    <nav class="hidden md:flex items-center space-x-8">
                       <a href="index.html" class="text-sm font-medium hover:text-blue-600">Trang chủ</a>
                        <a href="products.html" class="text-sm font-medium hover:text-blue-600">Sản phẩm</a>
                        <a href="contact.html" class="text-sm font-medium hover:text-blue-600">Liên hệ</a>
                    </nav>
                    <div class="flex items-center space-x-4">
                        <a href="cart.html" class="relative p-2 hover:bg-gray-100 rounded-full">
                            <span id="cart-badge" class="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white" style="display: none;">0</span>
                        </a>
                        ${user ? `
                            <div class="flex items-center space-x-4">
                                <a href="${user.role === 'admin' ? 'admin.html' : 'orders.html'}" class="text-sm font-medium hover:text-blue-600">${user.name}</a>
                                <button onclick="logout()" class="text-red-500 hover:bg-red-50 p-2 rounded-full">
                                </button>
                            </div>
                        ` : `
                            <a href="auth.html" class="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700">Đăng nhập</a>
                        `}
                    </div>
                </div>
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    updateCartBadge();
}

function renderFooter() {
    const footerHTML = `
        <footer class="bg-gray-900 text-gray-300 py-12 mt-16">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="space-y-4">
                        <h3 class="text-2xl font-bold text-white tracking-tighter">Minh Laptop</h3>
                        <p class="text-sm leading-relaxed">Cửa hàng Minh Laptop uy tín hàng đầu Việt Nam. Chuyên cung cấp các dòng laptop chính hãng.</p>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Chính sách</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:text-white">Bảo hành</a></li>
                            <li><a href="#" class="hover:text-white">Đổi trả</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Hỗ trợ</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="#" class="hover:text-white">Mua hàng</a></li>
                            <li><a href="#" class="hover:text-white">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-white font-semibold mb-4">Liên hệ</h4>
                        <p class="text-sm">1 Đường DT743, Phường Dĩ An, TP. HCM</p>
                        <p class="text-sm">Hotline: 1900 9999</p>
                    </div>
                </div>
                <div class="mt-12 pt-8 border-t border-gray-800 text-center text-xs">
                <p> Đề tài thi cuối môn Thiết Kế Web - Lớp 24TTH02 </p>
                <p> Giáo Viên : Cô Thùy Linh </p>
                <p> Học Viên : Hứa Thế Minh </p>
                <p> Trường Trung Cấp Công Nghiệp Bình Dương </p>
                <p>© 2026 Minh Laptop. Tất cả bản quyền đã được đăng ký.</p>
                </div>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}


document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
});
