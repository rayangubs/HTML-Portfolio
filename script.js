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

    // 3. Project Details Database    // VIDEO SETUP: Place your video files in the 'videos/' directory
    // Supported formats: MP4, WebM, OGV
    // Update the videoUrl paths below to match your video filenames    
    const projectDetails = {
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
                    videoUrl: "videos/AI demo.mkv",
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
        },
        "face-recognition": {
            course: "CPE C305, CPE C306 | Digital Signal Processing & Microcontroller",
            title: "Raspberry Pi-Based Face Recognition Classroom Attendance",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
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
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    videoUrl: "videos/attendance demo.mp4",
                    websiteUrl: "https://example.com"
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
        "smart-house": {
            course: "CPE C306 | Microcontroller",
            title: "Miniature Smart House",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            sections: [
                {
                    title: "Project Images",
                    type: "gallery",
                    images: [
                        { src: "" }, // e.g. "images/smart-house-1.jpg"
                        { src: "" }, // e.g. "images/smart-house-2.jpg"
                        { src: "" }  // e.g. "images/smart-house-3.jpg"
                    ]
                },
                {
                    title: "Code Snapshots",
                    type: "gallery",
                    images: [
                        { src: "" }, // e.g. "images/smart-house-code-1.jpg"
                        { src: "" }  // e.g. "images/smart-house-code-2.jpg"
                    ]
                },
                {
                    title: "Details",
                    type: "description",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }
            ],
            technologies: ["Arduino", "ESP32", "C++", "IoT"],
            sdg: {
                number: 7,
                title: "Affordable & Clean Energy",
                description: "The smart house optimizes energy consumption through automation and control.",
                imgSrc: "images/sdg/7.jpg" // e.g. "images/sdg-7.png"
            }
        },
        "project-5": {
            course: "Filler Course",
            title: "Project 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            sections: [
                {
                    title: "Project Images",
                    type: "gallery",
                    images: [
                        { src: "" }, // e.g. "images/project5-1.jpg"
                        { src: "" }, // e.g. "images/project5-2.jpg"
                        { src: "" }  // e.g. "images/project5-3.jpg"
                    ]
                },
                {
                    title: "Code Snapshots",
                    type: "gallery",
                    images: [
                        { src: "" }, // e.g. "images/project5-code-1.jpg"
                        { src: "" }  // e.g. "images/project5-code-2.jpg"
                    ]
                },
                {
                    title: "Details",
                    type: "description",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            ],
            technologies: ["Tech", "Stack", "Here"],
            sdg: {
                number: 0,
                title: "To Be Determined",
                description: "Filler description for SDG alignment.",
                imgSrc: "" // e.g. "images/sdg-X.png"
            }
        },
        "project-6": {
            course: "Filler Course",
            title: "Project 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            sections: [
                {
                    title: "Project Images",
                    type: "gallery",
                    images: [
                        { src: "" }, // e.g. "images/project6-1.jpg"
                        { src: "" }, // e.g. "images/project6-2.jpg"
                        { src: "" }  // e.g. "images/project6-3.jpg"
                    ]
                },
                {
                    title: "Code Snapshots",
                    type: "gallery",
                    images: [
                        { src: "" }, // e.g. "images/project6-code-1.jpg"
                        { src: "" }  // e.g. "images/project6-code-2.jpg"
                    ]
                },
                {
                    title: "Details",
                    type: "description",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            ],
            technologies: ["Tech", "Stack", "Here"],
            sdg: {
                number: 0,
                title: "To Be Determined",
                description: "Filler description for SDG alignment.",
                imgSrc: "" // e.g. "images/sdg-X.png"
            }
        }
    };

    // 4. Modal Logic
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-btn");
    const projectCards = document.querySelectorAll(".carousel-container .project-card");
    const experienceCards = document.querySelectorAll("#experience .project-card[data-experience]");
    const certificationCards = document.querySelectorAll("#certifications .project-card[data-certification]");

    // Handle multiple carousels (projects and certifications)
    const carousels = document.querySelectorAll(".projects-carousel");

    carousels.forEach(carousel => {
        const carouselContainer = carousel.querySelector(".carousel-container");
        const carouselLeft = carousel.querySelector(".carousel-control.left");
        const carouselRight = carousel.querySelector(".carousel-control.right");
        const carouselWrapper = carousel;

        let carouselScrollInterval = null;

        function startCarouselScroll(direction) {
            if (!carouselContainer) return;
            stopCarouselScroll();
            carouselScrollInterval = setInterval(() => {
                carouselContainer.scrollBy({ left: direction, behavior: "smooth" });
            }, 20);
        }

        function stopCarouselScroll() {
            if (carouselScrollInterval) {
                clearInterval(carouselScrollInterval);
                carouselScrollInterval = null;
            }
        }

        if (carouselLeft) {
            carouselLeft.addEventListener("mouseenter", () => startCarouselScroll(-8));
            carouselLeft.addEventListener("mouseleave", stopCarouselScroll);
            carouselLeft.addEventListener("click", () => {
                if (carouselContainer) carouselContainer.scrollBy({ left: -320, behavior: "smooth" });
            });
        }

        if (carouselRight) {
            carouselRight.addEventListener("mouseenter", () => startCarouselScroll(8));
            carouselRight.addEventListener("mouseleave", stopCarouselScroll);
            carouselRight.addEventListener("click", () => {
                if (carouselContainer) carouselContainer.scrollBy({ left: 320, behavior: "smooth" });
            });
        }

        if (carouselWrapper) {
            carouselWrapper.addEventListener("mouseleave", stopCarouselScroll);
        }
    });

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

    // Certification Details Database
    const certificationDetails = {
        "toeic": {
            title: "TOEIC Perfect Score",
            description: "Achieved a perfect score of 990/990 on the Test of English for International Communication (TOEIC) examination administered by ETS. This certification demonstrates exceptional proficiency in English language skills for international business and academic communication.",
            image: { src: "" }, // e.g. "images/toeic-cert.jpg"
            date: "November 2023",
            issuer: "ETS (Educational Testing Service)"
        },
        "comptia": {
            title: "CompTIA Tech+",
            description: "CompTIA Technology+ certification validates foundational IT skills and knowledge in areas such as hardware, software, networking, and security. This certification demonstrates competence in the fundamental concepts and practices of modern information technology.",
            image: { src: "images/comptia cert.png" },
            date: "September 2025",
            issuer: "CompTIA"
        },
        "java": {
            title: "IT Specialist - Java",
            description: "Certified by Certiport as an IT Specialist in Java programming fundamentals. This certification validates proficiency in Java programming concepts, object-oriented programming principles, and practical application development skills.",
            image: { src: "images/java cert.png" },
            date: "May 2024",
            issuer: "Certiport (A Pearson VUE Business)"
        },
        "aws-ml": {
            title: "AWS Academy Machine Learning Graduate",
            description: "Certified as an AWS Academy Machine Learning Graduate, demonstrating comprehensive knowledge and practical skills in machine learning concepts, AWS cloud services, and data science methodologies. This certification validates expertise in building and deploying ML solutions on AWS infrastructure.",
            image: { src: "images/aws cert.png" },
            date: "2026",
            issuer: "Amazon Web Services (AWS)"
        },
        "huawei-ai": {
            title: "Huawei ICT Academy - Overview of AI",
            description: "Certificate of Completion for the Overview of Artificial Intelligence course from Huawei ICT Academy. This certification covers fundamental AI concepts, machine learning principles, neural networks, and Huawei's AI technologies and solutions. Demonstrates foundational knowledge in artificial intelligence and its practical applications.",
            image: { src: "images/huawei cert.png" },
            date: "2026",
            issuer: "Huawei ICT Academy"
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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                { src: "" }, // e.g. "images/icpep-1.jpg"
                { src: "" }, // e.g. "images/icpep-2.jpg"
                { src: "" }  // e.g. "images/icpep-3.jpg"
            ]
        },
        "awslc": {
            title: "Finance Officer | AWSLC - JRU Chapter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                { src: "" }, // e.g. "images/awslc-1.jpg"
                { src: "" }, // e.g. "images/awslc-2.jpg"
                { src: "" }  // e.g. "images/awslc-3.jpg"
            ]
        },
        "solar-energy": {
            title: "Lorem Ipsum Dolor Sit Amet",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                { src: "" }, // e.g. "images/solar-1.jpg"
                { src: "" }, // e.g. "images/solar-2.jpg"
                { src: "" }  // e.g. "images/solar-3.jpg"
            ]
        }
    };

    function renderExperienceModal(experienceId) {
        const exp = experienceDetails[experienceId];
        if (!exp) return;

        const modalBody = document.getElementById("modal-body");
        if (!modalBody) return;

        let html = `
            <div class="modal-header">
                <h2>${exp.title}</h2>
            </div>

            <div class="modal-section">
                <h3>Overview</h3>
                <p class="modal-description">${exp.description}</p>
            </div>

            <div class="modal-section">
                <h3>Gallery</h3>
                <div class="modal-gallery-section">
        `;

        exp.images.forEach(img => {
            if (img.src) {
                html += `<img src="${img.src}" alt="Experience Image" class="modal-gallery-item">`;
            } else {
                html += `<img src="" alt="Experience Image" class="modal-gallery-item img-empty">`;
            }
        });

        html += `</div></div>`;

        document.getElementById("modal-body").innerHTML = html;
    }

    function renderModalContent(projectId) {
        const project = projectDetails[projectId];
        if (!project) return;

        const modalBody = document.getElementById("modal-body");
        if (!modalBody) return;

        let html = `
            <div class="modal-header">
                <div class="modal-course">${project.course}</div>
                <h2>${project.title}</h2>
            </div>

            <div class="modal-section">
                <h3>Overview</h3>
                <p class="modal-description">${project.description}</p>
            </div>
        `;

        // Add Contributions section if it exists
        if (project.contributions) {
            html += `
            <div class="modal-section">
                <h3>Contributions</h3>
                <p class="modal-description">${project.contributions}</p>
            </div>
        `;
        }

        // Render sections
        project.sections.forEach(section => {
            html += `<div class="modal-section">`;
            html += `<h3>${section.title}</h3>`;

            if (section.type === "buttons") {
                html += `<div class="modal-buttons">`;
                section.items.forEach(item => {
                    html += `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="modal-btn">${item.label}</a>`;
                });
                html += `</div>`;
            } 
            else if (section.type === "gallery") {
                html += `<div class="modal-gallery-section">`;
                section.images.forEach(img => {
                    if (img.src) {
                        html += `<img src="${img.src}" alt="Gallery Image" class="modal-gallery-item">`;
                    } else {
                        html += `<img src="" alt="Gallery Image" class="modal-gallery-item img-empty">`;
                    }
                });
                html += `</div>`;
            }
            else if (section.type === "media") {
                if (section.description) {
                    html += `<p class="modal-description">${section.description}</p>`;
                }
                if (section.videoUrl) {
                    const isCompactVideo = projectId === "save-share" && section.title === "Software Demonstration";
                    html += `<div class="modal-video">
                        <video controls class="project-video${isCompactVideo ? ' compact' : ''}">
                            <source src="${section.videoUrl}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>`;
                }
            }
            else if (section.type === "description") {
                html += `<p class="modal-description">${section.text}</p>`;
            }

            html += `</div>`;
        });

        // Footer with technologies and SDG
        html += `
            <div class="modal-footer">
                <div class="modal-section">
                    <h3>Technologies Used</h3>
                    <div class="tech-list">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>`;

        // Only show SDG section if SDG number is valid (1-17)
        if (project.sdg.number > 0 && project.sdg.number <= 17) {
            html += `
                <div class="modal-section">
                    <h3>SDG Alignment</h3>
                    <div class="sdg-section">
                        <div style="flex: 1;">
                            <img src="${project.sdg.imgSrc}" alt="SDG ${project.sdg.number}" class="sdg-logo${project.sdg.imgSrc ? '' : ' img-empty'}">
                        </div>
                        <div class="sdg-info" style="flex: 2;">
                            <h4>SDG ${project.sdg.number}: ${project.sdg.title}</h4>
                            <p>${project.sdg.description}</p>
                        </div>
                    </div>
                </div>`;
        }

        html += `</div>`;

        document.getElementById("modal-body").innerHTML = html;
    }

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

    // Close Modal
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 5. Badge Lightbox
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

    // Click any badge image to open lightbox
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

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && badgeLightbox && badgeLightbox.classList.contains('open')) {
            closeBadgeLightbox();
        }
    });

});