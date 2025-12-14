const translations = {
    ar: {
        site_title: "منصة علوم الحاسب",
        site_subtitle: "المسار الكامل من الأساسيات إلى المعمارية",
        welcome_title: "مرحباً بك في الأكاديمية",
        welcome_msg: "هنا تجد شرحاً تفصيلياً واختبارات حقيقية لكل محاضرة.",
        footer: "جميع الحقوق محفوظة © 2023",
        summary_title: "📌 ملخص سريع",
        explanation_title: "📖 الشرح التفصيلي (مذاكرة)",
        video_title: "📺 فيديو شرح مقترح",
        quiz_title: "📝 اختبار التقييم",
        quiz_subtitle: "15 سؤال (منهج كامل)",
        btn_submit: "تسليم الإجابات وعرض النتيجة",
        result_title: "نتيجة الاختبار",
        correct: "إجابة صحيحة!",
        wrong: "خطأ، الإجابة هي:",
        select_lecture: "اختر المحاضرة",
        toggle_btn: "English Interface"
    },
    en: {
        site_title: "CS Master Academy",
        site_subtitle: "Complete Path from Basics to Architecture",
        welcome_title: "Welcome to the Academy",
        welcome_msg: "Here you find detailed explanations and real quizzes.",
        footer: "All Rights Reserved © 2023",
        summary_title: "📌 Quick Summary",
        explanation_title: "📖 Detailed Explanation",
        video_title: "📺 Suggested Video",
        quiz_title: "📝 Assessment Quiz",
        quiz_subtitle: "15 Questions (Full Scope)",
        btn_submit: "Submit Answers & Show Score",
        result_title: "Quiz Result",
        correct: "Correct Answer!",
        wrong: "Wrong, correct is:",
        select_lecture: "Select Lecture",
        toggle_btn: "واجهة عربية"
    }
};

const courseData = [
    {
        id: 1,
        title_ar: "محاضرة 1: مفاهيم الحاسب الأساسية",
        title_en: "Lec 1: Computer Concepts",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        summary_ar: "نظرة عامة على تعريف الحاسب، دورة معالجة المعلومات، وتاريخ تطور الأجيال والأنواع المختلفة للحواسيب.",
        summary_en: "Overview of computer definition, information processing cycle, history of generations, and different computer types.",
        explanation_ar: `
            <div class="space-y-4">
                <p><strong>1. تعريف الحاسب (The Computer):</strong><br>
                جهاز إلكتروني يعمل وفق تعليمات مخزنة في ذاكرته، يقوم باستقبال البيانات (Input)، معالجتها (Process)، إخراج النتائج (Output)، وتخزينها (Storage). هذه الخطوات الأربع تسمى <em>دورة معالجة المعلومات</em>.</p>
                
                <p><strong>2. البيانات مقابل المعلومات (Data vs Information):</strong><br>
                - <strong>البيانات:</strong> حقائق خام غير منظمة (مثل الأرقام 50, 60).<br>
                - <strong>المعلومات:</strong> بيانات تمت معالجتها وأصبح لها سياق ومعنى (مثل: درجة الطالب 50).</p>

                <p><strong>3. أجيال الحاسب (Generations):</strong><br>
                - <strong>الجيل الأول (1951-1958):</strong> استخدم الأنابيب المفرغة (Vacuum Tubes). ضخم جداً، يولد حرارة عالية.<br>
                - <strong>الجيل الثاني (1959-1964):</strong> استخدم الترانزستور (Transistors). أصغر وأسرع.<br>
                - <strong>الجيل الثالث (1965-1974):</strong> الدوائر المتكاملة (Integrated Circuits - IC).<br>
                - <strong>الجيل الرابع (1975-1989):</strong> المعالجات الدقيقة (Microprocessors). ظهور الحاسب الشخصي.<br>
                - <strong>الجيل الخامس (1990+):</strong> الذكاء الاصطناعي والسرعات الفائقة.</p>

                <p><strong>4. أنواع الحاسبات:</strong><br>
                - <strong>Microcomputer:</strong> الحاسب الشخصي (Desktop/Laptop).<br>
                - <strong>Minicomputer:</strong> حجم متوسط، للشركات الصغيرة.<br>
                - <strong>Mainframe:</strong> حاسب مركزي ضخم للمؤسسات الكبرى، يعالج كميات هائلة من البيانات.<br>
                - <strong>Supercomputer:</strong> الأقوى والأسرع، يستخدم للأبحاث العلمية والطقس.</p>
            </div>
        `,
        explanation_en: `
            <div class="space-y-4">
                <p><strong>1. Definition:</strong><br>
                An electronic device operating under the control of instructions stored in its own memory unit. It follows the IPOS cycle: Input, Process, Output, and Storage.</p>
                
                <p><strong>2. Data vs. Information:</strong><br>
                - <strong>Data:</strong> Raw facts, figures, and symbols (e.g., number 50).<br>
                - <strong>Information:</strong> Processed data that conveys meaning (e.g., Score: 50).</p>

                <p><strong>3. Computer Generations:</strong><br>
                - <strong>1st Gen:</strong> Vacuum Tubes (Large, hot, unreliable).<br>
                - <strong>2nd Gen:</strong> Transistors (Smaller, faster).<br>
                - <strong>3rd Gen:</strong> Integrated Circuits (IC).<br>
                - <strong>4th Gen:</strong> Microprocessors (The era of PCs).<br>
                - <strong>5th Gen:</strong> AI and parallel processing.</p>

                <p><strong>4. Types of Computers:</strong><br>
                - <strong>Microcomputer:</strong> Personal use (Desktops, Laptops).<br>
                - <strong>Mainframe:</strong> Large organizations, bulk data processing.<br>
                - <strong>Supercomputer:</strong> Fastest type, used for complex calculations (Weather forecasting).</p>
            </div>
        `,
        video_id: "2mySUIR9k20",
        quiz: [
            { q: "Data entered into the computer is called?", q_ar: "البيانات التي يتم إدخالها للحاسب تسمى؟", options: ["Output", "Input", "Processing", "Storage"], answer: 1 },
            { q: "Processed data that conveys meaning is?", q_ar: "البيانات المعالجة التي تحمل معنى تسمى؟", options: ["Raw Facts", "Input", "Information", "Hardware"], answer: 2 },
            { q: "First generation computers used:", q_ar: "استخدمت حواسيب الجيل الأول:", options: ["Transistors", "Vacuum Tubes", "IC", "Microprocessors"], answer: 1 },
            { q: "Which generation introduced the Microprocessor?", q_ar: "أي جيل قدم المعالج الدقيق (Microprocessor)؟", options: ["First", "Second", "Third", "Fourth"], answer: 3 },
            { q: "Which computer type is the most powerful?", q_ar: "أي نوع من الحواسيب هو الأقوى؟", options: ["Mainframe", "Supercomputer", "Minicomputer", "Workstation"], answer: 1 },
            { q: "Physical equipment of a computer is:", q_ar: "المعدات المادية للحاسب تسمى:", options: ["Software", "Hardware", "Firmware", "Liveware"], answer: 1 },
            { q: "Which is NOT part of the IPOS cycle?", q_ar: "أي مما يلي ليس جزءاً من دورة المعالجة IPOS؟", options: ["Input", "Output", "Printing", "Storage"], answer: 2 },
            { q: "Second generation computers used:", q_ar: "استخدمت حواسيب الجيل الثاني:", options: ["Vacuum Tubes", "Transistors", "Chips", "AI"], answer: 1 },
            { q: "Mainframes are typically used by:", q_ar: "تستخدم الحواسيب المركزية (Mainframes) عادة بواسطة:", options: ["Individuals", "Small shops", "Large Corporations", "Gamers"], answer: 2 },
            { q: "A handheld computer is also known as:", q_ar: "الحاسب المحمول باليد يعرف أيضاً بـ:", options: ["PDA", "Mainframe", "Server", "Supercomputer"], answer: 0 },
            { q: "The instruction phase involves:", q_ar: "مرحلة التعليمات (Instruction phase) تتضمن:", options: ["Fetch & Decode", "Execute & Store", "Input & Output", "Read & Write"], answer: 0 },
            { q: "Which is a Microcomputer?", q_ar: "أي مما يلي يعتبر Microcomputer؟", options: ["Cray-1", "IBM Mainframe", "Desktop PC", "Server Farm"], answer: 2 },
            { q: "Raw facts and figures are:", q_ar: "الحقائق والأرقام الخام تسمى:", options: ["Information", "Knowledge", "Data", "Wisdom"], answer: 2 },
            { q: "Third generation computers used:", q_ar: "استخدمت حواسيب الجيل الثالث:", options: ["Integrated Circuits (IC)", "Transistors", "Vacuum Tubes", "AI"], answer: 0 },
            { q: "Which component performs math calculations?", q_ar: "أي مكون يقوم بالعمليات الحسابية؟", options: ["Hard Disk", "ALU", "Monitor", "Mouse"], answer: 1 }
        ]
    },
    {
        id: 2,
        title_ar: "محاضرة 2: العتاد والبرمجيات",
        title_en: "Lec 2: Hardware & Software",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        summary_ar: "تفاصيل المكونات المادية (المعالج، الذاكرة، التخزين، الإدخال/الإخراج) وتصنيف البرمجيات.",
        summary_en: "Details of hardware components (CPU, Memory, Storage, I/O) and software classification.",
        explanation_ar: `
            <div class="space-y-4">
                <p><strong>1. وحدة المعالجة المركزية (CPU):</strong><br>
                تتكون من جزأين رئيسيين: وحدة الحساب والمنطق (ALU) ووحدة التحكم (Control Unit). تقاس سرعتها بـ MHz أو GHz. تعتمد على "ساعة النظام" (System Clock) لتزامن العمليات.</p>
                
                <p><strong>2. الذاكرة (Primary Memory):</strong><br>
                - <strong>RAM (Random Access Memory):</strong> ذاكرة القراءة والكتابة، متطايرة (تفقد محتواها عند انقطاع الكهرباء).<br>
                - <strong>ROM (Read Only Memory):</strong> ذاكرة للقراءة فقط، غير متطايرة، تخزن تعليمات بدء التشغيل (Boot).</p>

                <p><strong>3. وحدات القياس:</strong><br>
                - <strong>Bit:</strong> أصغر وحدة (0 أو 1).<br>
                - <strong>Byte:</strong> تساوي 8 بت (تمثل حرف واحد).<br>
                - <strong>Kilobyte (KB):</strong> 1024 بايت تقريباً.</p>

                <p><strong>4. التخزين الثانوي (Secondary Storage):</strong><br>
                - <strong>Sequential Access:</strong> الوصول المتسلسل (مثل أشرطة المغناطيس Magnetic Tape) - بطيء.<br>
                - <strong>Direct Access:</strong> الوصول المباشر (مثل القرص الصلب HDD, الأقراص الضوئية CD/DVD) - سريع.</p>

                <p><strong>5. البرمجيات (Software):</strong><br>
                - <strong>System SW:</strong> تدير العتاد (نظام التشغيل، التعريفات).<br>
                - <strong>Application SW:</strong> تخدم المستخدم (Word, Excel, Games).</p>
            </div>
        `,
        explanation_en: `
            <div class="space-y-4">
                <p><strong>1. CPU (Central Processing Unit):</strong><br>
                Composed of ALU (Arithmetic Logic Unit) and Control Unit. Speed is measured in Hertz (Hz). It executes instructions in a machine cycle (Fetch, Decode, Execute, Store).</p>

                <p><strong>2. Memory Types:</strong><br>
                - <strong>RAM:</strong> Volatile, temporary workspace for CPU.<br>
                - <strong>ROM:</strong> Non-volatile, permanent instructions (Firmware).</p>

                <p><strong>3. Storage Access Methods:</strong><br>
                - <strong>Sequential:</strong> Must read through data in order (e.g., Tape).<br>
                - <strong>Direct (Random):</strong> Can jump directly to data (e.g., HDD, SSD).</p>

                <p><strong>4. Software Categories:</strong><br>
                - <strong>System Software:</strong> Coordinates hardware (OS, Utilities).<br>
                - <strong>Application Software:</strong> Helps users perform tasks (Productivity tools).</p>
            </div>
        `,
        video_id: "xnyFYiK2rSY",
        quiz: [
            { q: "Which memory loses data when power is off?", q_ar: "أي ذاكرة تفقد البيانات عند انقطاع الكهرباء؟", options: ["ROM", "RAM", "Flash", "Hard Disk"], answer: 1 },
            { q: "1 Byte is equal to how many bits?", q_ar: "البايت الواحد يساوي كم بت؟", options: ["4", "8", "16", "1024"], answer: 1 },
            { q: "Which device is used for Sequential Access?", q_ar: "أي جهاز يستخدم طريقة الوصول المتسلسل؟", options: ["Hard Disk", "CD-ROM", "Magnetic Tape", "RAM"], answer: 2 },
            { q: "CPU speed is measured in:", q_ar: "تقاس سرعة المعالج بـ:", options: ["Gigabytes", "Hertz (MHz/GHz)", "Pixels", "RPM"], answer: 1 },
            { q: "Which consists of ALU and Control Unit?", q_ar: "ما الذي يتكون من ALU ووحدة التحكم؟", options: ["Memory", "CPU", "Motherboard", "Hard Drive"], answer: 1 },
            { q: "Which is System Software?", q_ar: "أي مما يلي يعتبر من برمجيات النظام؟", options: ["MS Word", "Photoshop", "Windows 10", "Angry Birds"], answer: 2 },
            { q: "ROM stands for:", q_ar: "اختصار ROM يعني:", options: ["Random Only Memory", "Read Only Memory", "Run On Memory", "Real Option Memory"], answer: 1 },
            { q: "The smallest unit of data is:", q_ar: "أصغر وحدة للبيانات هي:", options: ["Byte", "Bit", "File", "Folder"], answer: 1 },
            { q: "Which is an Output Device?", q_ar: "أي مما يلي جهاز إخراج؟", options: ["Keyboard", "Mouse", "Printer", "Scanner"], answer: 2 },
            { q: "Which is an Input Device?", q_ar: "أي مما يلي جهاز إدخال؟", options: ["Monitor", "Speaker", "Microphone", "Projector"], answer: 2 },
            { q: "Resolution is related to:", q_ar: "الدقة (Resolution) تتعلق بـ:", options: ["Printers", "Monitors", "Both Monitors and Printers", "Keyboards"], answer: 2 },
            { q: "Which storage typically has the largest capacity?", q_ar: "أي وحدة تخزين عادة ما تمتلك السعة الأكبر؟", options: ["CD", "DVD", "Hard Disk", "Floppy Disk"], answer: 2 },
            { q: "Spreadsheet software is an example of:", q_ar: "برامج الجداول الحسابية تعتبر مثالاً على:", options: ["System SW", "Application SW", "Utility SW", "Firmware"], answer: 1 },
            { q: "Cache memory is:", q_ar: "ذاكرة الكاش هي:", options: ["Slower than RAM", "Faster than RAM", "Permanent", "Large capacity"], answer: 1 },
            { q: "Which printer uses toner?", q_ar: "أي طابعة تستخدم مسحوق الحبر (Toner)؟", options: ["Inkjet", "Laser", "Dot Matrix", "Plotter"], answer: 1 }
        ]
    },
    {
        id: 3,
        title_ar: "محاضرة 3: لغات البرمجة",
        title_en: "Lec 3: Programming Languages",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        summary_ar: "تطور لغات البرمجة، الفرق بين المترجم والمفسر، ومفاهيم Syntax و Semantics.",
        summary_en: "Evolution of programming languages, Compiler vs Interpreter, Syntax vs Semantics.",
        explanation_ar: `
            <div class="space-y-4">
                <p><strong>1. مستويات اللغات:</strong><br>
                - <strong>لغة الآلة (Machine Language):</strong> الجيل 1. ثنائية (0,1). يفهمها المعالج مباشرة. غير قابلة للنقل (Machine-dependent).<br>
                - <strong>لغة التجميع (Assembly):</strong> الجيل 2. تستخدم رموز (Mnemonics) مثل ADD A, B. تحتاج "Assembler".<br>
                - <strong>لغات عالية المستوى (HLL):</strong> الجيل 3+. تشبه الإنجليزية (C++, Java). تحتاج ترجمة.</p>

                <p><strong>2. أدوات الترجمة:</strong><br>
                - <strong>المترجم (Compiler):</strong> يترجم البرنامج بالكامل مرة واحدة، ينتج ملف تنفيذي (Object Code). سريع في التشغيل.<br>
                - <strong>المفسر (Interpreter):</strong> يترجم وينفذ سطراً بسطر. أبطأ، لكن أسهل في اكتشاف الأخطاء.</p>

                <p><strong>3. مفاهيم هامة:</strong><br>
                - <strong>Syntax (النحو):</strong> قواعد كتابة الكود (مثل وضع ; في النهاية).<br>
                - <strong>Semantics (المعنى):</strong> المنطق والهدف من الكود.<br>
                - <strong>الرابط (Linker):</strong> يربط ملفات الـ Object Code مع المكتبات لإنتاج البرنامج النهائي.</p>
            </div>
        `,
        explanation_en: `
            <div class="space-y-4">
                <p><strong>1. Language Levels:</strong><br>
                - <strong>Machine Lang:</strong> Binary code, executed directly, hardware specific.<br>
                - <strong>Assembly Lang:</strong> Uses mnemonics (symbolic), requires Assembler.<br>
                - <strong>High-Level Lang:</strong> Portable, English-like (e.g., Pascal, C).</p>

                <p><strong>2. Translation:</strong><br>
                - <strong>Compiler:</strong> Translates entire source code to machine code. Errors found after compilation.<br>
                - <strong>Interpreter:</strong> Translates line-by-line. Errors found immediately. Slower execution.</p>

                <p><strong>3. Concepts:</strong><br>
                - <strong>Syntax:</strong> Grammar rules of the language.<br>
                - <strong>Linker:</strong> Combines object files into a single executable.<br>
                - <strong>Loader:</strong> Loads the executable into memory to run.</p>
            </div>
        `,
        video_id: "KgvtWTPdonA?si=o3nMDjoUzaZJq9WN",
        quiz: [
            { q: "Machine language consists of:", q_ar: "لغة الآلة تتكون من:", options: ["English words", "0s and 1s", "Mnemonics", "Images"], answer: 1 },
            { q: "Assembly language requires a ___ to run.", q_ar: "لغة التجميع تحتاج ___ لتعمل.", options: ["Compiler", "Interpreter", "Assembler", "Linker"], answer: 2 },
            { q: "Which is a High-Level Language?", q_ar: "أي مما يلي لغة عالية المستوى؟", options: ["Assembly", "C++", "Machine Code", "Binary"], answer: 1 },
            { q: "A Compiler translates:", q_ar: "المترجم (Compiler) يقوم بترجمة:", options: ["Line by line", "The whole program at once", "Only comments", "Graphics"], answer: 1 },
            { q: "Syntax refers to:", q_ar: "المصطلح Syntax يشير إلى:", options: ["Logic", "Meaning", "Structure/Grammar", "Speed"], answer: 2 },
            { q: "Which tool links object files together?", q_ar: "ما الأداة التي تربط ملفات الكائنات (Object files) معاً؟", options: ["Loader", "Linker", "Editor", "Debugger"], answer: 1 },
            { q: "Java uses ___ to run on any machine.", q_ar: "تستخدم جافا ___ لتعمل على أي جهاز.", options: ["Machine Code", "Assembly", "Bytecode & JVM", "Source Code"], answer: 2 },
            { q: "Interpreter is generally ___ than Compiler.", q_ar: "المفسر (Interpreter) عموماً ___ من المترجم.", options: ["Faster", "Slower", "Same speed", "Larger"], answer: 1 },
            { q: "Source Program is written in:", q_ar: "البرنامج المصدري (Source Program) مكتوب بـ:", options: ["Machine Language", "High-Level Language", "Binary", "Object Code"], answer: 1 },
            { q: "Mnemonics are used in:", q_ar: "تستخدم الاختصارات الرمزية (Mnemonics) في:", options: ["Java", "C++", "Assembly", "Python"], answer: 2 },
            { q: "Logic errors are related to:", q_ar: "الأخطاء المنطقية تتعلق بـ:", options: ["Syntax", "Semantics", "Grammar", "Spelling"], answer: 1 },
            { q: "A Loader performs:", q_ar: "يقوم المحمل (Loader) بـ:", options: ["Writing code", "Loading program into RAM", "Compiling", "Linking"], answer: 1 },
            { q: "Machine language is portable.", q_ar: "لغة الآلة قابلة للنقل (Portable).", options: ["True", "False"], answer: 1 },
            { q: "C++ is an Object-Oriented Language.", q_ar: "لغة C++ هي لغة كائنية التوجه.", options: ["True", "False"], answer: 0 },
            { q: "HTML is a programming language.", q_ar: "HTML هي لغة برمجة.", options: ["True", "False (Markup Lang)"], answer: 1 }
        ]
    },
    {
        id: 4,
        title_ar: "محاضرة 4: أنظمة التشغيل",
        title_en: "Lec 4: Operating Systems",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        summary_ar: "وظائف نظام التشغيل: إدارة العمليات، الذاكرة، التخزين، والمفاهيم المتقدمة.",
        summary_en: "OS functions: Process, Memory, Storage management, and advanced concepts.",
        explanation_ar: `
            <div class="space-y-4">
                <p><strong>1. تعريف نظام التشغيل (OS):</strong><br>
                برنامج يعمل كوسيط بين المستخدم والعتاد. أهدافه: السهولة، الكفاءة، وإدارة الموارد. هو "Resource Allocator".</p>
                
                <p><strong>2. إدارة العمليات (Process Management):</strong><br>
                - <strong>Process:</strong> برنامج قيد التنفيذ.<br>
                - <strong>States:</strong> حالة العملية (جديدة، جاهزة، تعمل، انتظار).<br>
                - <strong>Deadlock:</strong> تجمّد النظام عندما تنتظر عمليتان كل منهما الأخرى للأبد.</p>

                <p><strong>3. إدارة الذاكرة والتخزين:</strong><br>
                - تتبع الذاكرة المحجوزة والفارغة.<br>
                - <strong>Virtual Memory:</strong> استخدام القرص الصلب لتوسيع الذاكرة العشوائية.<br>
                - <strong>File System:</strong> تنظيم الملفات والمجلدات.</p>

                <p><strong>4. مفاهيم إضافية:</strong><br>
                - <strong>Multitasking:</strong> تشغيل عدة برامج في وقت واحد.<br>
                - <strong>Kernel:</strong> النواة، الجزء الأساسي من النظام الذي يعمل دائماً.<br>
                - <strong>Interrupt:</strong> إشارة توقف المعالج لخدمة حدث طارئ (مثل ضغطة زر).</p>
            </div>
        `,
        explanation_en: `
            <div class="space-y-4">
                <p><strong>1. OS Definition:</strong><br>
                Program acting as intermediary between user and hardware. It is a resource allocator and control program.</p>

                <p><strong>2. Key Functions:</strong><br>
                - <strong>Process Mgmt:</strong> Creating/deleting processes, synchronization, deadlock handling.<br>
                - <strong>Memory Mgmt:</strong> Allocation/Deallocation of RAM.<br>
                - <strong>I/O Mgmt:</strong> Hiding hardware peculiarities from the user.</p>

                <p><strong>3. Concepts:</strong><br>
                - <strong>Kernel:</strong> The core program running at all times.<br>
                - <strong>Bootstrap program:</strong> Loaded at power-up (ROM) to load the OS.<br>
                - <strong>Multiprocessing:</strong> Using multiple CPUs.<br>
                - <strong>Distributed Systems:</strong> Networked computers working together.</p>
            </div>
        `,
        video_id: "Gwab4Pt-cN8?si=NIYMBpQPzG_qYGdP",
        quiz: [
            { q: "The core of the operating system is called:", q_ar: "يسمى الجزء الأساسي لنظام التشغيل بـ:", options: ["Shell", "Kernel", "Processor", "Bus"], answer: 1 },
            { q: "Deadlock occurs when:", q_ar: "يحدث الـ Deadlock عندما:", options: ["CPU is too fast", "Processes wait indefinitely for resources", "RAM is full", "Disk crashes"], answer: 1 },
            { q: "A program in execution is called a:", q_ar: "البرنامج قيد التنفيذ يسمى:", options: ["File", "Process", "App", "Script"], answer: 1 },
            { q: "Which program runs first when computer starts?", q_ar: "ما البرنامج الذي يعمل أولاً عند تشغيل الحاسب؟", options: ["MS Word", "Bootstrap Program", "Antivirus", "Game"], answer: 1 },
            { q: "Multitasking allows:", q_ar: "تعدد المهام (Multitasking) يسمح بـ:", options: ["Single job execution", "Concurrent execution of multiple jobs", "Only printing", "Internet access"], answer: 1 },
            { q: "OS acts as an intermediary between:", q_ar: "يعمل نظام التشغيل كوسيط بين:", options: ["User and Hardware", "CPU and RAM", "Monitor and Keyboard", "Mouse and Printer"], answer: 0 },
            { q: "Which is NOT an Operating System?", q_ar: "أي مما يلي ليس نظام تشغيل؟", options: ["Windows", "Linux", "Oracle Database", "Android"], answer: 2 },
            { q: "Virtual Memory is:", q_ar: "الذاكرة الافتراضية هي:", options: ["Physical RAM", "Using HDD as RAM extension", "ROM", "Cache"], answer: 1 },
            { q: "Interrupt represents:", q_ar: "المقاطعة (Interrupt) تمثل:", options: ["System crash", "Signal to CPU to stop current task", "Power off", "Disk error"], answer: 1 },
            { q: "Which OS is Open Source?", q_ar: "أي نظام تشغيل هو مفتوح المصدر؟", options: ["Windows", "MacOS", "Linux", "iOS"], answer: 2 },
            { q: "Time-sharing systems allow:", q_ar: "أنظمة المشاركة الزمنية تسمح بـ:", options: ["One user only", "Multiple users sharing CPU time", "Offline processing", "Batch processing"], answer: 1 },
            { q: "GUI stands for:", q_ar: "اختصار GUI يعني:", options: ["Graphical User Interface", "Global Unit Interface", "General User Input", "Geo User Interface"], answer: 0 },
            { q: "File management includes:", q_ar: "إدارة الملفات تتضمن:", options: ["Creating/Deleting files", "Printing", "CPU scheduling", "Networking"], answer: 0 },
            { q: "The OS is a:", q_ar: "نظام التشغيل هو:", options: ["Hardware", "System Software", "Application Software", "Firmware"], answer: 1 },
            { q: "Paging is related to:", q_ar: "مفهوم الترحيل (Paging) يتعلق بـ:", options: ["Memory Management", "Process Management", "I/O", "Security"], answer: 0 }
        ]
    },
    {
        id: 5,
        title_ar: "محاضرة 5: أنظمة العد والتحويلات",
        title_en: "Lec 5: Number Systems",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        summary_ar: "شرح الأنظمة (العشري، الثنائي، الثماني، السداسي عشر) وطرق التحويل بينهم والكسور.",
        summary_en: "Decimal, Binary, Octal, Hexadecimal systems, conversions, and fractions.",
        explanation_ar: `
            <div class="space-y-4">
                <p><strong>1. الأنظمة العددية (Number Systems):</strong><br>
                - <strong>Decimal (العشري):</strong> أساس 10. الأرقام (0-9).<br>
                - <strong>Binary (الثنائي):</strong> أساس 2. الأرقام (0, 1).<br>
                - <strong>Octal (الثماني):</strong> أساس 8. الأرقام (0-7).<br>
                - <strong>Hexadecimal (السداسي عشر):</strong> أساس 16. الأرقام (0-9) والحروف (A=10, B=11, C=12, D=13, E=14, F=15).</p>

                <p><strong>2. قواعد التحويل (Conversions):</strong><br>
                - <strong>من عشري إلى أي نظام:</strong> قسمة متكررة على الأساس (2, 8, 16) وأخذ الباقي.<br>
                - <strong>من أي نظام إلى عشري:</strong> مجموع (الرقم × الأساس <sup>ترتيب الخانة</sup>).<br>
                - <strong>من ثنائي لثماني:</strong> تجميع كل 3 بتات.<br>
                - <strong>من ثنائي لسداسي عشر:</strong> تجميع كل 4 بتات.</p>

                <p><strong>3. الكسور (Fractions):</strong><br>
                في الثنائي، الخانات يمين الفاصلة تأخذ الأسس السالبة (2<sup>-1</sup>, 2<sup>-2</sup>...).</p>
            </div>
        `,
        explanation_en: `
            <div class="space-y-4">
                <p><strong>1. Bases:</strong><br>
                - <strong>Decimal:</strong> Base 10 (0-9).<br>
                - <strong>Binary:</strong> Base 2 (0, 1).<br>
                - <strong>Octal:</strong> Base 8 (0-7).<br>
                - <strong>Hexadecimal:</strong> Base 16 (0-9, A-F).</p>

                <p><strong>2. Conversions:</strong><br>
                - <strong>Decimal to Other:</strong> Successive Division.<br>
                - <strong>Other to Decimal:</strong> Weighted Sum (Digit * Base^Position).<br>
                - <strong>Binary <-> Hex:</strong> Group bits by 4.<br>
                - <strong>Binary <-> Octal:</strong> Group bits by 3.</p>
            </div>
        `,
        video_id: "RcBfdcww3dQ?si=9a9spwqnVfFvaPzQ",
        quiz: [
            { q: "Binary number 1010 equals decimal:", q_ar: "الرقم الثنائي 1010 يساوي بالعشري:", options: ["10", "12", "8", "6"], answer: 0 },
            { q: "Hexadecimal digit 'F' equals:", q_ar: "الرقم السداسي عشر F يساوي:", options: ["14", "15", "16", "13"], answer: 1 },
            { q: "Base of Octal system is:", q_ar: "أساس النظام الثماني هو:", options: ["10", "2", "8", "16"], answer: 2 },
            { q: "Decimal 8 in Binary is:", q_ar: "الرقم العشري 8 يكتب بالثنائي:", options: ["100", "111", "1000", "1001"], answer: 2 },
            { q: "Convert Binary 111 to Decimal:", q_ar: "حول الثنائي 111 إلى عشري:", options: ["3", "6", "7", "8"], answer: 2 },
            { q: "Binary 10 + 10 equals:", q_ar: "مجموع 10 + 10 بالثنائي:", options: ["20", "100", "11", "101"], answer: 1 },
            { q: "Hexadecimal A2 equals Decimal:", q_ar: "السداسي عشر A2 يساوي بالعشري:", options: ["160", "162", "12", "102"], answer: 1 },
            { q: "Which digit does not exist in Octal?", q_ar: "أي رقم لا يوجد في النظام الثماني؟", options: ["7", "0", "8", "5"], answer: 2 },
            { q: "0.5 in Decimal equals Binary:", q_ar: "0.5 بالعشري تساوي بالثنائي:", options: ["0.1", "0.01", "0.101", "0.11"], answer: 0 },
            { q: "The value of 2^4 is:", q_ar: "قيمة 2 أس 4 هي:", options: ["8", "16", "32", "12"], answer: 1 },
            { q: "Group 4 bits to convert Binary to:", q_ar: "نجمع كل 4 بتات للتحويل من ثنائي إلى:", options: ["Octal", "Hexadecimal", "Decimal", "Grey"], answer: 1 },
            { q: "Hex 10 equals Decimal:", q_ar: "السداسي عشر 10 يساوي بالعشري:", options: ["10", "16", "20", "100"], answer: 1 },
            { q: "Binary 100 - 001 equals:", q_ar: "ناتج طرح 100 - 001 بالثنائي:", options: ["001", "011", "010", "101"], answer: 1 },
            { q: "Positional value of rightmost digit in integer is:", q_ar: "القيمة المكانية للخانة اليمنى في العدد الصحيح هي:", options: ["Base^0", "Base^1", "Base^-1", "0"], answer: 0 },
            { q: "System used for colors (RGB) mostly:", q_ar: "النظام المستخدم لتمثيل الألوان عادة:", options: ["Binary", "Octal", "Hexadecimal", "Decimal"], answer: 2 }
        ]
    },
    {
        id: 6,
        title_ar: "محاضرة 6: البوابات المنطقية",
        title_en: "Lec 6: Logic Gates",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        summary_ar: "أساسيات التصميم الرقمي: البوابات (AND, OR, NOT...) وتصميم الدوائر (Adders).",
        summary_en: "Digital design basics: Gates (AND, OR, NOT...), Truth Tables, and Combinational Circuits.",
        explanation_ar: `
            <div class="space-y-4">
                <p><strong>1. البوابات الأساسية (Basic Gates):</strong><br>
                - <strong>AND:</strong> الناتج 1 فقط إذا كان كل المدخلات 1 (A.B).<br>
                - <strong>OR:</strong> الناتج 1 إذا كان أي مدخل 1 (A+B).<br>
                - <strong>NOT:</strong> العاكس، يقلب 0 إلى 1 والعكس (A').</p>

                <p><strong>2. بوابات أخرى:</strong><br>
                - <strong>NAND / NOR:</strong> بوابات شاملة (Universal).<br>
                - <strong>XOR:</strong> الناتج 1 إذا كانت المدخلات مختلفة (المتشابهين 0).</p>

                <p><strong>3. الدوائر التوافقية (Combinational Circuits):</strong><br>
                دوائر تعتمد مخرجاتها على المدخلات الحالية فقط (بدون ذاكرة).<br>
                - <strong>Half Adder:</strong> يجمع 2 بت. المخرجات: Sum (XOR), Carry (AND).<br>
                - <strong>Full Adder:</strong> يجمع 3 بت (بما فيها الحمل السابق).</p>
            </div>
        `,
        explanation_en: `
            <div class="space-y-4">
                <p><strong>1. Basic Gates:</strong><br>
                - <strong>AND:</strong> Output 1 only if all inputs are 1.<br>
                - <strong>OR:</strong> Output 1 if at least one input is 1.<br>
                - <strong>NOT:</strong> Inverter (0->1, 1->0).</p>

                <p><strong>2. Advanced Gates:</strong><br>
                - <strong>NAND/NOR:</strong> Universal gates.<br>
                - <strong>XOR (Exclusive OR):</strong> Output 1 if inputs are different.</p>

                <p><strong>3. Adders:</strong><br>
                - <strong>Half Adder:</strong> Adds 2 bits. Output: Sum & Carry.<br>
                - <strong>Full Adder:</strong> Adds 3 bits (handles Carry-in).</p>
            </div>
        `,
        video_id: "dYBB4bd3sco?si=ET1QhRKYiyLGo0YC",
        quiz: [
            { q: "Output of AND(1, 0) is:", q_ar: "ناتج AND(1, 0) هو:", options: ["1", "0", "High", "Unknown"], answer: 1 },
            { q: "Output of OR(1, 0) is:", q_ar: "ناتج OR(1, 0) هو:", options: ["1", "0", "Low", "Unknown"], answer: 0 },
            { q: "NOT(1) equals:", q_ar: "NOT(1) يساوي:", options: ["1", "0", "-1", "2"], answer: 1 },
            { q: "Which gate gives 1 only if inputs are different?", q_ar: "أي بوابة تعطي 1 فقط إذا اختلفت المدخلات؟", options: ["AND", "OR", "XOR", "NAND"], answer: 2 },
            { q: "Half Adder has how many inputs?", q_ar: "الجامع النصفي (Half Adder) له كم مدخل؟", options: ["1", "2", "3", "4"], answer: 1 },
            { q: "Full Adder has how many inputs?", q_ar: "الجامع الكامل (Full Adder) له كم مدخل؟", options: ["2", "3", "4", "1"], answer: 1 },
            { q: "Sum in Half Adder is implemented by:", q_ar: "المخرج Sum في الجامع النصفي ينفذ ببوابة:", options: ["AND", "OR", "XOR", "NOR"], answer: 2 },
            { q: "Carry in Half Adder is implemented by:", q_ar: "المخرج Carry في الجامع النصفي ينفذ ببوابة:", options: ["AND", "OR", "XOR", "NAND"], answer: 0 },
            { q: "Universal gates are:", q_ar: "البوابات الشاملة (Universal) هي:", options: ["AND, OR", "NAND, NOR", "XOR, XNOR", "NOT, BUFFER"], answer: 1 },
            { q: "Combinational circuits have:", q_ar: "الدوائر التوافقية تمتلك:", options: ["Memory", "No Memory", "Clock", "Feedback"], answer: 1 },
            { q: "NAND is equivalent to:", q_ar: "NAND تكافئ:", options: ["AND followed by NOT", "OR followed by NOT", "NOT followed by AND", "XOR"], answer: 0 },
            { q: "Truth table for 2 variables has rows:", q_ar: "جدول الحقيقة لمتغيرين يحتوي على كم صف؟", options: ["2", "4", "8", "16"], answer: 1 },
            { q: "F(x,y) = x + y represents:", q_ar: "التعبير F = x + y يمثل:", options: ["AND", "OR", "NOT", "NAND"], answer: 1 },
            { q: "F(x,y) = xy represents:", q_ar: "التعبير F = xy يمثل:", options: ["AND", "OR", "NOT", "NOR"], answer: 0 },
            { q: "Output of XOR(1, 1) is:", q_ar: "ناتج XOR(1, 1) هو:", options: ["1", "0", "High", "True"], answer: 1 }
        ]
    },
    {
        id: 7,
        title_ar: "محاضرة 7: تنظيم الحاسب",
        title_en: "Lec 7: Computer Org.",
        image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        summary_ar: "معمارية فون نيومان، النواقل (Buses)، ودورة تنفيذ التعليمات بالتفصيل.",
        summary_en: "Von Neumann architecture, System Buses, and Instruction Cycle details.",
        explanation_ar: `
            <div class="space-y-4">
                <p><strong>1. معمارية فون نيومان (Von Neumann):</strong><br>
                المفهوم الأساسي للحواسيب الحديثة: تخزين البيانات والتعليمات (البرامج) في نفس الذاكرة.</p>

                <p><strong>2. نواقل النظام (System Buses):</strong><br>
                - <strong>Data Bus:</strong> نقل البيانات (ثنائي الاتجاه Bi-directional).<br>
                - <strong>Address Bus:</strong> نقل العناوين لتحديد مكان الذاكرة (أحادي الاتجاه Uni-directional من المعالج).<br>
                - <strong>Control Bus:</strong> نقل إشارات التحكم (قراءة/كتابة).</p>

                <p><strong>3. مسجلات المعالج (Registers):</strong><br>
                - <strong>PC (Program Counter):</strong> يحمل عنوان التعليمة التالية.<br>
                - <strong>IR (Instruction Register):</strong> يحمل التعليمة الحالية.<br>
                - <strong>MAR:</strong> مسجل عنوان الذاكرة.<br>
                - <strong>MDR:</strong> مسجل بيانات الذاكرة.</p>

                <p><strong>4. دورة التعليمات (Instruction Cycle):</strong><br>
                1. Fetch (جلب التعليمة).<br>
                2. Decode (فك الشفرة وفهم المطلوب).<br>
                3. Execute (تنفيذ العملية).<br>
                4. Store (تخزين الناتج).</p>
            </div>
        `,
        explanation_en: `
            <div class="space-y-4">
                <p><strong>1. Von Neumann Architecture:</strong><br>
                Concept of "Stored Program": Instructions and Data share the same memory space.</p>

                <p><strong>2. Buses:</strong><br>
                - <strong>Data Bus:</strong> Carries actual data (Bi-directional).<br>
                - <strong>Address Bus:</strong> Carries location info (Uni-directional).<br>
                - <strong>Control Bus:</strong> Coordination signals.</p>

                <p><strong>3. Registers:</strong><br>
                - <strong>PC:</strong> Holds address of next instruction.<br>
                - <strong>IR:</strong> Holds current instruction.<br>
                - <strong>MAR/MDR:</strong> Interface with memory.</p>

                <p><strong>4. Cycle:</strong><br>
                Fetch -> Decode -> Execute.</p>
            </div>
        `,
        video_id: "52hSKHvkO7w?si=0Q069DTt3iXEyC65",
        quiz: [
            { q: "Von Neumann architecture stores:", q_ar: "معمارية فون نيومان تخزن:", options: ["Data only", "Instructions only", "Data and Instructions in same memory", "None"], answer: 2 },
            { q: "Which bus is bi-directional?", q_ar: "أي ناقل هو ثنائي الاتجاه؟", options: ["Address Bus", "Data Bus", "Control Bus", "Power Bus"], answer: 1 },
            { q: "PC Register holds:", q_ar: "مسجل الـ PC يحتوي على:", options: ["Current Data", "Address of next instruction", "Result", "Error code"], answer: 1 },
            { q: "Which bus is uni-directional?", q_ar: "أي ناقل هو أحادي الاتجاه (من المعالج)؟", options: ["Data Bus", "Address Bus", "System Bus", "USB"], answer: 1 },
            { q: "Instruction Cycle order is:", q_ar: "ترتيب دورة التعليمات هو:", options: ["Execute-Fetch-Decode", "Fetch-Decode-Execute", "Decode-Fetch-Execute", "Store-Fetch-Decode"], answer: 1 },
            { q: "IR stands for:", q_ar: "اختصار IR يعني:", options: ["Input Register", "Instruction Register", "Index RAM", "Integer Read"], answer: 1 },
            { q: "MAR stands for:", q_ar: "اختصار MAR يعني:", options: ["Main Address RAM", "Memory Address Register", "Memory All Read", "Master Access Rule"], answer: 1 },
            { q: "Which unit decodes instructions?", q_ar: "أي وحدة تقوم بفك تشفير التعليمات؟", options: ["ALU", "Control Unit", "Memory", "Disk"], answer: 1 },
            { q: "Width of Data Bus determines:", q_ar: "عرض ناقل البيانات يحدد:", options: ["Addressable memory", "Word size/Performance", "Disk capacity", "Screen resolution"], answer: 1 },
            { q: "Width of Address Bus determines:", q_ar: "عرض ناقل العناوين يحدد:", options: ["Maximum Memory Capacity", "Processing speed", "Power consumption", "Number of USB ports"], answer: 0 },
            { q: "Clock speed is measured in:", q_ar: "سرعة الساعة تقاس بـ:", options: ["Bytes", "Hz (Hertz)", "Amps", "Ohms"], answer: 1 },
            { q: "MDR stands for:", q_ar: "اختصار MDR يعني:", options: ["Memory Data Register", "Main Disk Record", "Master Data Routine", "Memory Direct Read"], answer: 0 },
            { q: "Fetch step moves instruction from:", q_ar: "خطوة الجلب (Fetch) تنقل التعليمة من:", options: ["CPU to RAM", "Memory to CPU", "Disk to Printer", "ALU to CU"], answer: 1 },
            { q: "ALU is part of:", q_ar: "وحدة ALU هي جزء من:", options: ["Memory", "I/O", "CPU", "Bus"], answer: 2 },
            { q: "Harvard Architecture has:", q_ar: "معمارية هارفارد تتميز بـ:", options: ["Shared memory", "Separate memories for Data and Code", "No memory", "Only ROM"], answer: 1 }
        ]
    }
];