import React from 'react'

export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-md-6">
                        <p className="mb-0">Copyright {year}
                            &copy; All rights reserved
                        </p>
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-block">
                        <div className="social-links">
                            <a href="https://bit.ly/3mHjrl3" target='_blank' rel='noreferrer' className="link mx-1"><i className="bi bi-facebook"></i></a>
                            <a href="mailto:ginnieabdullah007@gmail.com" className="link mx-1"><i className="bi bi-envelope"></i></a>
                            <a href="https://wa.me/923329777119" className="link mx-1"><i className="bi bi-whatsapp"></i></a>
                            <a href="https://bit.ly/3mFo67i" target='_blank' rel='noreferrer' className="link mx-1"><i className="bi bi-instagram"></i></a>
                            <a href="https://bit.ly/3Lbipbf" target='_blank' rel='noreferrer' className="link mx-1"><i className="bi bi-linkedin"></i></a>
                            <a href="https://bit.ly/3Fb9ZNA" target='_blank' rel='noreferrer' className="link mx-1"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
