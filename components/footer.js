class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background-color: #0F172A;
                    color: white;
                    padding: 3rem 0;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .footer-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: white;
                    margin-bottom: 1rem;
                }
                
                .footer-logo-icon {
                    color: #3B82F6;
                }
                
                .footer-description {
                    color: #94A3B8;
                    margin-bottom: 1rem;
                }
                
                .footer-heading {
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: white;
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                
                .footer-link {
                    color: #94A3B8;
                    text-decoration: none;
                    transition: color 0.2s;
                }
                
                .footer-link:hover {
                    color: white;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background-color: rgba(255, 255, 255, 0.05);
                    color: white;
                    transition: background-color 0.2s;
                }
                
                .social-link:hover {
                    background-color: #3B82F6;
                }
                
                .footer-bottom {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 2rem;
                    text-align: center;
                    color: #94A3B8;
                }
                
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="footer-container">
                <div class="footer-grid">
                    <div>
                        <div class="footer-logo">
                            <i data-feather="zap" class="footer-logo-icon"></i>
                            Prodigy Tech
                        </div>
                        <p class="footer-description">
                            Empowering businesses and individuals with innovative digital solutions.
                        </p>
                        <div class="social-links">
                            <a href="#" class="social-link">
                                <i data-feather="facebook"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="twitter"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="linkedin"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="instagram"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Services</h3>
                        <div class="footer-links">
                            <a href="services.html" class="footer-link">Web Development</a>
                            <a href="services.html" class="footer-link">Digital Marketing</a>
                            <a href="services.html" class="footer-link">Creative Services</a>
                            <a href="services.html" class="footer-link">Business Setup</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Company</h3>
                        <div class="footer-links">
                            <a href="about.html" class="footer-link">About Us</a>
                            <a href="portfolio.html" class="footer-link">Portfolio</a>
                            <a href="contact.html" class="footer-link">Contact</a>
                            <a href="#" class="footer-link">Careers</a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="footer-heading">Contact</h3>
                        <div class="footer-links">
                            <a href="#" class="footer-link">Lagos, Nigeria</a>
                            <a href="tel:+2348109881237" class="footer-link">+234 810 988 1237</a>
                            <a href="mailto:hello@prodigytechdigital.com" class="footer-link">hello@prodigytechdigital.com</a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>© ${new Date().getFullYear()} Prodigy Tech & Digital Services | Empowering Digital Growth</p>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);