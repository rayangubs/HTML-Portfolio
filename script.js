document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Fade-In Animations
    // This watches elements with the class 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Add the 'visible' class to trigger the CSS transition
                entry.target.classList.add('visible');
                // Stop observing once it has faded in
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // 3. Year Selection for Projects
    const yearBtns = document.querySelectorAll('.year-btn');
    const yearProjects = document.querySelectorAll('.year-projects');

    // Set first year (Year 3) as active by default
    if (yearBtns.length > 0) {
        yearBtns[0].classList.add('active');
        yearProjects.forEach(yearDiv => {
            yearDiv.style.display = 'none';
        });
        document.querySelector('.year-projects[data-year="3"]').style.display = 'block';
    }

    yearBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedYear = this.getAttribute('data-year');
            
            // Remove active class from all buttons
            yearBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all year projects
            yearProjects.forEach(yearDiv => {
                yearDiv.style.display = 'none';
            });
            
            // Show selected year projects
            document.querySelector(`.year-projects[data-year="${selectedYear}"]`).style.display = 'block';
        });
    });

    // 4. Modal Logic
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-btn");
    const projectCards = document.querySelectorAll("#projects .project-card");

    // Database of extended project details
    // Database of extended project details
    const projectDetails = {
        
        // --- YEAR 3 ---
        "Miniature Smart House": {
            title: "Miniature Smart House",
            desc: "An advanced IoT-enabled smart home model featuring offline voice recognition. Utilizing the VC-02 module alongside ESP32 and Arduino, this project allows users to control lighting, fan systems, and door servos with zero latency and no internet dependency.",
            tech: "Arduino | ESP32 | VC-02 Module | C++",
            images: [
                '<div class="image-placeholder"><span>[Circuit Wiring Photo]</span></div>',
                '<div class="image-placeholder"><span>[C++ Logic Snippet]</span></div>',
                '<div class="image-placeholder"><span>[Final House Model]</span></div>'
            ]
        },
        "JRU Chatbot Robot": {
            title: "JRU Chatbot Robot",
            desc: "A conversational robotics platform designed to answer university inquiries. It interfaces microcontroller hardware with a Python backend running Large Language Models (LLMs).",
            tech: "Python | APIs | LLMs | Hardware Integration",
            images: [
                '<div class="image-placeholder"><span>[Robot Chassis Photo]</span></div>',
                '<div class="image-placeholder"><span>[Python Backend Code]</span></div>'
            ]
        },
        "Line-Following Robot": {
            title: "Line-Following Robot",
            desc: "An autonomous vehicle designed for precision navigation. The project involved fine-tuning IR sensor calibration and optimizing C++ control loops to ensure smooth, continuous movement along complex track layouts for a university robotics exhibit.",
            tech: "C++ | IR Sensors | Motor Drivers | Arduino",
            images: [
                '<div class="image-placeholder"><span>[Robot Top View]</span></div>',
                '<div class="image-placeholder"><span>[Sensor Calibration Code]</span></div>'
            ]
        },
        "Stafit Application": {
            title: "Stafit Application",
            desc: "A mobile application developed to handle complex data processing and user management. This project showcases frontend UI design and seamless backend integration to create a smooth user experience.",
            tech: "Flutter | Dart | Backend APIs",
            images: [
                '<div class="image-placeholder"><span>[App Home Screen]</span></div>',
                '<div class="image-placeholder"><span>[Dart Code Snippet]</span></div>'
            ]
        },

        // --- YEAR 2 ---
        "[Software Project 2.2]": {
            title: "Data Science & Analysis",
            desc: "A comprehensive data analysis project utilizing Python to process datasets, extract meaningful insights, and visualize trends. This involved cleaning data and applying statistical methods.",
            tech: "Python | Pandas | Matplotlib | scikit-learn",
            images: [
                '<div class="image-placeholder"><span>[Data Visualization Chart]</span></div>',
                '<div class="image-placeholder"><span>[Pandas Dataframe Code]</span></div>'
            ]
        },
        "[Hardware Project 2.2]": {
            title: "RFID Access System",
            desc: "An embedded systems project featuring an RFID-based authentication system. Designed to read and verify tags, triggering physical actuators upon successful access grants.",
            tech: "Arduino | RFID Reader | Servos | C++",
            images: [
                '<div class="image-placeholder"><span>[RFID Scanner Photo]</span></div>',
                '<div class="image-placeholder"><span>[Access Logic Code]</span></div>'
            ]
        },
        "[Software Project 2.1]": {
            title: "Mobile UI Exploration",
            desc: "An early mobile app development project focusing on responsive UI/UX principles. Built cross-platform mobile interfaces ensuring consistent behavior across different screen sizes.",
            tech: "Flutter | Dart | UI/UX Design",
            images: [
                '<div class="image-placeholder"><span>[UI Mockup]</span></div>',
                '<div class="image-placeholder"><span>[Widget Tree Code]</span></div>'
            ]
        },
        "[Hardware Project 2.1]": {
            title: "Sensor Data Logger",
            desc: "A hardware project focused on capturing environmental data from various sensors and logging it for analysis. Emphasized accurate sensor reading and data formatting.",
            tech: "Microcontrollers | I2C/SPI Protocols | Sensors",
            images: [
                '<div class="image-placeholder"><span>[Breadboard Prototype]</span></div>',
                '<div class="image-placeholder"><span>[Data Logging Output]</span></div>'
            ]
        },

        // --- YEAR 1 ---
        "[Software Project 1.2]": {
            title: "Object-Oriented Programming App",
            desc: "A foundational software application built to demonstrate core Object-Oriented Programming (OOP) concepts such as inheritance, polymorphism, and encapsulation.",
            tech: "Java | OOP Concepts",
            images: [
                '<div class="image-placeholder"><span>[Class Diagram]</span></div>',
                '<div class="image-placeholder"><span>[Java Class Code]</span></div>'
            ]
        },
        "[Hardware Project 1.2]": {
            title: "Network Topology Model",
            desc: "A comprehensive study and practical modeling of computer networking topologies. Included setting up basic subnetworks and demonstrating data flow and routing logic.",
            tech: "Networking | Packet Tracer | Subnetting",
            images: [
                '<div class="image-placeholder"><span>[Network Diagram]</span></div>',
                '<div class="image-placeholder"><span>[Routing Configuration]</span></div>'
            ]
        },
        "[Software Project 1.1]": {
            title: "Algorithmic Logic Scripts",
            desc: "A collection of foundational programming scripts focused on algorithm design, data structures, and basic computational logic.",
            tech: "Python | Algorithms | Data Structures",
            images: [
                '<div class="image-placeholder"><span>[Terminal Output]</span></div>',
                '<div class="image-placeholder"><span>[Algorithm Flowchart]</span></div>'
            ]
        },
        "[Hardware Project 1.1]": {
            title: "Basic Digital Logic Circuits",
            desc: "An introductory hardware project demonstrating digital logic gates, boolean algebra, and the physical implementation of basic combinational circuits.",
            tech: "Breadboards | Logic Gates | Electronics",
            images: [
                '<div class="image-placeholder"><span>[Circuit Diagram]</span></div>',
                '<div class="image-placeholder"><span>[Wired Logic Gate Photo]</span></div>'
            ]
        }
    };

    // Open Modal
    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            // Get the title of the card clicked to find the right data
            const title = card.querySelector(".project-title").innerText;
            const data = projectDetails[title];

            if (data) {
                document.getElementById("modal-title").innerText = data.title;
                document.getElementById("modal-desc").innerText = data.desc;
                document.getElementById("modal-tech").innerText = data.tech;
                
                // Load gallery images
                document.getElementById("modal-gallery").innerHTML = data.images.join('');
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden"; // Prevent background scrolling
            }
        });
    });

    // Close Modal when clicking the X
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close Modal when clicking outside the box
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});