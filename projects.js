const projectsData = {
    'vehicle-rental': {
        title: 'Smart Vehicle Rental System 🚗',
        role: 'Full-Stack Developer',
        description: 'A comprehensive vehicle rental management system built with Java and Object-Oriented Programming principles. This project demonstrates advanced OOP concepts including inheritance, polymorphism, and encapsulation.',
        longDescription: `This full-stack vehicle rental system provides a complete solution for managing vehicle rentals. 
        The system allows users to browse available vehicles, make reservations, and manage their bookings. 
        Admin users can add new vehicles, update availability, and track all rental transactions.
        
        The project showcases my understanding of software architecture, database design, and user interface development. 
        It implements design patterns like MVC (Model-View-Controller) and uses a relational database for data persistence.`,
        technologies: ['Java', 'OOP', 'SQL', 'JavaFX', 'JDBC', 'MySQL'],
        features: [
            'User authentication and authorization system',
            'Browse available vehicles with advanced filtering',
            'Real-time booking and reservation management',
            'Admin dashboard for vehicle management',
            'Payment calculation and invoice generation',
            'Rental history and customer management',
            'Database-driven architecture with CRUD operations'
        ],
        challenges: 'Implementing a robust booking system that prevents double bookings while maintaining data integrity across concurrent users.',
        learned: 'Advanced OOP design patterns, database transaction management, and building scalable Java applications.',
        image: 'images/projects/vehicle-rental.png'
    },
    'calculator': {
        title: 'Advanced Scientific Calculator 🧮',
        role: 'Front-End Developer',
        description: 'A fully responsive scientific calculator with multiple operation modes built using HTML, CSS, and JavaScript. Features advanced mathematical functions and a beautiful user interface.',
        longDescription: `This scientific calculator provides a comprehensive set of mathematical operations including 
        basic arithmetic, trigonometric functions, logarithms, and exponential calculations. 
        
        The calculator features multiple modes (standard, scientific, programmer) and includes 
        memory functions, history tracking, and keyboard support for enhanced user experience.`,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Local Storage'],
        features: [
            'Basic arithmetic operations (+, -, ×, ÷)',
            'Scientific functions (sin, cos, tan, log, exp)',
            'Multiple operation modes (Standard, Scientific)',
            'Memory functions (M+, M-, MR, MC)',
            'Calculation history with local storage',
            'Keyboard input support',
            'Fully responsive design for all devices',
            'Dark/Light theme support'
        ],
        challenges: 'Handling complex expression parsing and ensuring accurate floating-point calculations while maintaining a smooth user experience.',
        learned: 'JavaScript algorithm implementation, responsive UI design, and handling complex user interactions.',
        image: 'images/projects/calculator.png'
    },
    
    'todo-manager': {
        title: 'Smart To-Do Task Manager ✅',
        role: 'Front-End Developer',
        description: 'A productivity-focused task management application with dark/light mode toggle, priority levels, and local storage persistence. Helps users organize their daily tasks efficiently.',
        longDescription: `The Smart To-Do Task Manager is a feature-rich productivity tool that helps users organize 
        their tasks and boost their efficiency. With an intuitive interface and powerful features, users can 
        easily create, organize, and track their daily tasks.
        
        The application uses local storage to persist data, ensuring tasks are saved even after closing 
        the browser. The toggle between light and dark modes provides comfortable viewing in any environment.`,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage', 'DOM Manipulation'],
        features: [
            'Create, edit, and delete tasks',
            'Priority levels (High, Medium, Low)',
            'Task categories and filtering',
            'Dark/Light mode toggle',
            'Local storage for data persistence',
            'Due date and reminder system',
            'Task completion tracking',
            'Search and filter functionality',
            'Drag-and-drop task reordering'
        ],
        challenges: 'Implementing smooth drag-and-drop functionality while maintaining data consistency in local storage.',
        learned: 'Local storage management, DOM manipulation, and creating interactive user interfaces with vanilla JavaScript.',
        image: 'images/projects/todo-manager.png'
    },
    'library-system': {
        title: 'Online Library Management System 📚',
        role: 'Database Designer',
        description: 'A comprehensive library management system with complete database architecture for managing books, members, and borrowing operations. Built with focus on data integrity and efficient queries.',
        longDescription: `This library management system provides a complete solution for managing library operations 
        including book cataloging, member management, and borrowing/returning processes. 
        
        The system features a well-designed relational database that ensures data integrity and supports 
        complex queries for reporting and analytics. It demonstrates proper database normalization and 
        implements various constraints to maintain data quality.`,
        technologies: ['Java', 'SQL', 'MySQL', 'JDBC', 'Database Design', 'ER Modeling'],
        features: [
            'Comprehensive book catalog management',
            'Member registration and management',
            'Book borrowing and returning system',
            'Fine calculation for overdue books',
            'Search functionality (by title, author, ISBN)',
            'Reservation system for unavailable books',
            'Admin dashboard with reports',
            'Transaction history tracking',
            'Database backup and recovery features'
        ],
        challenges: 'Designing a normalized database schema that efficiently handles complex relationships while maintaining query performance.',
        learned: 'Database normalization, SQL optimization, ER modeling, and implementing business logic in database constraints.',
        image: 'images/projects/library-system.png'
    },
    'motivation-app': {
        title: 'AI Motivation App (Motivation Plus) 💡',
        role: 'App Designer',
        description: 'A concept design for an AI-powered student motivation application that provides personalized study tips, motivational quotes, and productivity tracking to help students stay focused.',
        longDescription: `Motivation Plus is an innovative app concept designed to help students stay motivated and 
        focused on their academic goals. The app combines AI-powered recommendations with motivational content 
        to create a personalized experience for each user.
        
        The design emphasizes positive psychology principles and gamification elements to encourage 
        consistent study habits and academic success. Features include daily motivation, goal tracking, 
        and AI-generated study tips based on user behavior.`,
        technologies: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping', 'Design Systems'],
        features: [
            'Daily motivational quotes and affirmations',
            'AI-powered personalized study tips',
            'Goal setting and progress tracking',
            'Study session timer with breaks',
            'Achievement system and rewards',
            'Mood tracking and analytics',
            'Community challenges and leaderboards',
            'Customizable themes and notifications',
            'Integration with calendar and reminders'
        ],
        challenges: 'Creating an engaging design that motivates users without being overwhelming or distracting from their actual studies.',
        learned: 'User-centered design principles, creating motivational experiences, and designing for behavior change.',
        image: 'images/projects/motivation-app.png'
    },
    'weather-dashboard': {
        title: 'Weather Forecast Dashboard 🌤️',
        role: 'Web Developer',
        description: 'A clean and modern weather dashboard interface ready for API integration. Features 7-day forecasts, current conditions, and beautiful weather visualizations.',
        longDescription: `This weather dashboard provides a comprehensive view of weather conditions with a focus 
        on clean design and easy-to-read information. The interface is built to be responsive and works 
        seamlessly across all devices.
        
        The dashboard is structured to easily integrate with weather APIs like OpenWeatherMap, providing 
        real-time weather data, forecasts, and detailed meteorological information. The design uses 
        intuitive weather icons and color coding to make information quickly accessible.`,
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'Responsive Design', 'Chart.js'],
        features: [
            'Current weather conditions display',
            '7-day weather forecast',
            'Hourly temperature predictions',
            'Weather alerts and warnings',
            'Location search functionality',
            'Multiple location support',
            'Weather maps and radar',
            'Sunrise/sunset times',
            'Wind speed and humidity metrics',
            'Beautiful weather animations'
        ],
        challenges: 'Creating an interface that presents complex weather data in a simple, understandable way while maintaining visual appeal.',
        learned: 'API integration patterns, data visualization techniques, and creating weather-themed UI components.',
        image: 'images/projects/weather-dashboard.png'
    }
};

function viewProject(projectId) {
    window.location.href = `pages/projects/${projectId}.html`;
}

window.viewProject = viewProject;
