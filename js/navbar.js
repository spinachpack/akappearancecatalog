// navbar.js - Creates and inserts the navbar and styles on all pages

document.addEventListener('DOMContentLoaded', function() {
    // Add the stylesheet to the head
    const style = document.createElement('style');
    style.textContent = `
        /* Navbar and common styles */
        :root {
            --dark-blue: #1E2A38;
            --medium-blue: #2C3E50;
            --accent: #3498DB;
            --secondary: #34495E;
            --text: #ECF0F1;
            --light-gray: #95A5A6;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
            max-width: 100%;
        }

        a {
            text-decoration: none;
        }

        html, body {
            overflow-x: hidden;
            width: 100%;
            position: relative;
        }

        body {
            background-color: var(--dark-blue);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        /* Header styles */
        header {
            background-color: var(--medium-blue);
            padding: 15px 0;
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
            width: 100%;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            text-decoration: none;
            color: var(--accent);
        }

        .logo img {
            height: 40px;
        }

        .logo span {
            font-size: 1.2rem;
            font-weight: bold;
            white-space: nowrap;
        }

        .header-right {
            display: flex;
            align-items: center;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 20px;
        }

        nav a {
            text-decoration: none;
            color: var(--text);
            font-weight: 500;
            padding: 5px 10px;
            border-radius: 5px;
            transition: color 0.3s;
        }

        nav a:hover {
            color: var(--accent);
        }

        .mobile-toggle {
            display: none;
            font-size: 1.5rem;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text);
        }

        /* Nav search styles */
        .nav-search {
            position: relative;
            display: flex;
            margin-left: 20px;
        }

        .nav-search input {
            padding: 8px 15px;
            border: none;
            border-radius: 25px 0 0 25px;
            background-color: #ECF0F1;
            color: #2C3E50;
            width: 200px;
        }

        .nav-search input:focus {
            outline: none;
        }

        .nav-search button {
            padding: 8px 15px;
            background-color: var(--accent);
            color: var(--text);
            border: none;
            border-radius: 0 25px 25px 0;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .nav-search button:hover {
            background-color: #2980B9;
        }

        /* Responsive styles */
        @media (max-width: 900px) {
            .nav-search input {
                width: 150px;
            }
        }

        @media (max-width: 768px) {
            .mobile-toggle {
                display: block;
            }

            .header-right {
                position: absolute;
                top: 60px;
                left: 0;
                right: 0;
                background-color: var(--medium-blue);
                flex-direction: column;
                padding: 0;
                height: 0;
                overflow: hidden;
                transition: height 0.3s ease;
                z-index: 99;
                width: 100%;
            }

            .header-right.active {
                height: auto;
                padding: 20px;
                box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
            }

            nav ul {
                flex-direction: column;
                width: 100%;
                gap: 10px;
                align-items: center;
                text-align: center;
            }
            
            nav li {
                width: 100%;
                text-align: center;
            }
            
            nav a {
                display: block;
                padding: 10px;
                width: 100%;
            }

            .nav-search {
                width: 100%;
                margin-top: 15px;
                margin-left: 0;
            }
        }

        @media (max-width: 480px) {
            .container {
                padding: 0 10px;
            }

            .logo span {
                font-size: 1rem;
            }

            .logo img {
                height: 30px;
            }
            
            .nav-search {
                flex-direction: column;
            }
            
            .nav-search input {
                width: 100%;
                border-radius: 25px;
                margin-bottom: 10px;
            }
            
            .nav-search button {
                width: 100%;
                border-radius: 25px;
            }
        }
    `;
    document.head.appendChild(style);

    // Create navbar HTML
    const navbar = document.createElement('header');
    navbar.innerHTML = `
        <div class="container header-content">
            <a href="index.html" class="logo">
                <img src="images/logo.png" alt="Arknights Logo">
                <span>Character Appearance Tracker</span>
            </a>
            <button class="mobile-toggle">☰</button>
            <div class="header-right">
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="storylist.html">Stories</a></li>
                        <li><a href="operatorlist.html">Characters</a></li>
                    </ul>
                </nav>
                <div class="nav-search">
                    <input type="text" placeholder="Search..." id="navSearch">
                    <button>Search</button>
                </div>
            </div>
        </div>
    `;

    // Insert navbar at the beginning of the body
    const firstElement = document.body.firstChild;
    document.body.insertBefore(navbar, firstElement);

    // Set up mobile toggle functionality
    const mobileToggle = navbar.querySelector('.mobile-toggle');
    const headerRight = navbar.querySelector('.header-right');
    
    mobileToggle.addEventListener('click', () => {
        headerRight.classList.toggle('active');
    });

    // Highlight current page in navbar
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = navbar.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (currentPage === linkHref || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.style.color = 'var(--accent)';
        }
    });

    // Initialize search functionality if search.js is loaded
    if (typeof initializeSearchElements === 'function') {
        setTimeout(initializeSearchElements, 100);
    }

    document.body.classList.add('loaded');
});