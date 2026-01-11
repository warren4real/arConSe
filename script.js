/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #4361ee;
    --secondary: #3a0ca3;
    --accent: #f72585;
    --light: #f8f9fa;
    --dark: #212529;
    --gray: #6c757d;
    --light-gray: #e9ecef;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark);
    background-color: var(--light);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Typography */
h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.2;
}

h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

p {
    margin-bottom: 1rem;
    color: var(--gray);
}

span {
    color: var(--primary);
}

/* Buttons */
.btn-primary, .btn-secondary, .btn-nav {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-secondary:hover {
    background: var(--primary);
    color: white;
}

.btn-nav {
    background: var(--accent);
    color: white;
    padding: 8px 20px;
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    box-shadow: var(--shadow);
    z-index: 1000;
    padding: 20px 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    text-decoration: none;
    color: var(--dark);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-menu a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: var(--transition);
}

.nav-menu a:hover {
    color: var(--primary);
}

.hamburger {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--dark);
}

/* Hero Section */
.hero {
    padding: 150px 0 100px;
    background: linear-gradient(135deg, #f5f7ff 0%, #e3e9ff 100%);
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.hero h1 span {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--gray);
}

.hero-btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.hero-image img {
    width: 100%;
    border-radius: 20px;
    box-shadow: var(--shadow);
    transform: perspective(1000px) rotateY(-10deg);
    transition: var(--transition);
}

.hero-image img:hover {
    transform: perspective(1000px) rotateY(0deg);
}

/* Services Section */
.services {
    padding: 100px 0;
    background: white;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-card {
    background: var(--light);
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
    border: 2px solid transparent;
}

.service-card:hover {
    transform: translateY(-10px);
    border-color: var(--primary);
    box-shadow: var(--shadow);
}

.service-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1rem;
}

/* About Section */
.about {
    padding: 100px 0;
    background: linear-gradient(135deg, #f5f7ff 0%, #e3e9ff 100%);
}

.about .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-list {
    list-style: none;
    margin: 2rem 0;
}

.about-list li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
}

.about-list i {
    color: var(--primary);
}

.about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.stat {
    text-align: center;
    padding: 2rem;
    background: white;
    border-radius: 10px;
    box-shadow: var(--shadow);
}

.stat h3 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

/* Testimonials */
.testimonials {
    padding: 100px 0;
    background: white;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    background: var(--light);
    padding: 2rem;
    border-radius: 10px;
    border-left: 4px solid var(--primary);
}

.testimonial-author {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
}

.testimonial-author h4 {
    color: var(--dark);
}

.testimonial-author p {
    color: var(--gray);
    font-size: 0.9rem;
}

/* Contact Section */
.contact {
    padding: 100px 0;
    background: linear-gradient(135deg, #f5f7ff 0%, #e3e9ff 100%);
}

.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    background: white;
    padding: 3rem;
    border-radius: 20px;
    box-shadow: var(--shadow);
}

.contact-details {
    margin-top: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-item i {
    font-size: 1.5rem;
    color: var(--primary);
    width: 40px;
}

/* Form Styles */
.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--dark);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid var(--light-gray);
    border-radius: 8px;
    font-size: 1rem;
    transition: var(--transition);
    font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
}

.checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
}

.checkbox input {
    width: auto;
}

#submitBtn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

#formMessage {
    margin-top: 1rem;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    display: none;
}

#formMessage.success {
    background: #d4edda;
    color: #155724;
    display: block;
}

#formMessage.error {
    background: #f8d7da;
    color: #721c24;
    display: block;
}

/* Footer */
.footer {
    background: var(--dark);
    color: white;
    padding: 50px 0 20px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.footer-section h3,
.footer-section h4 {
    color: white;
    margin-bottom: 1rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: #ccc;
    text-decoration: none;
    transition: var(--transition);
}

.footer-section a:hover {
    color: white;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: white;
    transition: var(--transition);
}

.social-links a:hover {
    background: var(--primary);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #ccc;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2000;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.modal-header h3 {
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 10px;
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--gray);
}

.modal-body {
    margin-bottom: 1.5rem;
}

.modal-footer {
    text-align: right;
}

/* Responsive Design */
@media (max-width: 992px) {
    h1 {
        font-size: 2.5rem;
    }
    
    h2 {
        font-size: 2rem;
    }
    
    .hero .container,
    .about .container,
    .contact-container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 2rem;
        box-shadow: var(--shadow);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .hamburger {
        display: block;
    }
    
    .hero-image img {
        transform: none;
    }
}

@media (max-width: 768px) {
    .about-stats {
        grid-template-columns: 1fr;
    }
    
    .hero-btns {
        flex-direction: column;
    }
    
    .contact-container {
        padding: 1.5rem;
    }
}

@media (max-width: 480px) {
    .hero {
        padding: 120px 0 60px;
    }
    
    .services,
    .about,
    .testimonials,
    .contact {
        padding: 60px 0;
    }
    
    .service-card,
    .stat,
    .testimonial-card {
        padding: 1.5rem;
    }
}
