/* PANDORA AdminLTE Dashboard Design System */
:root {
    /* Premium Color Palette */
    --bg-dark: #222d32;
    --bg-sidebar: #222d32;
    --bg-content: #ecf0f5;
    --bg-header: #3c8dbc;
    --bg-card: rgba(255, 255, 255, 0.95);
    
    --primary: #3c8dbc;
    --primary-glow: rgba(60, 141, 188, 0.6);
    --secondary: #00a65a;
    --accent: #f39c12;
    --danger: #dd4b39;
    --info: #00c0ef;
    
    --text-main: #333333;
    --text-light: #ffffff;
    --text-muted: #777777;
    --text-sidebar: #b8c7ce;

    /* Glassmorphism Configuration */
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --glass-blur: 12px;

    /* Transitions */
    --transition-fast: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    scroll-behavior: smooth;
}

/* Dark Theme Variables */
[data-theme="dark"] {
    --bg-dark: #1a2226;
    --bg-sidebar: #1a2226;
    --bg-content: #2c3b41;
    --bg-header: #1a252f;
    --bg-card: rgba(42, 55, 63, 0.95);
    
    --primary: #00a8ff;
    --text-main: #ecf0f5;
    --text-muted: #b8c7ce;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', 'Source Sans Pro', system-ui, -apple-system, sans-serif;
}

body {
    background-color: var(--bg-content);
    color: var(--text-main);
    overflow-x: hidden;
    min-height: 100vh;
}

/* ========================================
   WRAPPER & LAYOUT
======================================== */
.wrapper {
    min-height: 100vh;
    position: relative;
}

.wrapper.sidebar-collapsed .main-sidebar {
    width: 50px;
}

.wrapper.sidebar-collapsed .main-sidebar .sidebar-menu span,
.wrapper.sidebar-collapsed .main-sidebar .user-panel,
.wrapper.sidebar-collapsed .main-sidebar .sidebar-header h3,
.wrapper.sidebar-collapsed .main-sidebar .menu-label {
    display: none;
}

.wrapper.sidebar-collapsed .content-wrapper {
    margin-left: 50px;
}

/* ========================================
   MAIN HEADER
======================================== */
.main-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: linear-gradient(135deg, var(--bg-header), #367fa9);
    z-index: 1000;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
    width: 230px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.1);
    text-decoration: none;
    color: var(--text-light);
    font-weight: 700;
    font-size: 1.25rem;
    gap: 0.5rem;
    transition: var(--transition-fast);
}

.logo:hover {
    background: rgba(0,0,0,0.15);
}

.logo-mini {
    display: none;
}

.logo i {
    color: #fff;
    font-size: 1.5rem;
}

.navbar {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
}

.sidebar-toggle {
    color: var(--text-light);
    background: none;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: var(--transition-fast);
}

.sidebar-toggle:hover {
    background: rgba(0,0,0,0.1);
}

.navbar-nav {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 5px;
}

.navbar-nav > li > a,
.navbar-nav > li > button {
    color: var(--text-light);
    padding: 10px 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition-fast);
}

.navbar-nav > li > a:hover,
.navbar-nav > li > button:hover {
    background: rgba(0,0,0,0.1);
}

.navbar-badge {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 50%;
    background: var(--danger);
    color: white;
}

.user-menu {
    position: relative;
}

.user-menu img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 5px;
}

/* ========================================
   MAIN SIDEBAR
======================================== */
.main-sidebar {
    position: fixed;
    top: 50px;
    left: 0;
    width: 230px;
    height: calc(100vh - 50px);
    background: var(--bg-sidebar);
    z-index: 900;
    overflow-y: auto;
    overflow-x: hidden;
    transition: var(--transition-fast);
}

.main-sidebar::-webkit-scrollbar {
    width: 6px;
}

.main-sidebar::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.2);
    border-radius: 3px;
}

.sidebar {
    padding-bottom: 20px;
}

.user-panel {
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
}

.user-panel img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.2);
}

.user-panel .info {
    color: var(--text-light);
}

.user-panel .info p {
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 2px;
}

.user-panel .info .status {
    font-size: 0.75rem;
    color: var(--secondary);
    display: flex;
    align-items: center;
    gap: 5px;
}

.user-panel .info .status i {
    font-size: 8px;
}

.sidebar-header {
    padding: 15px 15px 10px;
    color: var(--text-sidebar);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.sidebar-menu {
    list-style: none;
    padding: 0;
}

.menu-label {
    padding: 15px 15px 5px;
    color: rgba(255,255,255,0.4);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.sidebar-menu > li {
    position: relative;
}

.sidebar-menu > li > a {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    color: var(--text-sidebar);
    text-decoration: none;
    font-size: 0.9rem;
    transition: var(--transition-fast);
    gap: 10px;
    border-left: 3px solid transparent;
}

.sidebar-menu > li > a:hover {
    background: rgba(255,255,255,0.05);
    color: var(--text-light);
    border-left-color: var(--primary);
}

.sidebar-menu > li.active > a {
    background: rgba(255,255,255,0.1);
    color: var(--text-light);
    border-left-color: var(--primary);
}

.sidebar-menu > li > a i {
    width: 20px;
    text-align: center;
    font-size: 1rem;
}

.sidebar-menu .badge {
    margin-left: auto;
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 0.7rem;
    font-weight: 600;
}

.sidebar-menu .badge.bg-green { background: var(--secondary); color: white; }
.sidebar-menu .badge.bg-red { background: var(--danger); color: white; }
.sidebar-menu .badge.bg-yellow { background: var(--accent); color: #333; }
.sidebar-menu .badge.bg-blue { background: var(--info); color: white; }

/* ========================================
   CONTENT WRAPPER
======================================== */
.content-wrapper {
    margin-left: 230px;
    margin-top: 50px;
    min-height: calc(100vh - 50px);
    background: var(--bg-content);
    transition: var(--transition-fast);
}

.content-header {
    padding: 20px 20px 10px;
    background: transparent;
}

.content-header h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 5px;
    background: none;
    -webkit-text-fill-color: inherit;
}

.content-header h1 small {
    font-size: 0.85rem;
    font-weight: 400;
    color: var(--text-muted);
    margin-left: 10px;
}

.breadcrumb {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 5px;
}

.breadcrumb a {
    color: var(--primary);
    text-decoration: none;
}

.breadcrumb li::before {
    content: '/';
    margin-right: 8px;
    color: var(--text-muted);
}

.breadcrumb li:first-child::before {
    content: '';
    margin: 0;
}

.content {
    padding: 0 20px 20px;
}

/* ========================================
   INFO BOXES
======================================== */
.info-box {
    display: flex;
    background: var(--bg-card);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: var(--transition-fast);
}

.info-box:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.info-box-icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    color: white;
}

.info-box-icon.bg-aqua { background: var(--info); }
.info-box-icon.bg-green { background: var(--secondary); }
.info-box-icon.bg-yellow { background: var(--accent); }
.info-box-icon.bg-red { background: var(--danger); }
.info-box-icon.bg-blue { background: var(--primary); }

.info-box-content {
    padding: 10px 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-box-text {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.03em;
}

.info-box-number {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-main);
}

/* ========================================
   BOX COMPONENT
======================================== */
.box {
    background: var(--bg-card);
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    overflow: hidden;
}

.box-header {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-main);
    background: none;
    -webkit-text-fill-color: inherit;
}

.box-tools {
    display: flex;
    gap: 5px;
}

.box-tools .btn-box-tool {
    background: none;
    border: none;
    color: var(--text-muted);
    padding: 5px 10px;
    cursor: pointer;
    transition: var(--transition-fast);
}

.box-tools .btn-box-tool:hover {
    color: var(--text-main);
}

.box-body {
    padding: 20px;
}

.box-footer {
    padding: 15px 20px;
    background: rgba(0,0,0,0.02);
    border-top: 1px solid rgba(0,0,0,0.1);
}

/* Box Variants */
.box-primary { border-top: 3px solid var(--primary); }
.box-success { border-top: 3px solid var(--secondary); }
.box-warning { border-top: 3px solid var(--accent); }
.box-danger { border-top: 3px solid var(--danger); }
.box-info { border-top: 3px solid var(--info); }

/* ========================================
   MODULE CARDS GRID
======================================== */
.modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.module-card {
    background: var(--bg-card);
    border-radius: 8px;
    padding: 20px;
    text-decoration: none;
    color: var(--text-main);
    transition: var(--transition-fast);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
    border: 1px solid transparent;
}

.module-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    border-color: var(--primary);
}

.module-icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
    background: linear-gradient(135deg, var(--primary), #367fa9);
}

.module-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-main);
    background: none;
    -webkit-text-fill-color: inherit;
}

.module-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.5;
}

.module-link {
    margin-top: auto;
    color: var(--primary);
    font-size: 0.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
}

/* ========================================
   BLOG / NEWS SECTION
======================================== */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.blog-card {
    background: var(--bg-card);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: var(--transition-fast);
}

.blog-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.blog-image {
    width: 100%;
    height: 180px;
    background-color: #ddd;
    background-position: center;
    background-size: cover;
}

.blog-content {
    padding: 20px;
}

.blog-date {
    font-size: 0.75rem;
    color: var(--primary);
    margin-bottom: 8px;
    display: block;
}

.blog-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 10px;
    background: none;
    -webkit-text-fill-color: inherit;
}

.blog-excerpt {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.5;
}

.read-more {
    display: inline-block;
    margin-top: 12px;
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.85rem;
}

.read-more:hover {
    text-decoration: underline;
}

/* ========================================
   FOOTER
======================================== */
.main-footer {
    margin-left: 230px;
    padding: 15px 20px;
    background: var(--bg-card);
    border-top: 1px solid rgba(0,0,0,0.1);
    color: var(--text-muted);
    font-size: 0.85rem;
    display: flex;
    justify-content: space-between;
    transition: var(--transition-fast);
}

.wrapper.sidebar-collapsed .main-footer {
    margin-left: 50px;
}

.main-footer a {
    color: var(--primary);
    text-decoration: none;
}

/* ========================================
   UTILITIES
======================================== */
.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
}

.col-md-3, .col-sm-6 {
    padding: 0 10px;
    flex: 0 0 25%;
}

.col-md-4 {
    padding: 0 10px;
    flex: 0 0 33.333%;
}

.col-md-6 {
    padding: 0 10px;
    flex: 0 0 50%;
}

.col-md-8 {
    padding: 0 10px;
    flex: 0 0 66.666%;
}

.col-md-12 {
    padding: 0 10px;
    flex: 0 0 100%;
}

.text-center { text-align: center; }
.text-right { text-align: right; }
.mt-20 { margin-top: 20px; }
.mb-20 { margin-bottom: 20px; }

/* ========================================
   DARK THEME OVERRIDES
======================================== */
[data-theme="dark"] .main-header {
    background: linear-gradient(135deg, #1a252f, #2c3b41);
}

[data-theme="dark"] .box,
[data-theme="dark"] .info-box,
[data-theme="dark"] .module-card,
[data-theme="dark"] .blog-card,
[data-theme="dark"] .main-footer {
    background: var(--bg-card);
    border-color: rgba(255,255,255,0.05);
}

[data-theme="dark"] .box-header,
[data-theme="dark"] .box-footer {
    border-color: rgba(255,255,255,0.05);
}

[data-theme="dark"] .content-wrapper {
    background: var(--bg-content);
}

/* ========================================
   RESPONSIVE
======================================== */
@media (max-width: 991px) {
    .main-sidebar {
        transform: translateX(-230px);
    }
    
    .wrapper.sidebar-open .main-sidebar {
        transform: translateX(0);
    }
    
    .content-wrapper,
    .main-footer {
        margin-left: 0 !important;
    }
    
    .col-md-3, .col-md-4, .col-md-6, .col-md-8 {
        flex: 0 0 50%;
    }
}

@media (max-width: 768px) {
    .logo {
        width: auto;
        padding: 0 15px;
    }
    
    .logo-lg {
        display: none;
    }
    
    .logo-mini {
        display: block;
    }
    
    .col-md-3, .col-md-4, .col-md-6, .col-md-8 {
        flex: 0 0 100%;
    }
    
    .modules-grid {
        grid-template-columns: 1fr;
    }
    
    .blog-grid {
        grid-template-columns: 1fr;
    }
    
    .info-box-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
    }
    
    .info-box-number {
        font-size: 1.25rem;
    }
}

/* ========================================
   SECTION TITLES
======================================== */
.section-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary);
    display: inline-block;
    background: none;
    -webkit-text-fill-color: inherit;
}
