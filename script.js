function handleContactClick() {
    const nameInput = document.getElementById('user-name');
    const menu = document.getElementById('contact-options');
    const greeting = document.getElementById('greeting');
    const rawName = nameInput?.value.trim() || "";
    if (rawName.length < 2) {
        alert("Будь ласка, введіть коректне ім'я (мінімум 2 символи)");
        return;
    }
    const safeName = rawName.replace(/<\/?[^>]+(>|$)/g, "");
    const displayName = safeName.length > 25 ? safeName.substring(0, 25) + "..." : safeName;
    greeting.textContent = `Вітаю, ${displayName}! Куди прямуємо?`;
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

document.addEventListener('click', () => customSelect?.classList.remove('open'));

function goToLink() {
    const url = hiddenInput?.value;
    if (!url) {
        alert("Будь ласка, спочатку оберіть варіант зі списку!");
        return;
    }
    if (url.startsWith('mailto:')) {
        window.location.href = url;
    } else {
        window.open(url, '_blank');
    }
}