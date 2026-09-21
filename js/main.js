(function () {
  'use strict';

  var translations = {
    ar: {
      'meta.title': 'مكتب سيد معوض | المحامي بالنقض والإدارية العليا',
      'meta.desc': 'مكتب الأستاذ سيد معوض، المحامي بالنقض والإدارية العليا والدستورية العليا، عضو مجلس نقابة المحامين بجنوب القليوبية. طعون النقض، الإدارية العليا، الدعاوى الدستورية، والاستشارات القانونية.',
      'brand.name': 'سيد معوض',
      'brand.sub': 'المحامي بالنقض والإدارية العليا',
      'nav.home': 'الرئيسية', 'nav.ladder': 'درجات التقاضي', 'nav.services': 'خدماتنا', 'nav.standing': 'المكانة', 'nav.contact': 'تواصل معنا', 'nav.cta': 'اتصل الآن',
      'lang.toggle': 'EN',
      'hero.pre': 'الأستاذ',
      'hero.name': 'سيد معوض',
      'hero.role': 'المحامي بالنقض والإدارية العليا',
      'hero.member': 'عضو مجلس نقابة المحامين بجنوب القليوبية',
      'hero.lead': 'حيث تنتهي درجات التقاضي، تبدأ خبرتنا. طعون النقض والإدارية العليا والدعاوى الدستورية بدراسة عميقة وصياغة متقنة.',
      'hero.cta1': 'اتصل الآن', 'hero.cta2': 'واتساب',
      'tt.a': 'النقض', 'tt.b': 'الإدارية العليا', 'tt.c': 'الدستورية العليا', 'tt.d': 'الاستشارات القضائية',
      'ld.tag': 'درجات التقاضي',
      'ld.title': 'قمة الهرم القضائي',
      'ld.lead': 'القضية تمر بدرجات. وعند القمة تُصحَّح الأخطاء في تطبيق القانون، وهنا تحديدًا يتركز عملنا.',
      'r1.title': 'محاكم أول درجة', 'r1.desc': 'تنظر الوقائع والأدلة وتصدر الحكم الأول.',
      'r2.title': 'الاستئناف', 'r2.desc': 'إعادة نظر الموضوع أمام محكمة أعلى.',
      'r3.title': 'النقض · الإدارية العليا · الدستورية العليا',
      'r3.desc': 'مراجعة صحة تطبيق القانون في الحكم، وتدقيق الطعون في أعلى ساحات القضاء. وهنا يعمل الأستاذ سيد معوض.',
      'ld.note': 'مواعيد الطعن محددة وصارمة، وفواتها قد يُسقط الحق. اعرض حكمك على محاميك في أقرب وقت.',
      'sv.tag': 'خدماتنا',
      'sv.title': 'ما نتولاه بإتقان',
      'sv.lead': 'كل طعن يبدأ بدراسة دقيقة للحكم وأوراق الدعوى.',
      'sv1.title': 'الطعن بالنقض', 'sv1.desc': 'دراسة الأحكام النهائية وتحديد أسباب الطعن، وصياغة صحيفة الطعن ومذكراته، ومتابعة الطعن حتى الفصل فيه.',
      'sv2.title': 'المحكمة الإدارية العليا', 'sv2.desc': 'الطعن على أحكام القضاء الإداري، ومنازعات القرارات الإدارية والموظفين والجهات الحكومية.',
      'sv3.title': 'الدعاوى الدستورية', 'sv3.desc': 'الدفع بعدم دستورية النصوص القانونية، وإعداد الدعاوى والمذكرات أمام المحكمة الدستورية العليا.',
      'sv4.title': 'استشارات قانونية وقضائية', 'sv4.desc': 'رأي قانوني واضح قبل أي خطوة: هل يستحق حكمك الطعن؟ وما فرص كل طريق ومخاطره؟',
      'nav.courts': 'المحاكم العليا', 'nav.process': 'طريقة العمل', 'nav.faq': 'أسئلة شائعة',
      'ct.tag': 'المحاكم العليا', 'ct.title': 'ثلاث ساحات، خبرة واحدة', 'ct.lead': 'نعمل أمام أعلى محاكم الدولة، حيث لا مجال للخطأ ولا للاجتهاد غير المدروس.',
      'cc1.title': 'محكمة النقض', 'cc1.desc': 'أعلى محكمة في القضاء العادي. لا تعيد نظر الوقائع، بل تراجع صحة تطبيق القانون وتفسيره وسلامة الإجراءات في الحكم المطعون فيه.',
      'cc1.i1': 'الطعون المدنية والتجارية', 'cc1.i2': 'الطعون الجنائية', 'cc1.i3': 'طعون الأحوال الشخصية', 'cc1.i4': 'طلبات وقف تنفيذ الأحكام المطعون فيها',
      'cc2.title': 'المحكمة الإدارية العليا', 'cc2.desc': 'قمة القضاء الإداري. تفصل في الطعون على أحكام محاكم القضاء الإداري والمحاكم التأديبية.',
      'cc2.i1': 'الطعن على القرارات الإدارية', 'cc2.i2': 'منازعات الموظفين والترقيات', 'cc2.i3': 'التعويض عن القرارات الإدارية', 'cc2.i4': 'العقود الإدارية والطعون التأديبية',
      'cc3.title': 'المحكمة الدستورية العليا', 'cc3.desc': 'الحارسة على دستورية القوانين واللوائح، وصاحبة الاختصاص في تفسير النصوص التشريعية.',
      'cc3.i1': 'الدفع بعدم دستورية النصوص', 'cc3.i2': 'الدعاوى الدستورية', 'cc3.i3': 'طلبات تفسير النصوص التشريعية',
      'pr.tag': 'طريقة العمل', 'pr.title': 'كيف نعمل على طعنك', 'pr.lead': 'خمس مراحل منظمة، من استلام الحكم حتى الفصل في الطعن.',
      'pr1.title': 'نستلم حكمك', 'pr1.desc': 'صورة الحكم وأوراق الدعوى ومستنداتها.',
      'pr2.title': 'نفحص المواعيد', 'pr2.desc': 'التأكد من ميعاد الطعن والشروط الشكلية أولًا.',
      'pr3.title': 'ندرس الأسباب', 'pr3.desc': 'تحليل الحكم وتحديد أوجه الخطأ في تطبيق القانون.',
      'pr4.title': 'نصوغ الطعن', 'pr4.desc': 'صحيفة طعن ومذكرات محكمة الصياغة.',
      'pr5.title': 'نتابع للنهاية', 'pr5.desc': 'متابعة الطعن أمام المحكمة حتى الفصل فيه.',
      'fq.tag': 'أسئلة شائعة', 'fq.title': 'أسئلة يطرحها الموكّلون', 'fq.lead': 'إجابات مختصرة تساعدك على فهم موقفك قبل أن تتصل بنا.',
      'q1.q': 'ما الفرق بين الاستئناف والطعن بالنقض؟', 'q1.a': 'الاستئناف يعيد نظر الوقائع والأدلة أمام محكمة أعلى. أما النقض فلا يفحص الوقائع من جديد، بل يراجع هل طُبّق القانون تطبيقًا صحيحًا وهل سلمت الإجراءات.',
      'q2.q': 'هل يمكن الطعن بالنقض في أي حكم؟', 'q2.a': 'لا. الطعن مقيّد بأنواع من الأحكام وأسباب وشروط حددها القانون، ولذلك تبدأ الخطوة الأولى بدراسة حكمك لنعرف هل يقبل الطعن وما فرصه.',
      'q3.q': 'ما مواعيد الطعن؟', 'q3.a': 'مواعيد الطعن محددة وصارمة بنص القانون، وتختلف حسب نوع الحكم والمحكمة، وفواتها قد يُسقط الحق. لذلك يُعرض الحكم على المحامي فور صدوره.',
      'q4.q': 'ما المستندات التي أحتاج لتقديمها؟', 'q4.a': 'صورة الحكم المطعون فيه، وأوراق الدعوى ومستنداتها، وما يثبت صفتك وتاريخ علمك بالحكم.',
      'q5.q': 'هل تقدمون رأيًا قبل الطعن؟', 'q5.a': 'نعم. نقيّم الحكم ونخبرك بصراحة بفرص الطعن ومخاطره قبل أن تتخذ قرارك، دون وعود لا يملكها أحد.',
      'cta.quote': 'حكمك يستحق دراسة متأنية قبل فوات الميعاد.', 'cta.btn': 'اعرض حكمك الآن',
      'sg.tag': 'المكانة',
      'sg.title': 'من قلب بيت المحامين',
      'sg.text': 'الأستاذ سيد معوض عضو مجلس إدارة نقابة المحامين بجنوب القليوبية وممثل جزئية قليوب، وهي مكانة نالها بثقة زملائه في المهنة.',
      'sg.b1': 'المحامي بالنقض والإدارية العليا والدستورية العليا',
      'sg.b2': 'عضو مجلس نقابة المحامين بجنوب القليوبية',
      'sg.b3': 'التزام بأخلاقيات المهنة وسرية الموكلين',
      'sg.quote': 'القانون والقضاء هما الطريق الصحيح لنيل الحقوق.',
      'c.tag': 'للتواصل والاستفسار',
      'c.title': 'اعرض قضيتك على مكتب سيد معوض',
      'c.lead': 'اشرح لنا الحكم أو الموقف في مكالمة أو رسالة، وسنحدد لك الخطوة التالية بوضوح.',
      'c.phoneLabel': 'اتصل بنا', 'c.waLabel': 'واتساب', 'c.waText': 'ابدأ المحادثة الآن', 'c.addressLabel': 'المقر',
      'c.address': 'قليوب، محافظة القليوبية',
      'ds.title': 'مكتب سيد معوض', 'ds.text': 'المحامي بالنقض والإدارية العليا · عضو مجلس نقابة المحامين بجنوب القليوبية', 'ds.btn': 'تواصل الآن',
      'footer.name': 'مكتب سيد معوض', 'footer.tag': 'المحامي بالنقض والإدارية العليا',
      'footer.rights': 'جميع الحقوق محفوظة', 'footer.owner': 'مكتب الأستاذ سيد معوض للمحاماة', 'footer.credit': 'تصميم وتطوير: Markivo'
    },
    en: {
      'meta.title': 'Sayed Mouawad Law Office | Attorney at the Court of Cassation & Supreme Administrative Court',
      'meta.desc': 'Law office of Sayed Mouawad, attorney before the Court of Cassation, the Supreme Administrative Court and the Supreme Constitutional Court, board member of the South Qalyubia Bar Association. Cassation appeals, administrative appeals, constitutional cases, and legal consultations.',
      'brand.name': 'Sayed Mouawad',
      'brand.sub': 'Attorney at the Court of Cassation',
      'nav.home': 'Home', 'nav.ladder': 'Litigation Levels', 'nav.services': 'Services', 'nav.standing': 'Standing', 'nav.contact': 'Contact', 'nav.cta': 'Call Now',
      'lang.toggle': 'عربي',
      'hero.pre': 'Counselor',
      'hero.name': 'Sayed Mouawad',
      'hero.role': 'Attorney at the Court of Cassation & Supreme Administrative Court',
      'hero.member': 'Board Member, South Qalyubia Bar Association',
      'hero.lead': 'Where the levels of litigation end, our expertise begins. Cassation, administrative and constitutional appeals with deep study and refined drafting.',
      'hero.cta1': 'Call Now', 'hero.cta2': 'WhatsApp',
      'tt.a': 'Cassation', 'tt.b': 'Supreme Administrative Court', 'tt.c': 'Supreme Constitutional Court', 'tt.d': 'Judicial Consultations',
      'ld.tag': 'Litigation Levels',
      'ld.title': 'The summit of the judiciary',
      'ld.lead': 'A case moves through levels. At the summit, errors in applying the law are corrected, and this is precisely where our work is focused.',
      'r1.title': 'First-Instance Courts', 'r1.desc': 'They examine the facts and evidence and issue the first judgment.',
      'r2.title': 'Appeal', 'r2.desc': 'The matter is re-examined before a higher court.',
      'r3.title': 'Cassation · Supreme Administrative · Supreme Constitutional',
      'r3.desc': 'Reviewing whether the law was correctly applied in the judgment, and scrutinizing appeals in the highest courts. This is where Sayed Mouawad works.',
      'ld.note': 'Appeal deadlines are fixed and strict, and missing them may forfeit the right. Show your judgment to your lawyer as soon as possible.',
      'sv.tag': 'Our Services',
      'sv.title': 'What we handle with mastery',
      'sv.lead': 'Every appeal begins with a careful study of the judgment and case papers.',
      'sv1.title': 'Cassation Appeals', 'sv1.desc': 'Studying final judgments and identifying grounds for appeal, drafting the appeal petition and memoranda, and following the appeal until it is decided.',
      'sv2.title': 'Supreme Administrative Court', 'sv2.desc': 'Appealing administrative court judgments, and disputes over administrative decisions, employees, and government bodies.',
      'sv3.title': 'Constitutional Cases', 'sv3.desc': 'Challenging the constitutionality of legal provisions, and preparing cases and memoranda before the Supreme Constitutional Court.',
      'sv4.title': 'Legal & Judicial Consultations', 'sv4.desc': 'A clear legal opinion before any step: does your judgment merit an appeal? And what are the chances and risks of each path?',
      'nav.courts': 'Supreme Courts', 'nav.process': 'How We Work', 'nav.faq': 'FAQ',
      'ct.tag': 'Supreme Courts', 'ct.title': 'Three arenas, one expertise', 'ct.lead': 'We work before the highest courts of the state, where there is no room for error or unstudied judgment.',
      'cc1.title': 'Court of Cassation', 'cc1.desc': 'The highest court in the ordinary judiciary. It does not re-examine the facts; it reviews whether the law was correctly applied and interpreted and whether procedures were sound in the challenged judgment.',
      'cc1.i1': 'Civil and commercial appeals', 'cc1.i2': 'Criminal appeals', 'cc1.i3': 'Personal status appeals', 'cc1.i4': 'Requests to stay execution of challenged judgments',
      'cc2.title': 'Supreme Administrative Court', 'cc2.desc': 'The summit of the administrative judiciary. It rules on appeals against judgments of the administrative courts and disciplinary courts.',
      'cc2.i1': 'Challenging administrative decisions', 'cc2.i2': 'Employee disputes and promotions', 'cc2.i3': 'Compensation for administrative decisions', 'cc2.i4': 'Administrative contracts and disciplinary appeals',
      'cc3.title': 'Supreme Constitutional Court', 'cc3.desc': 'The guardian of the constitutionality of laws and regulations, and the authority on interpreting legislative texts.',
      'cc3.i1': 'Challenging the constitutionality of provisions', 'cc3.i2': 'Constitutional cases', 'cc3.i3': 'Requests for interpreting legislative texts',
      'pr.tag': 'How We Work', 'pr.title': 'How we handle your appeal', 'pr.lead': 'Five organized stages, from receiving the judgment to the final ruling on the appeal.',
      'pr1.title': 'We receive your judgment', 'pr1.desc': 'A copy of the judgment and the case papers.',
      'pr2.title': 'We check deadlines', 'pr2.desc': 'Confirming the appeal deadline and formal requirements first.',
      'pr3.title': 'We study the grounds', 'pr3.desc': 'Analyzing the judgment and pinpointing errors in applying the law.',
      'pr4.title': 'We draft the appeal', 'pr4.desc': 'A carefully drafted appeal petition and memoranda.',
      'pr5.title': 'We follow through', 'pr5.desc': 'Following the appeal before the court until it is decided.',
      'fq.tag': 'FAQ', 'fq.title': 'Questions clients ask', 'fq.lead': 'Short answers to help you understand your position before you call us.',
      'q1.q': 'What is the difference between an appeal and a cassation appeal?', 'q1.a': 'An appeal re-examines the facts and evidence before a higher court. Cassation does not re-examine the facts; it reviews whether the law was correctly applied and procedures were sound.',
      'q2.q': 'Can any judgment be appealed to Cassation?', 'q2.a': 'No. Appeals are limited to certain types of judgments, grounds and conditions set by law, so the first step is studying your judgment to see whether it can be appealed and with what chances.',
      'q3.q': 'What are the appeal deadlines?', 'q3.a': 'Appeal deadlines are fixed and strict by law, vary by the type of judgment and court, and missing them may forfeit the right. So the judgment should be shown to a lawyer as soon as it is issued.',
      'q4.q': 'What documents do I need to provide?', 'q4.a': 'A copy of the challenged judgment, the case papers and documents, and proof of your capacity and the date you learned of the judgment.',
      'q5.q': 'Do you give an opinion before appealing?', 'q5.a': 'Yes. We assess the judgment and tell you frankly the chances and risks of appealing before you decide, with no promises nobody can make.',
      'cta.quote': 'Your judgment deserves careful study before the deadline passes.', 'cta.btn': 'Submit your judgment now',
      'sg.tag': 'Standing',
      'sg.title': 'From the heart of the Bar',
      'sg.text': 'Sayed Mouawad is a board member of the South Qalyubia Bar Association and representative of the Qalyub sub-district, a position earned through the trust of his colleagues.',
      'sg.b1': 'Attorney before the Court of Cassation, Supreme Administrative and Supreme Constitutional Courts',
      'sg.b2': 'Board Member, South Qalyubia Bar Association',
      'sg.b3': 'Committed to professional ethics and client confidentiality',
      'sg.quote': 'Law and the judiciary are the right path to obtain rights.',
      'c.tag': 'Contact & Inquiries',
      'c.title': 'Bring your case to Sayed Mouawad Law Office',
      'c.lead': 'Explain the judgment or situation in a call or a message, and we will define your next step clearly.',
      'c.phoneLabel': 'Call Us', 'c.waLabel': 'WhatsApp', 'c.waText': 'Start the conversation now', 'c.addressLabel': 'Location',
      'c.address': 'Qalyub, Qalyubia Governorate',
      'ds.title': 'Sayed Mouawad Law Office', 'ds.text': 'Attorney at the Court of Cassation & Supreme Administrative Court · Board Member, South Qalyubia Bar Association', 'ds.btn': 'Contact Now',
      'footer.name': 'Sayed Mouawad Law Office', 'footer.tag': 'Attorney at the Court of Cassation & Supreme Administrative Court',
      'footer.rights': 'All rights reserved', 'footer.owner': 'Sayed Mouawad Law Office', 'footer.credit': 'Designed & developed by Markivo'
    }
  };

  var STORAGE_KEY = 'mouawad-lang';

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var parts = pair.split(':');
        var key = parts[1].trim();
        if (dict[key] !== undefined) el.setAttribute(parts[0].trim(), dict[key]);
      });
    });
    document.title = dict['meta.title'];
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLanguage() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLanguage(saved === 'en' || saved === 'ar' ? saved : 'ar');
    var toggle = document.getElementById('langToggle');
    if (toggle) toggle.addEventListener('click', function () {
      applyLanguage(document.documentElement.lang === 'ar' ? 'en' : 'ar');
    });
  }

  function initScroll() {
    var header = document.getElementById('siteHeader');
    var bar = document.getElementById('progress');
    var timeline = document.getElementById('timeline');
    var flows = timeline ? timeline.querySelectorAll('.flow-step') : [];
    var ticking = false;
    function update() {
      ticking = false;
      var y = window.scrollY, vh = window.innerHeight;
      if (header) header.classList.toggle('scrolled', y > 20);
      if (bar) {
        var max = document.documentElement.scrollHeight - vh;
        bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + '%';
      }
      if (timeline) {
        var r = timeline.getBoundingClientRect();
        var trigger = vh * 0.72;
        var ratio = Math.max(0, Math.min(1, (trigger - r.top) / Math.max(1, r.height * 0.8)));
        timeline.style.setProperty('--p-num', ratio.toFixed(3));
        flows.forEach(function (st) {
          var d = st.querySelector('.flow-no').getBoundingClientRect();
          st.classList.toggle('active', d.top + d.height / 2 < trigger);
        });
      }
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  function initMobileNav() {
    var burger = document.getElementById('burgerBtn');
    var nav = document.getElementById('mainNav');
    if (!burger || !nav) return;
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function initActiveNav() {
    var sections = document.querySelectorAll('main section[id], main[id]');
    var links = document.querySelectorAll('.main-nav a');
    if (!sections.length || !links.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        links.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  function initReveal() {
    var groups = ['.section-head', '.rung', '.ladder-note', '.card', '.court', '.flow-step', '.qa', '.cta-inner', '.portrait-wrap', '.standing-text', '.contact-item', '.seal-card'];
    var targets = [];
    groups.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        el.setAttribute('data-reveal', '');
        el.style.transitionDelay = (Math.min(i, 5) * 110) + 'ms';
        targets.push(el);
      });
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.classList.add('in-view');
        observer.unobserve(el);
        setTimeout(function () {
          el.removeAttribute('data-reveal');
          el.classList.remove('in-view');
          el.style.transitionDelay = '';
        }, 1600);
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { observer.observe(el); });
  }

  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initScroll();
    initMobileNav();
    initActiveNav();
    initReveal();
    initYear();
  });
})();
