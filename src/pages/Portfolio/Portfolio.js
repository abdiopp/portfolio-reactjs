import React from 'react'
import folio1 from '../../assets/img/folio-1.png'
import folio2 from '../../assets/img/folio-2.png'

export default function Portfolio() {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://moonriseuae.com/" className="portfolio-card">
                            <img src={folio1} className="portfolio-card-img"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Development</h4>
                                    <p className="font-weight-normal">Category: Full Stack Web Application with Google Firebase</p>
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <a href="https://myeventapp-e6325.web.app/" className="portfolio-card">
                            <img className="portfolio-card-img img-responsive rounded" src={folio2}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h4>Web Development</h4>
                                    <p className="font-weight-normal">Category: Event app Using Google Firebase</p>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <p className="section-subtitle fs-5 mt-5">"Due to the client's policy. I can't show all of the projects that I've done."</p>
            </div>
        </section>
    )
}