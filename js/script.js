const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click", () => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass() {
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', inverted);
}

function toggleLocalStorage() {
    if (isLight()) {
        localStorage.removeItem("light");
    } else {
        localStorage.setItem("light", "set");
    }
}

function isLight() {
    return localStorage.getItem("light");
}

if (isLight()) {
    toggleRootClass();
}

// format Tiền
const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};


// format ngày
const formatDay = (day) => {
    const newDay = new Date(day)
    return `${newDay.getDate()}-${newDay.getMonth() + 1}-${newDay.getFullYear()}`
}
