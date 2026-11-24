/**
 * SQL Diff Studio — Enterprise Developer Platform Interactions
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Management (Dark by Default)
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    const storedTheme = localStorage.getItem('sqldiff-theme') || localStorage.getItem('safedeploy-theme') || 'dark';
    setTheme(storedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(targetTheme);
            localStorage.setItem('sqldiff-theme', targetTheme);
        });
    }

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        const darkIcons = document.querySelectorAll('.theme-icon-dark');
        const lightIcons = document.querySelectorAll('.theme-icon-light');

        if (theme === 'dark') {
            darkIcons.forEach(el => el.style.display = 'block');
            lightIcons.forEach(el => el.style.display = 'none');
        } else {
            darkIcons.forEach(el => el.style.display = 'none');
            lightIcons.forEach(el => el.style.display = 'block');
        }
    }

    // 2. User Guide Navigation & Article Switcher
    const guideNavItems = document.querySelectorAll('.docs-nav-item');
    const guideArticles = document.querySelectorAll('.guide-article');
    const breadcrumbCurrent = document.getElementById('breadcrumbCurrent');
    const searchInput = document.getElementById('guideSearchInput');

    if (guideNavItems.length > 0 && guideArticles.length > 0) {
        guideNavItems.forEach(item => {
            item.addEventListener('click', () => {
                const articleId = item.getAttribute('data-article');
                showArticle(articleId, item);
            });
        });

        // Check if hash matches an article
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const matchItem = document.querySelector(`.docs-nav-item[data-article="${hash}"]`);
            if (matchItem) {
                showArticle(hash, matchItem);
            }
        }

        // Live Search Filter
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase().trim();
                guideNavItems.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(term)) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }
    }

    function showArticle(articleId, activeNavItem) {
        guideArticles.forEach(art => art.style.display = 'none');
        guideNavItems.forEach(nav => nav.classList.remove('active'));

        const targetArt = document.getElementById(`art-${articleId}`);
        if (targetArt) {
            targetArt.style.display = 'block';
            if (activeNavItem) activeNavItem.classList.add('active');
            if (breadcrumbCurrent) {
                breadcrumbCurrent.textContent = activeNavItem ? activeNavItem.textContent : articleId;
            }
            window.location.hash = articleId;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // 3. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const targetEl = document.querySelector(href);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 4. Checksum Copy Functionality
    document.querySelectorAll('.checksum-box').forEach(box => {
        box.style.cursor = 'pointer';
        box.title = 'Click to copy SHA-256 checksum';
        box.addEventListener('click', () => {
            const text = box.textContent.replace('SHA256: ', '').trim();
            navigator.clipboard.writeText(text).then(() => {
                const original = box.innerHTML;
                box.innerHTML = '<span>Copied SHA-256 to clipboard!</span>';
                setTimeout(() => {
                    box.innerHTML = original;
                }, 2000);
            });
        });
    });
});
