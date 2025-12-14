document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'ar';
    let currentLectureId = null; // null for welcome, 0 for developer tab

    // توسيع كائن translations لدعم صفحة المطور
    const translations = {
        ar: {
            site_title: "منصة علوم الحاسب",
            site_subtitle: "مراجعه شامله علي المنهج",
            toggle_btn: "English Interface",
            welcome_title: "مرحباً بك في الأكاديمية",
            welcome_msg: "هنا تجد شرحاً تفصيلياً واختبارات حقيقية لكل محاضرة.",
            footer: "Made With ❤️ by Ahmed Ezzt",
            summary_title: "ملخص المحاضرة",
            video_title: "محتوى الفيديو",
            explanation_title: "الشرح التفصيلي الكامل",
            quiz_title: "اختبار المحاضرة (15 سؤال)",
            quiz_subtitle: "اختبر معلوماتك لتقييم فهمك للمحتوى",
            btn_submit: "إرسال الإجابات والاطلاع على النتيجة",
            result_title: "النتيجة النهائية",
            correct: "إجابة صحيحة",
            wrong: "إجابة خاطئة، الصحيح هو:",
            developer_tab: "🧑‍💻 المطور",
            developer_title: "مطور هذه المنصة",
            developer_name: "Eng Ahmed Ezzt",
            developer_title_full: "مهندس برمجيات (Software Engineer)",
            developer_special_request: "من فضلك اقرأ الفاتحة على روح والدي الأستاذ عزت ثابت عبدالرحيم",
        },
        en: {
            site_title: "CS Final Review",
            site_subtitle: "The Full Path from Basics to Architecture",
            toggle_btn: "واجهة عربية",
            welcome_title: "Welcome to the Academy",
            welcome_msg: "Here you will find detailed explanations and real quizzes for every lecture.",
            footer: "Made With ❤️ by Ahmed Ezzt",
            summary_title: "Lecture Summary",
            video_title: "Video Content",
            explanation_title: "Full Detailed Explanation",
            quiz_title: "Lecture Quiz (15 Questions)",
            quiz_subtitle: "Test your knowledge to assess your understanding of the content",
            btn_submit: "Submit Answers and View Result",
            result_title: "Final Score",
            correct: "Correct Answer",
            wrong: "Wrong Answer, The correct one is:",
            developer_tab: "🧑‍💻 Developer",
            developer_title: "Platform Developer",
            developer_name: "Ahmed Ezzat",
            developer_title_full: "Software Engineer",
            developer_special_request: "Please recite Al-Fatiha for the soul of my father, Professor Ezzat Thabet Abdelrehim",
        }
    };

    const els = {
        tabsContainer: document.getElementById('tabs-container'),
        contentArea: document.getElementById('content-area'),
        langToggle: document.getElementById('lang-toggle'),
        langLabel: document.getElementById('lang-label'),
    };
    
    // --- Language Logic ---
    function setLanguage(lang) {
        currentLang = lang;
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', lang);
        
        // Update static text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang][key]) el.textContent = translations[lang][key];
        });

        els.langLabel.textContent = translations[lang].toggle_btn;

        // Re-render dynamic content to apply new language texts
        renderTabs();
        if (currentLectureId !== null) {
            if (currentLectureId === 0) {
                renderDeveloperTab();
            } else {
                // Ensure lecture exists before rendering
                const lecture = (typeof courseData !== 'undefined') ? courseData.find(l => l.id === currentLectureId) : null;
                if (lecture) renderContent(lecture);
            }
        } else {
            // Update welcome state if no tab is selected
            const welcomeTitle = document.querySelector('[data-i18n="welcome_title"]');
            const welcomeMsg = document.querySelector('[data-i18n="welcome_msg"]');
            if (welcomeTitle) welcomeTitle.textContent = translations[lang].welcome_title;
            if (welcomeMsg) welcomeMsg.textContent = translations[lang].welcome_msg;
        }
    }

    els.langToggle.onclick = () => setLanguage(currentLang === 'ar' ? 'en' : 'ar');

    // --- Tabs Logic ---
    function renderTabs() {
        els.tabsContainer.innerHTML = '';
        
        // 1. Developer Tab (ID 0)
        const renderDeveloperTabButton = () => {
            const btn = document.createElement('button');
            const isActive = currentLectureId === 0;
            const activeClass = isActive ? 'tab-active' : 'tab-inactive';
            
            btn.className = `w-full text-start p-4 rounded-xl shadow-sm transition-all duration-300 font-bold mb-2 flex items-center gap-3 ${activeClass}`;
            btn.innerHTML = `
                <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${isActive ? 'bg-white/20' : 'bg-blue-100 text-blue-600'} text-sm">
                    🧑‍💻
                </span>
                <span class="truncate">${translations[currentLang].developer_tab}</span>
            `;

            btn.onclick = () => {
                currentLectureId = 0;
                renderTabs();
                renderDeveloperTab();
            };
            els.tabsContainer.appendChild(btn);
        }
        
        renderDeveloperTabButton();

        // 2. Lecture Tabs (IDs 1+)
        // Check if courseData is defined and is an array (from data.js)
        if (typeof courseData !== 'undefined' && Array.isArray(courseData)) {
            courseData.forEach(lecture => {
                const btn = document.createElement('button');
                const isActive = lecture.id === currentLectureId;
                const activeClass = isActive ? 'tab-active' : 'tab-inactive';
                
                btn.className = `w-full text-start p-4 rounded-xl shadow-sm transition-all duration-300 font-bold mb-2 flex items-center gap-3 ${activeClass}`;
                
                btn.innerHTML = `
                    <span class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${isActive ? 'bg-white/20' : 'bg-blue-100 text-blue-600'} text-sm">
                        ${lecture.id}
                    </span>
                    <span class="truncate">${currentLang === 'ar' ? lecture.title_ar : lecture.title_en}</span>
                `;

                btn.onclick = () => {
                    currentLectureId = lecture.id;
                    renderTabs();
                    renderContent(lecture);
                };
                els.tabsContainer.appendChild(btn);
            });
        }
    }
    
    // --- Developer Content Renderer ---
    function renderDeveloperTab() {
        const t = translations[currentLang];
        els.contentArea.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'fade-in p-8 md:p-12 text-center';

        wrapper.innerHTML = `
            <div class="bg-white p-10 rounded-3xl shadow-lg border border-blue-100">
                <div class="w-24 h-24 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center text-4xl mb-6 shadow-xl">
                    A E
                </div>
                <h3 class="text-3xl font-black text-slate-800 mb-1">
                    ${t.developer_name}
                </h3>
                <p class="text-xl font-semibold text-blue-600 mb-8">
                    ${t.developer_title_full}
                </p>

                <div class="border-t border-b border-slate-200 py-6 my-6">
                    <p class="text-lg text-slate-700 font-bold leading-loose">
                        ${t.developer_special_request}
                    </p>
                    <p class="text-sm text-slate-500 mt-2">
                        (إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ)
                    </p>
                </div>

                <p class="text-slate-500 text-sm mt-4">
                    ${t.developer_title}
                </p>
            </div>
        `;
        els.contentArea.appendChild(wrapper);
    }
    

    // --- Lecture Content Logic with COLLAPSIBLE SECTIONS ---
    function renderContent(lecture) {
        const t = translations[currentLang];
        const title = currentLang === 'ar' ? lecture.title_ar : lecture.title_en;
        const summary = currentLang === 'ar' ? lecture.summary_ar : lecture.summary_en;
        const explanation = currentLang === 'ar' ? lecture.explanation_ar : lecture.explanation_en;

        els.contentArea.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.className = 'fade-in';

        wrapper.innerHTML = `
            <div class="h-64 relative">
                <img src="${lecture.image}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                    <span class="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2">CS Master Academy</span>
                    <h2 class="text-3xl md:text-4xl font-black text-white shadow-sm">${title}</h2>
                </div>
            </div>

            <div class="p-6 md:p-10 space-y-10">
                
                <div class="grid lg:grid-cols-2 gap-8">
                    
                    <div class="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                        <h3 class="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                            <span>📌</span> ${t.summary_title}
                        </h3>
                        <p class="text-slate-700 leading-relaxed text-lg">${summary}</p>
                    </div>

                    <div class="bg-slate-50 p-1 rounded-2xl border border-slate-200 shadow-sm">
                         <div class="bg-white p-4 rounded-xl">
                            <h3 class="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                                <span>📺</span> ${t.video_title}
                            </h3>
                            <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-black">
                                <iframe class="w-full h-[250px]" src="https://www.youtube-nocookie.com/embed/${lecture.video_id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <details open class="bg-white rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group">
                    <summary class="p-6 md:p-8 cursor-pointer list-none flex items-center justify-between border-b border-slate-100">
                        <div class="flex items-center gap-3">
                            <span class="bg-blue-100 text-blue-600 p-2 rounded-lg">📖</span> 
                            <h3 class="text-2xl font-bold text-slate-800">${t.explanation_title}</h3>
                        </div>
                        <span class="text-slate-500 text-xl summary-icon">▼</span>
                    </summary>
                    <div class="p-6 md:p-8">
                        <div class="prose prose-slate max-w-none text-slate-600 leading-loose text-lg">
                            ${explanation}
                        </div>
                    </div>
                </details>

                <details class="bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                    <summary class="cursor-pointer list-none flex justify-between items-end border-b border-indigo-700 pb-4 mb-8">
                        <div>
                            <h3 class="text-3xl font-bold mb-1">${t.quiz_title}</h3>
                            <p class="text-indigo-300">${t.quiz_subtitle}</p>
                        </div>
                        <span class="text-4xl text-indigo-300 summary-icon">▼</span>
                    </summary>

                    <div class="relative z-10">
                        <form id="quiz-form" class="space-y-6">
                            ${lecture.quiz.map((q, idx) => `
                                <div class="question-container bg-indigo-800/50 p-5 rounded-xl border border-indigo-700/50 transition-colors duration-300">
                                    <p class="font-bold text-lg mb-4 text-indigo-100">
                                        <span class="text-indigo-400">#${idx + 1}</span> 
                                        ${currentLang === 'ar' && q.q_ar ? q.q_ar : q.q}
                                    </p>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        ${q.options.map((opt, optIdx) => `
                                            <label class="flex items-center gap-3 p-3 rounded-lg bg-indigo-900/50 hover:bg-indigo-700 cursor-pointer transition border border-transparent hover:border-indigo-500">
                                                <input type="radio" name="q${idx}" value="${optIdx}" class="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 focus:ring-blue-500">
                                                <span class="text-sm font-medium" dir="ltr">${opt}</span>
                                            </label>
                                        `).join('')}
                                    </div>
                                    <div id="feedback-q${idx}" class="mt-3 hidden text-sm font-bold bg-white/10 p-2 rounded"></div>
                                </div>
                            `).join('')}

                            <div class="pt-6 text-center">
                                <button type="button" onclick="submitQuiz(${lecture.id})" class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1 w-full md:w-auto">
                                    ${t.btn_submit}
                                </button>
                            </div>
                        </form>

                         <div id="result-area" class="hidden mt-8 text-center bg-white text-slate-800 p-8 rounded-2xl">
                            <h4 class="text-xl font-bold text-slate-500 mb-2">${t.result_title}</h4>
                            <div id="score-display" class="text-6xl font-black text-indigo-600 mb-4"></div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 max-w-md mx-auto">
                                <div id="progress-bar" class="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style="width: 0%"></div>
                            </div>
                        </div>
                    </div>
                </details>
            </div>
        `;

        els.contentArea.appendChild(wrapper);
    }

    // --- Quiz Logic (Global) ---
    window.submitQuiz = function(lectureId) {
        // Find the lecture data
        const lecture = (typeof courseData !== 'undefined') ? courseData.find(l => l.id === lectureId) : null;
        if (!lecture) return;

        const t = translations[currentLang];
        let score = 0;
        const total = lecture.quiz.length;

        // Reset previous feedback and classes
        document.querySelectorAll('.question-container').forEach(qc => {
            qc.classList.remove('border-green-500', 'bg-green-900/20', 'border-red-500', 'bg-red-900/20');
        });
        document.querySelectorAll('[id^="feedback-q"]').forEach(f => f.classList.add('hidden'));


        lecture.quiz.forEach((q, idx) => {
            const selected = document.querySelector(`input[name="q${idx}"]:checked`);
            const feedback = document.getElementById(`feedback-q${idx}`);
            const parentDiv = feedback.parentElement;
            
            feedback.classList.remove('hidden');

            if (selected) {
                if (parseInt(selected.value) === q.answer) {
                    score++;
                    feedback.textContent = `✅ ${t.correct}`;
                    feedback.className = "mt-3 block text-sm font-bold text-green-400";
                    parentDiv.classList.add('border-green-500', 'bg-green-900/20');
                } else {
                    feedback.textContent = `❌ ${t.wrong} ${q.options[q.answer]}`;
                    feedback.className = "mt-3 block text-sm font-bold text-red-400";
                    parentDiv.classList.add('border-red-500', 'bg-red-900/20');
                }
            } else {
                 // إذا لم يتم الاختيار، اعتبره خاطئًا وقم بعرض الإجابة الصحيحة
                feedback.textContent = `⚠️ ${t.wrong} ${q.options[q.answer]}`;
                feedback.className = "mt-3 block text-sm font-bold text-yellow-400";
            }
        });

        // Show Score
        const resultArea = document.getElementById('result-area');
        const scoreDisplay = document.getElementById('score-display');
        const progressBar = document.getElementById('progress-bar');
        
        resultArea.classList.remove('hidden');
        scoreDisplay.textContent = `${score} / ${total}`;
        progressBar.style.width = `${(score / total) * 100}%`;

        // Scroll to result smoothly
        resultArea.scrollIntoView({ behavior: 'smooth' });
    };

    // Initialize
    // Ensure courseData is defined before calling renderTabs
    if (typeof courseData !== 'undefined') {
        renderTabs();
    }
    setLanguage('ar'); 
});
