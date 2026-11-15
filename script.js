document.addEventListener("DOMContentLoaded", function() {

    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 1b. Hamburger menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu   = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.classList.toggle('open', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen);
        });
        // Close menu when a link is tapped
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }

    // 2. Intersection Observer for Fade-In Animations
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // 3. Project Details Database
    const projectDetails = {
        "field-service-nlp": {
            course: "BS Computer Engineering | Natural Language Processing & OCR",
            title: "AUTOMATED STRUCTURING OF FIELD SERVICE REPORTS FOR RECORD ENTRY USING INFORMATION EXTRACTION AND TEXT CLASSIFICATION",
            description: "An end-to-end NLP and document processing pipeline designed to digitize and extract critical structured records from handwritten and scanned field service reports for CRM and ERP entry. Utilizing TrOCR for optical character recognition, Conditional Random Fields (CRF) for named entity recognition, and fine-tuned Transformer models (RoBERTa / BERT) for document classification, the system transforms noisy handwritten physical forms into human-in-the-loop review-and-confirm CRM records, robustly mitigating OCR degradation.",
            contributions: "Addresses the critical enterprise bottleneck of handwritten paperwork digitization by formulating an automated Information Extraction and Text Classification architecture. Evaluating model degradation across varying OCR noise levels bridges computer vision with state-of-the-art transformer NLP.",
            sections: [
                {
                    title: "Architecture & Methodology",
                    type: "description",
                    text: "The pipeline consists of a TrOCR vision-encoder-decoder for optical character recognition on handwritten forms, a Conditional Random Field (CRF) layer for token-level sequence labeling, and a fine-tuned RoBERTa classification backbone for intent and document categorization. Evaluated using entity F1 and macro-F1 metrics."
                },
                {
                    title: "Key Deliverables",
                    type: "buttons",
                    items: [
                        { label: "Research Overview", url: "https://drive.google.com/file/d/1Uaw2FII08Z_PJ1tykyrdUth6LuTcXI0w/view?usp=sharing" }
                    ]
                }
            ],
            technologies: ["Python", "RoBERTa / BERT", "TrOCR", "CRF", "spaCy", "Transformers", "NLP"],
            sdg: {
                number: 9,
                title: "Industry, Innovation and Infrastructure",
                description: "Modernizes enterprise data processing by replacing manual paper workflows with automated intelligent document extraction.",
                imgSrc: "images/sdg/9.jpg"
            }
        },
        "student-stress-ml": {
            course: "BS Computer Engineering | Machine Learning & Statistical Modeling",
            title: "PREDICTING STUDENT STRESS FROM SLEEP, STUDY, AND CAFFEINE HABITS: A COMPARATIVE STUDY OF LINEAR, LOGISTIC, AND K-NEAREST NEIGHBORS CLASSIFIERS",
            description: "A comparative machine learning research study investigating the predictive relationship between student lifestyle habits (sleep hours, study workload, caffeine intake, screen time) and physiological stress levels. Implemented, benchmarked, and cross-validated Linear Regression, Logistic Regression, and K-Nearest Neighbors (K-NN) classifiers evaluated with accuracy, precision, recall, and macro-F1.",
            contributions: "Analyzed multi-dimensional student lifestyle data, executed exploratory data analysis (EDA), and conducted rigorous model evaluation to understand feature importance and predict high vs. low stress patterns.",
            sections: [
                {
                    title: "Experimental Methodology",
                    type: "description",
                    text: "Evaluated supervised learning classifiers (Linear Regression, Logistic Regression, K-NN) with 10-fold cross validation. Analyzed confusion matrices, ROC-AUC, and feature coefficients to determine the strongest behavioral predictors of academic stress."
                },
                {
                    title: "Study Documentation",
                    type: "buttons",
                    items: [
                        { label: "Comparative Report", url: "https://drive.google.com/file/d/1Uaw2FII08Z_PJ1tykyrdUth6LuTcXI0w/view?usp=sharing" }
                    ]
                }
            ],
            technologies: ["Python", "scikit-learn", "Logistic Regression", "K-NN", "pandas", "NumPy", "Matplotlib", "Seaborn"],
            sdg: {
                number: 3,
                title: "Good Health and Well-Being",
                description: "Utilizes predictive behavioral data modeling to identify lifestyle risk factors and promote preventative student mental wellness.",
                imgSrc: "images/sdg/3.jpg"
            }
        },
        "pose-estimation": {
            course: "CPE C313 | Artificial Intelligence",
            title: "Web-Based Human Pose Estimation System for Real-Time Squat Form Correction using Teachable Machine",
            description: "This AI-powered \"Squat Coach\" mitigates the biomechanical risks of unsupervised home fitness by providing real-time form correction. Utilizing a Python script with OpenCV and the MediaPipe Pose Landmarker, the system tracks 33 skeletal keypoints to evaluate postural alignment. Built on a PoseNet architecture via Google Teachable Machine , the model achieved a 93.48% overall accuracy and perfect 1.00 specificity. This ensures high sensitivity to improper form, delivering a robust, low-latency feedback loop for user safety.",
            contributions: "Building this \"Squat Coach\" allowed me to tackle the localized health crisis of physical inactivity (Outcome H) by formulating an automated solution for unsupervised home workouts (Outcome E). Getting hands-on with OpenCV and MediaPipe (Outcome K) and validating our model via confusion matrices (Outcome B) perfectly bridged classroom theory with actionable data science. \nPersonally, spearheading this FarVent initiative reinforces my drive toward tech-driven social entrepreneurship. Migrating this AI into an accessible, cross-platform Flutter app using TFLite captures exactly the developer I strive to be—translating complex technology into impactful everyday tools that genuinely empower communities.",
            sections: [
                {
                    title: "Resources",
                    type: "buttons",
                    items: [
                        { label: "Lab Activities & PTs", url: "https://drive.google.com/file/d/1M78s1P0ibNNj8WQrPBewZG5W9FLQOtd0/view?usp=sharing" },
                        { label: "Journal Article", url: "https://drive.google.com/file/d/1InTvSTjd5x210TqIQhGAZAW96OGwUp4K/view?usp=sharing" },
                        { label: "Source Codes", url: "https://drive.google.com/file/d/1w2DYkX1uSCf43FIlWJ0vSNzvzOdcG9w5/view?usp=sharing" }
                    ]
                },
                {
                    title: "Demonstration",
                    type: "media",
                    description: "This project demonstrates the real-time capabilities of the AI-powered squat form correction system.",
                    videoUrl: "videos/AI demo.mp4",
                    websiteUrl: "https://example.com"
                }
            ],
            technologies: ["Python", "Teachable Machine", "Web Development", "Computer Vision"],
            sdg: {
                number: 4,
                title: "Quality Education",
                description: "This project aligns with SDG 4 by providing innovative tools for improved education quality.",
                imgSrc: "images/sdg/4.jpg" // e.g. "images/sdg-4.png"
            }
        },
        "face-recognition": {
            course: "CPE C305, CPE C306 | Digital Signal Processing & Microcontroller",
            title: "Raspberry Pi-Based Face Recognition Classroom Attendance",
            description: "The AI-Based Face Recognition Attendance System is a biometric solution designed to eliminate proxy attendance and manual logging errors by verifying students through unique facial features. Powered by a Raspberry Pi 4B, the system utilizes OpenCV and the LBPH algorithm to process live camera feeds for real-time identification and automated logging. It features a guided 3D enrollment module and integrates with Firebase to maintain a secure, cloud-synchronized attendance database accessible across devices.",
            sections: [
                {
                    title: "Documentation",
                    type: "buttons",
                    items: [
                        { label: "Documentation", url: "https://drive.google.com/file/d/1_3eCuGzC6T9t8dYM917FDV4GxwMflvsp/view?usp=sharing" }
                    ]
                },
                {
                    title: "Software Demonstration",
                    type: "media",
                    description: "This demonstration highlights the system's real-time facial inference and instant cloud-synchronization for automated, error-free attendance logging.",
                    videoUrl: "videos/attendance demo.mp4",
                    websiteUrl: "https://example.com"
                },
                {
                    title: "Software Screenshots",
                    type: "gallery",
                    images: [
                        { src: "images/rpi 1.png", alt: "Screenshot 1" }, // e.g. "images/attendance-ss-1.png"
                        { src: "images/rpi 2.png", alt: "Screenshot 2" }, // e.g. "images/attendance-ss-2.png"
                        { src: "images/rpi 3.png", alt: "Screenshot 3" }, // e.g. "images/attendance-ss-3.png"
                        { src: "images/rpi 4.png", alt: "Screenshot 4" }  // e.g. "images/attendance-ss-4.png"
                    ]
                }
            ],
            technologies: ["Raspberry Pi", "Python", "OpenCV", "Face Recognition"],
            sdg: {
                number: 4,
                title: "Quality Education",
                description: "This project enhances educational efficiency through automated attendance management.",
                imgSrc: "images/sdg/4.jpg" // e.g. "images/sdg-4.png"
            }
        },
        "save-share": {
            course: "EGR C204 | Technopreneurship",
            title: "Save&Share (FarVent) | Full-Stack Tech Startup",
            description: "The Save&Share mobile app by FarVent is a hyper-localized surplus marketplace combating urban food waste. Independent eateries lose up to 15% of daily revenue to unsold surplus, while the food service sector drives 10% of global waste. Save&Share lets merchants instantly list end-of-day prepared meals and near-expiry ingredients at discounted prices for nearby consumers. Built with Flutter, Firebase, Google Maps API, and local payment integration, the platform automates unsold item redistribution to NGOs and enforces PD 856 liability waivers to ensure a secure, zero-waste ecosystem.",
            contributions: "Academically, designing this platform within the economic constraints of local MSMEs satisfies Outcome C. Implementing real-time geolocation mapping demonstrates complex engineering problem-solving (Outcome E), while enforcing PD 856 public health waivers highlights professional and ethical responsibility (Outcome F). Furthermore, addressing landfill emissions and urban food insecurity directly tackles the societal impact of engineering solutions (Outcome H). Personally, leading FarVent as Project Manager through the Wadhwani Foundation assessments reinforces my drive to engineer lean, self-sustaining startups that empower communities through accessible technology.",
            sections: [
                {
                    title: "Milestones",
                    type: "buttons",
                    items: [
                        { label: "Wadhwani Milestone 1", url: "https://drive.google.com/file/d/15OOEpy46Fd-OpwJ6900lUefhlcSIKhn2/view?usp=sharing" },
                        { label: "Wadhwani Milestone 2", url: "https://drive.google.com/file/d/1rgQZ7rwExLELMrRAgSytQQnRtFDjImC8/view?usp=sharing" },
                        { label: "Wadhwani Milestone 3", url: "https://drive.google.com/file/d/1GpvXP05SyYlsb4hMnGHRwReniWoMgNdU/view?usp=sharing" }
                    ]
                },
                {
                    title: "Pitch & Final Documentation",
                    type: "buttons",
                    items: [
                        { label: "Final Pitch Deck", url: "https://drive.google.com/file/d/1Vqm308B0Zu-hUhcXxfj-eNbRVWfQ52BM/view?usp=sharing" }
                    ]
                },
                {
                    title: "Software Demonstration",
                    type: "media",
                    description: "Welcome to the interactive prototype demonstration for Save&Share. This walkthrough highlights our platform's streamlined user experience, specifically engineered to eliminate liquidation friction for non-technical eatery owners.",
                    videoUrl: "videos/techno demo.mp4",
                    websiteUrl: "https://example.com"
                },
                {
                    title: "Pitch Video",
                    type: "media",
                    description: "Every night across high-density urban centers, independent eateries throw away perfectly good, edible surplus, losing up to 15% of their daily revenue while neighboring communities struggle with rising food costs. We are FarVent, and our mission is to turn that unavoidable food surplus into recovered operating capital through our mobile marketplace app, Save&Share.",
                    videoUrl: "videos/farvent pitch video.mp4",
                    websiteUrl: ""
                }
            ],
            technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
            sdg: {
                number: 12,
                title: "Responsible Consumption & Production",
                description: "FarVent addresses food waste and promotes sustainable consumption patterns.",
                imgSrc: "images/sdg/12.jpg" // e.g. "images/sdg-12.png"
            }
        }
    };

    // 4. Modal Logic
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-btn");

    // Function to pause all videos in modal
    function pauseAllVideos() {
        const videos = modal ? modal.querySelectorAll('video') : [];
        videos.forEach(video => video.pause());
    }

    // Function to close modal safely
    function closeModal() {
        if (modal) {
            pauseAllVideos();
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }

    // ─────────────────────────────────────────────
    // Badge Lightbox (hoisted — used by pane renderers)
    // ─────────────────────────────────────────────
    const badgeLightbox    = document.getElementById('badge-lightbox');
    const badgeLightboxImg = document.getElementById('badge-lightbox-img');
    const badgeLightboxClose = document.querySelector('.badge-lightbox-close');

    function openBadgeLightbox(src, alt) {
        if (!badgeLightbox || !badgeLightboxImg) return;
        badgeLightboxImg.src = src;
        badgeLightboxImg.alt = alt;
        badgeLightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeBadgeLightbox() {
        if (!badgeLightbox) return;
        badgeLightbox.classList.remove('open');
        document.body.style.overflow = 'auto';
    }

    // Click any hero badge image to open lightbox
    document.querySelectorAll('.badge-img').forEach(img => {
        img.addEventListener('click', () => openBadgeLightbox(img.src, img.alt));
    });

    // Close on backdrop click
    if (badgeLightbox) {
        badgeLightbox.addEventListener('click', (e) => {
            if (e.target === badgeLightbox) closeBadgeLightbox();
        });
    }

    // Close on X button
    if (badgeLightboxClose) {
        badgeLightboxClose.addEventListener('click', closeBadgeLightbox);
    }

    // Certification Details Database
    const certificationDetails = {
        "aws-cloud-practitioner": {
            title: "AWS Certified Cloud Practitioner",
            description: "Validates foundational, high-level understanding of AWS Cloud services, architectural best practices, security, compliance, billing, and core cloud infrastructure operations. This industry certification demonstrates validated proficiency in cloud economics, security models, and core service categories including compute, storage, networking, and databases on AWS.",
            image: { src: "images/aws-cloud-practitioner-badge.png" },
            date: "November 2026",
            issuer: "Amazon Web Services (AWS)",
            bullets: [
                "Cloud computing concepts, models, and global infrastructure",
                "AWS core services: EC2, S3, RDS, Lambda, VPC",
                "Security, compliance, identity management (IAM)",
                "Cloud economics: pricing, billing, cost optimization"
            ]
        },
        "aws-ml-nlp": {
            title: "AWS Academy Graduate — Machine Learning for NLP",
            description: "Specialized accreditation in Natural Language Processing on AWS, mastering transformer architectures (BERT, RoBERTa), text tokenization, sentiment analysis, entity extraction, and deploying scalable NLP models using Amazon SageMaker and AWS AI services.",
            image: { src: "images/aws-ml-nlp-badge.png" },
            date: "2026",
            issuer: "AWS Academy (Amazon Web Services)",
            bullets: [
                "Transformer NLP architectures: BERT, RoBERTa, tokenization",
                "Sentiment analysis, entity extraction, text classification",
                "Amazon SageMaker model hosting and endpoint deployment",
                "AWS AI services: Comprehend, Textract, Translate"
            ]
        },
        "aws-cloud-foundations": {
            title: "AWS Academy Graduate — Cloud Foundations",
            description: "Academic graduate badge validating comprehensive understanding of AWS cloud infrastructure, security, identity management, and core computing services. Provides foundational knowledge aligned with AWS Certified Cloud Practitioner objectives.",
            image: { src: "images/aws-cloud-foundations-badge.png" },
            date: "2026",
            issuer: "AWS Academy (Amazon Web Services)",
            bullets: [
                "Cloud computing concepts and AWS global infrastructure",
                "Core AWS services: compute, storage, database, networking",
                "AWS security fundamentals and shared responsibility model",
                "Introduction to cloud economics and billing"
            ]
        },
        "aws-ml": {
            title: "AWS Academy Machine Learning Graduate",
            description: "Certified as an AWS Academy Machine Learning Graduate, demonstrating comprehensive knowledge and practical skills in machine learning concepts, AWS cloud services, and data science methodologies. This certification validates expertise in building and deploying ML solutions on AWS infrastructure.",
            image: { src: "images/aws cert.png" },
            date: "2026",
            issuer: "Amazon Web Services (AWS)",
            bullets: [
                "Machine learning pipeline design and feature engineering",
                "Supervised and unsupervised learning on AWS SageMaker",
                "Model training, evaluation, and deployment workflows",
                "Data preprocessing, bias detection, and model explainability"
            ]
        },
        "huawei-ai": {
            title: "Huawei ICT Academy — Overview of AI",
            description: "Certificate of Completion for the Overview of Artificial Intelligence course from Huawei ICT Academy. This certification covers fundamental AI concepts, machine learning principles, neural networks, and Huawei's AI technologies and solutions.",
            image: { src: "images/huawei cert.png" },
            date: "2026",
            issuer: "Huawei ICT Academy",
            bullets: [
                "Foundational AI theory: machine learning, deep learning, neural networks",
                "Computer vision and natural language processing fundamentals",
                "Huawei AI platforms and cloud-based AI tools",
                "Applied AI use cases across industry verticals"
            ]
        },
        "wadhwani": {
            title: "Wadhwani Foundation — Ignite Entrepreneurship",
            description: "Comprehensive startup incubation program validating venture creation, product-market fit, customer discovery, financial viability, and pitch execution for tech startups.",
            image: { src: "images/sns cover.png" },
            date: "April 2026",
            issuer: "Wadhwani Entrepreneurship",
            bullets: [
                "Customer discovery, problem-solution fit, and MVP validation",
                "Business model canvas and lean startup methodology",
                "Financial projections, unit economics, and go-to-market strategy",
                "Live pitch assessment by Wadhwani Foundation evaluators"
            ]
        },
        "comptia": {
            title: "CompTIA Tech+",
            description: "CompTIA Technology+ certification validates foundational IT skills and knowledge in areas such as hardware, software, networking, and security. This certification demonstrates competence in the fundamental concepts and practices of modern information technology.",
            image: { src: "images/comptia cert.png" },
            date: "September 2025",
            issuer: "CompTIA",
            bullets: [
                "Computing hardware, components, and system assembly",
                "Operating systems installation, configuration, and troubleshooting",
                "Networking fundamentals: TCP/IP, DNS, DHCP, Wi-Fi",
                "Security concepts, threats, and basic threat mitigation"
            ]
        },
        "tesda-css": {
            title: "TESDA BSRS: Computer Systems Servicing NC II",
            description: "National Certification II credential demonstrating hands-on technical proficiency in installing, configuring, and testing computer systems, local area networks (LAN), and enterprise server environments.",
            image: { src: "" },
            date: "September 2025",
            issuer: "Technical Education and Skills Development Authority (TESDA)",
            bullets: [
                "Computer hardware assembly, disassembly, and configuration",
                "LAN installation: structured cabling, switches, and routers",
                "Server setup, OS installation, and network service configuration",
                "Hardware troubleshooting and preventive maintenance"
            ]
        },
        "java": {
            title: "IT Specialist — Java",
            description: "Certified by Certiport as an IT Specialist in Java programming fundamentals. This certification validates proficiency in Java programming concepts, object-oriented programming principles, and practical application development skills.",
            image: { src: "images/java cert.png" },
            date: "May 2024",
            issuer: "Certiport (A Pearson VUE Business)",
            bullets: [
                "Java fundamentals: variables, data types, control flow",
                "Object-oriented programming: classes, inheritance, polymorphism",
                "Exception handling, file I/O, and collections framework",
                "Algorithm logic and Java application development"
            ]
        },
        "toeic": {
            title: "TOEIC Perfect Score",
            description: "Achieved a perfect score of 990/990 on the Test of English for International Communication (TOEIC) examination administered by ETS. This certification demonstrates exceptional proficiency in English language skills for international business and academic communication.",
            image: { src: "" },
            date: "November 2023",
            issuer: "ETS (Educational Testing Service)",
            bullets: [
                "Perfect 990/990 score — highest attainable TOEIC score",
                "Listening comprehension: multi-speaker conversations, announcements",
                "Reading comprehension: business correspondence, analytical texts",
                "Professional English for international technical communication"
            ]
        }
    };

    function renderCertificationModal(certificationId) {
        const cert = certificationDetails[certificationId];
        if (!cert) return;

        const modalBody = document.getElementById("modal-body");
        if (!modalBody) return;

        let html = `
            <div class="modal-header">
                <h2>${cert.title}</h2>
            </div>

            <div class="modal-section">
                <h3>Description</h3>
                <p class="modal-description">${cert.description}</p>
            </div>

            <div class="modal-section">
                <h3>Certificate Details</h3>
                <div class="cert-details">
                    <p><strong>Issuer:</strong> ${cert.issuer}</p>
                    <p><strong>Date Earned:</strong> ${cert.date}</p>
                </div>
            </div>

            <div class="modal-section">
                <h3>Certificate Image</h3>
                <div class="certificate-full-image">
        `;

        if (cert.image.src) {
            html += `<img src="${cert.image.src}" alt="${cert.title} Certificate" class="certificate-img">`;
        } else {
            html += `<img src="" alt="${cert.title} Certificate" class="certificate-img img-empty">`;
        }

        html += `</div></div>`;

        document.getElementById("modal-body").innerHTML = html;
    }

    // Experience Details Database
    const experienceDetails = {
        "icpep": {
            title: "President | ICpEP.SE - JRU Chapter",
            period: "2025 – Present",
            org: "Institute of Computer Engineers of the Philippines, Student Edition — JRU",
            description: "Elected chapter president after serving as Secretary. Directing organizational strategy, managing 8+ technical events and workshops, and representing the chapter in national ICpEP conventions and inter-chapter initiatives.",
            images: [
                { src: "images/President.jpg", alt: "ICpEP Presidency Photo" }
            ],
            bullets: [
                "Spearheaded 8+ technical seminars, workshops, and general assemblies for 100+ student members",
                "Represented JRU chapter at national ICpEP conventions and inter-chapter exhibits",
                "Managed official chapter correspondence and administrative documentation as prior Secretary",
                "Coordinated 3D printing exhibits and AI/embedded systems demonstrations",
                "Led chapter accreditation compliance and university-level student organization reporting"
            ]
        },
        "awslc": {
            title: "Finance Officer | AWSLC - JRU Chapter",
            period: "2024 – 2025",
            org: "AWS Learning Community — Jose Rizal University Chapter",
            description: "Responsible for managing and tracking the chapter's financial records, disbursement reconciliation, and budget oversight for cloud-related workshops and AWS-sponsored events.",
            images: [
                { src: "", alt: "AWSLC Finance Officer" }
            ],
            bullets: [
                "Maintained accurate financial ledgers using Google Sheets and Excel",
                "Processed and reconciled workshop budget disbursements and petty cash",
                "Coordinated with AWS Education sponsors for event funding allocations",
                "Prepared financial reports for chapter audits and university submission",
                "Supported cloud learning event logistics and member registration tracking"
            ]
        },
        "solar-energy": {
            title: "Solar Energy Outreach Leader",
            period: "November 2025",
            org: "ICpEP.SE JRU Chapter — Community Outreach Program",
            description: "Spearheaded a community outreach program focused on educating local residents on solar energy principles and implementing off-grid clean energy solutions for underserved households.",
            images: [
                { src: "", alt: "Solar Energy Outreach" }
            ],
            bullets: [
                "Planned and executed a solar energy education seminar for community residents",
                "Conducted basic technical audits on household electricity consumption and needs",
                "Demonstrated solar panel assembly, charge controller wiring, and load calculations",
                "Coordinated volunteer team logistics, materials procurement, and site setup",
                "Produced post-event documentation and impact report for university submission"
            ]
        },
        "up-eeei": {
            title: "Research Assistant | UP EEEI",
            period: "2016",
            org: "University of the Philippines — Electrical & Electronics Engineering Institute",
            description: "Facilitated data acquisition and engineering technical documentation for academic research projects at the University of the Philippines EEEI laboratory, gaining early exposure to research methodology and scientific documentation standards.",
            images: [
                { src: "", alt: "UP EEEI Research" }
            ],
            bullets: [
                "Collected and organized experimental measurement data for research faculty",
                "Maintained technical documentation logs and laboratory notebooks",
                "Assisted in preparing charts, tables, and summaries for academic papers",
                "Performed equipment calibration checks and recorded instrument readings",
                "Supported laboratory operations, inventory, and research filing systems"
            ]
        }
    };

    function renderExperienceModal(experienceId) {
        // kept for backward compat — not used by showcase
    }

    function renderModalContent(projectId) {
        // kept for backward compat — not used by showcase
    }

    // ─────────────────────────────────────────────
    // 5. SPLIT-PANE SHOWCASE ENGINE
    // ─────────────────────────────────────────────

    function setContent(wrapperId, html) {
        const wrapper = document.getElementById(wrapperId);
        if (!wrapper) return;
        wrapper.innerHTML = html;
        wrapper.style.animation = 'none';
        wrapper.offsetHeight; // reflow
        wrapper.style.animation = '';
    }

    // ── Project Pane ──────────────────────────────
    function renderProjectPane(projectId) {
        const p = projectDetails[projectId];
        if (!p) return;

        let sectionsHtml = '';

        p.sections.forEach(sec => {
            sectionsHtml += `<div class="pane-section">`;
            sectionsHtml += `<div class="pane-section-title">${sec.title}</div>`;

            if (sec.type === 'description') {
                sectionsHtml += `<p class="pane-text">${sec.text}</p>`;
            }
            else if (sec.type === 'buttons') {
                sectionsHtml += `<div class="pane-buttons">`;
                sec.items.forEach(item => {
                    sectionsHtml += `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="pane-btn">↗ ${item.label}</a>`;
                });
                sectionsHtml += `</div>`;
            }
            else if (sec.type === 'media') {
                if (sec.description) {
                    sectionsHtml += `<p class="pane-text">${sec.description}</p>`;
                }
                if (sec.videoUrl) {
                    sectionsHtml += `
                        <div class="pane-media-video">
                            <video controls class="pane-video" preload="metadata">
                                <source src="${sec.videoUrl}" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>`;
                }
            }
            else if (sec.type === 'gallery') {
                sectionsHtml += `<div class="pane-gallery">`;
                sec.images.forEach(img => {
                    if (img.src) {
                        sectionsHtml += `<img src="${img.src}" alt="${img.alt || 'Gallery'}" class="pane-gallery-img" data-lightbox-src="${img.src}">`;
                    }
                });
                sectionsHtml += `</div>`;
            }

            sectionsHtml += `</div>`;
        });

        const techTags = p.technologies.map(t => `<span class="pane-tech-tag">${t}</span>`).join('');

        const sdgHtml = (p.sdg && p.sdg.number > 0 && p.sdg.number <= 17) ? `
            <div class="pane-section">
                <div class="pane-section-title">SDG Alignment</div>
                <div class="pane-sdg-box">
                    <img src="${p.sdg.imgSrc}" alt="SDG ${p.sdg.number}" class="pane-sdg-logo${p.sdg.imgSrc ? '' : ' img-empty'}">
                    <div class="pane-sdg-info">
                        <h5>SDG ${p.sdg.number}: ${p.sdg.title}</h5>
                        <p>${p.sdg.description}</p>
                    </div>
                </div>
            </div>` : '';

        const html = `
            <div class="pane-header">
                <div class="pane-course">${p.course}</div>
                <h3 class="pane-title">${p.title}</h3>
            </div>

            <div class="pane-section">
                <div class="pane-section-title">Overview</div>
                <p class="pane-text">${p.description}</p>
            </div>

            ${p.contributions ? `
            <div class="pane-section">
                <div class="pane-section-title">Significance & Contributions</div>
                <p class="pane-text">${p.contributions}</p>
            </div>` : ''}

            ${sectionsHtml}

            <div class="pane-section">
                <div class="pane-section-title">Technologies Used</div>
                <div class="pane-tech-tags">${techTags}</div>
            </div>

            ${sdgHtml}
        `;

        setContent('projects-pane-content', html);
        bindPaneGalleryLightbox('projects-pane-content');
    }

    // ── Experience Pane ───────────────────────────
    function renderExperiencePane(expId) {
        const e = experienceDetails[expId];
        if (!e) return;

        const hasImage = e.images && e.images[0] && e.images[0].src;
        const imgHtml = hasImage
            ? `<img src="${e.images[0].src}" alt="${e.images[0].alt || e.title}" class="pane-gallery-img" style="height:200px;width:100%;object-fit:cover;border-radius:8px;margin-bottom:1.25rem;">`
            : '';

        const bulletsHtml = e.bullets ? `
            <div class="pane-section">
                <div class="pane-section-title">Key Responsibilities</div>
                <ul class="pane-bullets">
                    ${e.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>` : '';

        const html = `
            <div class="pane-header">
                <div class="pane-course">${e.org || ''}</div>
                <h3 class="pane-title">${e.title}</h3>
                ${e.period ? `<div class="pane-course" style="margin-top:0.35rem;opacity:0.75;">${e.period}</div>` : ''}
            </div>

            ${imgHtml}

            <div class="pane-section">
                <div class="pane-section-title">Overview</div>
                <p class="pane-text">${e.description}</p>
            </div>

            ${bulletsHtml}
        `;

        setContent('experience-pane-content', html);
    }

    // ── Certification Pane ────────────────────────
    function renderCertificationPane(certId) {
        const c = certificationDetails[certId];
        if (!c) return;

        const imgHtml = c.image && c.image.src
            ? `<div class="pane-cert-preview">
                <img src="${c.image.src}" alt="${c.title}" class="pane-cert-img" data-lightbox-src="${c.image.src}">
               </div>`
            : `<div class="pane-cert-preview" style="min-height:120px;opacity:0.4;font-size:0.85rem;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;">
                Certificate image not yet available
               </div>`;

        const bulletsHtml = c.bullets ? `
            <div class="pane-section">
                <div class="pane-section-title">Key Topics Covered</div>
                <ul class="pane-bullets">
                    ${c.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>` : '';

        const html = `
            <div class="pane-header">
                <div class="pane-course">${c.issuer}</div>
                <h3 class="pane-title">${c.title}</h3>
                <div class="pane-course" style="margin-top:0.35rem;opacity:0.75;">Earned: ${c.date}</div>
            </div>

            ${imgHtml}

            <div class="pane-section">
                <div class="pane-section-title">About This Credential</div>
                <p class="pane-text">${c.description}</p>
            </div>

            ${bulletsHtml}
        `;

        setContent('cert-pane-content', html);
        bindPaneGalleryLightbox('cert-pane-content');
    }

    // ── Gallery / cert image → badge lightbox ─────
    function bindPaneGalleryLightbox(wrapperId) {
        const wrapper = document.getElementById(wrapperId);
        if (!wrapper) return;
        wrapper.querySelectorAll('[data-lightbox-src]').forEach(el => {
            el.addEventListener('click', () => openBadgeLightbox(el.getAttribute('data-lightbox-src'), el.alt || ''));
        });
    }

    // ── Showcase initializer ──────────────────────
    function initShowcase(showcaseId, renderFn, defaultId) {
        const showcase = document.getElementById(showcaseId);
        if (!showcase) return;

        const cards = showcase.querySelectorAll('.showcase-card');

        function activateCard(card) {
            cards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            renderFn(card.getAttribute('data-id'));
        }

        cards.forEach(card => {
            card.addEventListener('click', () => activateCard(card));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    activateCard(card);
                }
            });
        });

        // Activate default
        const defaultCard = showcase.querySelector(`.showcase-card[data-id="${defaultId}"]`)
                         || cards[0];
        if (defaultCard) activateCard(defaultCard);
    }

    // ── Boot all three showcases ──────────────────
    initShowcase('projects-showcase',   renderProjectPane,       'field-service-nlp');
    initShowcase('experience-showcase', renderExperiencePane,    'icpep');
    initShowcase('cert-showcase',       renderCertificationPane, 'aws-cloud-practitioner');

    // ─────────────────────────────────────────────
    // Legacy modal close / keyboard (kept for safety)
    // ─────────────────────────────────────────────

    // Event delegation for modal opening
    document.addEventListener('click', function(event) {
        const target = event.target.closest('.project-card');
        if (!target || !modal) return;

        const projectId = target.getAttribute('data-project');
        const experienceId = target.getAttribute('data-experience');
        const certificationId = target.getAttribute('data-certification');

        if (projectId) {
            renderModalContent(projectId);
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        } else if (experienceId) {
            renderExperienceModal(experienceId);
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        } else if (certificationId) {
            renderCertificationModal(certificationId);
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });

    // Keyboard support: Enter / Space to open focused cards or tabular rows
    document.addEventListener('keydown', function(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !modal.contains(event.target)) {
            const target = event.target.closest('.project-card');
            if (target) {
                event.preventDefault();
                target.click();
            }
        }
    });

    // Close Modal
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 5. Hero Flip Card
    const heroFlipCard = document.getElementById('heroFlipCard');
    if (heroFlipCard) {
        heroFlipCard.addEventListener('click', function(e) {
            // Don't flip if clicking a link on the back face
            if (e.target.closest('.flip-btn')) return;
            heroFlipCard.classList.toggle('flipped');
        });
    }

    // Close on Escape key (handles both Badge Lightbox and Project Modal)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (badgeLightbox && badgeLightbox.classList.contains('open')) {
                closeBadgeLightbox();
            }
            if (modal && modal.style.display === "block") {
                closeModal();
            }
        }
    });

});