import React, { useEffect, useState } from 'react'

export default function Hero() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250);
    // eslint-disable-next-line
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "Google Firebase Professional"];

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
        // eslint-disable-next-line
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(200);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am Abdullah Murtaza</span>
                </h1>
                <p className='header-subtitle'> <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Web Developer", "Web Designer", "Google Firebase Professional" ]'><span className="wrap">{text}</span><span className='text-dark'>|</span></span></p>
                {/* <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am Abdullah Murtaza</span>
                </h1>
                <p className="header-subtitle">FULL STACK WEB DEVELOPER</p> */}

                <a href='https://wa.me/923329777119' target='_blank' rel='noreferrer' className="btn btn-primary">Have a Project?</a>
            </div>
        </header>
    )
}
