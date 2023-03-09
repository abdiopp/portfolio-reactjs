import React from 'react'
import icon1 from '../../assets/img/chat-square-quote.svg'
import icon2 from '../../assets/img/display.svg'
import icon3 from '../../assets/img/brush.svg'
import icon4 from '../../assets/img/code-slash.svg'

export default function Services() {
    return (
        <section className="section" id="service">
            <div className="container text-center">
                <p className="section-subtitle">What I Do ?</p>
                <h6 className="section-title mb-6">Service</h6>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={icon1}
                                    alt='Consult'
                                    className="icon" />
                                <h6 className="title">CONSULTATION</h6>
                                <p className="subtitle">Contact me for a free consultation to start your IT business or if you need any help regarding software solutions. Feel free to contact me.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={icon2}
                                    alt='Web Design'
                                    className="icon" />
                                <h6 className="title">Web design</h6>
                                <p className="subtitle">I've worked on numerous web applications in the last 2 years. I've worked on React, React Native, Bootstrap, Firebase and many more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={icon3}
                                    alt='Responsive Design'
                                    className="icon" />
                                <h6 className="title">RESPONSIVE DESIGN</h6>
                                <p className="subtitle">I design responsive websites that adapt to the size of mobile, tablet or desktop a user is using to view it.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="service-card">
                            <div className="body">
                                <img src={icon4}
                                    alt='Web Development'
                                    className="icon" />
                                <h6 className="title">WEB DEVELOPMENT</h6>
                                <p className="subtitle">My commitment is to provide very contemporary solutions to website development. So if you need a perfect team, give me a call.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
