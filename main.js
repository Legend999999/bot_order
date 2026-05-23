let currentLang = 'ku';
let selectedTimeframe = '';
let updateTimeout = null;

// ─── Language System ───
function applyLanguage() {
    try {
        currentLang = localStorage.getItem('rfx_lang') || 'ku';
    } catch (e) {
        currentLang = 'ku';
    }

    document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = currentLang;

    if (!window.lexicon) {
        console.warn('lexicon not loaded yet');
        return;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = window.lexicon[currentLang]?.[key];
        
        if (translation !== undefined) {
            if (translation.includes('<') && translation.includes('>')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
}

function setLanguage(lang) {
    if (!['ku', 'en', 'ar'].includes(lang)) return;
    currentLang = lang;
    try {
        localStorage.setItem('rfx_lang', lang);
    } catch (e) {
        console.warn('localStorage unavailable');
    }
    applyLanguage();
}

// ─── Gann Square of Nine Calculations ───
function calculateGannLevels(basePrice) {
    const sqrtBase = Math.sqrt(basePrice);
    
    // Resistance levels (UP - add increment)
    const r1 = Math.pow(sqrtBase + 0.25, 2);   // 45°
    const r2 = Math.pow(sqrtBase + 0.50, 2);   // 90°
    const r3 = Math.pow(sqrtBase + 0.75, 2);   // 135°
    const r4 = Math.pow(sqrtBase + 1.00, 2);   // 180°
    const r5 = Math.pow(sqrtBase + 2.00, 2);   // 360° - Hold
    
    // Support levels (DOWN - subtract increment)
    const s1 = Math.pow(sqrtBase - 0.25, 2);   // 45°
    const s2 = Math.pow(sqrtBase - 0.50, 2);   // 90°
    const s3 = Math.pow(sqrtBase - 0.75, 2);   // 135°
    const s4 = Math.pow(sqrtBase - 1.00, 2);   // 180°
    const s5 = Math.pow(sqrtBase - 2.00, 2);   // 360° - Hold
    
    return {
        pivot: basePrice,
        resistance: { r1, r2, r3, r4, r5 },
        support: { s1, s2, s3, s4, s5 }
    };
}

function safeSetText(id, value, prefix = '') {
    const el = document.getElementById(id);
    if (!el) {
        console.warn(`Element #${id} not found`);
        return false;
    }
    el.textContent = prefix + value;
    return true;
}

window.updateAstro = function () {
    const highInput = document.getElementById('highPrice');
    const lowInput = document.getElementById('lowPrice');

    if (!highInput || !lowInput) {
        console.error('Required price inputs not found in DOM');
        return;
    }

    const highVal = highInput.value.trim();
    const lowVal = lowInput.value.trim();

    if (!highVal || !lowVal) return;

    const high = parseFloat(highVal);
    const low = parseFloat(lowVal);
    
    // Validate numbers
    if (isNaN(high) || isNaN(low) || high <= 0 || low <= 0) return;
    if (high <= low) return;

    // Use explicit Gann base anchor instead of dynamic calculation
    const basePrice = 4749;

    const { pivot, resistance, support } = calculateGannLevels(basePrice);

    // Update DOM
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

// ─── Debounced wrapper for inputs ───
function debouncedUpdateAstro() {
    if (updateTimeout) clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => window.updateAstro(), 150);
}

// ─── Timeframe Selection ───
function setTimeframe(tf) {
    selectedTimeframe = tf;
    
    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tf') === tf);
    });
    
    window.updateAstro();
}

// ─── Initialization ───
document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle
    const btnMenu = document.getElementById('btn-menu');
    const sidebar = document.getElementById('sidebar');
    const btnClose = document.getElementById('btn-close-menu');

    if (btnMenu && sidebar) {
        btnMenu.addEventListener('click', function (e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });
    }

    if (btnClose && sidebar) {
        btnClose.addEventListener('click', function () {
            sidebar.classList.remove('active');
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function (e) {
        if (sidebar?.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !btnMenu?.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Timeframe buttons
    const tfButtons = document.querySelectorAll('.tf-btn');
    tfButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tf = this.getAttribute('data-tf');
            if (tf) setTimeframe(tf);
        });
    });

    // Price inputs
    ['highPrice', 'lowPrice'].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('input', debouncedUpdateAstro);
            input.addEventListener('change', () => {
                if (updateTimeout) clearTimeout(updateTimeout);
                window.updateAstro();
            });
        }
    });

    applyLanguage();
    window.updateAstro();
});