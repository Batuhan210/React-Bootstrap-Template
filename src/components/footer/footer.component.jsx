import './footer.style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Get in Touch</h5>
                        <p>Address: 123 Main St, Anytown, USA</p>
                        <p>Phone: 555-555-5555</p>
                        <p>Email: [info@example.com](mailto:info@example.com)</p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                &copy; 2024 Example Company. All rights reserved.
            </div>
        </footer>
    );
};
export default Footer;