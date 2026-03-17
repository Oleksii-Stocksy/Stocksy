function handleContactClick() {
    const nameInput = document.getElementById('user-name');
    const menu = document.getElementById('contact-options');
    const greeting = document.getElementById('greeting');

    if (!nameInput?.value.trim()) {
        alert("Будь ласка, введіть ім'я");
        return;
    }

    // Защищаем от вставки лишних пробелов
    greeting.textContent = `Вітаю, ${nameInput.value.trim()}! Куди прямуємо?`;
    menu.classList.add('active');
}

const customSelect = document.getElementById('custom-select');
const trigger = customSelect?.querySelector('.select-trigger');
const options = customSelect?.querySelectorAll('.option');
const hiddenInput = document.getElementById('contact-select-value');

if (customSelect && trigger) {
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        customSelect.classList.toggle('open');
    });

    options.forEach(opt => {
        opt.addEventListener('click', () => {
            trigger.textContent = opt.textContent;
            hiddenInput.value = opt.getAttribute('data-value');
            customSelect.classList.remove('open');
        });
    });
}

// Закрытие селекта по клику вне его (вынесено для надежности)
document.addEventListener('click', () => customSelect?.classList.remove('open'));

function goToLink() {
    const url = hiddenInput?.value;
    if (!url) {
        alert("Будь ласка, спочатку оберіть варіант зі списку!");
        return;
    }

    // Хирургическое решение проблемы пустой вкладки (как на скриншоте)
    if (url.startsWith('mailto:')) {
        window.location.href = url; // Откроет почту без новой вкладки
    } else {
        window.open(url, '_blank'); // Для Instagram/Telegram/Facebook
    }
}