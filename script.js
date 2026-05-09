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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            sections: [
                {
                    title: "Resources",
                    type: "buttons",
                    items: [
                        { label: "Lab Activities & PTs", url: "https://drive.google.com/file/d/1example/view?usp=sharing" },
                        { label: "Journal Article", url: "https://drive.google.com/file/d/1example/view?usp=sharing" },
                        { label: "Source Codes", url: "https://drive.google.com/drive/folders/1example" }
                    ]
                },
                {
                    title: "Demonstration",
                    type: "media",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    videoUrl: "videos/pose-estimation-demo.mp4",
                    websiteUrl: "https://example.com"
                }
            ],
            technologies: ["Python", "Teachable Machine", "Web Development", "Computer Vision"],
            sdg: {
                number: 4,
                title: "Quality Education",
                description: "This project aligns with SDG 4 by providing innovative tools for improved education quality.",
                imagePlaceholder: "[SDG 4 Logo]"
            }
        },
        "save-share": {
            course: "EGR C204 | Technopreneurship",
            title: "Save&Share (FarVent) | Full-Stack Tech Startup",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            sections: [
                {
                    title: "Milestones",
                    type: "buttons",
                    items: [
                        { label: "Wadhwani Milestone 1", url: "https://drive.google.com/file/d/1example/view?usp=sharing" },
                        { label: "Wadhwani Milestone 2", url: "https://drive.google.com/file/d/1example/view?usp=sharing" },
                        { label: "Wadhwani Milestone 3", url: "https://drive.google.com/file/d/1example/view?usp=sharing" }
                    ]
                },
                {
                    title: "Pitch & Final Documentation",
                    type: "buttons",
                    items: [
                        { label: "Final Pitch Deck", url: "https://drive.google.com/file/d/1example/view?usp=sharing" }
                    ]
                },
                {
                    title: "Software Demonstration",
                    type: "media",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    videoUrl: "videos/save-share-demo.mp4",
                    websiteUrl: "https://example.com"
                },
                {
                    title: "Pitch Video",
                    type: "media",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    videoUrl: "videos/save-share-pitch.mp4",
                    websiteUrl: ""
                }
            ],
            technologies: ["Flutter", "Dart", "Firebase", "Mobile Development"],
            sdg: {
                number: 12,
                title: "Responsible Consumption & Production",
                description: "FarVent addresses food waste and promotes sustainable consumption patterns.",
                imagePlaceholder: "[SDG 12 Logo]"
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
                        { label: "Journal Article", url: "https://drive.google.com/file/d/1example/view?usp=sharing" }
                    ]
                },
                {
                    title: "Software Demonstration",
                    type: "media",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    videoUrl: "videos/face-recognition-demo.mp4",
                    websiteUrl: "https://example.com"
                }
            ],
            technologies: ["Raspberry Pi", "Python", "OpenCV", "Face Recognition"],
            sdg: {
                number: 4,
                title: "Quality Education",
                description: "This project enhances educational efficiency through automated attendance management.",
                imagePlaceholder: "[SDG 4 Logo]"
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
                        { src: "", placeholder: "[Smart House Image 1]" },
                        { src: "", placeholder: "[Smart House Image 2]" },
                        { src: "", placeholder: "[Smart House Image 3]" }
                    ]
                },
                {
                    title: "Code Snapshots",
                    type: "gallery",
                    images: [
                        { src: "", placeholder: "[Code Snapshot 1]" },
                        { src: "", placeholder: "[Code Snapshot 2]" }
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
                imagePlaceholder: "[SDG 7 Logo]"
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
                        { src: "", placeholder: "[Image 1]" },
                        { src: "", placeholder: "[Image 2]" },
                        { src: "", placeholder: "[Image 3]" }
                    ]
                },
                {
                    title: "Code Snapshots",
                    type: "gallery",
                    images: [
                        { src: "", placeholder: "[Code Snapshot 1]" },
                        { src: "", placeholder: "[Code Snapshot 2]" }
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
                imagePlaceholder: "[SDG Logo]"
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
                        { src: "", placeholder: "[Image 1]" },
                        { src: "", placeholder: "[Image 2]" },
                        { src: "", placeholder: "[Image 3]" }
                    ]
                },
                {
                    title: "Code Snapshots",
                    type: "gallery",
                    images: [
                        { src: "", placeholder: "[Code Snapshot 1]" },
                        { src: "", placeholder: "[Code Snapshot 2]" }
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
                imagePlaceholder: "[SDG Logo]"
            }
        }
    };

    // 4. Modal Logic
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-btn");
    const projectCards = document.querySelectorAll(".carousel-container .project-card");
    const experienceCards = document.querySelectorAll("#experience .project-card[data-experience]");
    const certificationCards = document.querySelectorAll("#certifications .project-card[data-certification]");
    const projectCarousel = document.querySelector(".carousel-container");
    const carouselLeft = document.querySelector(".carousel-control.left");
    const carouselRight = document.querySelector(".carousel-control.right");
    const carouselWrapper = document.querySelector(".projects-carousel");

    let carouselScrollInterval = null;

    function startCarouselScroll(direction) {
        if (!projectCarousel) return;
        stopCarouselScroll();
        carouselScrollInterval = setInterval(() => {
            projectCarousel.scrollBy({ left: direction, behavior: "smooth" });
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
            if (projectCarousel) projectCarousel.scrollBy({ left: -320, behavior: "smooth" });
        });
    }

    if (carouselRight) {
        carouselRight.addEventListener("mouseenter", () => startCarouselScroll(8));
        carouselRight.addEventListener("mouseleave", stopCarouselScroll);
        carouselRight.addEventListener("click", () => {
            if (projectCarousel) projectCarousel.scrollBy({ left: 320, behavior: "smooth" });
        });
    }

    if (carouselWrapper) {
        carouselWrapper.addEventListener("mouseleave", stopCarouselScroll);
    }

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
            image: { src: "", placeholder: "[TOEIC Certificate Full Image]" },
            date: "November 2023",
            issuer: "ETS (Educational Testing Service)"
        },
        "comptia": {
            title: "CompTIA Tech+",
            description: "CompTIA Technology+ certification validates foundational IT skills and knowledge in areas such as hardware, software, networking, and security. This certification demonstrates competence in the fundamental concepts and practices of modern information technology.",
            image: { src: "images/comptia cert.png", placeholder: "" },
            date: "September 2025",
            issuer: "CompTIA"
        },
        "java": {
            title: "IT Specialist - Java",
            description: "Certified by Certiport as an IT Specialist in Java programming fundamentals. This certification validates proficiency in Java programming concepts, object-oriented programming principles, and practical application development skills.",
            image: { src: "images/java cert.png", placeholder: "" },
            date: "May 2024",
            issuer: "Certiport (A Pearson VUE Business)"
        },
        "aws-ml": {
            title: "AWS Academy Machine Learning Graduate",
            description: "Certified as an AWS Academy Machine Learning Graduate, demonstrating comprehensive knowledge and practical skills in machine learning concepts, AWS cloud services, and data science methodologies. This certification validates expertise in building and deploying ML solutions on AWS infrastructure.",
            image: { src: "", placeholder: "[AWS ML Certificate Full Image]" },
            date: "2025",
            issuer: "Amazon Web Services (AWS)"
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
            html += `<div class="certificate-img" style="display: flex; align-items: center; justify-content: center; background-color: var(--card-bg); border: 2px dashed var(--accent); min-height: 400px; max-height: 80vh; font-size: 1.2rem;">${cert.image.placeholder}</div>`;
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
                { src: "", placeholder: "[ICpEP Exhibit / Org Photo 1]" },
                { src: "", placeholder: "[ICpEP Exhibit / Org Photo 2]" },
                { src: "", placeholder: "[ICpEP Exhibit / Org Photo 3]" }
            ]
        },
        "awslc": {
            title: "Finance Officer | AWSLC - JRU Chapter",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                { src: "", placeholder: "[AWSLC Finance Photo 1]" },
                { src: "", placeholder: "[AWSLC Finance Photo 2]" },
                { src: "", placeholder: "[AWSLC Finance Photo 3]" }
            ]
        },
        "solar-energy": {
            title: "Solar Energy Outreach Leader",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            images: [
                { src: "", placeholder: "[Outreach Photo 1]" },
                { src: "", placeholder: "[Outreach Photo 2]" },
                { src: "", placeholder: "[Outreach Photo 3]" }
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
                html += `<div class="modal-gallery-item" style="display: flex; align-items: center; justify-content: center; background-color: var(--card-bg); border: 2px dashed var(--accent);">${img.placeholder}</div>`;
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
                        html += `<div class="modal-gallery-item" style="display: flex; align-items: center; justify-content: center; background-color: var(--card-bg); border: 2px dashed var(--accent);">${img.placeholder}</div>`;
                    }
                });
                html += `</div>`;
            }
            else if (section.type === "media") {
                if (section.description) {
                    html += `<p class="modal-description">${section.description}</p>`;
                }
                if (section.videoUrl) {
                    html += `<div class="modal-video">
                        <video controls class="project-video">
                            <source src="${section.videoUrl}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    </div>`;
                }
                if (section.websiteUrl && section.websiteUrl.trim() !== "") {
                    html += `<a href="${section.websiteUrl}" target="_blank" rel="noopener noreferrer" class="modal-btn">Visit Website</a>`;
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
                            <div style="width: 100px; height: 100px; border: 2px dashed var(--accent); display: flex; align-items: center; justify-content: center; border-radius: 4px; color: var(--text-secondary);">${project.sdg.imagePlaceholder}</div>
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
});