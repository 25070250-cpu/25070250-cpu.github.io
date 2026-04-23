// Đợi HTML tải xong hoàn toàn mới chạy JS (Best practice)
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. TÍNH NĂNG DARK MODE (Kết hợp localStorage)
       ========================================================= */
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Kiểm tra xem người dùng đã từng chọn Dark Mode trước đó chưa
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️ Giao diện Sáng';
    }

    // Lắng nghe sự kiện click
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggleBtn.textContent = '☀️ Giao diện Sáng';
        } else {
            themeToggleBtn.textContent = '🌙 Giao diện Tối';
        }
        
        // Lưu lựa chọn vào trình duyệt
        localStorage.setItem('theme', theme);
    });

    /* =========================================================
       2. NÚT LÊN ĐẦU TRANG (Lắng nghe sự kiện Scroll)
       ========================================================= */
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Nếu cuộn xuống quá 300px thì hiện nút, ngược lại thì ẩn
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        // Cuộn mượt mà lên đầu trang
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* =========================================================
       3. BẮT LỖI FORM TÌM KIẾM (DOM Manipulation cơ bản)
       ========================================================= */
    const searchBtn = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn trình duyệt load lại trang khi bấm submit
        
        const keyword = searchInput.value.trim();
        if (keyword === '') {
            alert('Lỗi: Vui lòng nhập từ khóa trước khi tìm kiếm!');
            searchInput.focus(); // Đưa con trỏ chuột quay lại ô nhập
        } else {
            alert(`Tính năng đang phát triển. Bạn vừa tìm: "${keyword}"`);
            searchInput.value = ''; // Xoá trắng ô nhập
        }
    });
});