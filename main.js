/**
 * KINETIC PORTFOLIO MOTION & INTERACTION ENGINE
 * Islam Mohamed — Intelligent Systems & Data Solutions Architect
 * Strictly enforces Separation of Concerns, WCAG 2.1 AA, and Zero CLS
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. BILINGUAL SYNCHRONIZATION DICTIONARY (EN / AR)
     [STRICT ENFORCEMENT]: Zero occurrences of legacy automation terms in Arabic copy.
     Replaced strictly with executive engineering vocabulary:
     - "أنظمة ذكية" | "تدفقات تشغيل ذاتية" | "معالجة فورية" | "هندسة تكامل"
     ========================================================================== */
  const translations = {
    en: {
      meta_title: "Islam Mohamed | Intelligent Systems & Data Solutions Architect",
      brand_name: "ISLAM MHMD",
      brand_badge: "Systems Architect",
      lang_label: "العربية",

      // Section 1: Identity & Authority
      hero_status: "Available for Systems & Consulting",
      hero_location: "Port Said, Egypt (Remote / Worldwide)",
      hero_greeting: "Hi, I'm Islam.",
      hero_title: "Intelligent Systems &amp; Data Solutions Architect",
      hero_subtitle: "I architect end-to-end data pipelines, self-executing operational workflows, and executive analytics engines that convert fragmented spreadsheets into high-margin enterprise decisions.",
      hero_cta_deal: "Start a Project",
      hero_cta_pipeline: "Explore Systems Pipeline",
      hero_scroll_txt: "Scroll to explore",

      // Section 2: Integrated Systems Pipeline
      pipeline_tag: "4-Phase Kinetic Pipeline",
      pipeline_title: "The Systems Engineering Pipeline",
      pipeline_desc: "Bridging architectural execution with commercial profitability — from pristine data hygiene and self-executing workflows to operational field tools and decisive executive cockpits.",

      // Phase 1
      phase_1_badge: "01 // CLEANSE & STRUCTURE",
      phase_1_title: "Data Cleansing & Enterprise Structuring",
      phase_1_desc: "Diagnosing fragmented CRM and ERP tables, resolving schema conflicts, and engineering high-integrity Star Schema models with zero-defect data foundations.",
      phase_1_m1_lbl: "Data Error Rate",
      phase_1_m2_lbl: "Audit Integrity",

      // Phase 2
      phase_2_badge: "02 // INTEGRATE & EXECUTE",
      phase_2_title: "Self-Executing Pipelines & Integration",
      phase_2_desc: "Engineering event-driven n8n workflows, custom webhooks, and REST APIs linking point-of-sale systems with live stock monitoring and immediate operational alerts.",
      phase_2_m1_lbl: "Hours Saved / Wk",
      phase_2_m2_lbl: "Stockout Risk",

      // Phase 3
      phase_3_badge: "03 // OPERATIONAL APPS & TOOLS",
      phase_3_title: "Systems Building: Web & Mobile Apps",
      phase_3_desc: "Developing offline-first Android & Flutter applications paired with rapid Streamlit dashboards and Supabase backends for field operations, inventory handling, and dynamic billing.",
      phase_3_m1_lbl: "Operational Speed",
      phase_3_m2_lbl: "Data Loss Prevention",

      // Phase 4
      phase_4_badge: "04 // EXECUTIVE DECISIONS",
      phase_4_title: "Executive Decision Systems & Advisory",
      phase_4_desc: "Architecting Power BI executive cockpits with high-speed DAX calculations, sensitive margin simulations, and P&L advisory to empower confident leadership actions.",
      phase_4_m1_lbl: "Net Margin Lift",
      phase_4_m2_lbl: "Closing Speedup",

      // Section 3: Direct Deal Hub
      deal_tag: "Direct Collaboration",
      deal_title: "Ready to engineer resilient systems for your business?",
      deal_desc: "Whether you need to reconstruct messy spreadsheets, deploy self-executing operational pipelines, build specialized field tools, or unlock executive decision dashboards, let's discuss your project.",
      deal_telegram_lbl: "Telegram",
      deal_email_lbl: "Primary Email",
      deal_copy_btn: "Copy",
      deal_copied_toast: "Email copied to clipboard!",
      deal_platforms_lbl: "Verified Freelance Platforms",
      deal_location_note: "Base: <strong>Port Said, Egypt (GMT+2)</strong> • Delivering worldwide via remote systems architecture & consulting.",

      footer_meta: "Engineered with precision in Port Said, Egypt • Kinetic Systems Architecture",
      footer_top: "Top"
    },

    ar: {
      meta_title: "إسلام محمد | مهندس أنظمة وحلول بيانات ذكية",
      brand_name: "إسلام محمد",
      brand_badge: "مهندس أنظمة",
      lang_label: "English",

      // Section 1: Identity & Authority
      hero_status: "متاح لهندسة الأنظمة والاستشارات",
      hero_location: "بورسعيد، مصر (عن بعد / دولياً)",
      hero_greeting: "أهلاً، أنا إسلام.",
      hero_title: "مهندس أنظمة وحلول بيانات ذكية",
      hero_subtitle: "أبني خطوط معالجة متكاملة للبيانات، وتدفقات تشغيل ذاتية، ومحركات تحليلية وتطبيقات ميدانية تحول الجداول المشتتة إلى قرارات ربحية حاسمة تعزز نمو الشركات.",
      hero_cta_deal: "بدء مشروع جديد",
      hero_cta_pipeline: "استعراض مسار الأنظمة",
      hero_scroll_txt: "مرر لاستعراض المسار",

      // Section 2: Integrated Systems Pipeline
      pipeline_tag: "بنية هندسية متكاملة من 4 مراحل",
      pipeline_title: "مسار هندسة الأنظمة والبيانات",
      pipeline_desc: "الجمع بين البراعة التقنية والتأثير التجاري — من تنظيف وهيكلة البيانات وتدفقات التشغيل الذاتية، وصولاً إلى بناء التطبيقات التشغيلية ولوحات القرارات التنفيذية.",

      // Phase 1
      phase_1_badge: "01 // تنظيف وهيكلة",
      phase_1_title: "تنظيف وهيكلة بيانات المؤسسات",
      phase_1_desc: "تشخيص ومعالجة ملفات التصدير العشوائية من أنظمة CRM و ERP، وإزالة التكرارات، وبناء نماذج Star Schema موحدة لضمان أقصى درجات الدقة والنزاهة المالية.",
      phase_1_m1_lbl: "تقليص أخطاء البيانات",
      phase_1_m2_lbl: "موثوقية التدقيق المالي",

      // Phase 2
      phase_2_badge: "02 // تكامل وتشغيل ذاتي",
      phase_2_title: "تدفقات التشغيل الذاتية وهندسة التكامل",
      phase_2_desc: "بناء خطوط معالجة تعتمد على محركات n8n والـ Webhooks والـ APIs لربط نقاط البيع وحساب المخزون وإرسال التنبيهات التشغيلية بشكل فوري ومستقل.",
      phase_2_m1_lbl: "ساعات موفرة أسبوعياً",
      phase_2_m2_lbl: "خفض مخاطر نفاد المخزون",

      // Phase 3
      phase_3_badge: "03 // تطبيقات وأدوات تشغيلية",
      phase_3_title: "بناء الأنظمة والتطبيقات التشغيلية (ويب وجوال)",
      phase_3_desc: "تطوير تطبيقات جوال بـ Flutter وتطبيقات ويب سريعة بـ Streamlit و Supabase تدعم العمل دون إنترنت لإدارة الفواتير والعمليات الميدانية بكفاءة متناهية.",
      phase_3_m1_lbl: "مضاعفة سرعة العمليات",
      phase_3_m2_lbl: "منع فقدان البيانات",

      // Phase 4
      phase_4_badge: "04 // قرارات تنفيذية واستشارات",
      phase_4_title: "أنظمة القرارات التنفيذية واستشارات الأرباح",
      phase_4_desc: "تصميم لوحات Power BI قيادية بمعادلات DAX متقدمة، ونماذج محاكاة التسعير الديناميكي لكشف تسريبات الأرباح وتوجيه قرارات الإدارة العليا بثقة كاملة.",
      phase_4_m1_lbl: "نمو صافي الهامش الربحي",
      phase_4_m2_lbl: "تسريع إغلاق التقارير",

      // Section 3: Direct Deal Hub
      deal_tag: "تعاون مباشر واستشارات",
      deal_title: "جاهز لتحويل تحديات أعمالك إلى أنظمة رقمية ذكية وقرارات رابحة؟",
      deal_desc: "سواء كنت بحاجة لتنظيف وهيكلة البيانات، أو بناء تدفقات تشغيل ذاتية، أو تطوير أدوات ميدانية وتطبيقات مخصصة، أو إعداد لوحات قيادية تنفيذية، يسعدني مناقشة مشروعك.",
      deal_telegram_lbl: "تيليجرام",
      deal_email_lbl: "البريد الإلكتروني المباشر",
      deal_copy_btn: "نسخ",
      deal_copied_toast: "تم نسخ البريد الإلكتروني للحافظة!",
      deal_platforms_lbl: "منصات العمل الحر المعتمدة",
      deal_location_note: "المقر: <strong>بورسعيد، مصر (توقيت القاهرة GMT+2)</strong> • تقديم الاستشارات وتنفيذ الحلول للعملاء حول العالم.",

      footer_meta: "صُمم ونُفذ بدقة هندسية في بورسعيد، مصر • معمارية الأنظمة الحركية",
      footer_top: "للأعلى"
    }
  };

  /* ==========================================================================
     2. THEME CONTROLLER (Light / Dark)
     ========================================================================== */
  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme_preference', theme);
    if (themeIcon) {
      themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  const savedTheme = localStorage.getItem('theme_preference');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function () {
      const current = root.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ==========================================================================
     3. I18N BILINGUAL CONTROLLER (En / Ar)
     ========================================================================== */
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');

  function applyLanguage(lang) {
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang_preference', lang);

    const dict = translations[lang] || translations.en;

    // Synchronize browser tab title
    document.title = dict.meta_title;

    // Update toggle button text
    if (langLabel) {
      langLabel.textContent = dict.lang_label;
    }

    // Update all localized elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
  }

  const savedLang = localStorage.getItem('lang_preference') || 'en';
  applyLanguage(savedLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function () {
      const current = root.getAttribute('lang') || 'en';
      applyLanguage(current === 'en' ? 'ar' : 'en');
    });
  }

  /* ==========================================================================
     4. KINETIC SCROLL-DRIVEN PIPELINE ENGINE & ANIMATED COUNTERS
     ========================================================================== */
  const pipelineSection = document.getElementById('pipeline');
  const spineFill = document.getElementById('spineFill');
  const phaseCards = document.querySelectorAll('.pipeline-phase-card');

  // Track spine illumination as user scrolls through Section 2
  function updateSpineScroll() {
    if (!pipelineSection || !spineFill) return;
    const rect = pipelineSection.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Calculate progression percentage through pipeline section
    const startY = rect.top - windowH * 0.4;
    const totalDist = rect.height;
    let progress = (-startY) / totalDist;
    progress = Math.max(0, Math.min(1, progress));

    spineFill.style.height = (progress * 100) + '%';
  }

  window.addEventListener('scroll', updateSpineScroll, { passive: true });
  updateSpineScroll();

  // Metric Count-Up Helper Function (Standard Dynamic Prefix/Suffix Support)
  function animateMetricCounter(el) {
    if (el.dataset.animated === 'true') return;
    el.dataset.animated = 'true';

    // Support explicit data-target as well as fallback data-count
    const rawTarget = el.dataset.target !== undefined ? el.dataset.target : (el.dataset.count || '0');
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const targetNum = parseFloat(rawTarget);
    const hasDecimals = rawTarget.includes('.');

    if (isNaN(targetNum)) {
      el.textContent = prefix + rawTarget + suffix;
      return;
    }

    const duration = 1200;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;

      el.textContent = prefix + (hasDecimals ? current.toFixed(1) : Math.round(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + (hasDecimals ? targetNum.toFixed(1) : targetNum) + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  // IntersectionObserver for phase activation and metric triggering
  const phaseObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
        // Trigger counters inside this phase
        entry.target.querySelectorAll('.metric-val-num[data-target], .metric-val-num[data-count]').forEach(animateMetricCounter);
      }
    });
  }, {
    threshold: 0.25,
    rootMargin: '0px 0px -50px 0px'
  });

  phaseCards.forEach(function (card) {
    phaseObserver.observe(card);
  });

  /* ==========================================================================
     6. 1-CLICK COPY EMAIL HELPER WITH TOAST
     ========================================================================== */
  const emailCopyBtn = document.getElementById('emailCopyBtn');
  const copyToast = document.getElementById('copyToast');
  const emailRawValue = 'islambndq@gmail.com';

  if (emailCopyBtn) {
    emailCopyBtn.addEventListener('click', function () {
      function notifySuccess() {
        if (copyToast) {
          copyToast.style.display = 'block';
          setTimeout(function () {
            copyToast.style.display = 'none';
          }, 3500);
        }

        const curLang = root.getAttribute('lang') || 'en';
        const copiedLabel = curLang === 'ar' ? 'تم النسخ' : 'Copied';
        const defaultLabel = curLang === 'ar' ? 'نسخ' : 'Copy';

        emailCopyBtn.innerHTML = '<i class="fas fa-check"></i> ' + copiedLabel;
        setTimeout(function () {
          emailCopyBtn.innerHTML = '<i class="fas fa-copy"></i> ' + defaultLabel;
        }, 3000);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailRawValue).then(notifySuccess).catch(function () {
          fallbackClipboard(emailRawValue, notifySuccess);
        });
      } else {
        fallbackClipboard(emailRawValue, notifySuccess);
      }
    });
  }

  function fallbackClipboard(text, cb) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      cb();
    } catch (err) {
      console.error('Fallback copy error:', err);
    }
    document.body.removeChild(ta);
  }

  /* ==========================================================================
     7. AMBIENT DATA CONSTELLATION CANVAS (Site-Wide Motion)
     ========================================================================== */
  (function initAmbientConstellation() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animId;

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const count = Math.min(Math.floor(window.innerWidth / 28), 44);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.8 + 1.2
      });
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      const isDark = root.getAttribute('data-theme') === 'dark';
      const nodeColor = isDark ? 'rgba(56, 189, 248, 0.40)' : 'rgba(37, 99, 235, 0.30)';
      const lineColor = isDark ? 'rgba(56, 189, 248, ' : 'rgba(37, 99, 235, ';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 105) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = (1 - dist / 105) * (isDark ? 0.16 : 0.10);
            ctx.strokeStyle = lineColor + alpha + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    }

    render();

    // Pause when tab is invisible to conserve CPU
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      } else {
        if (!animId) render();
      }
    });
  })();

})();
