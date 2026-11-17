document.addEventListener("DOMContentLoaded", function() {

    // 1. Navbar Scroll Effect + Scrollspy
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('#navMenu a[href^="#"]');
    const sections = document.querySelectorAll('section[id], footer[id]');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Scrollspy: highlight the nav link whose section is in view
            let current = '';
            sections.forEach(sec => {
                const sectionTop = sec.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = sec.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active-link');
                }
            });
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
            course: "CPE C314 | Artificial Intelligence 2",
            title: "Automated Structuring of Field Service Reports",
            subtitle: "AUTOMATED STRUCTURING OF FIELD SERVICE REPORTS FOR RECORD ENTRY USING INFORMATION EXTRACTION AND TEXT CLASSIFICATION",
            description: "An end-to-end NLP and document processing pipeline designed to digitize and extract critical structured records from handwritten and scanned field service reports for Scientific Biotech Specialties, Inc. (SBSI). The system addresses the \"double handling\" bottleneck where Field Service Engineers write reports by hand then manually re-enter them into Bitrix — introducing transcription errors and delays. The proposed pipeline chains a TrOCR front-end for handwriting recognition with CRF-based and fine-tuned RoBERTa models for information extraction and text classification, outputting structured, human-reviewable Bitrix-ready records. A prototype was built using PaddleOCR and pilot-tested on 20 service reports, achieving a mean review time of ~7 minutes per record.",
            contributions: "Writing in IEEE format forced a level of precision I wasn't used to — every claim had to be traceable to a source or a measured result. The hardest part was honestly scoping the evaluation: the full CRF vs. transformer model comparison was designed but not completed within the semester, so we had to frame the pilot OCR results carefully. That tension between what was planned and what was implemented taught me more about research integrity than any lecture did. Seeing the pipeline run on actual handwritten reports made every abstract NLP concept tangible — the OCR results were humbling (89.5% word error rate on raw output), but that's exactly what made the human-in-the-loop design make sense.",
            status: { current: "Completed — prototype pilot-tested on 20 collected SBSI reports; OCR draft provides a usable starting point with checkbox-derived fields achieving up to 65% exact agreement.", nextMilestone: "Submitted and completed, SY 2026-2027." },
            sections: [
                {
                    title: "Architecture & Methodology",
                    type: "description",
                    text: "The pipeline chains a TrOCR vision-encoder-decoder for optical character recognition on handwritten forms, a Conditional Random Field (CRF) layer for token-level named entity recognition, and a fine-tuned RoBERTa classification backbone for document categorization. A human-in-the-loop review interface allows operators to correct and confirm each extracted field before the record is saved. A rule-based chatbot enables querying and summarizing saved records, mirroring a Bitrix record-creation workflow locally. Evaluated using OCR noise metrics (CER: 59.1% macro-average) and field extraction agreement rates."
                },
                {
                    title: "Demo Video",
                    type: "embed",
                    description: "Demonstration of the prototype NLP pipeline: photo of a handwritten field service report → PaddleOCR draft → structured human-in-the-loop review interface → confirmed Bitrix-ready record.",
                    embedUrl: "https://drive.google.com/file/d/19lZACVgllcSplsltyS9aP0iq_dRRMmOw/preview"
                },
                {
                    title: "Documentation",
                    type: "buttons",
                    items: [
                        { label: "IEEE Journal Documentation (PDF)", url: "learning artifacts/CPE C314/NLP_Final Project_Documentation_GUBAT, MANALO, VILLARDE.pdf" },
                        { label: "Demo Video (Google Drive)", url: "https://drive.google.com/file/d/19lZACVgllcSplsltyS9aP0iq_dRRMmOw/view?usp=sharing" }
                    ]
                }
            ],
            technologies: ["Python", "PaddleOCR", "TrOCR", "RoBERTa / BERT", "CRF", "Hugging Face Transformers", "NLP", "spaCy"],
            sdg: {
                number: 9,
                title: "Industry, Innovation and Infrastructure",
                description: "Modernizes enterprise data processing by replacing manual paper workflows with automated intelligent document extraction, reducing transcription errors and delays for field service industries.",
                imgSrc: "images/sdg/9.jpg"
            }
        },
        "student-stress-ml": {
            course: "CPE C407/401G | Cognate 3 — Data Science",
            title: "Predicting Student Stress from Sleep, Study, and Caffeine Habits",
            subtitle: "PREDICTING STUDENT STRESS FROM SLEEP, STUDY, AND CAFFEINE HABITS: A COMPARATIVE STUDY OF LINEAR, LOGISTIC, AND K-NEAREST NEIGHBORS CLASSIFIERS",
            description: "A quantitative, cross-sectional supervised ML study evaluating whether three basic lifestyle indicators — nightly sleep, weekly study time, and daily caffeine intake — can classify student-reported stress as high or low. An original dataset was curated via a digital survey titled \"Student Lifestyle and Academic Well-being,\" yielding 138 clean responses (n=138, 64.5% High Stress). Three classifiers were trained on a stratified 80/20 split: a Ridge linear classifier, Logistic Regression, and K-Nearest Neighbors (K=21, tuned by 5-fold cross-validation). All predictors were z-score standardized on training data only to prevent leakage.",
            contributions: "Curated an original primary dataset from scratch and ran the full ML pipeline — cleaning, scaling, training, and evaluation — with no data leakage. Sleep emerged as the dominant predictor (r = −0.293 with stress), while study time had almost no association. Under repeated 5-fold stratified cross-validation (50 evaluations per model), Logistic Regression achieved the best balance: accuracy 0.666, precision 0.693, F1-score 0.770. The key finding — that these three variables alone fall short of reliable standalone stress classification — directly supports the research literature arguing that stress is multi-causal. The study contributes a reproducible, openly documented baseline that future researchers can extend with richer predictors or validated stress scales.",
            status: { current: "Full analysis complete: 138-respondent dataset, three classifiers trained and cross-validated, results documented in final project report.", nextMilestone: "Completed — submitted November 2026, SY 2026-2027." },
            sections: [
                {
                    title: "Key Results",
                    type: "description",
                    text: "Under repeated stratified cross-validation: Logistic Regression led in accuracy (0.666) and F1-score (0.770); Ridge classifier led in recall (0.874); K-NN ranked lowest overall. On the held-out test set (n=28), K-NN achieved accuracy 0.679 and F1 0.780. All models reached recall ≈ 0.889 for High Stress. Critically, no classifier clearly outperformed the majority-class baseline (accuracy 0.645), since differences between models were smaller than fold-to-fold standard deviations — indicating the three lifestyle variables carry limited but real predictive signal."
                },
                {
                    title: "Methodology",
                    type: "description",
                    text: "Dataset: 146 raw survey responses → 138 after removing 8 duplicate submissions. Predictors: sleep (mean 6.17h, SD 1.32), weekly study time (mean 15.09h, SD 19.56 — strongly right-skewed), caffeine intake (mean 1.84 cups/day). Target: binary self-reported stress (High=1, Low=0). Preprocessing: z-score standardization, stratified 80/20 split with fixed seed. Models: Ridge classifier, Logistic Regression (L2), K-NN with K selected from odd values 1–31 by 5-fold CV maximizing High Stress F1 (best K=21). Evaluation: accuracy, precision, recall, F1-score; repeated 10×5-fold stratified cross-validation."
                },
                {
                    title: "Documentation",
                    type: "buttons",
                    items: [
                        { label: "Final Project Report (PDF)", url: "learning artifacts/Gubat_FinalProjectGrp1.pdf" }
                    ]
                }
            ],
            technologies: ["Python", "scikit-learn", "Logistic Regression", "K-NN", "Ridge Classifier", "pandas", "NumPy", "Matplotlib", "Seaborn"],
            sdg: {
                number: 3,
                title: "Good Health and Well-Being",
                description: "Uses data-driven classification to identify lifestyle risk factors for student stress, contributing a reproducible framework for preventative mental wellness screening in academic institutions.",
                imgSrc: "images/sdg/3.jpg"
            }
        },
        "pose-estimation": {
            course: "CPE C313 | Artificial Intelligence",
            title: "Web-Based Human Pose Estimation System for Real-Time Squat Form Correction using Teachable Machine",
            description: "This AI-powered \"Squat Coach\" mitigates the biomechanical risks of unsupervised home fitness by providing real-time form correction. Utilizing a Python script with OpenCV and the MediaPipe Pose Landmarker, the system tracks 33 skeletal keypoints to evaluate postural alignment. Built on a PoseNet architecture via Google Teachable Machine, the model achieved a 93.48% overall accuracy and perfect 1.00 specificity. This ensures high sensitivity to improper form, delivering a robust, low-latency feedback loop for user safety.",
            contributions: "Building this Squat Coach addressed the health risk of unsupervised home workouts by creating an automated form-correction system. Working hands-on with OpenCV and MediaPipe to track 33 skeletal keypoints, then validating the model with confusion matrices and ROC-AUC analysis, bridged classroom theory with real production data science. The 93.48% accuracy and perfect 1.00 specificity demonstrated that accessible, in-browser AI can meaningfully reduce injury risk without expensive equipment.",
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
                    videoUrl: "videos/AI demo.mp4"
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
                    videoUrl: "videos/attendance demo.mp4"
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
            contributions: "Designing this platform around the financial constraints of local MSMEs required applying real economic engineering judgment — not just technical skill. Implementing real-time geolocation mapping to connect eateries and consumers solved a genuinely complex distribution problem. Enforcing PD 856 public health liability waivers reflects the responsibility engineers carry when deploying food-safety-adjacent software. At a broader level, the platform directly addresses urban food waste and landfill emissions, turning an everyday inefficiency into recovered operating capital for small businesses. Leading FarVent as Project Manager through the Wadhwani Foundation assessment process showed that lean, self-sustaining tech ventures can empower communities through accessible tools.",
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
                    videoUrl: "videos/techno demo.mp4"
                },
                {
                    title: "Pitch Video",
                    type: "media",
                    description: "Every night across high-density urban centers, independent eateries throw away perfectly good, edible surplus, losing up to 15% of their daily revenue while neighboring communities struggle with rising food costs. We are FarVent, and our mission is to turn that unavoidable food surplus into recovered operating capital through our mobile marketplace app, Save&Share.",
                    videoUrl: "videos/farvent pitch video.mp4"
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

    // ─────────────────────────────────────────────
    // Badge Lightbox
    // ─────────────────────────────────────────────
    const badgeLightbox    = document.getElementById('badge-lightbox');
    const badgeLightboxImg = document.getElementById('badge-lightbox-img');
    const badgeLightboxClose = document.querySelector('.badge-lightbox-close');
    let lightboxOpener = null; // track which element opened it, for focus restore

    function openBadgeLightbox(src, alt) {
        if (!badgeLightbox || !badgeLightboxImg) return;
        lightboxOpener = document.activeElement;
        badgeLightboxImg.src = src;
        badgeLightboxImg.alt = alt;
        badgeLightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
        // Move focus into the lightbox close button (focus trap)
        if (badgeLightboxClose) badgeLightboxClose.focus();
    }

    function closeBadgeLightbox() {
        if (!badgeLightbox) return;
        badgeLightbox.classList.remove('open');
        document.body.style.overflow = 'auto';
        // Restore focus to opener
        if (lightboxOpener) {
            lightboxOpener.focus();
            lightboxOpener = null;
        }
    }

    // Focus trap inside lightbox: Tab/Shift+Tab only cycles within it
    if (badgeLightbox) {
        badgeLightbox.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                if (badgeLightboxClose) badgeLightboxClose.focus();
            }
        });
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
        "aws-ai-practitioner": {
            title: "AWS Certified AI Practitioner",
            description: "Foundational certification validating broad knowledge of AI, machine learning, and generative AI concepts on AWS. Demonstrates understanding of AI/ML service capabilities, responsible AI practices, and how to apply AWS AI tools to real-world use cases. Issued November 17, 2026 — valid through November 17, 2029.",
            image: { src: "images/aws-certified-ai-practitioner.png" },
            certImage: { src: "images/aws_ai prac.png" },
            verifyUrl: "https://aws.amazon.com/verification",
            date: "November 2026",
            issuer: "Amazon Web Services (AWS)",
            bullets: [
                "Fundamentals of AI, ML, and generative AI concepts and terminology",
                "AWS AI/ML services: SageMaker, Rekognition, Comprehend, Bedrock",
                "Responsible AI: bias, fairness, explainability, and governance",
                "Practical use cases for applying AI tools in business and engineering contexts"
            ]
        },
        "aws-cloud-practitioner": {
            title: "AWS Certified Cloud Practitioner",
            description: "Validates foundational, high-level understanding of AWS Cloud services, architectural best practices, security, compliance, billing, and core cloud infrastructure operations. This industry certification demonstrates validated proficiency in cloud economics, security models, and core service categories including compute, storage, networking, and databases on AWS.",
            image: { src: "images/aws-cloud-practitioner-badge.png" },
            certImage: { src: "images/aws_cloud practitioner.png" },
            verifyUrl: "https://aws.amazon.com/verification",
            date: "November 2026",
            issuer: "Amazon Web Services (AWS)",
            bullets: [
                "Cloud computing concepts, models, and global infrastructure",
                "AWS core services: EC2, S3, RDS, Lambda, VPC",
                "Security, compliance, identity management (IAM)",
                "Cloud economics: pricing, billing, cost optimization"
            ]
        },
        "wadhwani-employability": {
            title: "Wadhwani Employability Skills — Job Ready",
            description: "Completion credential from the Wadhwani Foundation's Job Ready employability skills program. The program develops core professional competencies required for workplace readiness, including communication, problem-solving, teamwork, and career navigation — bridging the gap between academic preparation and industry expectations.",
            image: { src: "images/wadhwani completion_employability.png" },
            date: "November 2026",
            issuer: "Wadhwani Foundation",
            bullets: [
                "Professional communication and workplace etiquette",
                "Problem-solving, critical thinking, and adaptability",
                "Teamwork, collaboration, and interpersonal effectiveness",
                "Career planning, resume building, and interview readiness"
            ]
        },
        "aws-ml-nlp": {
            title: "AWS Academy Graduate — Machine Learning for NLP",
            description: "Specialized accreditation in Natural Language Processing on AWS, mastering transformer architectures (BERT, RoBERTa), text tokenization, sentiment analysis, entity extraction, and deploying scalable NLP models using Amazon SageMaker and AWS AI services.",
            image: { src: "images/aws-ml-nlp-badge.png" },
            certImage: { src: "images/aws_ml for nlp.png" },
            date: "October 2026",
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
            certImage: { src: "images/aws_cloud foundations.png" },
            date: "October 2026",
            issuer: "AWS Academy (Amazon Web Services)",
            bullets: [
                "Cloud computing concepts and AWS global infrastructure",
                "Core AWS services: compute, storage, database, networking",
                "AWS security fundamentals and shared responsibility model",
                "Introduction to cloud economics and billing"
            ]
        },
        "aws-ml": {
            title: "AWS Academy Graduate — ML Foundations",
            description: "Machine learning pipelines, predictive modeling, data preprocessing, and algorithm selection on AWS SageMaker. Covers supervised and unsupervised learning workflows, model training, evaluation, and deployment.",
            image: { src: "images/aws ml-badge.png" },
            certImage: { src: "images/aws_ml.png" },
            date: "April 2026",
            issuer: "AWS Academy (Amazon Web Services)",
            bullets: [
                "Machine learning pipeline design and feature engineering",
                "Supervised and unsupervised learning on AWS SageMaker",
                "Model training, evaluation, and deployment workflows",
                "Data preprocessing, bias detection, and model explainability"
            ]
        },
        "wadhwani": {
            title: "Wadhwani Foundation — Ignite Entrepreneurship",
            description: "Comprehensive startup incubation program validating venture creation, product-market fit, customer discovery, financial viability, and pitch execution for tech startups.",
            image: { src: "images/wadhwani completion_ignite.png" },
            date: "April 2026",
            issuer: "Wadhwani Entrepreneurship",
            bullets: [
                "Customer discovery, problem-solution fit, and MVP validation",
                "Business model canvas and lean startup methodology",
                "Financial projections, unit economics, and go-to-market strategy",
                "Live pitch assessment by Wadhwani Foundation evaluators"
            ]
        },
        "huawei-ai": {
            title: "Huawei ICT Academy — Overview of AI",
            description: "Certificate of Completion for the Overview of Artificial Intelligence course from Huawei ICT Academy. This certification covers fundamental AI concepts, machine learning principles, neural networks, and Huawei's AI technologies and solutions.",
            image: { src: "images/huawei cert.png" },
            date: "February 2026",
            issuer: "Huawei ICT Academy",
            bullets: [
                "Foundational AI theory: machine learning, deep learning, neural networks",
                "Computer vision and natural language processing fundamentals",
                "Huawei AI platforms and cloud-based AI tools",
                "Applied AI use cases across industry verticals"
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
            image: { src: "images/Toeic.jpg" },
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

    // Experience Details Database
    const experienceDetails = {
        "icpep": {
            title: "President | ICpEP.SE - JRU Chapter",
            period: "2025 – 2026",
            org: "Institute of Computer Engineers of the Philippines, Student Edition — JRU",
            description: "Served as chapter president after serving as Secretary. Led organizational strategy, managed 8+ technical events and workshops, and represented the chapter in national ICpEP conventions and inter-chapter initiatives.",
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
        // removed — showcase pane handles all experience display
    }

    function renderModalContent(projectId) {
        // removed — showcase pane handles all project display
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
            else if (sec.type === 'embed') {
                if (sec.description) {
                    sectionsHtml += `<p class="pane-text">${sec.description}</p>`;
                }
                if (sec.embedUrl) {
                    sectionsHtml += `
                        <div class="pane-media-video">
                            <div class="pane-video-embed">
                                <iframe src="${sec.embedUrl}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                            </div>
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
                ${p.subtitle ? `<p class="pane-subtitle">${p.subtitle}</p>` : ''}
            </div>

            ${p.status ? `
            <div class="pane-section pane-status-box">
                <div class="pane-section-title">Current Status</div>
                <p class="pane-text" style="margin-bottom:0.5rem;">${p.status.current}</p>
                <p class="pane-text"><strong style="color:var(--accent);">Next milestone:</strong> ${p.status.nextMilestone}</p>
            </div>` : ''}

            <div class="pane-section">
                <div class="pane-section-title">Overview</div>
                <p class="pane-text">${p.description}</p>
            </div>

            ${p.contributions ? `
            <div class="pane-section">
                <div class="pane-section-title">Significance &amp; Contributions</div>
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

        const imgHtml = (() => {
            const hasCert  = c.certImage && c.certImage.src;
            const hasBadge = c.image && c.image.src;

            if (hasCert && hasBadge) {
                // Show certificate full-width, then badge below it
                return `
                    <div class="pane-cert-preview" style="flex-direction:column;gap:1.25rem;align-items:center;">
                        <div style="width:100%;">
                            <div class="pane-section-title" style="margin-bottom:0.6rem;">Certificate</div>
                            <img src="${c.certImage.src}" alt="${c.title} Certificate" class="pane-cert-img" style="width:100%;max-height:none;" data-lightbox-src="${c.certImage.src}">
                        </div>
                        <div style="display:flex;flex-direction:column;align-items:center;gap:0.5rem;">
                            <div class="pane-section-title" style="margin-bottom:0.3rem;text-align:center;">Badge</div>
                            <img src="${c.image.src}" alt="${c.title} Badge" class="pane-cert-img" style="max-height:160px;width:auto;" data-lightbox-src="${c.image.src}">
                        </div>
                    </div>`;
            } else if (hasCert) {
                return `<div class="pane-cert-preview">
                    <img src="${c.certImage.src}" alt="${c.title}" class="pane-cert-img" data-lightbox-src="${c.certImage.src}">
                   </div>`;
            } else if (hasBadge) {
                return `<div class="pane-cert-preview">
                    <img src="${c.image.src}" alt="${c.title}" class="pane-cert-img" data-lightbox-src="${c.image.src}">
                   </div>`;
            } else {
                return `<div class="pane-cert-preview" style="min-height:120px;opacity:0.4;font-size:0.85rem;color:var(--text-secondary);display:flex;align-items:center;justify-content:center;">
                    Certificate image not yet available
                   </div>`;
            }
        })();

        const bulletsHtml = c.bullets ? `
            <div class="pane-section">
                <div class="pane-section-title">Key Topics Covered</div>
                <ul class="pane-bullets">
                    ${c.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>` : '';

        const verifyHtml = c.verifyUrl ? `
            <div class="pane-section">
                <div class="pane-section-title">Verification</div>
                <div class="pane-buttons">
                    <a href="${c.verifyUrl}" target="_blank" rel="noopener noreferrer" class="pane-btn">↗ Verify Credential</a>
                </div>
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
            ${verifyHtml}
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
        const paneRight = showcase.querySelector('.showcase-pane-right');

        function activateCard(card) {
            cards.forEach(c => {
                c.classList.remove('active');
                c.setAttribute('aria-pressed', 'false');
            });
            card.classList.add('active');
            card.setAttribute('aria-pressed', 'true');
            renderFn(card.getAttribute('data-id'));

            // On mobile (pane is below the grid), scroll the pane into view too
            if (paneRight && window.innerWidth <= 992) {
                setTimeout(() => {
                    paneRight.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
            }
        }

        cards.forEach(card => {
            card.setAttribute('aria-pressed', 'false');
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

    // ── Boot all showcases ──────────────────
    initShowcase('projects-showcase',   renderProjectPane,       'field-service-nlp');
    initShowcase('experience-showcase', renderExperiencePane,    'icpep');
    initShowcase('cert-showcase',       renderCertificationPane, 'aws-ai-practitioner');

    // ─────────────────────────────────────────────
    // Academic Works Data & Renderer
    // ─────────────────────────────────────────────

    const academicDetails = {
        "cpe-c405": {
            course: "CPE C405 | Emerging Technologies",
            title: "Emerging Technologies",
            artifacts: [
                {
                    id: "c405-artifact1",
                    label: "Artifact 1",
                    title: "Compilation of AWS Lab Activities & Prelim Project",
                    description: `This compilation brings together the performance tasks, lab activities, and prelim class project I completed in CPE C405 – Emerging Technologies. Together they cover the AWS Cloud from core concepts to a real-world business case.
<ul class="pane-bullets" style="margin-top:0.75rem;">
  <li><strong>PTF1 – Pay-As-You-Go Pricing:</strong> Explained the pay-as-you-go model using an e-commerce sale spike. AWS Auto Scaling handles the 72-hour surge for about ₱15,345 in OpEx, compared with about ₱1.42M for traditional hardware (CapEx plus first-month OpEx).</li>
  <li><strong>PTF2 – AWS Pricing Calculator:</strong> Estimated costs for two service groups (EC2 and S3) to see how reservation terms, payment options, and regions affect price. Ohio was cheaper than London, and All Upfront was cheaper than Partial Upfront. Also estimated VPC, SQS, Athena, and Lambda for a Scenario 3 workload in Europe (Ireland).</li>
  <li><strong>Support Plan Scavenger Hunt:</strong> Recommended the Business Support Plan for a software development company across Europe and the US, based on its 24/7 support, response-time SLAs, and Trusted Advisor access.</li>
  <li><strong>Lab 1 – IAM Synthesis:</strong> Tested the permissions of three users (S3-Support, EC2-Support, EC2-Admin) and compared attaching policies to users, groups, and resources.</li>
  <li><strong>Lab 4 – Working with EBS:</strong> Created an EBS volume, attached it to an EC2 instance, and took a snapshot (graded 100/100).</li>
  <li><strong>Lab 5 – Debrief (RDS):</strong> Covered DB subnet groups across Availability Zones, database setup steps, EC2-hosted versus RDS databases, and on-premises versus cloud deployment. The group also produced a VPC architecture diagram with public and private subnets, NAT gateways, and RDS.</li>
  <li><strong>Prelim Project – Rethink Safety:</strong> A case study of a Filipino EHS software company already running on AWS. Includes a company profile, needs assessment, pricing estimate of the current architecture, a proposed deployment (public cloud, EC2 Auto Scaling across AZs, AWS Organizations with OUs and SCPs, and the Business Support Plan), and a 3-year TCO model.</li>
</ul>`,
                    outcomes: [
                        "<strong>CLO1 – Significant knowledge of cloud concepts, AWS platform, pricing, security, and shared responsibility model:</strong> PTF1 and PTF2 (pricing models, reservations, regions); Support Plan Hunt (support tiers); Lab 1 (IAM and access control); Lab 5 (RDS vs. EC2 shared responsibility, on-premises vs. cloud comparison)",
                        "<strong>CLO2 – Applied cloud concepts and technologies through simulated exercises, use cases, and lab work:</strong> Lab 1 (IAM), Lab 4 (EBS), Lab 5 (RDS, VPC, subnets); pricing calculator estimates for EC2, S3, VPC, SQS, Athena, and Lambda; support plan scenario",
                        "<strong>CLO3 – Developed a cloud computing architecture for a real business case:</strong> Prelim Project (Rethink Safety) — Auto Scaling across AZs, AWS Organizations with OUs and SCPs, support plan recommendation, pricing calculator estimate, 3-year TCO model, and VPC architecture diagram"
                    ],
                    reflection: "Before this course, I thought of \"the cloud\" as just renting someone else's server. Working through these activities showed me it is a different way of paying for and managing IT. In PTF1 the cost gap between idle hardware and pay-per-use made the benefit concrete, and the pricing calculator showed that small choices — such as region, reservation length, and payment option — noticeably change the bill.\n\nThe labs taught me that security and architecture decisions matter as much as cost. IAM showed me that a user can only do what a policy explicitly allows, and that groups make permissions much easier to manage than per-user policies. Lab 5 showed me why RDS needs subnets in at least two AZs, and why a managed database trades some control for far less operational work than running a database on EC2.\n\nThe Rethink Safety project tied everything together. It was my first time analyzing a real company's setup, including its governance gap of running Dev, Test, and Prod in one account. Proposing AWS Organizations, Auto Scaling, and a fitting support plan showed me that good cloud design means balancing cost, reliability, and security against the client's needs. Working in a group also taught me to split the research, pricing, and documentation. Next time I would validate cost assumptions earlier and explore more automation, such as infrastructure as code.",
                    buttons: [
                        { label: "Compiled Activities (PDF)", url: "learning artifacts/CPE C405/compilations.pdf", isExternal: true },
                        { label: "Prelim Project — Rethink Safety (PDF)", url: "learning artifacts/CPE C405/Emergingers_RethinkSafety.pdf", isExternal: true }
                    ]
                },
                {
                    id: "c405-artifact2",
                    label: "Artifact 2",
                    title: "Certificates of Completion — AWS Cloud Practitioner & Cloud Foundations",
                    description: "This artifact comprises two credentials earned as direct outcomes of CPE C405: the AWS Certified Cloud Practitioner industry certification and the AWS Academy Cloud Foundations completion certificate. Together they validate end-to-end understanding of cloud computing concepts — from core AWS services and global infrastructure to security, billing, and architecture best practices — at both an academic training level and an industry-recognized standard.",
                    outcomes: [
                        "CLO1 — Demonstrated significant knowledge of core cloud computing concepts, AWS platform architecture, services, pricing, and the shared responsibility security model",
                        "CLO2 — Applied cloud concepts through hands-on AWS lab exercises and simulated use cases covering compute, storage, networking, and database services",
                        "CLO3 — Developed a cloud computing architecture aligned to a specific project or business case, integrating appropriate AWS service selections"
                    ],
                    reflection: "Preparing for the Cloud Practitioner exam pushed me to consolidate everything covered in the labs into a coherent mental model of how AWS services fit together. The hardest part was memorizing the pricing and support tiers, but working through practice scenarios made it click. Having both the Academy completion certificate and the industry certification side by side feels like a solid proof point that the coursework translated into real, verifiable skill.",
                    gallery: [
                        { src: "images/aws_cloud practitioner.png",   alt: "AWS Certified Cloud Practitioner Certificate",         caption: "AWS Certified Cloud Practitioner — Certificate" },
                        { src: "images/aws-cloud-practitioner-badge.png", alt: "AWS Certified Cloud Practitioner Badge",           caption: "AWS Certified Cloud Practitioner — Badge" },
                        { src: "images/aws_cloud foundations.png",    alt: "AWS Academy Cloud Foundations Completion Certificate", caption: "AWS Academy Cloud Foundations — Certificate" },
                        { src: "images/aws-cloud-foundations-badge.png",  alt: "AWS Academy Cloud Foundations Badge",             caption: "AWS Academy Cloud Foundations — Badge" }
                    ],
                    buttons: [
                        { label: "Verify Cloud Practitioner", url: "https://aws.amazon.com/verification", isExternal: true }
                    ]
                }
            ]
        },
        "cpe-c314": {
            course: "CPE C314 | Artificial Intelligence 2",
            title: "Artificial Intelligence 2",
            artifacts: [
                {
                    id: "c314-artifact1",
                    label: "Artifact 1",
                    title: "Compilation of AI 2 Lab Activities & Prelim Project",
                    description: `This compilation covers the lab activities and performance tasks I completed in CPE C314 – Artificial Intelligence 2. It starts with classical machine learning and moves through the NLP pipeline to a retrieval-based chatbot.
<ul class="pane-bullets" style="margin-top:0.75rem;">
  <li><strong>Lab 1.1 – Linear Regression:</strong> Predicted California median house value using the housing dataset. Steps: correlation analysis, imputation, MinMax scaling, 70/30 split, and evaluation. The model reached R² ≈ 0.63 and MAE ≈ $51K.</li>
  <li><strong>PTS2 – Linear Regression with Feature Selection:</strong> Rebuilt the housing model and compared it against Recursive Feature Elimination (R² 0.505, 4 features) and PCA (R² 0.531, 4 components). Both reduced models performed slightly worse than the full model.</li>
  <li><strong>Lab 1 – NLP Regex:</strong> Used regular expressions for text preprocessing: lowercasing, removing punctuation/numbers/emojis, extracting URLs/emails/hashtags, and stopword removal. Challenge tasks included a paragraph-cleaning exercise and a spam/ham email preprocessing pipeline.</li>
  <li><strong>Lab 2.1 – AWS NLP (SageMaker):</strong> Trained a SageMaker LinearLearner to detect negative reviews on a 70,000-review dataset. Covered stopword removal, stemming, a pipeline with ColumnTransformer, endpoint deployment, and prediction testing.</li>
  <li><strong>Lab 5 – Bag of Words and TF-IDF</strong> (with Villarde): Applied TF-IDF to a 30-sentence Taglish dataset using custom Tagalog and English stopwords. Includes a weight table, heatmap, and word cloud.</li>
  <li><strong>Lab 6 – Sentiment Analysis:</strong> Compared VADER's rule-based analyzer with TF-IDF classifiers (Naive Bayes, Logistic Regression, Linear SVM) on customer reviews. Includes a user-input classifier, sentiment counts, and visualizations.</li>
  <li><strong>Lab 8 – Chatbots:</strong> Built rule-based (NLTK), retrieval-based (TF-IDF with cosine similarity), and ML-based (intent classifier and MLP) chatbots. Then built a context-based document-requests chatbot with an ipywidgets UI.</li>
  <li><strong>PT3 – NLP Pipeline</strong> (with Villarde): Built a full Taglish pipeline with language identification, tokenization, stemming, lemmatization, a custom stopword corpus (218 words), and hybrid POS tagging. Includes a pipeline diagram. The 30 sentences had 226 English, 216 Tagalog, and 8 Taglish words.</li>
  <li><strong>Lab 9 – RAG Chatbot and NER:</strong> Built a scam-aware RAG chatbot over Philippine anti-scam and cyber-law documents using MiniLM embeddings, flan-t5, page-level citations, and out-of-scope refusal. Scored 100% top-1 and top-3 retrieval on 12 in-scope questions and correctly refused 5/5 out-of-scope ones. Mean end-to-end latency ≈ 4.5 seconds. Includes a chunk-size ablation and links to a custom NER model.</li>
</ul>`,
                    outcomes: [
                        "<strong>CLO1 – Significant understanding of ML, neural networks, computer vision, and NLP concepts:</strong> Lab 1.1 and PTS2 (regression, feature selection, PCA); Lab 1 and PT3 (NLP preprocessing, stemming, lemmatization, POS tagging); Lab 5 (BoW and TF-IDF); Lab 6 (lexicon-based vs. ML sentiment); Lab 8 (cosine similarity, MLP neural network)",
                        "<strong>CLO2 – Applied appropriate AI tools and algorithms to solve real-world cases:</strong> Lab 2.1 (SageMaker LinearLearner for review classification); Lab 6 (customer review sentiment); Lab 8 (customer-service and document-request chatbots); Lab 1.1 and PTS2 (house price prediction)",
                        "<strong>CLO3 – Developed a research project applying an AI domain to real-world cases:</strong> Lab 9 (scam-aware RAG chatbot and NER for Philippine anti-scam laws, with evaluation, ablation, and failure analysis); PT3 and Lab 5 (original Taglish dataset and pipeline built for code-switched Filipino text)"
                    ],
                    reflection: "This course took me from \"AI as a black box\" to understanding how the pieces work and when to use each one. The regression labs showed me that a model is only as good as its features. Dropping features with RFE and PCA made performance worse, not better, which taught me that simplification has a cost and that I should check results instead of assuming.\n\nThe NLP labs were where I learned the most. Preprocessing decisions — like keeping negations such as \"not\" as stopwords — directly changed whether a sentiment model could work. Working on Taglish in Lab 5 and PT3 showed me that off-the-shelf tools such as NLTK and VADER are built for English. I had to write custom stopwords and rule-based Tagalog tagging, which also showed me how many gaps Filipino NLP still has.\n\nLab 9 combined everything. Building a RAG chatbot taught me that good retrieval does not guarantee good answers: my retrieval accuracy was 100%, but the small flan-t5 generator still gave thin answers. I also learned to design for failure by making the bot refuse out-of-scope questions, and to evaluate properly with metrics, latency, ablation, and manual grading. Next time I would use a stronger generator, a reranker, and section-aware chunking, and I would test more Taglish queries.",
                    buttons: [
                        { label: "View Notebooks on GitHub", url: "https://github.com/rayangubat/cpe-c314-artificial-intelligence-2", isExternal: true }
                    ]
                },
                {
                    id: "c314-artifact2",
                    label: "Artifact 2",
                    title: "IEEE Journal Project Documentation",
                    description: "An IEEE-format research paper documenting the design of an NLP pipeline that converts handwritten field service reports into structured CRM records for Scientific Biotech Specialties, Inc. (SBSI). The system addresses the \"double handling\" bottleneck where Field Service Engineers write reports by hand then manually re-enter them into Bitrix — introducing transcription errors and delays. The proposed pipeline chains a TrOCR front-end for handwriting recognition with CRF-based and fine-tuned RoBERTa models for information extraction and text classification, outputting structured, human-reviewable Bitrix-ready records. A prototype was built using PaddleOCR and pilot-tested on 20 service reports, achieving a mean review time of ~7 minutes per record.",
                    outcomes: [
                        "CLO1 — Demonstrated significant understanding of NLP, neural networks, and transformer architectures (BERT, RoBERTa, TrOCR) through literature review and methodology design for a real-world IE task",
                        "CLO2 — Applied appropriate AI tools and algorithms — CRF sequence labeling, TF-IDF + Logistic Regression baseline, Hugging Face Transformers, PaddleOCR — to solve a real industrial record-entry problem",
                        "CLO3 — Developed a research project applying NLP to a real-world case: automating field service report structuring for a diagnostics equipment company, with pilot evaluation on 20 collected reports"
                    ],
                    reflection: "Writing in IEEE format forced a level of precision I wasn't used to — every claim had to be traceable to a source or a measured result. The hardest part was honestly scoping the evaluation: the full CRF vs. transformer model comparison was designed but not completed within the semester, so we had to frame the pilot OCR results carefully. That tension between what was planned and what was implemented taught me more about research integrity than any lecture did.",
                    buttons: [
                        { label: "View Documentation (PDF)", url: "learning artifacts/CPE C314/NLP_Final Project_Documentation_GUBAT, MANALO, VILLARDE.pdf", isExternal: true }
                    ]
                },
                {
                    id: "c314-artifact3",
                    label: "Artifact 3",
                    title: "Demo Video — Working Project",
                    description: "A demonstration of the prototype NLP pipeline built for CPE C314. The system accepts a photo of a handwritten field service report, runs it through PaddleOCR to generate a draft, then presents a structured review interface where a human operator can correct and confirm each extracted field before the record is saved. A rule-based chatbot allows querying and summarizing saved records, mirroring a Bitrix record-creation workflow locally. Pilot evaluation across 20 reports showed the OCR draft provided a usable starting point, with checkbox-derived fields (job type, status after service) achieving up to 65% exact agreement and narrative fields requiring more manual correction.",
                    outcomes: [
                        "CLO1 — Demonstrated understanding of computer vision and NLP integration by combining OCR (PaddleOCR/TrOCR), field extraction, and text classification in a single end-to-end pipeline",
                        "CLO2 — Applied AI tools to a real-world scenario: OCR noise measurement (59.1% macro-average CER), human-in-the-loop review interface, and rule-based chatbot for record querying",
                        "CLO3 — Developed and pilot-tested a working AI system applied to an industrial use case, with quantitative evaluation on 20 field service reports collected from SBSI"
                    ],
                    reflection: "Seeing the pipeline run on actual handwritten reports made every abstract NLP concept tangible. The OCR results were humbling — 89.5% word error rate on raw output — but that's exactly what made the human-in-the-loop design make sense. Building the review interface shifted my thinking from 'can the model get it right?' to 'how do we make correction fast and trustworthy?' That's a more useful question for real deployments.",
                    buttons: [
                        { label: "Open in Google Drive", url: "https://drive.google.com/file/d/19lZACVgllcSplsltyS9aP0iq_dRRMmOw/view?usp=sharing", isExternal: true }
                    ],
                    videoEmbed: "https://drive.google.com/file/d/19lZACVgllcSplsltyS9aP0iq_dRRMmOw/preview"
                }
            ]
        }
    };

    function renderAcademicPane(courseId) {
        const course = academicDetails[courseId];
        if (!course) return;

        const artifactsHtml = course.artifacts.map((artifact, index) => {
            const bulletsHtml = artifact.outcomes.map(o => `<li>${o}</li>`).join('');

            const buttonsHtml = artifact.buttons.length
                ? `<div class="pane-buttons" style="margin-top:0.75rem;">
                    ${artifact.buttons.map(b =>
                        `<a href="${b.url}" ${b.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="pane-btn">↗ ${b.label}</a>`
                    ).join('')}
                   </div>`
                : '';

            const galleryHtml = artifact.gallery && artifact.gallery.length
                ? `<div class="pane-section-title" style="margin-top:1rem;">Certificates &amp; Badges</div>
                   <div class="artifact-cert-gallery">
                     ${artifact.gallery.map(item =>
                         `<figure class="artifact-cert-figure">
                            <img src="${item.src}" alt="${item.alt}" class="artifact-cert-img" data-lightbox-src="${item.src}" loading="lazy">
                            <figcaption class="artifact-cert-caption">${item.caption}</figcaption>
                          </figure>`
                     ).join('')}
                   </div>`
                : '';

            const videoHtml = artifact.videoEmbed
                ? `<div class="pane-section-title" style="margin-top:1rem;">Demo Video</div>
                   <div class="pane-media-video" style="margin-top:0.6rem;">
                       <div class="pane-video-embed">
                           <iframe src="${artifact.videoEmbed}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                       </div>
                   </div>`
                : artifact.video
                ? `<div class="pane-section-title" style="margin-top:1rem;">Demo Video</div>
                   <div class="pane-media-video" style="margin-top:0.6rem;">
                       <video class="pane-video" controls preload="metadata">
                           <source src="${artifact.video}" type="video/mp4">
                           Your browser does not support the video tag.
                       </video>
                   </div>`
                : '';

            return `
                <div class="academic-artifact${index === 0 ? ' academic-artifact-open' : ''}" id="${artifact.id}">
                    <button class="academic-artifact-toggle" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="${artifact.id}-body">
                        <span class="artifact-label">${artifact.label}</span>
                        <span class="artifact-toggle-title">${artifact.title}</span>
                        <span class="artifact-chevron" aria-hidden="true">›</span>
                    </button>
                    <div class="academic-artifact-body" id="${artifact.id}-body"${index === 0 ? '' : ' hidden'}>
                        <div class="pane-text">${artifact.description}</div>

                        <div class="pane-section-title" style="margin-top:1rem;">Learning Outcomes Demonstrated</div>
                        <ul class="pane-bullets" style="margin-top:0.5rem;">
                            ${bulletsHtml}
                        </ul>

                        <div class="pane-section-title" style="margin-top:1rem;">Reflections</div>
                        <p class="pane-text" style="margin-top:0.5rem; margin-bottom:0.5rem;">${artifact.reflection}</p>

                        ${videoHtml}
                        ${galleryHtml}
                        ${buttonsHtml}
                    </div>
                </div>`;
        }).join('');

        const html = `
            <div class="pane-header">
                <div class="pane-course">${course.course}</div>
                <h3 class="pane-title">${course.title}</h3>
            </div>
            <div class="academic-artifacts">
                ${artifactsHtml}
            </div>`;

        setContent('academic-pane-content', html);
        bindPaneGalleryLightbox('academic-pane-content');

        // Wire up accordion toggles
        const pane = document.getElementById('academic-pane-content');
        if (!pane) return;
        pane.querySelectorAll('.academic-artifact-toggle').forEach(btn => {
            btn.addEventListener('click', () => {
                const artifact = btn.closest('.academic-artifact');
                const body = document.getElementById(btn.getAttribute('aria-controls'));
                const isOpen = !artifact.classList.contains('academic-artifact-open');

                // Collapse all
                pane.querySelectorAll('.academic-artifact').forEach(a => {
                    a.classList.remove('academic-artifact-open');
                    a.querySelector('.academic-artifact-toggle').setAttribute('aria-expanded', 'false');
                    const b = document.getElementById(
                        a.querySelector('.academic-artifact-toggle').getAttribute('aria-controls')
                    );
                    if (b) b.hidden = true;
                });

                // Open the clicked one
                if (isOpen) {
                    artifact.classList.add('academic-artifact-open');
                    btn.setAttribute('aria-expanded', 'true');
                    if (body) body.hidden = false;
                }
            });
        });
    }

    initShowcase('academic-showcase', renderAcademicPane, 'cpe-c405');

    // ─────────────────────────────────────────────
    // 5. Hero Flip Card
    // ─────────────────────────────────────────────
    const heroFlipCard = document.getElementById('heroFlipCard');
    if (heroFlipCard) {
        heroFlipCard.addEventListener('click', function(e) {
            if (e.target.closest('.flip-btn')) return;
            heroFlipCard.classList.toggle('flipped');
            const isFlipped = heroFlipCard.classList.contains('flipped');
            heroFlipCard.setAttribute('aria-label', isFlipped ? 'Flip card — click to see photo' : 'Flip card — click to see contact info');
        });
        heroFlipCard.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                heroFlipCard.click();
            }
        });
    }

    // 6. Close on Escape key (Badge Lightbox)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (badgeLightbox && badgeLightbox.classList.contains('open')) {
                closeBadgeLightbox();
            }
        }
    });

    // 7. Close mobile menu on outside tap or Escape
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('open')) {
            if (!e.target.closest('nav')) {
                navMenu.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            }
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', false);
            navToggle.focus();
        }
    });

});
