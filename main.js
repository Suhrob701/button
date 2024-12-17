let Sum = 0;

// buttons o'zgaruvchisi uchun barcha tugmalarni tanlab oling
const buttons = document.querySelectorAll('.card-btn');

buttons.forEach(button => {
    button.onclick = function () { 
        let count = prompt("Nechta zakaz qilmoqchisiz?");
        count = parseInt(count);

        switch (true) {
            case (isNaN(count) || count <= 0):
                alert("Iltimos, to'g'ri son kiriting!");
                break;

            default:
                const priceText = button.parentElement.querySelector('.card-price').textContent;
                const price = parseInt(priceText.replace(/\D/g, '')); // narxni olish

                const total = price * count;

                const isConfirmed = confirm(`${count} ta Qiyqiriq jami narxi ${total} so'm\nMaxsulotni zakaz qilasizmi?`);

                switch (isConfirmed) {
                    case true:
                        Sum = Sum + total;
                        alert(`Zakaz qabul qilindi! \nUmumiy hisob: ${Sum} so'm`);
                        break;

                    case false:
                        alert("Zakaz bekor qilindi!");
                        break;

                    default:
                        alert("Noma'lum xatolik!");
                        break;
                }
        }
    };
});
