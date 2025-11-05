class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: sticky;
                    top: 0;
                    z-index: 50;
                    background-color: rgba(30, 41, 59, 0.9);
                    backdrop-filter: blur(8px);
                }
                
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: white;
                    text-decoration: none;
                }
                
                .logo-icon {
                    color: #3B82F6;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .nav-link {
                    color: rgba(255, 255, 255, 0.8);
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.2s;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: white;
                }
                
                .nav-link.active {
                    color: white;
                }
                
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #3B82F6;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background-color: rgba(30, 41, 59, 0.95);
                        padding: 1rem 2rem;
                    }
                    
                    .nav-links.open {
                        display: flex;
                    }
                    
                    .nav-link {
                        padding: 0.5rem 0;
                    }
                }
            </style>
            <nav>
                <a href="index.html" class="logo">
                    <i data-feather="zap" class="logo-icon"></i>
                    Prodigy Tech
                </a>
                
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="nav-links">
                    <a href="index.html" class="nav-link active">Home</a>
                    <a href="services.html" class="nav-link">Services</a>
                    <a href="about.html" class="nav-link">About Us</a>
                    <a href="portfolio.html" class="nav-link">Portfolio</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                </div>
            </nav>
        `;
        
        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if(navLinks.classList.contains('open')) {
                feather.replace();
                icon.setAttribute('data-feather', 'x');
            } else {
                feather.replace();
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);