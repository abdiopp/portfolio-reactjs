import React from 'react'
import man from '../../assets/img/man.png'

export default function About() {
    return (
        <section className="section pt-0" id="about">
            <div className="container text-center">
                <div className="row">
                    <div className="about">
                        <div className="about-img-holder ">
                            <img src={man} alt="About" className='about-img' />
                        </div>
                        <div className="about-caption  ">
                            <p className="section-subtitle">Who Am I ?</p>
                            <h2 className="section-title mb-3">About Me</h2>
                            <p>
                                I’m a Web developer adept at contributing to highly collaborative work environment and finding solutions.  Proven experience developing consumer-focused websites using HTML, CSS, ReactJS, JavaScript and GoogleFirebase.  Good knowledge of the best practices for web design, user experience, and speed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
