  // فەرهەنگی زمانەکان

const lexicon = {
    ku: {
        btn_menu: "☰ ڕێکخستن",
        opt_tal: "🧿 تەلەسمی گەن (Matrix 24)",
        lbl_tal_center: "سەنتەر (Center Price)",
        lbl_tal_dir: "ئاراستەی نەخشە (پێشاندان)",
        lbl_tal_time: "کاتی دەستکرد (بۆ پشکنین)",
        lbl_tal_step: "بڕی هەنگاو (Step)",
        help_live: "بەتاڵی بهێڵە بۆ کاتی لایڤ",
        opt_up: "📈 بەرزبوونەوە (+)",
        opt_down: "📉 دابەزین (-)",
        btn_bot: "🤖 بۆتی گەن",
        bot_title: "🤖 بۆتی شیكاریی گه‌ن",
        bot_ph: "نرخ... (نموونە 4700)",
        bot_submit: "حیسابکردنی Entry و Level 🎯",
        bot_err: "تکایە نرخێکی دروست بنووسە!",
        bot_greet: (h) => `سڵاو! ئۆردەر بۆ کاتژمێر ${h}:00 ئامادە دەکەم، نرخی ئێستام پێ بڵێ:`,
        bot_res_title: (h) => `📊 <b>شیکاری بۆ کاتژمێر ${h}:00</b><br>لە نەخشەکەدا نرخەکەت دەکەوێتە نێوان:<br>`,
        bot_buy_title: `<b>🟢 پلانی کڕین  (BUY):</b><br>`,
        bot_sell_title: `<b>🔴 پلانی فرۆشتن  (SELL):</b><br>`,
        bot_buy_entry: (v) => `چوونەژوورەوە: ئەگەر بەر <b>${v}</b> کەوت و گەڕایەوە<br>`,
        bot_sell_entry: (v) => `چوونەژوورەوە: ئەگەر بەر <b>${v}</b> کەوت و دابەزی<br>`,
        bot_q1: "🎯 TP1 (چارەک): ",
        bot_q2: "🎯 TP2 (نیوە): ",
        bot_q3: "🎯 TP3 (سێ چارەک): ",
        bot_q4: "🎯 TP4 (سەقف): ",
        bot_q4s: "🎯 TP4 (بنکە): ",
        bot_sl: "🛑 ستۆپ لۆس: "
    },
    ar: {
        btn_menu: "☰ الإعدادات",
        opt_tal: "🧿 مصفوفة جان (Matrix 24)",
        lbl_tal_center: "السعر المركزي (Center Price)",
        lbl_tal_dir: "اتجاه الرسم البياني",
        lbl_tal_time: "الوقت اليدوي (للاختبار)",
        lbl_tal_step: "مقدار الخطوة (Step)",
        help_live: "اتركه فارغاً للوقت المباشر",
        opt_up: "📈 صعود (+)",
        opt_down: "📉 هبوط (-)",
        btn_bot: "🤖 بوت جان",
        bot_title: "🤖 بوت تحليلات جان",
        bot_ph: "السعر... (مثال 4700)",
        bot_submit: "حساب Entry و Level 🎯",
        bot_err: "يرجى إدخال سعر صحيح!",
        bot_greet: (h) => `أهلاً! أعد لك أمر التداول للساعة ${h}:00، أخبرني بالسعر الحالي:`,
        bot_res_title: (h) => `📊 <b>تحليل الساعة ${h}:00</b><br>سعرك يقع في المخطط بين:<br>`,
        bot_buy_title: `<b>🟢 خطة الشراء (BUY):</b><br>`,
        bot_sell_title: `<b>🔴 خطة البيع (SELL):</b><br>`,
        bot_buy_entry: (v) => `الدخول: إذا لمس <b>${v}</b> وأرتد صعوداً<br>`,
        bot_sell_entry: (v) => `الدخول: إذا لمس <b>${v}</b> وهبط<br>`,
        bot_q1: "🎯 TP1 (الربع): ",
        bot_q2: "🎯 TP2 (النصف): ",
        bot_q3: "🎯 TP3 (ثلاثة أرباع): ",
        bot_q4: "🎯 TP4 (السقف): ",
        bot_q4s: "🎯 TP4 (القاع): ",
        bot_sl: "🛑 وقف الخسارة: "
    },
    en: {
        btn_menu: "☰ Settings",
        opt_tal: "🧿 Gann Matrix 24",
        lbl_tal_center: "Center Price",
        lbl_tal_dir: "Chart Direction",
        lbl_tal_time: "Manual Time (Test)",
        lbl_tal_step: "Step Size",
        help_live: "Leave blank for live time",
        opt_up: "📈 Bullish (+)",
        opt_down: "📉 Bearish (-)",
        btn_bot: "🤖 Gann Bot",
        bot_title: "🤖 Gann Analysis Bot",
        bot_ph: "Price... (e.g. 4700)",
        bot_submit: "Calculate Entry & Levels 🎯",
        bot_err: "Please enter a valid price!",
        bot_greet: (h) => `Hello! Preparing order for ${h}:00, enter current price:`,
        bot_res_title: (h) => `📊 <b>Analysis for ${h}:00</b><br>Your price falls between:<br>`,
        bot_buy_title: `<b>🟢 BUY Plan:</b><br>`,
        bot_sell_title: `<b>🔴 SELL Plan:</b><br>`,
        bot_buy_entry: (v) => `Entry: If price touches <b>${v}</b> and bounces back<br>`,
        bot_sell_entry: (v) => `Entry: If price touches <b>${v}</b> and breaks down<br>`,
        bot_q1: "🎯 TP1 (1/4): ",
        bot_q2: "🎯 TP2 (1/2): ",
        bot_q3: "🎯 TP3 (3/4): ",
        bot_q4: "🎯 TP4 (Ceiling): ",
        bot_q4s: "🎯 TP4 (Floor): ",
        bot_sl: "🛑 Stop Loss: "
    }
};

        let currentLang = 'ku';
        const SQ24_TV_SYMBOL = 'OANDA:XAUUSD';
        const SQ24_TRADEM_SCAN_URL = 'https://tradem-eight.vercel.app/api/market/scan?refresh=1';
        const SQ24_TRADEM_PROXY_URL = 'https://r.jina.ai/http://https://tradem-eight.vercel.app/api/market/scan?refresh=1';
        const SQ24_PIVOT_SIDE = 3;
        const SQ24_MATRIX_SIZE = 24 * 24;
        const BAGHDAD_TZ = 'Asia/Baghdad';
        const MATRIX_GOLDEN_HOURS = [10, 11, 15, 16, 18]; // Source: matrix24.html -> drawSq24() goldenHours
        let sq24AnchorState = { status: 'idle', message: '', base: null, candleTime: null, currentPrice: null, reason: '' };
        let livePriceState = { price: null, updatedAt: null, source: 'TradeM', status: 'idle', error: '' };
        let livePriceTimer = null;
        const LIVE_PRICE_POLL_MS = 5000;

        function getBaghdadParts(date = new Date()) {
            const parts = new Intl.DateTimeFormat('en-GB', {
                timeZone: BAGHDAD_TZ, year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', hour12: false
            }).formatToParts(date).reduce((acc, p) => { acc[p.type] = p.value; return acc; }, {});
            return { year: +parts.year, month: +parts.month, day: +parts.day, hour: +parts.hour, minute: +parts.minute };
        }

        function formatBaghdadToday() {
            return new Intl.DateTimeFormat('en-US', { timeZone: BAGHDAD_TZ, month: 'short', day: '2-digit' }).format(new Date()).toUpperCase();
        }

        function updateMatrixImportantHours() {
            const list = document.getElementById('matrix-hour-list');
            if(!list) return;
            const parts = getBaghdadParts();
            const nowMinutes = parts.hour * 60 + parts.minute;
            const next = MATRIX_GOLDEN_HOURS
                .map(h => ({ h, forward: ((h * 60) - nowMinutes + 1440) % 1440 }))
                .sort((a, b) => a.forward - b.forward)[0];
            document.getElementById('matrix-hours-date').innerText = `TODAY - ${formatBaghdadToday()} - KURDISTAN UTC+3`;
            list.innerHTML = MATRIX_GOLDEN_HOURS.map(h => {
                const start = h * 60, end = start + 59;
                const state = nowMinutes >= start && nowMinutes <= end ? 'CURRENT' : (start < nowMinutes ? 'PAST' : (next && h === next.h ? 'NEXT' : 'UPCOMING'));
                const cls = state === 'CURRENT' ? 'mh-current' : (state === 'NEXT' ? 'mh-next' : (state === 'PAST' ? 'mh-past' : 'mh-upcoming'));
                return `<div class="matrix-hour-chip"><strong>${String(h).padStart(2, '0')}:00</strong>Matrix important hour<br><span class="mh-badge ${cls}">${state}</span></div>`;
            }).join('');
        }

        function setSq24AnchorStatus(message, type = '') {
            sq24AnchorState.message = message;
            const el = document.getElementById('sq24AnchorStatus');
            if(!el) return;
            el.className = 'anchor-status' + (type ? ' ' + type : '');
            el.innerHTML = message;
        }

        function getStepDecimals(stepVal) {
            const txt = String(stepVal);
            return txt.includes('.') ? Math.min(txt.split('.')[1].length, 6) : 0;
        }

        function roundToStep(price, stepVal) {
            const safeStep = stepVal > 0 ? stepVal : 1;
            return parseFloat((Math.round(price / safeStep) * safeStep).toFixed(getStepDecimals(safeStep)));
        }

        function formatSq24Time(unixSeconds) {
            const ms = unixSeconds > 100000000000 ? unixSeconds : unixSeconds * 1000;
            return new Date(ms).toLocaleString('en-GB', {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', hour12: false
            });
        }

        function extractJsonFromText(text) {
            const trimmed = (text || '').trim();
            if(trimmed.startsWith('{')) return JSON.parse(trimmed);
            const start = trimmed.indexOf('{');
            const end = trimmed.lastIndexOf('}');
            if(start < 0 || end <= start) throw new Error('Market API did not return JSON');
            return JSON.parse(trimmed.slice(start, end + 1));
        }

        async function fetchJsonWithTextFallback(url, timeoutMs = 7000) {
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), timeoutMs);
            try {
                const res = await fetch(url, { cache: 'no-store', signal: controller.signal });
                const text = await res.text();
                if(!res.ok) throw new Error(`Market API returned HTTP ${res.status}`);
                return extractJsonFromText(text);
            } finally { clearTimeout(timer); }
        }

        async function fetchTradeMScan() {
            try {
                return await fetchJsonWithTextFallback(SQ24_TRADEM_SCAN_URL);
            } catch(primaryErr) {
                try {
                    return await fetchJsonWithTextFallback(SQ24_TRADEM_PROXY_URL);
                } catch(proxyErr) {
                    throw new Error(`TradeM/Dukascopy data failed: ${primaryErr.message}; fallback failed: ${proxyErr.message}`);
                }
            }
        }

        function renderLivePriceStatus() {
            const input = document.getElementById('botPriceInput');
            const status = document.getElementById('livePriceStatus');
            const mode = document.getElementById('priceSourceMode')?.value || 'auto';
            if(!input || !status) return;
            if(mode === 'manual') {
                input.readOnly = false;
                status.innerHTML = `<span class="live-dot manual"></span>MANUAL mode — your edited price is used for calculations.`;
                return;
            }
            input.readOnly = true;
            if(Number.isFinite(livePriceState.price)) {
                input.value = livePriceState.price.toFixed(2);
                const age = livePriceState.updatedAt ? Math.max(0, Math.round((Date.now()-livePriceState.updatedAt)/1000)) : 0;
                status.innerHTML = `<span class="live-dot ok"></span>AUTO LIVE · ${livePriceState.source} · updated ${age}s ago`;
            } else if(livePriceState.status === 'error') {
                status.innerHTML = `<span class="live-dot err"></span>Live feed unavailable — switch to MANUAL or press Refresh.`;
            } else {
                status.innerHTML = `<span class="live-dot"></span>Connecting to TradeM live price...`;
            }
        }

        async function refreshLivePrice(force = false) {
            const mode = document.getElementById('priceSourceMode')?.value || 'auto';
            if(mode !== 'auto' && !force) { renderLivePriceStatus(); return livePriceState.price; }
            livePriceState.status = 'loading'; renderLivePriceStatus();
            try {
                const scan = await fetchTradeMScan();
                const price = Number(scan?.market?.currentPrice ?? scan?.setup?.currentPrice);
                if(!Number.isFinite(price) || price <= 0) throw new Error('TradeM returned no currentPrice');
                livePriceState = { price, updatedAt: Date.now(), source: scan?.provider || 'TradeM', status:'ok', error:'' };
                renderLivePriceStatus();
                return price;
            } catch(e) {
                livePriceState.status = 'error'; livePriceState.error = e.message || String(e);
                renderLivePriceStatus();
                return Number.isFinite(livePriceState.price) ? livePriceState.price : null;
            }
        }

        function startLivePricePolling() {
            if(livePriceTimer) clearInterval(livePriceTimer);
            refreshLivePrice();
            livePriceTimer = setInterval(() => {
                const mode = document.getElementById('priceSourceMode')?.value || 'auto';
                if(mode === 'auto') refreshLivePrice(); else renderLivePriceStatus();
            }, LIVE_PRICE_POLL_MS);
            setInterval(renderLivePriceStatus, 1000);
        }

        function selectSq24AnchorFromTradeM(scan, trendDir, stepVal) {
            if(!scan || !scan.setup || !scan.market) throw new Error(scan && scan.error ? scan.error : 'No TradeM setup data');
            const pivot = scan.setup.anchorPivot;
            const expectedKind = trendDir === 'down' ? 'high' : 'low';
            const currentPrice = Number(scan.market.currentPrice || scan.setup.currentPrice);
            if(!Number.isFinite(currentPrice)) throw new Error('TradeM scan has no current XAU/USD price');
            let anchor = null;
            if(pivot && pivot.kind === expectedKind) {
                anchor = {
                    price: Number(pivot.price),
                    timestamp: pivot.timestamp,
                    timeframe: pivot.timeframe || 'unknown',
                    label: `${pivot.timeframe || 'unknown'} pivot ${pivot.kind}`,
                    sourceNote: pivot.timeframe === '1H' ? 'confirmed 1H pivot' : `confirmed ${pivot.timeframe || 'unknown'} pivot`
                };
            } else {
                const zones = trendDir === 'down'
                    ? (scan.strategies && scan.strategies.unified && scan.strategies.unified.resistanceZones) || []
                    : (scan.strategies && scan.strategies.unified && scan.strategies.unified.supportZones) || [];
                const sortedZones = zones
                    .filter(z => z && Number.isFinite(Number(z.level || z.high || z.low)) && z.createdAt)
                    .filter(z => trendDir === 'down' ? Number(z.level || z.high) >= currentPrice : Number(z.level || z.low) <= currentPrice)
                    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
                const zone = sortedZones[0];
                if(zone) {
                    anchor = {
                        price: Number(zone.level || (trendDir === 'down' ? zone.high : zone.low)),
                        timestamp: zone.createdAt,
                        timeframe: zone.timeframe || 'unknown',
                        label: `${zone.timeframe || 'unknown'} ${zone.kind || (trendDir === 'down' ? 'resistance' : 'support')} zone`,
                        sourceNote: `confirmed ${zone.kind || (trendDir === 'down' ? 'resistance' : 'support')} zone from TradeM`
                    };
                }
            }
            if(!anchor) {
                throw new Error(`TradeM scan did not return a confirmed ${expectedKind} anchor for ${trendDir.toUpperCase()} direction`);
            }
            const rawPrice = Number(anchor.price);
            const candleMs = Date.parse(anchor.timestamp);
            if(!Number.isFinite(currentPrice) || !Number.isFinite(rawPrice) || !Number.isFinite(candleMs)) {
                throw new Error('TradeM scan has incomplete market data');
            }
            const base = roundToStep(rawPrice, stepVal);
            const rangeMin = trendDir === 'down' ? base - ((SQ24_MATRIX_SIZE - 1) * stepVal) : base;
            const rangeMax = trendDir === 'down' ? base : base + ((SQ24_MATRIX_SIZE - 1) * stepVal);
            return {
                base,
                rawPrice,
                currentPrice,
                candleTime: candleMs,
                rangeMin,
                rangeMax,
                provider: scan.provider || 'TradeM / Dukascopy Free Data Feed',
                reason: trendDir === 'down'
                    ? `DOWN direction: ${anchor.sourceNote} used as latest swing high anchor`
                    : `UP direction: ${anchor.sourceNote} used as latest swing low anchor`,
                inRange: currentPrice >= rangeMin && currentPrice <= rangeMax
            };
        }

        function tvPacket(method, params) {
            const payload = JSON.stringify({ m: method, p: params });
            return `~m~${payload.length}~m~${payload}`;
        }

        function parseTvPackets(raw) {
            const packets = [];
            let i = 0;
            while(i < raw.length) {
                if(raw.startsWith('~h~', i)) {
                    const next = raw.indexOf('~m~', i + 3);
                    packets.push(raw.slice(i, next === -1 ? raw.length : next));
                    i = next === -1 ? raw.length : next;
                    continue;
                }
                const start = raw.indexOf('~m~', i);
                if(start === -1) break;
                const lenStart = start + 3;
                const lenEnd = raw.indexOf('~m~', lenStart);
                if(lenEnd === -1) break;
                const len = parseInt(raw.slice(lenStart, lenEnd), 10);
                const payloadStart = lenEnd + 3;
                packets.push(raw.slice(payloadStart, payloadStart + len));
                i = payloadStart + len;
            }
            return packets;
        }

        function fetchTradingViewXauUsdCandles(barCount = 500, resolution = '60') {
            return new Promise((resolve, reject) => {
                const chartSession = 'cs_' + Math.random().toString(36).slice(2, 14);
                const quoteSession = 'qs_' + Math.random().toString(36).slice(2, 14);
                const ws = new WebSocket('wss://data.tradingview.com/socket.io/websocket');
                let settled = false;
                const timer = setTimeout(() => fail(new Error('TradingView candle request timed out')), 18000);

                function done(candles) {
                    if(settled) return;
                    settled = true;
                    clearTimeout(timer);
                    try { ws.close(); } catch(e) {}
                    resolve(candles);
                }

                function fail(err) {
                    if(settled) return;
                    settled = true;
                    clearTimeout(timer);
                    try { ws.close(); } catch(e) {}
                    reject(err);
                }

                function send(method, params) {
                    ws.send(tvPacket(method, params));
                }

                ws.onerror = () => fail(new Error('TradingView websocket error'));
                ws.onopen = () => {
                    send('set_auth_token', ['unauthorized_user_token']);
                    send('chart_create_session', [chartSession, '']);
                    send('quote_create_session', [quoteSession]);
                    send('quote_set_fields', [quoteSession, 'lp', 'ch', 'chp', 'bid', 'ask', 'open_price', 'high_price', 'low_price', 'prev_close_price']);
                    send('quote_add_symbols', [quoteSession, SQ24_TV_SYMBOL, { flags: ['force_permission'] }]);
                    send('resolve_symbol', [chartSession, 'symbol_1', JSON.stringify({ symbol: SQ24_TV_SYMBOL, adjustment: 'splits', session: 'regular' })]);
                    send('create_series', [chartSession, 's1', 's1', 'symbol_1', String(resolution), barCount]);
                };

                ws.onmessage = (event) => {
                    parseTvPackets(event.data).forEach(packet => {
                        if(packet.startsWith('~h~')) {
                            try { ws.send(packet); } catch(e) {}
                            return;
                        }
                        let msg;
                        try { msg = JSON.parse(packet); } catch(e) { return; }
                        if(msg.m === 'timescale_update' && msg.p && msg.p[1] && msg.p[1].s1 && Array.isArray(msg.p[1].s1.s)) {
                            const candles = msg.p[1].s1.s.map(item => {
                                const v = item.v || [];
                                return { time: v[0], open: v[1], high: v[2], low: v[3], close: v[4] };
                            }).filter(c => Number.isFinite(c.time) && Number.isFinite(c.open) && Number.isFinite(c.high) && Number.isFinite(c.low) && Number.isFinite(c.close))
                              .sort((a, b) => a.time - b.time);
                            if(candles.length >= 30) done(candles);
                        }
                        if(msg.m === 'critical_error' || msg.m === 'symbol_error') fail(new Error('TradingView returned ' + msg.m));
                    });
                };
            });
        }

        async function fetchCurrentOneHourOpenForMatrixBot() {
            const candles = await fetchTradingViewXauUsdCandles(5);
            const last = candles[candles.length - 1];
            if(!last || !Number.isFinite(last.open)) throw new Error('Current 1H candle open is unavailable.');
            return { open: last.open, time: last.time };
        }

        function isConfirmedPivot(candles, index, field, direction) {
            const value = candles[index][field];
            for(let j = index - SQ24_PIVOT_SIDE; j <= index + SQ24_PIVOT_SIDE; j++) {
                if(j === index) continue;
                if(direction === 'high' && candles[j].high >= value) return false;
                if(direction === 'low' && candles[j].low <= value) return false;
            }
            return true;
        }

        function selectSq24Anchor(candles, trendDir, stepVal) {
            const pivotType = trendDir === 'down' ? 'high' : 'low';
            for(let i = candles.length - 1 - SQ24_PIVOT_SIDE; i >= SQ24_PIVOT_SIDE; i--) {
                if(isConfirmedPivot(candles, i, pivotType, pivotType)) {
                    const rawPrice = candles[i][pivotType];
                    const base = roundToStep(rawPrice, stepVal);
                    const currentPrice = candles[candles.length - 1].close;
                    const rangeMin = trendDir === 'down' ? base - ((SQ24_MATRIX_SIZE - 1) * stepVal) : base;
                    const rangeMax = trendDir === 'down' ? base : base + ((SQ24_MATRIX_SIZE - 1) * stepVal);
                    return {
                        base,
                        rawPrice,
                        currentPrice,
                        candleTime: candles[i].time,
                        rangeMin,
                        rangeMax,
                        reason: trendDir === 'down'
                            ? 'DOWN direction: latest confirmed major swing high, 3 candles on each side'
                            : 'UP direction: latest confirmed major swing low, 3 candles on each side',
                        inRange: currentPrice >= rangeMin && currentPrice <= rangeMax
                    };
                }
            }
            return null;
        }

        async function applyAutoSq24Anchor() {
            const mode = document.getElementById('sq24AnchorMode').value;
            const baseInput = document.getElementById('sq24BasePrice');
            if(mode !== 'auto') {
                if(baseInput) baseInput.disabled = false;
                sq24AnchorState.status = 'manual';
                setSq24AnchorStatus('Manual Matrix anchor active. You control the center price.', 'warn');
                drawSq24();
                return;
            }

            if(baseInput) baseInput.disabled = true;
            sq24AnchorState.status = 'loading';
            setSq24AnchorStatus('Loading TradeM live XAU/USD…', '');

            const stepVal = parseFloat(document.getElementById('sq24StepValue').value) || 1;
            const trendDir = document.getElementById('sq24TrendDir').value;
            let scan = null;
            let currentPrice = Number(livePriceState.price);

            try {
                scan = await fetchTradeMScan();
                const scanPrice = Number(scan?.market?.currentPrice ?? scan?.setup?.currentPrice);
                if(Number.isFinite(scanPrice) && scanPrice > 0) {
                    currentPrice = scanPrice;
                    livePriceState = { price: scanPrice, updatedAt: Date.now(), source: scan?.provider || 'TradeM', status:'ok', error:'' };
                }
            } catch(e) {
                // Live-price state or existing manual/base value is allowed to carry the Matrix.
            }

            let selected = null;
            if(scan) {
                try { selected = selectSq24AnchorFromTradeM(scan, trendDir, stepVal); } catch(e) {}
            }

            if(selected && selected.inRange) {
                baseInput.value = selected.base;
                saveSet();
                sq24AnchorState = { status:'ok', message:'', base:selected.base, candleTime:selected.candleTime, currentPrice:selected.currentPrice, reason:selected.reason };
                setSq24AnchorStatus(`Confirmed anchor: <b>${selected.base}</b><br>Reason: ${selected.reason}<br>Live XAU/USD: ${selected.currentPrice.toFixed(2)}<br>Source: ${selected.provider}`, 'ok');
                drawSq24();
                return;
            }

            if(Number.isFinite(currentPrice) && currentPrice > 0) {
                // Candle/pivot-free fallback. Keep live price comfortably inside the 24×24 Matrix.
                const fallbackBase = roundToStep(currentPrice + (trendDir === 'down' ? 12 : -12) * stepVal, stepVal);
                baseInput.value = fallbackBase;
                saveSet();
                sq24AnchorState = {
                    status:'ok', message:'', base:fallbackBase, candleTime:Date.now(), currentPrice,
                    reason:'Live-price fallback anchor (no candle/pivot required)'
                };
                setSq24AnchorStatus(`Live Matrix anchor: <b>${fallbackBase}</b><br>Live XAU/USD: ${currentPrice.toFixed(2)}<br>No 1H candle or pivot is required.`, 'ok');
                drawSq24();
                return;
            }

            // Last-resort: never blank the whole Matrix if a previously saved center exists.
            const existingBase = Number(baseInput.value);
            if(Number.isFinite(existingBase) && existingBase > 0) {
                sq24AnchorState = { status:'ok', message:'', base:existingBase, candleTime:null, currentPrice:null, reason:'Saved center fallback' };
                setSq24AnchorStatus(`OFFLINE FALLBACK<br>Using saved Matrix center <b>${existingBase}</b>. Switch to Manual to edit it.`, 'warn');
                drawSq24();
                return;
            }

            sq24AnchorState = { status:'manual-needed', message:'', base:null, candleTime:null, currentPrice:null, reason:'No live or saved price available' };
            if(baseInput) baseInput.disabled = false;
            setSq24AnchorStatus('Live feed unavailable. Enter a center price manually; the Matrix will still work.', 'warn');
            drawSq24();
        }

        window.refreshSq24Anchor = function() {
            applyAutoSq24Anchor();
            updateMatrixImportantHours();
        };

        function applyLanguage() {
            try { currentLang = localStorage.getItem('rfx_lang') || 'ku'; } catch(e) {}
            document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (lexicon[currentLang] && lexicon[currentLang][key]) el.innerHTML = lexicon[currentLang][key];
            });
            document.querySelectorAll('[data-i18n-ph]').forEach(el => {
                const key = el.getAttribute('data-i18n-ph');
                if (lexicon[currentLang] && lexicon[currentLang][key]) el.placeholder = lexicon[currentLang][key];
            });
            window.updateBotTime();
        }

        // کۆنترۆڵکردنی مینوو و دەستپێک
        document.addEventListener('DOMContentLoaded', function() {
            var btnMenu = document.getElementById('btn-menu');
            var btnCloseMenu = document.getElementById('btn-close-menu');
            var sidebar = document.getElementById('sidebar');

            if(btnMenu) {
                btnMenu.addEventListener('click', function(e) {
                    e.stopPropagation();
                    sidebar.classList.toggle('active');
                });
            }
            if(btnCloseMenu) {
                btnCloseMenu.addEventListener('click', function() {
                    sidebar.classList.remove('active');
                });
            }
            
            applyLanguage();
            loadSet();
            initBotDrag();
            const priceMode = document.getElementById('priceSourceMode');
            const refreshPriceBtn = document.getElementById('refreshLivePriceBtn');
            try { const pm = localStorage.getItem('rfx_price_mode'); if(pm && priceMode) priceMode.value = pm; } catch(e) {}
            if(priceMode) priceMode.addEventListener('change', () => {
                try { localStorage.setItem('rfx_price_mode', priceMode.value); } catch(e) {}
                if(priceMode.value === 'auto') refreshLivePrice(true); else renderLivePriceStatus();
            });
            if(refreshPriceBtn) refreshPriceBtn.addEventListener('click', () => refreshLivePrice(true));
            startLivePricePolling();
            px = 0; py = 0;
            upT();
            drawSq24();
            applyAutoSq24Anchor();
            setTimeout(() => {
                if(typeof window.generateMatrixSignal === 'function') window.generateMatrixSignal();
            }, 2500);
            
            // ئەپدەیتکردنەوەی نەخشە هەموو خولەکێک
            setInterval(() => { drawSq24(); }, 60000);
            setInterval(updateMatrixImportantHours, 60000);
            setInterval(() => {
                if((document.getElementById('priceSourceMode')?.value || 'auto') === 'auto' && typeof window.generateMatrixSignal === 'function') {
                    window.generateMatrixSignal();
                }
            }, 60000);
        });

        const savedIds = ['sq24BasePrice', 'sq24TrendDir', 'sq24ManualTime', 'sq24StepValue', 'sq24AnchorMode'];

        function loadSet() {
            try {
                savedIds.forEach(id => { 
                    let v = localStorage.getItem('rfx_tal_' + id); 
                    let el = document.getElementById(id); 
                    if(v !== null && el) el.value = v; 
                });
            } catch(e) {}
        }

        function saveSet() {
            try {
                savedIds.forEach(id => { 
                    let el = document.getElementById(id); 
                    if(el) localStorage.setItem('rfx_tal_' + id, el.value); 
                });
            } catch(e) {}
        }

        savedIds.forEach(id => {
            let el = document.getElementById(id);
            if(el) {
                el.addEventListener('change', () => {
                    saveSet();
                    if(['sq24TrendDir', 'sq24StepValue', 'sq24AnchorMode'].includes(id)) applyAutoSq24Anchor();
                    else drawSq24();
                    window.updateBotTime();
                });
                if(el.tagName === 'INPUT') el.addEventListener('input', () => { saveSet(); drawSq24(); window.updateBotTime(); });
            }
        });

        // یارمەتیدەری ماتماتیکی بۆ دۆزینەوەی یەکخستنی کات و نرخ
        window.isTimePriceSquared = function(price, base, timeAngle) {
            if(price <= 0) return false;
            let priceAngle = Math.abs(Math.sqrt(price) - Math.sqrt(base)) * 180;
            let diff = Math.abs((priceAngle % 360) - timeAngle);
            if(diff > 180) diff = 360 - diff;
            return (diff <= 3 || Math.abs(diff - 45) <= 3 || Math.abs(diff - 90) <= 3 || Math.abs(diff - 180) <= 3);
        }

        // کێشانی ماتریکسی ٢٤ کاتژمێری
        window.drawSq24 = function() {
            const canvas = document.getElementById('sq24Canvas'); if(!canvas) return;
            const ctx = canvas.getContext('2d');
            const CANVAS_SIZE = 5600; 
            canvas.width = canvas.height = CANVAS_SIZE;
            canvas.style.width = CANVAS_SIZE + 'px'; canvas.style.height = CANVAS_SIZE + 'px';
            
            const cx = CANVAS_SIZE / 2, cy = CANVAS_SIZE / 2;
            const base = parseFloat(document.getElementById('sq24BasePrice').value) || 0;
            const stepVal = parseFloat(document.getElementById('sq24StepValue').value) || 1;
            const trendDir = document.getElementById('sq24TrendDir').value;
            const manualTimeInput = document.getElementById('sq24ManualTime').value;
            const size = 24, rGrid = 1900, rClock = 1980; 
            const goldenHours = [10, 11, 15, 16, 18]; 
            const anchorMode = document.getElementById('sq24AnchorMode').value;

            if(!base) {
                ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
                ctx.fillStyle = "#05050a";
                ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
                const isLoading = sq24AnchorState.status === 'idle' || sq24AnchorState.status === 'loading';
                ctx.fillStyle = isLoading ? "#00ffcc" : "#d4af37";
                ctx.font = "bold 105px monospace";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(isLoading ? "LOADING LIVE PRICE" : "ENTER MATRIX CENTER", cx, cy - 60);
                ctx.fillStyle = "#bbb";
                ctx.font = "bold 38px monospace";
                ctx.fillText("TradeM live or manual price — candles are not required", cx, cy + 60);
                return;
            }

            let now = new Date(); let h = now.getHours(), m = now.getMinutes();
            let isManual = false; 
            if (manualTimeInput) { 
                h = parseInt(manualTimeInput.split(':')[0]); 
                m = parseInt(manualTimeInput.split(':')[1]); 
                isManual = true; 
            }
            
            let liveAngleDeg = ((h + m/60) / 24) * 360; 
            let liveRad = (liveAngleDeg - 90) * Math.PI / 180;
            let activeColHour = h === 0 ? 24 : h; 
            let themeColor = isManual ? "#ff3399" : "#00ffcc";

            ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

            // کێشانی بازنەی دەرەوەی کاتژمێر
            ctx.beginPath(); ctx.arc(cx, cy, rClock, 0, 2 * Math.PI); 
            ctx.lineWidth = 6; ctx.strokeStyle = "rgba(0, 255, 204, 0.4)"; ctx.stroke();
            
            ctx.beginPath(); ctx.arc(cx, cy, rClock - 20, 0, 2 * Math.PI); 
            ctx.lineWidth = 3; ctx.strokeStyle = "rgba(212, 175, 55, 0.3)"; ctx.stroke();

            // کێشانی نیشانەکانی کاتژمێر لە دەوروبەری
            for(let a = 0; a < 360; a += 15) {
                let rad = (a * Math.PI) / 180 - Math.PI/2;
                let hourUnit = (a/15 === 0) ? 24 : a/15;
                let isGolden = goldenHours.includes(hourUnit); 
                let isActiveHour = (hourUnit === activeColHour);
                let strokeCol = isActiveHour ? themeColor : (isGolden ? '#d4af37' : 'rgba(255,255,255,0.7)');
                
                ctx.lineWidth = isActiveHour ? 12 : (isGolden ? 10 : 5); 
                ctx.strokeStyle = strokeCol;
                ctx.beginPath(); 
                ctx.moveTo(cx + (rClock - 35) * Math.cos(rad), cy + (rClock - 35) * Math.sin(rad));
                ctx.lineTo(cx + (rClock + 35) * Math.cos(rad), cy + (rClock + 35) * Math.sin(rad)); 
                ctx.stroke();

                ctx.fillStyle = isActiveHour ? themeColor : (isGolden ? '#d4af37' : 'rgba(255,255,255,0.6)');
                ctx.font = isActiveHour ? "bold 85px monospace" : (isGolden ? "bold 75px monospace" : "bold 55px monospace");
                ctx.textAlign = "center"; ctx.textBaseline = "middle";
                if(isActiveHour || isGolden) { ctx.shadowBlur = 20; ctx.shadowColor = ctx.fillStyle; }
                ctx.fillText((isGolden && !isActiveHour ? "⭐ " : "") + hourUnit + "H", cx + (rClock + 110) * Math.cos(rad), cy + (rClock + 110) * Math.sin(rad)); 
                ctx.shadowBlur = 0;
            }

            // کێشانی هێڵی کاتی ئێستا
            ctx.beginPath(); 
            ctx.moveTo(cx + (rClock - 40) * Math.cos(liveRad), cy + (rClock - 40) * Math.sin(liveRad));
            ctx.lineTo(cx + (rClock + 40) * Math.cos(liveRad), cy + (rClock + 40) * Math.sin(liveRad));
            ctx.lineWidth = 10; ctx.strokeStyle = "#fff"; 
            ctx.shadowBlur = 20; ctx.shadowColor = themeColor; 
            ctx.stroke(); ctx.shadowBlur = 0;

            // دروستکردنی خشتەی ٢٤ × ٢٤
            let cellSize = (rGrid * 1.35) / size; 
            let startX = cx - (size * cellSize) / 2; 
            let startY = cy - (size * cellSize) / 2;
            
            for(let row = 0; row < size; row++) {
                for(let col = 0; col < size; col++) {
                    let colHour = col + 1; 
                    let val;
                    if (trendDir === 'up') { 
                        val = parseFloat((base + ((23 - row) * size + col) * stepVal).toFixed(2)); 
                    } else { 
                        val = parseFloat((base - (row * size + col) * stepVal).toFixed(2)); 
                    }
                    
                    let x = startX + col * cellSize, y = startY + row * cellSize;
                    let isActiveCol = (colHour === activeColHour); 
                    let isGolden = goldenHours.includes(colHour);
                    let isSquaring = false;
                    
                    // پشکنینی Square of Time and Price بۆ ستوونی ئەکتیڤ
                    if (val > 0) {
                        let priceAngle = Math.abs(Math.sqrt(val) - Math.sqrt(base)) * 180;
                        let diff = Math.abs((priceAngle % 360) - ((colHour * 15) % 360));
                        if(diff > 180) diff = 360 - diff;
                        isSquaring = isActiveCol && (diff <= 3 || Math.abs(diff - 45) <= 3 || Math.abs(diff - 90) <= 3 || Math.abs(diff - 180) <= 3);
                    }
                    
                    let cellW = cellSize - 6; 
                    let cellGrad = ctx.createLinearGradient(x, y, x + cellW, y + cellW);
                    
                    if (isSquaring) { 
                        cellGrad.addColorStop(0, themeColor); cellGrad.addColorStop(1, '#006666'); 
                    } else if (isGolden) { 
                        cellGrad.addColorStop(0, '#262000'); cellGrad.addColorStop(1, '#1a1500'); 
                    } else { 
                        cellGrad.addColorStop(0, '#16161f'); cellGrad.addColorStop(1, '#0a0a0f'); 
                    }

                    ctx.fillStyle = cellGrad; 
                    ctx.fillRect(x + 3, y + 3, cellW, cellW);
                    
                    ctx.strokeStyle = isSquaring ? "#fff" : (isActiveCol ? "rgba(0, 255, 204, 0.4)" : (isGolden ? "rgba(212, 175, 55, 0.4)" : "rgba(255,255,255,0.08)"));
                    ctx.lineWidth = isSquaring ? 2 : 1; 
                    ctx.strokeRect(x + 3, y + 3, cellW, cellW);

                    ctx.fillStyle = isSquaring ? "#000" : (isActiveCol ? "#fff" : (isGolden ? "#ccc" : "#778"));
                    ctx.font = isSquaring ? `bold ${cellW * 0.4}px monospace` : `bold ${cellW * 0.3}px monospace`;
                    ctx.fillText(val, x + cellSize/2, y + cellSize/2 + (cellW * 0.1));
                }
            }

            // ناوەڕاستی نەخشە
            let centerText = currentLang === 'ku' ? "سەنتەر" : (currentLang === 'ar' ? "المركز" : "Center");
            ctx.beginPath(); ctx.arc(cx, cy, 220, 0, 2*Math.PI); 
            ctx.fillStyle = "#05050a"; ctx.fill(); 
            ctx.strokeStyle = themeColor; ctx.lineWidth = 5; ctx.stroke();
            ctx.fillStyle = "#fff"; ctx.font = "bold 35px Tahoma"; 
            ctx.fillText(centerText, cx, cy - 45);
            ctx.fillStyle = themeColor; ctx.font = "bold 75px monospace"; 
            ctx.shadowBlur = 20; ctx.shadowColor = themeColor; 
            ctx.fillText(base, cx, cy + 30); 
            ctx.shadowBlur = 0;
        }

        // --- Bot Drag Logic ---
        let isDraggingBot = false, botStartX, botStartY, initialBotX, initialBotY;
        const botBtn = document.getElementById('San-bot-btn');
        
        function initBotDrag() {
            if(!botBtn) return;
            botBtn.addEventListener('mousedown', dragBotStart); document.addEventListener('mousemove', dragBotMove); document.addEventListener('mouseup', dragBotEnd);
            botBtn.addEventListener('touchstart', dragBotStart, {passive: false}); document.addEventListener('touchmove', dragBotMove, {passive: false}); document.addEventListener('touchend', dragBotEnd);
        }

        function dragBotStart(e) {
            if(e.type === 'touchstart') { botStartX = e.touches[0].clientX; botStartY = e.touches[0].clientY; } else { botStartX = e.clientX; botStartY = e.clientY; }
            initialBotX = botBtn.offsetLeft; initialBotY = botBtn.offsetTop; isDraggingBot = true; 
        }

        function dragBotMove(e) {
            if (!isDraggingBot) return; let currentX, currentY;
            if(e.type === 'touchmove') { currentX = e.touches[0].clientX; currentY = e.touches[0].clientY; e.preventDefault(); } else { currentX = e.clientX; currentY = e.clientY; }
            botBtn.style.left = (initialBotX + (currentX - botStartX)) + 'px'; botBtn.style.top = (initialBotY + (currentY - botStartY)) + 'px'; botBtn.style.bottom = 'auto'; botBtn.style.right = 'auto';
        }

        function dragBotEnd(e) {
            if(!isDraggingBot) return; isDraggingBot = false;
            let finalX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX; let finalY = e.type === 'touchend' ? e.changedTouches[0].clientY : e.clientY;
            if (Math.abs(finalX - botStartX) < 10 && Math.abs(finalY - botStartY) < 10) window.openBot();
        }

        window.updateBotTime = function() {
            let h = new Date().getHours(); 
            let manual = document.getElementById('sq24ManualTime').value;
            if(manual) h = parseInt(manual.split(':')[0]);
            
            let t = lexicon[currentLang] || lexicon['ku'];
            let greetingTxt = t.bot_greet ? t.bot_greet(h === 0 ? 24 : h) : `سڵاو! ئۆردەر بۆ کاتژمێر ${h === 0 ? 24 : h}:00 ئامادە دەکەم، نرخی ئێستام پێ بڵێ:`;
            document.getElementById('bot-greeting').innerHTML = greetingTxt;
        }

        window.openBot = function() { 
            window.updateBotTime(); 
            document.getElementById('bot-modal').style.display = 'block'; 
            document.getElementById('bot-results').style.display = 'none'; 
            renderLivePriceStatus();
            if((document.getElementById('priceSourceMode')?.value || 'auto') === 'auto') refreshLivePrice();
        }
        window.closeBot = function() { document.getElementById('bot-modal').style.display = 'none'; }

        // --- Auto Entry Decision Engine ---
        function ema(values, period) {
            if(!Array.isArray(values) || values.length === 0) return NaN;
            const k = 2 / (period + 1);
            let e = values[0];
            for(let i = 1; i < values.length; i++) e = values[i] * k + e * (1 - k);
            return e;
        }

        function atr(candles, period = 14) {
            if(!candles || candles.length < 2) return NaN;
            const tr = [];
            for(let i = 1; i < candles.length; i++) {
                const c = candles[i], prev = candles[i-1];
                tr.push(Math.max(c.high-c.low, Math.abs(c.high-prev.close), Math.abs(c.low-prev.close)));
            }
            const slice = tr.slice(-period);
            return slice.reduce((a,b)=>a+b,0) / Math.max(1, slice.length);
        }

        function tfState(candles) {
            if(!candles || candles.length < 55) return { bias:'neutral', score:0, close:NaN, atr:NaN, reason:'insufficient data' };
            // Ignore the still-forming candle for confirmation logic.
            const closed = candles.slice(0, -1);
            const closes = closed.map(c=>c.close);
            const last = closed[closed.length-1];
            const e20 = ema(closes.slice(-80), 20);
            const e50 = ema(closes.slice(-100), 50);
            const recent = closed.slice(-8);
            const hh = recent[recent.length-1].high > Math.max(...recent.slice(0,-1).map(c=>c.high));
            const ll = recent[recent.length-1].low < Math.min(...recent.slice(0,-1).map(c=>c.low));
            let score = 0;
            if(last.close > e20) score++;
            if(e20 > e50) score++;
            if(hh) score++;
            if(last.close < e20) score--;
            if(e20 < e50) score--;
            if(ll) score--;
            const bias = score >= 2 ? 'bullish' : score <= -2 ? 'bearish' : 'neutral';
            return { bias, score, close:last.close, atr:atr(closed), e20, e50 };
        }

        function candleTrigger(candles, side, zoneLow, zoneHigh, tolerance) {
            if(!candles || candles.length < 4) return {ok:false, text:'5m data unavailable'};
            const closed = candles.slice(0,-1);
            const c = closed[closed.length-1];
            const p = closed[closed.length-2];
            const touched = c.low <= zoneHigh + tolerance && c.high >= zoneLow - tolerance;
            if(side === 'buy') {
                const rejection = c.close > c.open && c.close > (c.low + (c.high-c.low)*0.58);
                const momentum = c.close > p.high || (c.close > p.close && c.low <= zoneHigh + tolerance);
                return {ok:touched && rejection && momentum, text:touched ? (rejection && momentum ? '5m bullish rejection confirmed' : '5m touched zone; candle confirmation pending') : 'Price has not tested BUY zone'};
            }
            const rejection = c.close < c.open && c.close < (c.low + (c.high-c.low)*0.42);
            const momentum = c.close < p.low || (c.close < p.close && c.high >= zoneLow - tolerance);
            return {ok:touched && rejection && momentum, text:touched ? (rejection && momentum ? '5m bearish rejection confirmed' : '5m touched zone; candle confirmation pending') : 'Price has not tested SELL zone'};
        }

        function matrixChannelForPrice(price, base, stepVal, trendDir, targetHour) {
            const col = targetHour - 1;
            let nFloat = trendDir === 'up'
                ? (price - base - col * stepVal) / (24 * stepVal)
                : (base - price - col * stepVal) / (24 * stepVal);
            let n1 = Math.floor(nFloat), n2 = Math.ceil(nFloat);
            if(n1 === n2) n2 = n1 + 1;
            let v1, v2;
            if(trendDir === 'up') {
                v1 = base + (n1 * 24 + col) * stepVal;
                v2 = base + (n2 * 24 + col) * stepVal;
            } else {
                v1 = base - (n1 * 24 + col) * stepVal;
                v2 = base - (n2 * 24 + col) * stepVal;
            }
            return {low:+Math.min(v1,v2).toFixed(2), high:+Math.max(v1,v2).toFixed(2)};
        }

        function parseTradeMBias(scan) {
            const unified = scan?.strategies?.unified || scan?.setup || {};
            const raw = String(unified.bias || unified.direction || unified.trend || scan?.market?.trend || '').toLowerCase();
            if(/buy|bull|up|long/.test(raw)) return 'bullish';
            if(/sell|bear|down|short/.test(raw)) return 'bearish';
            return 'neutral';
        }

        function extractTradeMZones(scan) {
            const unified = scan?.strategies?.unified || {};
            const supports = Array.isArray(unified.supportZones) ? unified.supportZones : [];
            const resistances = Array.isArray(unified.resistanceZones) ? unified.resistanceZones : [];
            const val = (z, side) => Number(z?.level ?? (side==='support' ? z?.low : z?.high) ?? z?.price);
            return {
                supports: supports.map(z => ({...z, _v:val(z,'support')})).filter(z => Number.isFinite(z._v)),
                resistances: resistances.map(z => ({...z, _v:val(z,'resistance')})).filter(z => Number.isFinite(z._v))
            };
        }

        function nearestBelow(list, price) {
            return list.filter(z => z._v <= price).sort((a,b)=>b._v-a._v)[0] || null;
        }
        function nearestAbove(list, price) {
            return list.filter(z => z._v >= price).sort((a,b)=>a._v-b._v)[0] || null;
        }

        function matrixImportantLines(channel) {
            const d = channel.high - channel.low;
            return {
                floor: +channel.low.toFixed(2),
                q25: +(channel.low + d*0.25).toFixed(2),
                mid: +(channel.low + d*0.50).toFixed(2),
                q75: +(channel.low + d*0.75).toFixed(2),
                ceiling: +channel.high.toFixed(2)
            };
        }

        function nearbySquareLines(base, stepVal, trendDir, targetHour, currentPrice, count=4) {
            const col = targetHour - 1;
            const candidates=[];
            for(let row=-40; row<80; row++) {
                let v = trendDir === 'up'
                    ? base + (row*24 + col)*stepVal
                    : base - (row*24 + col)*stepVal;
                if(v <= 0 || !Number.isFinite(v)) continue;
                const angle=(targetHour*15)%360;
                if(window.isTimePriceSquared(v, base, angle)) candidates.push(+v.toFixed(2));
            }
            return [...new Set(candidates)].sort((a,b)=>Math.abs(a-currentPrice)-Math.abs(b-currentPrice)).slice(0,count).sort((a,b)=>a-b);
        }

        function zoneState(price, lo, hi, nearDistance) {
            if(price >= lo && price <= hi) return {label:'ZONE ACTIVE', cls:'state-active'};
            const d = Math.min(Math.abs(price-lo), Math.abs(price-hi));
            if(d <= nearDistance) return {label:`NEAR · ${d.toFixed(2)} away`, cls:'state-near'};
            return {label:`WAIT · ${d.toFixed(2)} away`, cls:'state-far'};
        }

        const SETUP_JOURNAL_KEY = 'rfx_major_setup_journal_v1';

        function escapeHtml(value) {
            return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
        }

        function clamp(num, min, max) {
            return Math.min(max, Math.max(min, num));
        }

        function fmtPrice(v) {
            return Number.isFinite(Number(v)) ? Number(v).toFixed(2) : 'n/a';
        }

        function confidenceBand(score) {
            if(score >= 85) return 'EXCEPTIONAL';
            if(score >= 72) return 'MAJOR';
            if(score >= 58) return 'STRONG';
            if(score >= 42) return 'MODERATE';
            return 'WEAK';
        }

        function addScorePart(parts, label, points) {
            if(points > 0) parts.push({ label, points });
        }

        function scoreFromParts(parts) {
            return clamp(Math.round(parts.reduce((sum, p) => sum + p.points, 0)), 0, 100);
        }

        function mergeLevelCandidates(candidates, mergeDistance) {
            const sorted = candidates
                .filter(c => Number.isFinite(c.price) && c.price > 0)
                .sort((a, b) => a.price - b.price);
            const zones = [];
            sorted.forEach(c => {
                let z = zones.find(item => Math.abs(item.center - c.price) <= mergeDistance || (c.price >= item.low - mergeDistance && c.price <= item.high + mergeDistance));
                if(!z) {
                    z = { side: c.side, low: c.price, high: c.price, center: c.price, candidates: [] };
                    zones.push(z);
                }
                z.low = Math.min(z.low, c.price);
                z.high = Math.max(z.high, c.price);
                z.candidates.push(c);
                z.center = z.candidates.reduce((sum, item) => sum + item.price, 0) / z.candidates.length;
                if(z.candidates.some(item => item.side === 'buy') && z.candidates.some(item => item.side === 'sell')) z.side = 'both';
                else z.side = z.candidates.some(item => item.side === 'buy') ? 'buy' : 'sell';
            });
            return zones;
        }

        function psychologicalRoundScore(price) {
            const mod10 = Math.abs(price % 10);
            const near10 = Math.min(mod10, 10 - mod10);
            if(near10 <= 0.35) return 8;
            if(near10 <= 1) return 4;
            return 0;
        }

        function buildMajorZones(ctx) {
            const { currentPrice, lines, sqLines, zones, base, stepVal, targetHour, trendDir, tradeMBias, matrixGolden } = ctx;
            const candidates = [];
            const add = (side, price, source, weight) => {
                if(Number.isFinite(price) && price > 0) candidates.push({ side, price:Number(price), source, weight });
            };

            add('buy', lines.floor, 'Matrix channel floor', 20);
            add('buy', lines.q25, 'Matrix 25% level', 11);
            add('sell', lines.q75, 'Matrix 75% level', 11);
            add('sell', lines.ceiling, 'Matrix channel ceiling', 20);
            sqLines.forEach(v => add(v <= currentPrice ? 'buy' : 'sell', v, 'Square/time-price relationship', 16));
            zones.supports.slice(0, 6).forEach(z => add('buy', z._v, `TradeM support ${z.timeframe || ''}`.trim(), 22));
            zones.resistances.slice(0, 6).forEach(z => add('sell', z._v, `TradeM resistance ${z.timeframe || ''}`.trim(), 22));

            const channelSize = Math.max(stepVal * 24, lines.ceiling - lines.floor, stepVal * 8);
            const mergeDistance = Math.max(stepVal * 3, channelSize * 0.08);
            const halfWidth = Math.max(stepVal * 1.5, channelSize * 0.05);
            const merged = mergeLevelCandidates(candidates, mergeDistance);

            return merged.map(zone => {
                const low = +(zone.low - halfWidth).toFixed(2);
                const high = +(zone.high + halfWidth).toFixed(2);
                const center = +((low + high) / 2).toFixed(2);
                const parts = [];
                const uniqueSources = [...new Set(zone.candidates.map(c => c.source))];
                addScorePart(parts, `${uniqueSources.length} independent level source${uniqueSources.length === 1 ? '' : 's'}`, Math.min(28, uniqueSources.length * 9));
                addScorePart(parts, 'Matrix boundary or quarter confluence', Math.min(22, zone.candidates.filter(c => /Matrix/.test(c.source)).reduce((s, c) => s + c.weight, 0)));
                addScorePart(parts, 'TradeM support/resistance confluence', Math.min(24, zone.candidates.filter(c => /TradeM/.test(c.source)).reduce((s, c) => s + c.weight, 0)));
                addScorePart(parts, 'Square/time-price relationship', Math.min(18, zone.candidates.filter(c => /Square/.test(c.source)).reduce((s, c) => s + c.weight, 0)));
                addScorePart(parts, 'Important Matrix hour alignment', matrixGolden ? 10 : 0);
                addScorePart(parts, 'Trend/bias agrees with zone side', (tradeMBias === 'bullish' && zone.side === 'buy') || (tradeMBias === 'bearish' && zone.side === 'sell') ? 9 : 0);
                addScorePart(parts, 'Psychological round number nearby', psychologicalRoundScore(center));
                const score = scoreFromParts(parts);
                const distance = currentPrice >= low && currentPrice <= high ? 0 : Math.min(Math.abs(currentPrice - low), Math.abs(currentPrice - high));
                const sideLabel = zone.side === 'buy' ? 'BUY SUPPORT ZONE' : zone.side === 'sell' ? 'SELL RESISTANCE ZONE' : 'REACTION ZONE';
                return {
                    ...zone,
                    low,
                    high,
                    center,
                    sideLabel,
                    score,
                    band: confidenceBand(score),
                    parts,
                    sources: uniqueSources,
                    distance:+distance.toFixed(2),
                    mergeDistance:+mergeDistance.toFixed(2),
                    basis:`Matrix ${trendDir.toUpperCase()} from anchor ${fmtPrice(base)} at Baghdad hour ${targetHour}`
                };
            })
            .filter(z => z.score >= 32)
            .sort((a, b) => {
                const sidePriority = (b.score - a.score);
                if(Math.abs(sidePriority) > 8) return sidePriority;
                return a.distance - b.distance;
            })
            .slice(0, 4);
        }

        function riskPlanForZone(zone, lines, currentPrice, stepVal) {
            const channelSize = Math.max(stepVal * 24, lines.ceiling - lines.floor, stepVal * 8);
            const stopBuffer = Math.max(stepVal * 2.5, channelSize * 0.10);
            const entry = zone.side === 'buy' ? Math.min(zone.high, Math.max(zone.low, zone.center)) : Math.max(zone.low, Math.min(zone.high, zone.center));
            if(zone.side === 'buy') {
                const sl = +(zone.low - stopBuffer).toFixed(2);
                const risk = Math.max(stepVal, entry - sl);
                return { entry:+entry.toFixed(2), sl, tp1:+Math.max(lines.mid, entry + risk).toFixed(2), tp2:+Math.max(lines.ceiling, entry + risk * 2).toFixed(2), rr:+((Math.max(lines.ceiling, entry + risk * 2) - entry) / risk).toFixed(2) };
            }
            const sl = +(zone.high + stopBuffer).toFixed(2);
            const risk = Math.max(stepVal, sl - entry);
            return { entry:+entry.toFixed(2), sl, tp1:+Math.min(lines.mid, entry - risk).toFixed(2), tp2:+Math.min(lines.floor, entry - risk * 2).toFixed(2), rr:+((entry - Math.min(lines.floor, entry - risk * 2)) / risk).toFixed(2) };
        }

        function decideLifecycle(zone, ctx, confirmation, risk) {
            const { currentPrice, nearDistance, tradeMBias } = ctx;
            const inZone = currentPrice >= zone.low && currentPrice <= zone.high;
            const near = zone.distance <= nearDistance;
            const biasAgainst = (zone.side === 'buy' && tradeMBias === 'bearish') || (zone.side === 'sell' && tradeMBias === 'bullish');
            const reasons = [];
            let state = 'WATCHING';
            let action = 'WAIT';

            if(!near && !inZone) reasons.push(`Price is ${zone.distance.toFixed(2)} away from zone; no entry condition yet.`);
            if(near && !inZone) { state = 'WAITING FOR CONFIRMATION'; reasons.push('Price is near the major zone; wait for touch/rejection or breakout confirmation.'); }
            if(inZone) { state = 'WAITING FOR CONFIRMATION'; reasons.push('Price is inside the major zone; geometry alert is active.'); }
            if(biasAgainst) reasons.push('Higher-level bias conflicts with this side, so confirmation must be stronger.');
            if(risk.rr < 1.4) {
                state = 'NO TRADE';
                action = 'NO TRADE';
                reasons.push(`Risk/reward is only ${risk.rr}:1, below the 1.4 minimum.`);
            } else if((near || inZone) && confirmation.available && confirmation.ok && !biasAgainst) {
                state = zone.side === 'buy' ? 'CONFIRMED BUY' : 'CONFIRMED SELL';
                action = zone.side === 'buy' ? 'BUY' : 'SELL';
                reasons.push(confirmation.text);
            } else if((near || inZone) && confirmation.available && !confirmation.ok) {
                reasons.push(confirmation.text);
            } else if(near || inZone) {
                reasons.push('Market confirmation unavailable — geometry analysis only.');
            }
            return { state, action, reasons };
        }

        async function getMarketConfirmation(zone, providedCandles = null) {
            try {
                const candles = providedCandles || await fetchTradingViewXauUsdCandles(120, '5');
                const trigger = candleTrigger(candles, zone.side, zone.low, zone.high, Math.max(0.5, (zone.high - zone.low) * 0.2));
                const tf = tfState(candles);
                return {
                    available:true,
                    ok:trigger.ok,
                    text:`${trigger.text}; 5m trend state ${tf.bias}`,
                    tf,
                    candles
                };
            } catch(e) {
                return { available:false, ok:false, text:'Market confirmation unavailable — candle feed did not return usable 5m data.', error:e.message || String(e) };
            }
        }

        function saveSetupRecord(record) {
            try {
                const list = JSON.parse(localStorage.getItem(SETUP_JOURNAL_KEY) || '[]');
                list.unshift(record);
                localStorage.setItem(SETUP_JOURNAL_KEY, JSON.stringify(list.slice(0, 250)));
            } catch(e) {}
        }

        function journalStats() {
            try {
                const list = JSON.parse(localStorage.getItem(SETUP_JOURNAL_KEY) || '[]');
                const confirmed = list.filter(r => /^CONFIRMED/.test(r.state)).length;
                const noTrade = list.filter(r => r.action === 'NO TRADE').length;
                const wait = list.filter(r => r.action === 'WAIT').length;
                return { total:list.length, confirmed, noTrade, wait };
            } catch(e) {
                return { total:0, confirmed:0, noTrade:0, wait:0 };
            }
        }

        function updateDecisionTerminal(payload) {
            const bias = document.getElementById('terminalBias');
            const setup = document.getElementById('terminalSetup');
            const zones = document.getElementById('terminalZones');
            const confirm = document.getElementById('terminalConfirm');
            const why = document.getElementById('terminalWhy');
            const status = document.getElementById('decisionTerminalStatus');
            if(!bias || !setup || !zones || !confirm || !why || !status) return;
            if(!payload) return;
            bias.textContent = payload.bias || 'NEUTRAL';
            setup.textContent = payload.best ? `${payload.best.action} · ${payload.best.state}` : 'WAIT';
            zones.textContent = `${payload.zoneCount || 0} major zone${payload.zoneCount === 1 ? '' : 's'}`;
            confirm.textContent = payload.confirmation || 'Geometry only';
            why.textContent = payload.why || 'No decision calculated yet.';
            status.textContent = payload.updated || 'Updated';
        }

        function renderScoreBreakdown(parts) {
            return `<ul class="score-list">${parts.map(p => `<li><span>${escapeHtml(p.label)}</span><b>+${p.points}</b></li>`).join('')}</ul>`;
        }

        function renderZoneSummary(zones) {
            if(!zones.length) return '<div class="decision-warning">NO MAJOR ZONES FOUND — the engine refused to force a weak signal.</div>';
            return `<div class="major-zone-list">${zones.map(z => `
                <div class="major-zone-card ${z.side === 'buy' ? 'zone-buy' : 'zone-sell'}">
                    <div><b>${escapeHtml(z.sideLabel)}</b><span>${fmtPrice(z.low)} — ${fmtPrice(z.high)}</span></div>
                    <div><b>${z.score}/100</b><span>${z.band}</span></div>
                    <small>Distance ${fmtPrice(z.distance)} · ${escapeHtml(z.sources.join(' · '))}</small>
                </div>`).join('')}</div>`;
        }

        function renderSetupCard(zone, risk, lifecycle, confirmation) {
            const isBuy = zone.side === 'buy';
            return `
                <b style="font-size:18px;">${isBuy ? 'BUY SIDE' : 'SELL SIDE'} SETUP MAP</b><br>
                <div class="plan-state ${lifecycle.action === 'NO TRADE' ? 'state-far' : lifecycle.action === 'WAIT' ? 'state-near' : 'state-active'}">${escapeHtml(lifecycle.state)}</div>
                <div class="setup-line"><b>Major zone:</b> <span class="target-val">${fmtPrice(zone.low)} — ${fmtPrice(zone.high)}</span></div>
                <div class="setup-line"><b>Geometry score:</b> ${zone.score}/100 · ${zone.band}</div>
                <div class="setup-line"><b>Entry reference:</b> <span class="target-val">${fmtPrice(risk.entry)}</span></div>
                <div class="setup-line"><b>Invalidation / SL:</b> <span style="color:#ff5555;font-family:monospace;font-weight:900;">${fmtPrice(risk.sl)}</span></div>
                <div class="setup-line"><b>TP1:</b> <span class="target-val">${fmtPrice(risk.tp1)}</span> · <b>TP2:</b> <span class="target-val">${fmtPrice(risk.tp2)}</span> · <b>RR:</b> ${risk.rr}:1</div>
                <div class="why-panel"><b>WHY</b>${renderScoreBreakdown(zone.parts)}<div class="why-text">${lifecycle.reasons.map(escapeHtml).join('<br>')}</div></div>
                <div class="market-confirm-note">${escapeHtml(confirmation.text || 'Market confirmation unavailable — geometry analysis only.')}</div>`;
        }

        window.generateMatrixSignal = async function() {
            const btn = document.querySelector('.bot-btn-submit');
            const input = document.getElementById('botPriceInput');
            const status = document.getElementById('bot-status');
            const buyBox = document.getElementById('buyBox');
            const sellBox = document.getElementById('sellBox');
            document.getElementById('bot-results').style.display = 'block';
            buyBox.style.display = 'none'; sellBox.style.display = 'none';

            const priceMode = document.getElementById('priceSourceMode')?.value || 'auto';
            let currentPrice = priceMode === 'manual' ? Number(input.value) : livePriceState.price;
            if(priceMode === 'auto' && !Number.isFinite(currentPrice)) currentPrice = await refreshLivePrice(true);
            if(!Number.isFinite(currentPrice) || currentPrice <= 0) {
                status.innerHTML = '<span style="color:#ff5555;font-weight:900;">PRICE ERROR</span><br>No live price. Switch to MANUAL and type XAU/USD, or press Refresh Price.';
                return;
            }
            input.value = currentPrice.toFixed(2);
            if(btn) btn.disabled = true;
            status.innerHTML = `✅ XAU/USD <b style="color:var(--neon-cyan)">${currentPrice.toFixed(2)}</b><br><span style="color:#aaa">Calculating Matrix lines and both entry plans…</span>`;

            try {
                const scan = await fetchTradeMScan().catch(()=>null);
                const tradeMBias = parseTradeMBias(scan);
                const stepVal = Math.max(0.01, parseFloat(document.getElementById('sq24StepValue').value) || 1);
                const bp = getBaghdadParts();
                const targetHour = bp.hour === 0 ? 24 : bp.hour;
                const matrixGolden = MATRIX_GOLDEN_HOURS.includes(targetHour);

                // Do not require candles. Prefer a TradeM anchor when available; otherwise use the existing Matrix anchor.
                let configuredDir = document.getElementById('sq24TrendDir').value || 'down';
                let trendDir = tradeMBias === 'bullish' ? 'up' : tradeMBias === 'bearish' ? 'down' : configuredDir;
                let selectedAnchor = null;
                if(scan) {
                    try { selectedAnchor = selectSq24AnchorFromTradeM(scan, trendDir, stepVal); } catch(e) {}
                    if(!selectedAnchor) {
                        const alt = trendDir==='up'?'down':'up';
                        try { selectedAnchor = selectSq24AnchorFromTradeM(scan, alt, stepVal); if(selectedAnchor) trendDir=alt; } catch(e) {}
                    }
                }
                let base = Number(selectedAnchor?.base || document.getElementById('sq24BasePrice').value);
                if(!Number.isFinite(base) || base <= 0) {
                    // Last-resort deterministic anchor: round live price to a 24-step band.
                    base = roundToStep(currentPrice + (trendDir==='down'?12:-12)*stepVal, stepVal);
                }
                document.getElementById('sq24TrendDir').value = trendDir;
                document.getElementById('sq24BasePrice').value = base;
                drawSq24();

                const channel = matrixChannelForPrice(currentPrice, base, stepVal, trendDir, targetHour);
                const lines = matrixImportantLines(channel);
                const sqLines = nearbySquareLines(base, stepVal, trendDir, targetHour, currentPrice, 4);
                const zones = extractTradeMZones(scan);
                const sup = nearestBelow(zones.supports, currentPrice);
                const res = nearestAbove(zones.resistances, currentPrice);

                const channelSize = Math.max(stepVal*24, channel.high-channel.low);
                const nearDistance = Math.max(stepVal*5, channelSize*0.20);
                const majorZones = buildMajorZones({ currentPrice, lines, sqLines, zones, base, stepVal, targetHour, trendDir, tradeMBias, matrixGolden });
                const buyZone = majorZones.find(z => z.side === 'buy') || null;
                const sellZone = majorZones.find(z => z.side === 'sell') || null;
                const bestZone = majorZones[0] || null;

                let buyConfirmation = { available:false, ok:false, text:'Market confirmation unavailable — geometry analysis only.' };
                let sellConfirmation = { available:false, ok:false, text:'Market confirmation unavailable — geometry analysis only.' };
                let confirmationCandles = null;
                let candleFeedAvailable = false;
                if(bestZone) {
                    try {
                        confirmationCandles = await fetchTradingViewXauUsdCandles(120, '5');
                        candleFeedAvailable = true;
                    } catch(e) {}
                    const bestConfirmation = candleFeedAvailable ? await getMarketConfirmation(bestZone, confirmationCandles) : { available:false, ok:false, text:'Market confirmation unavailable — candle feed did not return usable 5m data.' };
                    if(bestZone.side === 'buy') buyConfirmation = bestConfirmation;
                    if(bestZone.side === 'sell') sellConfirmation = bestConfirmation;
                }
                if(buyZone && buyZone !== bestZone) buyConfirmation = candleFeedAvailable ? await getMarketConfirmation(buyZone, confirmationCandles) : { available:false, ok:false, text:'Market confirmation unavailable — candle feed did not return usable 5m data.' };
                if(sellZone && sellZone !== bestZone) sellConfirmation = candleFeedAvailable ? await getMarketConfirmation(sellZone, confirmationCandles) : { available:false, ok:false, text:'Market confirmation unavailable — candle feed did not return usable 5m data.' };

                const buyRisk = buyZone ? riskPlanForZone(buyZone, lines, currentPrice, stepVal) : null;
                const sellRisk = sellZone ? riskPlanForZone(sellZone, lines, currentPrice, stepVal) : null;
                const buyLife = buyZone ? decideLifecycle(buyZone, { currentPrice, nearDistance, tradeMBias }, buyConfirmation, buyRisk) : null;
                const sellLife = sellZone ? decideLifecycle(sellZone, { currentPrice, nearDistance, tradeMBias }, sellConfirmation, sellRisk) : null;
                const bestLife = bestZone === buyZone ? buyLife : bestZone === sellZone ? sellLife : null;
                const stats = journalStats();

                status.innerHTML = `
                    <div style="font-size:20px;color:var(--warn);font-weight:900;">MAJOR MARKET ZONE ENGINE</div>
                    <div style="margin-top:7px;">Live XAU/USD: <b style="color:var(--accent);font-size:18px;">${currentPrice.toFixed(2)}</b></div>
                    <div style="margin-top:5px;color:#ddd;font-weight:900;">${bestLife ? `${bestLife.action} · ${bestLife.state}` : 'WAIT · NO TRADE SETUP FORCED'}</div>
                    <div style="margin-top:5px;color:#999;">TradeM bias: ${tradeMBias.toUpperCase()} · Matrix ${trendDir.toUpperCase()} · Anchor ${base}</div>
                    <div style="margin-top:5px;color:${matrixGolden?'var(--warn)':'#888'};">${matrixGolden?'IMPORTANT MATRIX HOUR':'Normal Matrix hour'} · Baghdad ${String(bp.hour).padStart(2,'0')}:${String(bp.minute).padStart(2,'0')}</div>
                    <div class="levels-grid">
                        <div class="level-card"><small>Floor</small><b>${lines.floor}</b></div>
                        <div class="level-card"><small>25%</small><b>${lines.q25}</b></div>
                        <div class="level-card"><small>50% Balance</small><b>${lines.mid}</b></div>
                        <div class="level-card"><small>75%</small><b>${lines.q75}</b></div>
                        <div class="level-card"><small>Ceiling</small><b>${lines.ceiling}</b></div>
                        <div class="level-card"><small>Current</small><b style="color:var(--accent)">${currentPrice.toFixed(2)}</b></div>
                    </div>
                    <div class="engine-explainer"><b>Decision rule:</b> MARKET DATA → MAJOR LEVEL ENGINE → TIMING/GEOMETRY → MARKET CONFIRMATION → SIGNAL/RISK. Timing and geometry can create WATCH zones, but BUY/SELL needs confirmation.</div>
                    ${renderZoneSummary(majorZones)}
                    <div class="journal-stats">Stored setup checks: ${stats.total} · confirmed ${stats.confirmed} · no-trade ${stats.noTrade} · waiting ${stats.wait}</div>`;

                buyBox.style.display = buyZone ? 'block' : 'none';
                if(buyZone && buyRisk && buyLife) buyBox.innerHTML = renderSetupCard(buyZone, buyRisk, buyLife, buyConfirmation);

                sellBox.style.display = sellZone ? 'block' : 'none';
                if(sellZone && sellRisk && sellLife) sellBox.innerHTML = renderSetupCard(sellZone, sellRisk, sellLife, sellConfirmation);

                if(bestZone && bestLife) {
                    const bestRisk = bestZone === buyZone ? buyRisk : sellRisk;
                    saveSetupRecord({
                        timestamp:new Date().toISOString(),
                        symbol:'XAUUSD',
                        timeframe:'Matrix24 / 5m confirmation',
                        action:bestLife.action,
                        state:bestLife.state,
                        direction:bestZone.side,
                        entry:bestRisk?.entry,
                        sl:bestRisk?.sl,
                        tp1:bestRisk?.tp1,
                        tp2:bestRisk?.tp2,
                        rr:bestRisk?.rr,
                        zone:{ low:bestZone.low, high:bestZone.high, score:bestZone.score, band:bestZone.band, sources:bestZone.sources },
                        reasons:bestLife.reasons,
                        confidenceType:'geometry score, not statistical probability',
                        market:{ price:currentPrice, bias:tradeMBias, confirmation:bestZone === buyZone ? buyConfirmation.text : sellConfirmation.text }
                    });
                }

                updateDecisionTerminal({
                    bias:tradeMBias.toUpperCase(),
                    best:bestLife,
                    zoneCount:majorZones.length,
                    confirmation:(buyConfirmation.available || sellConfirmation.available) ? '5m candle checked' : 'Geometry only',
                    why:bestZone ? `${bestZone.sideLabel}: ${bestZone.score}/100 ${bestZone.band}. ${bestZone.sources.join(' · ')}` : 'No strong merged zone found; system is waiting.',
                    updated:`Updated ${String(bp.hour).padStart(2,'0')}:${String(bp.minute).padStart(2,'0')} Baghdad`
                });
            } catch(e) {
                status.innerHTML = `<span style="color:#ff5555;font-weight:900;">CALCULATION ERROR</span><br>${e.message || e}`;
            } finally {
                if(btn) btn.disabled = false;
                renderLivePriceStatus();
            }
        };

        // --- Map Zoom & Pan ---
        let sc = window.innerWidth < 600 ? 0.2 : 0.3;
        let px = 0, py = 0, dg = false, sx, sy, iDist = 0;
        const vM = document.getElementById('viewport-maps'), zL = document.getElementById('zoom-layer');
        
        function upT() { zL.style.transform = `translate(${px}px, ${py}px) scale(${sc})`; }
        function getEP(e) { return e.touches && e.touches.length > 0 ? {x: e.touches[0].clientX, y: e.touches[0].clientY} : {x: e.clientX, y: e.clientY}; }

        vM.addEventListener('mousedown', e => {
            if(e.target.closest('.sidebar') || e.target.closest('.header') || e.target.closest('#San-bot-btn') || e.target.closest('#bot-modal')) return;
            let p = getEP(e); dg = true; sx = p.x - px; sy = p.y - py; vM.style.cursor = 'grabbing';
        });
        
        window.addEventListener('mousemove', e => {
            if(dg) { let p = getEP(e); px = p.x - sx; py = p.y - sy; upT(); }
        });
        
        window.addEventListener('mouseup', () => { dg = false; vM.style.cursor = 'grab'; });
        
        vM.addEventListener('wheel', e => {
            if(e.target.closest('.sidebar') || e.target.closest('.header') || e.target.closest('#bot-modal')) return;
            e.preventDefault(); sc += e.deltaY * -0.001; sc = Math.min(Math.max(0.05, sc), 5); upT();
        }, {passive: false});
        
        vM.addEventListener('touchstart', e => {
            if(e.target.closest('.sidebar') || e.target.closest('.header') || e.target.closest('#San-bot-btn') || e.target.closest('#bot-modal')) return;
            if(e.touches.length === 2) { dg = false; iDist = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY); }
            else { let p = getEP(e); dg = true; sx = p.x - px; sy = p.y - py; }
        }, {passive: false});
        
        vM.addEventListener('touchmove', e => {
            if(e.target.closest('.sidebar') || e.target.closest('.header') || e.target.closest('#San-bot-btn') || e.target.closest('#bot-modal')) return;
            if(e.touches.length === 2) {
                e.preventDefault(); const d = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
                sc = Math.min(Math.max(0.05, sc * (d / iDist)), 5); iDist = d; upT();
            } else if(dg) { e.preventDefault(); let p = getEP(e); px = p.x - sx; py = p.y - sy; upT(); }
        }, {passive: false});
        
        window.addEventListener('touchend', () => { dg = false; });
