tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',
                secondary: '#10b981'
            },
            borderRadius: {
                'none': '0px',
                'sm': '4px',
                DEFAULT: '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'full': '9999px',
                'button': '8px'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const header = document.getElementById('header');

    // Toggle mobile menu
    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        document.body.classList.toggle('overflow-hidden');

        // Add/remove shadow when mobile menu is open
        if (mobileMenu.classList.contains('hidden')) {
            header.classList.add('shadow-sm');
        } else {
            header.classList.remove('shadow-sm');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.mobile-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.classList.remove('overflow-hidden');
            header.classList.add('shadow-sm');
        });
    });

    // Change header style on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
            header.classList.add('bg-white/95');
            header.classList.add('backdrop-blur-sm');
        } else {
            header.classList.remove('shadow-lg');
            header.classList.remove('bg-white/95');
            header.classList.remove('backdrop-blur-sm');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Custom cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    document.addEventListener('mousedown', function () {
        cursor.classList.add('hover');
    });
    document.addEventListener('mouseup', function () {
        cursor.classList.remove('hover');
    });
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            cursor.classList.add('hover');
        });
        element.addEventListener('mouseleave', function () {
            cursor.classList.remove('hover');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburger.addEventListener('click', function () {
        this.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Header background change on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('bg-white', 'shadow-md');
            header.classList.add('bg-transparent');
        }
    });
    // Trigger scroll event on page load
    window.dispatchEvent(new Event('scroll'));
});
document.addEventListener('DOMContentLoaded', function () {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('resize', checkReveal);
    // Trigger on initial load
    checkReveal();
});
document.addEventListener('DOMContentLoaded', function () {
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    // Start counter animation when the section is in view
    const aboutSection = document.getElementById('about');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(aboutSection);
});
document.addEventListener('DOMContentLoaded', function () {
    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar-fill');
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    // Start progress bar animation when the section is in view
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    observer.observe(skillsSection);
});
document.addEventListener('DOMContentLoaded', function () {
    // Skills filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            skillCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Projects filter
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            projectFilterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
            backToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Project modal
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const projectBtns = document.querySelectorAll('.view-project-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const modalChallenge = document.getElementById('modal-challenge');
    const modalFeatures = document.getElementById('modal-features');
    const modalClient = document.getElementById('modal-client');
    const modalDate = document.getElementById('modal-date');
    const modalCategory = document.getElementById('modal-category');
    const modalTechnologies = document.getElementById('modal-technologies');
    const modalLink = document.getElementById('modal-link');
    // Project data
    const projects = [
        {
            id: 1,
            title: 'E-commerce Platform',
            image: 'https://readdy.ai/api/search-image?query=modern%20e-commerce%20dashboard%20interface%20with%20analytics%20charts%2C%20product%20management%20UI%2C%20clean%20design%2C%20professional%2C%20high%20quality&width=800&height=600&seq=3&orientation=landscape',
            description: 'A comprehensive e-commerce solution designed to help businesses sell products online with ease. The platform includes customer-facing storefront and an admin dashboard for managing products, orders, and customers.',
            challenge: 'The client needed a scalable e-commerce solution that could handle high traffic volumes and complex product configurations while maintaining excellent performance. We implemented a microservices architecture with optimized database queries and caching strategies.',
            features: [
                'Responsive product catalog with advanced filtering',
                'Secure payment processing with multiple gateways',
                'Inventory management system with low stock alerts',
                'Customer account management and order history',
                'Analytics dashboard with sales and customer insights',
                'Marketing tools including discount codes and abandoned cart recovery'
            ],
            client: 'FashionFusion Inc.',
            date: 'January 2025',
            category: 'Web Application',
            technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'AWS', 'Stripe'],
            link: '#'
        },
        {
            id: 2,
            title: 'Project Management Tool',
            image: 'https://readdy.ai/api/search-image?query=project%20management%20application%20interface%20with%20kanban%20board%2C%20task%20tracking%2C%20team%20collaboration%20features%2C%20modern%20UI%20design%2C%20professional&width=800&height=600&seq=4&orientation=landscape',
            description: 'A collaborative project management application designed to help teams organize tasks, track progress, and communicate effectively. The platform supports various project methodologies including Kanban, Scrum, and traditional task management.',
            challenge: 'The client wanted a project management tool that was both powerful and intuitive, capable of supporting teams of various sizes and working styles. We focused on creating a flexible system with real-time updates and comprehensive reporting capabilities.',
            features: [
                'Customizable Kanban boards and Scrum sprints',
                'Real-time collaboration with chat and comments',
                'Time tracking and resource allocation',
                'File sharing and version control',
                'Automated reporting and analytics',
                'Integration with popular tools like Slack, GitHub, and Google Workspace'
            ],
            client: 'TechFlow Solutions',
            date: 'October 2024',
            category: 'Web Application',
            technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL', 'Docker', 'Kubernetes'],
            link: '#'
        },
        {
            id: 3,
            title: 'Crypto Trading Platform',
            image: 'https://readdy.ai/api/search-image?query=financial%20dashboard%20with%20crypto%20trading%20interface%2C%20market%20charts%2C%20portfolio%20tracking%2C%20dark%20mode%20UI%2C%20professional%20fintech%20application&width=800&height=600&seq=5&orientation=landscape',
            description: 'A sophisticated cryptocurrency trading platform that provides real-time market data, portfolio tracking, and automated trading strategies. The platform supports multiple exchanges and offers advanced charting tools for technical analysis.',
            challenge: 'Creating a high-performance trading platform that could handle real-time data from multiple exchanges while ensuring security and reliability. We implemented WebSocket connections for live updates and developed a secure wallet system for managing digital assets.',
            features: [
                'Real-time market data from multiple exchanges',
                'Advanced charting tools with technical indicators',
                'Portfolio tracking and performance analytics',
                'Automated trading strategies with customizable parameters',
                'Secure wallet integration for digital asset management',
                'News aggregation and sentiment analysis'
            ],
            client: 'CryptoVest Capital',
            date: 'March 2025',
            category: 'Web Application',
            technologies: ['React', 'Redux', 'Node.js', 'WebSockets', 'MongoDB', 'TradingView Charts'],
            link: '#'
        },
        {
            id: 4,
            title: 'Fitness Tracking App',
            image: 'https://readdy.ai/api/search-image?query=fitness%20mobile%20app%20UI%20design%20showing%20workout%20tracking%2C%20nutrition%20planning%2C%20progress%20charts%2C%20clean%20modern%20interface%20on%20smartphone%20mockup&width=800&height=600&seq=6&orientation=portrait',
            description: 'A mobile application designed to help users track their fitness activities, nutrition, and overall health progress. The app provides personalized workout plans, nutrition guidance, and progress tracking with visual analytics.',
            challenge: 'Developing a fitness app that could accurately track various workout types while providing personalized recommendations based on user goals and progress. We integrated with health data APIs and implemented machine learning algorithms for workout and nutrition recommendations.',
            features: [
                'Workout tracking with exercise library and custom routines',
                'Nutrition tracking with barcode scanner and meal planning',
                'Progress analytics with visual charts and goal tracking',
                'Integration with wearable devices and health platforms',
                'Community features with challenges and social sharing',
                'Personalized recommendations based on user data'
            ],
            client: 'FitLife Health',
            date: 'February 2025',
            category: 'Mobile Application',
            technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit', 'TensorFlow Lite', 'Redux'],
            link: '#'
        },
        {
            id: 5,
            title: 'Food Delivery App',
            image: 'https://readdy.ai/api/search-image?query=food%20delivery%20mobile%20app%20interface%20with%20restaurant%20listings%2C%20order%20tracking%2C%20payment%20options%2C%20modern%20UI%20design%20on%20smartphone%20mockup&width=800&height=600&seq=7&orientation=portrait',
            description: 'A comprehensive food delivery application connecting customers with local restaurants for ordering and delivery. The app includes features for restaurant discovery, order tracking, and payment processing.',
            challenge: 'Creating a seamless ordering experience with real-time delivery tracking while managing complex logistics between customers, restaurants, and delivery partners. We implemented a sophisticated routing system and real-time location tracking.',
            features: [
                'Restaurant discovery with filters and search functionality',
                'Menu browsing with customization options',
                'Secure payment processing with multiple methods',
                'Real-time order and delivery tracking',
                'Rating and review system for restaurants and delivery',
                'Loyalty program and promotional offers'
            ],
            client: 'Urban Eats',
            date: 'November 2024',
            category: 'Mobile Application',
            technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe', 'Cloud Functions', 'Firestore'],
            link: '#'
        },
        {
            id: 6,
            title: 'Banking App UI/UX',
            image: 'https://readdy.ai/api/search-image?query=banking%20app%20UI%2FUX%20design%20concept%20with%20financial%20dashboard%2C%20transaction%20history%2C%20budgeting%20tools%2C%20modern%20clean%20interface%20design&width=800&height=600&seq=8&orientation=landscape',
            description: 'A comprehensive UI/UX design for a mobile banking application focusing on security, usability, and financial management. The design includes user flows, wireframes, and high-fidelity prototypes for all key features.',
            challenge: 'Designing a banking interface that balances security requirements with user-friendly interactions while accommodating complex financial features. We conducted extensive user research and iterative testing to refine the experience.',
            features: [
                'Account dashboard with balance overview and quick actions',
                'Transaction history with search and filtering',
                'Bill payment and money transfer workflows',
                'Budget tracking and financial insights',
                'Secure authentication with biometric options',
                'Personalized financial recommendations'
            ],
            client: 'Global Trust Bank',
            date: 'December 2024',
            category: 'UI/UX Design',
            technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing', 'Design System', 'Motion Design'],
            link: '#'
        },
        {
            id: 7,
            title: 'E-Learning Platform',
            image: 'https://readdy.ai/api/search-image?query=educational%20platform%20UI%20design%20with%20course%20listings%2C%20learning%20dashboard%2C%20video%20player%20interface%2C%20modern%20e-learning%20website%20design&width=800&height=600&seq=9&orientation=landscape',
            description: 'A UI/UX design for an online learning platform with course management, video lessons, and student progress tracking. The design focuses on creating an engaging learning environment with intuitive navigation and clear information hierarchy.',
            challenge: 'Designing an e-learning platform that maintains student engagement while effectively organizing diverse course content and learning tools. We created a modular design system that could adapt to different course types and learning styles.',
            features: [
                'Course catalog with filtering and recommendation system',
                'Interactive video player with note-taking capabilities',
                'Progress tracking and achievement badges',
                'Discussion forums and peer collaboration tools',
                'Quiz and assessment modules with instant feedback',
                'Personalized learning dashboard'
            ],
            client: 'EduSphere',
            date: 'September 2024',
            category: 'UI/UX Design',
            technologies: ['Sketch', 'InVision', 'User Flows', 'Wireframing', 'Usability Testing', 'Information Architecture'],
            link: '#'
        },
        {
            id: 8,
            title: 'Smart Home App',
            image: 'https://readdy.ai/api/search-image?query=smart%20home%20control%20app%20UI%20design%20with%20device%20management%2C%20automation%20settings%2C%20energy%20monitoring%2C%20modern%20IoT%20interface%20on%20tablet%20and%20phone%20mockups&width=800&height=600&seq=10&orientation=landscape',
            description: 'A UI/UX design for a smart home control application with device management, automation, and energy monitoring. The design focuses on creating an intuitive interface for controlling various smart home devices and setting up automated routines.',
            challenge: 'Designing an interface that could unify control of diverse smart home devices while making complex automation setup accessible to non-technical users. We developed a visual programming system for creating automations and clear device control panels.',
            features: [
                'Unified dashboard for all connected devices',
                'Visual automation builder for creating routines',
                'Energy usage monitoring and optimization suggestions',
                'Scene creation for controlling multiple devices',
                'Voice control integration and preferences',
                'Security monitoring and alerts'
            ],
            client: 'SmartLiving Technologies',
            date: 'April 2025',
            category: 'UI/UX Design',
            technologies: ['Adobe XD', 'Prototyping', 'Motion Design', 'Usability Testing', 'Information Architecture', 'Interaction Design'],
            link: '#'
        },
        {
            id: 9,
            title: 'Real Estate Platform',
            image: 'https://readdy.ai/api/search-image?query=real%20estate%20property%20listing%20website%20with%20search%20filters%2C%20property%20details%2C%20virtual%20tours%2C%20modern%20clean%20interface%20design&width=800&height=600&seq=11&orientation=landscape', description: 'A web application for property listings with advanced search, virtual tours, and agent management features. The platform connects property buyers, sellers, and real estate agents in a comprehensive marketplace.',
            challenge: 'Creating a platform that could effectively showcase properties with rich media while providing powerful search tools and managing complex relationships between buyers, sellers, and agents. We implemented a sophisticated search algorithm and virtual tour functionality.',
            features: [
                'Advanced property search with multiple filters',
                'Interactive maps with neighborhood insights',
                '360° virtual tours and property galleries',
                'Mortgage calculator and financing options',
                'Agent profiles and direct messaging',
                'Saved searches and property alerts'
            ],
            client: 'HomeQuest Realty',
            date: 'May 2025',
            category: 'Web Application',
            technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps', 'AWS S3', 'Elasticsearch'],
            link: '#'
        }
    ];
    // Open modal with project details
    projectBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const projectCard = this.closest('.project-card');
            const projectId = parseInt(projectCard.getAttribute('data-id'));
            const project = projects.find(p => p.id === projectId);
            if (project) {
                modalTitle.textContent = project.title;
                modalImage.src = project.image;
                modalImage.alt = project.title;
                modalDescription.textContent = project.description;
                modalChallenge.textContent = project.challenge;
                // Clear features list
                modalFeatures.innerHTML = '';
                // Add features
                project.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeatures.appendChild(li);
                });
                modalClient.textContent = project.client;
                modalDate.textContent = project.date;
                modalCategory.textContent = project.category;
                // Clear technologies
                modalTechnologies.innerHTML = '';
                // Add technologies
                project.technologies.forEach(tech => {
                    const span = document.createElement('span');
                    span.className = 'bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs';
                    span.textContent = tech;
                    modalTechnologies.appendChild(span);
                });
                modalLink.href = project.link;
                // Open modal
                modal.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    // Close modal
    modalClose.addEventListener('click', function () {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    });
    // Close modal when clicking outside
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});
// Contact
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        const agreementInput = document.getElementById('agreement');

        let isValid = true;

        // Simple validation
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('border-red-500');
            isValid = false;
        } else {
            nameInput.classList.remove('border-red-500');
        }

        if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
            emailInput.classList.add('border-red-500');
            isValid = false;
        } else {
            emailInput.classList.remove('border-red-500');
        }

        if (subjectInput.value.trim() === '') {
            subjectInput.classList.add('border-red-500');
            isValid = false;
        } else {
            subjectInput.classList.remove('border-red-500');
        }

        if (messageInput.value.trim() === '') {
            messageInput.classList.add('border-red-500');
            isValid = false;
        } else {
            messageInput.classList.remove('border-red-500');
        }

        if (!agreementInput.checked) {
            agreementInput.classList.add('border-red-500');
            isValid = false;
        } else {
            agreementInput.classList.remove('border-red-500');
        }

        if (!isValid) return;

        // Send the form data via fetch to Web3Forms
        const formData = new FormData(contactForm);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                contactForm.reset();
                successMessage.textContent = 'Your message has been sent successfully!';
                successMessage.classList.remove('hidden');
                successMessage.scrollIntoView({ behavior: 'smooth' });

                // Hide after a few seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            } else {
                alert('There was an error sending your message. Please try again.');
            }
        })
        .catch(error => {
            alert('Network error. Please check your connection.');
            console.error('Error:', error);
        });
    });

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});




document.addEventListener('DOMContentLoaded', function () {
    // Skills chart
    const skillsChart = document.getElementById('skills-chart');
    if (skillsChart) {
        const chart = echarts.init(skillsChart);
        const option = {
            animation: false,
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                textStyle: {
                    color: '#1f2937'
                }
            },
            radar: {
                indicator: [
                    { name: 'Frontend', max: 100 },
                    { name: 'Backend', max: 100 },
                    { name: 'UI/UX', max: 100 },
                    { name: 'DevOps', max: 100 },
                    { name: 'Mobile', max: 100 },
                    { name: 'Database', max: 100 }
                ],
                radius: '65%',
                splitNumber: 4,
                axisName: {
                    color: '#1f2937',
                    fontWeight: 'bold'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(224, 225, 226, 0.5)'
                    }
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(255, 255, 255, 0.8)']
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(224, 225, 226, 0.8)'
                    }
                }
            },
            series: [
                {
                    name: 'Technical Skills',
                    type: 'radar',
                    data: [
                        {
                            value: [90, 85, 75, 70, 80, 85],
                            name: 'Skill Level',
                            symbol: 'none',
                            lineStyle: {
                                width: 2,
                                color: 'rgba(87, 181, 231, 1)'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(87, 181, 231, 0.2)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(87, 181, 231, 0.1)'
                                    }
                                ])
                            }
                        }
                    ]
                }
            ],
            textStyle: {
                color: '#1f2937'
            },
            grid: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        };
        chart.setOption(option);
        window.addEventListener('resize', function () {
            chart.resize();
        });
    }
});