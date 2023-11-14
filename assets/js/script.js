function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');

    if (sidebar.style.left === '-100%') {
        sidebar.style.left = '0';
        main.style.marginLeft = '100%';
    } else {
        sidebar.style.left = '-100%';
        main.style.marginLeft = '0';
    }
}