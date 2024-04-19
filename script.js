const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.modal-close');
const modalContainer = document.querySelector('.js-modal-container');

// Hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets(){
    modal.classList.add('open');
}

// Hiển ẩn modal mua vé (gỡ class open vào modal)
function hideBuyTickets(){
    modal.classList.remove('open');
}

// Lặp qua từng thẻ button và nghe hành vi click
for(const buyBtn of buyBtns){
    buyBtn.addEventListener("click", showBuyTickets)
}

// Nghe hàm vi click vào button close
modalClose.addEventListener('click', hideBuyTickets)

modal.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', () => {
    event.stopPropagation();
})



// Hiển thị bật tắt menu header
const header = document.querySelector('#header');
const mobileMenu = document.querySelector('#mobile-menu');
const headerHeight = header.clientHeight

// Đóng và mở mobile menu
mobileMenu.onclick = () => {
    const isOpen = header.clientHeight === headerHeight;

    if (isOpen) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// Tự động đóng khi chọn menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (let index = 0; index < menuItems.length; index++) {
    const menuItem = menuItems[index];
    menuItem.onclick = function (event) {
        const isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
            event.preventDefault();
        }else{
            header.style.height = null;
        }
    }
}