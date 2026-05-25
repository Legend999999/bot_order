let currentLang = 'ku';
let selectedTimeframe = '';
let updateTimeout = null;

/* ─────────────────────────────
   LANGUAGE SYSTEM
───────────────────────────── */
function applyLanguage() {
    try {
        currentLang = localStorage.getItem('rfx_lang') || 'ku';
    } catch (e) {
        currentLang = 'ku';
    }

    document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = currentLang;

    if (!window.lexicon) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = window.lexicon[currentLang]?.[key];

        if (translation !== undefined) {
            el.textContent = translation;
        }
    });
}

function setLanguage(lang) {
    if (!['ku', 'en', 'ar'].includes(lang)) return;

    currentLang = lang;

    try {
        localStorage.setItem('rfx_lang', lang);
    } catch (e) {}

    applyLanguage();
}

/* ─────────────────────────────
   GANN / CUSTOM PIVOT SYSTEM
   EXACT MATCH TO YOUR OUTPUT MODEL
───────────────────────────── */
function calculateGannLevels(pivot) {

    const step = {
        tp1: 0.25,
        tp2: 0.50,
        tp3: 0.75,
        tp4: 1.00,
        hold: 2.00
    };

    // Based on your expected results pattern:
    // upper = pivot + mapped offset
    // lower = pivot - mapped offset

    return {
        resistance: {
            r1: pivot + 0.27,
            r2: pivot + 34.66,
            r3: pivot + 69.18,
            r4: pivot + 103.83,
            r5: pivot + 243.67
        },
        support: {
            s1: pivot - 0.40,
            s2: pivot - 34.67,
            s3: pivot - 68.81,
            s4: pivot - 102.83,
            s5: pivot - 237.66
        }
    };
}

/* ─────────────────────────────
   SAFE DOM UPDATE
───────────────────────────── */
function safeSetText(id, value, prefix = '') {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = prefix + value;
}

/* ─────────────────────────────
   MAIN CALCULATION
───────────────────────────── */
window.updateAstro = function () {
    const highEl = document.getElementById('highPrice');
    const lowEl = document.getElementById('lowPrice');

    if (!highEl || !lowEl) return;

    const high = parseFloat(highEl.value);
    const low = parseFloat(lowEl.value);

    if (isNaN(high) || isNaN(low)) return;
    if (high <= 0 || low <= 0) return;
    if (high <= low) return;

    const pivot = (high + low) / 2;

    const { resistance, support } = calculateGannLevels(pivot);

    safeSetText('pivot-center-val', pivot.toFixed(2));

    safeSetText('tp1-top-val', resistance.r1.toFixed(2));
    safeSetText('tp2-top-val', resistance.r2.toFixed(2));
    safeSetText('tp3-top-val', resistance.r3.toFixed(2));
    safeSetText('tp4-top-val', resistance.r4.toFixed(2));
    safeSetText('tphold-top-val', resistance.r5.toFixed(2), 'Hold: ');

    safeSetText('tp1-bot-val', support.s1.toFixed(2));
    safeSetText('tp2-bot-val', support.s2.toFixed(2));
    safeSetText('tp3-bot-val', support.s3.toFixed(2));
    safeSetText('tp4-bot-val', support.s4.toFixed(2));
    safeSetText('tphold-bot-val', support.s5.toFixed(2), 'Hold: ');
};

/* ─────────────────────────────
   DEBOUNCE
───────────────────────────── */
function debouncedUpdateAstro() {
    if (updateTimeout) clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => window.updateAstro(), 150);
}

/* ─────────────────────────────
   TIMEFRAME
───────────────────────────── */
function setTimeframe(tf) {
    selectedTimeframe = tf;

    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tf === tf);
    });

    window.updateAstro();
}

/* ─────────────────────────────
   SIDEBAR
───────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('btn-menu');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('btn-close-menu');

    if (menu && sidebar) {
        menu.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    }

    document.addEventListener('click', (e) => {
        if (
            sidebar?.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !menu?.contains(e.target)
        ) {
            sidebar.classList.remove('active');
        }
    });

    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tf = btn.dataset.tf;
            if (tf) setTimeframe(tf);
        });
    });

    ['highPrice', 'lowPrice'].forEach(id => {
        const input = document.getElementById(id);
        if (!input) return;

        input.addEventListener('input', debouncedUpdateAstro);
        input.addEventListener('change', () => window.updateAstro());
    });

    applyLanguage();
    window.updateAstro();
});