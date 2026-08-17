document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.getElementById('nav-hamburger');
    var mobileNav = document.getElementById('clean-nav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('open');
            mobileNav.classList.toggle('open');
        });
        mobileNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('open');
                mobileNav.classList.remove('open');
            });
        });
    }

    var sidebarToggle = document.getElementById('sidebar-toggle');
    var sidebar = document.querySelector('.course-sidebar');
    if (sidebarToggle && sidebar) {
        var overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);

        function openSidebar() {
            sidebar.classList.add('mobile-open');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeSidebar() {
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.contains('mobile-open') ? closeSidebar() : openSidebar();
        });
        overlay.addEventListener('click', closeSidebar);
        sidebar.querySelectorAll('.toc-link').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 768) { closeSidebar(); }
            });
        });
    }

    document.querySelectorAll('.doc-table').forEach(function (table) {
        var wrapper = document.createElement('div');
        wrapper.className = 'doc-table-wrap';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });

    var COPY_ICON = '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    var CHECK_ICON = '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    document.querySelectorAll('.code-editor').forEach(function (editor) {
        var header = editor.querySelector('.editor-header');
        var pre = editor.querySelector('pre');
        if (!header || !pre) return;

        if (!header.querySelector('.editor-filename')) {
            var span = document.createElement('span');
            span.className = 'editor-filename';
            span.innerHTML = header.innerHTML;
            header.innerHTML = '';
            header.appendChild(span);
        }

        var btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.setAttribute('title', 'Copy code');
        btn.innerHTML = COPY_ICON + '<span>Copy</span>';

        btn.addEventListener('click', function () {
            var text = pre.innerText || pre.textContent;
            navigator.clipboard.writeText(text).then(function () {
                btn.innerHTML = CHECK_ICON + '<span>Copied</span>';
                btn.classList.add('copied');
                setTimeout(function () {
                    btn.innerHTML = COPY_ICON + '<span>Copy</span>';
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(function () {
                var ta = document.createElement('textarea');
                ta.value = pre.innerText || pre.textContent;
                ta.style.position = 'fixed';
                ta.style.opacity = '0';
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                btn.innerHTML = CHECK_ICON + '<span>Copied</span>';
                btn.classList.add('copied');
                setTimeout(function () {
                    btn.innerHTML = COPY_ICON + '<span>Copy</span>';
                    btn.classList.remove('copied');
                }, 2000);
            });
        });

        header.appendChild(btn);
    });

    var simBtns = document.querySelectorAll('.sim-btn');
    simBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var target = btn.getAttribute('data-target');
            simBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            document.querySelectorAll('.sim-view').forEach(function (v) {
                v.classList.remove('active');
                if (v.id === 'sim-' + target) { v.classList.add('active'); }
            });
        });
    });

    var tocLinks = document.querySelectorAll('.toc-link');
    var moduleLabel = document.getElementById('current-module');

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var id = entry.target.getAttribute('id');
                var link = document.querySelector('.toc-link[href="#' + id + '"]');
                if (link) {
                    tocLinks.forEach(function (l) { l.classList.remove('active'); });
                    link.classList.add('active');
                    if (moduleLabel) { moduleLabel.textContent = link.textContent.trim(); }
                }
            }
        });
    }, { rootMargin: '-10% 0px -80% 0px' });

    document.querySelectorAll('.doc-section').forEach(function (s) { observer.observe(s); });

    window.checkQuiz = function (btn, correct) {
        var fb = document.getElementById('quiz-feedback');
        if (!fb) return;
        fb.className = 'quiz-feedback ' + (correct ? 'success' : 'error');
        fb.textContent = correct ? 'Correct! 1NF ensures atomicity of data.' : 'Not quite. Try again!';
    };
});
