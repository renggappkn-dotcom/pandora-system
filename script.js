/**
 * PANDORA SYSTEM CORE CONFIGURATION
 * ---------------------------------
 * File ini mengatur link aplikasi dan data blog.
 * Silakan ganti URL di bawah ini dengan URL Web App (GAS) Anda setelah deploy.
 */

const PANDORA_APPS = [
    {
        id: 'app-01',
        title: 'Database Mahasiswa',
        desc: 'Kelola data induk mahasiswa, NIM, dan status aktif.',
        icon: 'fa-users',
        folder: '1-DatabaseMahasiswa',
        // ARAHKAN KE GATEKEEPER LOGIN DENGAN PARAMETER TARGET
        url: 'https://script.google.com/macros/s/AKfycbxd9VnKw7ZggCXLFg-KNet6lWV_dHuGbFpvTz7w28lYp5f0BZubETctAEtVCW_5yUNt/exec?target=app-01'
    },
    {
        id: 'app-02',
        title: 'Database Dosen',
        desc: 'Data profil dosen, NIDN, kepangkatan dan jabatan.',
        icon: 'fa-chalkboard-user',
        folder: '2-DatabaseDosen',
        // ARAHKAN KE GATEKEEPER LOGIN DENGAN PARAMETER TARGET
        url: 'https://script.google.com/macros/s/AKfycbxd9VnKw7ZggCXLFg-KNet6lWV_dHuGbFpvTz7w28lYp5f0BZubETctAEtVCW_5yUNt/exec?target=app-02'
    },
    {
        id: 'app-03',
        title: 'Database Prestasi',
        desc: 'Rekapitulasi pencapaian dan prestasi akademik/non-akademik.',
        icon: 'fa-trophy',
        folder: '3-DatabasePrestasi',
        url: 'https://script.google.com/macros/s/AKfycbw98KyVmoH2ZK4cNVbxxgjmkLbDNl3-8fzMK583t30CdCbSg8VNweiMNjedeQa-X0OH/exec'
    },
    {
        id: 'app-04',
        title: 'Database Kurikulum',
        desc: 'Manajemen mata kuliah, SKS, dan sebaran semester.',
        icon: 'fa-book-open',
        folder: '4-DatabaseKurikulum',
        // ARAHKAN KE GATEKEEPER LOGIN DENGAN PARAMETER TARGET
        url: 'https://script.google.com/macros/s/AKfycbxd9VnKw7ZggCXLFg-KNet6lWV_dHuGbFpvTz7w28lYp5f0BZubETctAEtVCW_5yUNt/exec?target=app-04'
    },
    {
        id: 'app-05',
        title: 'Jadwal Kuliah',
        desc: 'Plotting jadwal, ruang kelas, dan dosen pengampu.',
        icon: 'fa-calendar-days',
        folder: '5-JadwalKuliah',
        // ARAHKAN KE GATEKEEPER LOGIN DENGAN PARAMETER TARGET
        url: 'https://script.google.com/macros/s/AKfycbxd9VnKw7ZggCXLFg-KNet6lWV_dHuGbFpvTz7w28lYp5f0BZubETctAEtVCW_5yUNt/exec?target=app-05'
    }
    // CONTOH CARA NAMBAH MENU BARU (Folder 6):
    // {
    //     id: 'app-06',
    //     title: 'KRS Online',
    //     desc: 'Kartu Rencana Studi Mahasiswa',
    //     icon: 'fa-file-signature',
    //     url: 'https://script.google.com/...' 
    // }
];

const BLOG_POSTS = [
    {
        title: 'Selamat Datang di PANDORA',
        date: '20 Desember 2025',
        excerpt: 'Sistem terintegrasi baru untuk manajemen kampus yang lebih efisien.',
        image: 'https://placehold.co/600x400/1e293b/6366f1?text=Welcome+PANDORA'
    },
    {
        title: 'Fitur Jadwal Kuliah Siap Digunakan',
        date: '19 Desember 2025',
        excerpt: 'Sekarang Anda bisa mencetak jadwal kuliah format Legal secara otomatis.',
        image: 'https://placehold.co/600x400/1e293b/ec4899?text=Update+Jadwal'
    }
];

// --- CORE SYSTEM LOGIC (DO NOT EDIT BELOW UNLESS ADVANCED) ---

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderApps();
    renderBlog();
    initNavbarEffect();

    // Setup Theme Toggle Listener
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});

// --- THEME LOGIC ---
function initTheme() {
    const savedTheme = localStorage.getItem('pandora-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('pandora-theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'light') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

function renderApps() {
    const grid = document.getElementById('app-grid');
    grid.innerHTML = ''; // Clear placeholder link

    PANDORA_APPS.forEach(app => {
        const card = document.createElement('a');
        card.href = app.url;
        // Buka di tab baru jika link valid, jika '#' alert user
        if (app.url === '#') {
            card.onclick = (e) => {
                e.preventDefault();
                alert(`Aplikasi "${app.title}" belum dikonfigurasi. \nSilakan edit file script.js dan masukkan URL Web App.`);
            };
        } else {
            card.target = '_blank'; // Hybrid Mode: Open app in new tab acting as "portal"
        }

        card.className = 'glass-panel module-card';
        card.innerHTML = `
            <div class="module-icon">
                <i class="fa-solid ${app.icon}"></i>
            </div>
            <h3 class="module-title">${app.title}</h3>
            <p class="module-desc">${app.desc}</p>
            <div style="margin-top:auto; font-size:0.8rem; color:var(--primary);">
                Buka Aplikasi <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.7em;"></i>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderBlog() {
    const grid = document.getElementById('blog-grid');
    grid.innerHTML = '';

    BLOG_POSTS.forEach(post => {
        const article = document.createElement('article');
        article.className = 'glass-panel blog-card';
        article.innerHTML = `
            <div class="blog-image" style="background-image: url('${post.image}');"></div>
            <div class="blog-content">
                <span class="blog-date">${post.date}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Baca Selengkapnya →</a>
            </div>
        `;
        grid.appendChild(article);
    });
}

function initNavbarEffect() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}
