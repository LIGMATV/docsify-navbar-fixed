// Mengambil semua elemen dengan kelas 'app-nav'
const appNavs = document.querySelectorAll('.app-nav');

// Loop melalui setiap elemen 'app-nav'
appNavs.forEach(nav => {
    // Periksa apakah elemen nav atau salah satu parentnya berada di dalam elemen dengan kelas 'content'
    if (nav.closest('.content')) {
        nav.style.backgroundColor = 'var(--theme-color, #42b983)';
        nav.style.color = '#ffffff';
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.13) 0px 3px 6px';
    } else {
        nav.style.backgroundColor = '#00000000';
        nav.style.color = '#000000';
        nav.style.boxShadow = 'none';
    }
});
