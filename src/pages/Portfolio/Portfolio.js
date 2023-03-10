import React from 'react'

export default function Portfolio() {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Did ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://moonriseuae.com/" className="portfolio-card">
                            <img src='https://res.cloudinary.com/dtqdflngh/image/upload/v1678393694/folio-1_qvqit7.png' className="portfolio-card-img"
                                alt="Moonrise UAE" />
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
                            <img className="portfolio-card-img img-responsive rounded" src='https://res.cloudinary.com/dtqdflngh/image/upload/v1678393692/folio-2_znccwj.png'
                                alt="Event App" />
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
