import './hero.css';
import { Images } from '../../assets/images';

function Hero() {
    return (
        <div className="hero-wrap">
            <div className="hero-container">
                <div className="hero-background">
                    <img src={Images.heroBackground} alt="" />
                </div>
                <div className="hero">
                    <div className="hero-top">
                        <div className="small-headline">MASTERIX HANDYMAN SERVICES</div>
                        <h1>Trusted Handyman Services in Utah — Fast. Skilled. Guaranteed</h1>
                        <p><span>No Need For Multiple Contractors</span> <br />From emergency repairs to full remodels, Masterix delivers peace of mind with licensed, insured, and certified experts you can trust</p>
                        <div className="hero-btn">
                            <a id='hero-f-btn' className='hero-f-btn' href="#portfolio">View Portfolio</a>
                            <a id='hero-s-btn' className='hero-s-btn' href="#services">See Services</a>
                        </div>
                    </div>

                    <div className="hero-base">
                        <img src={Images.heroImg1} alt="" />
                        <img src={Images.heroImg2} alt="" />
                        <img src={Images.heroImg3} alt="" />
                        <img src={Images.heroImg4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;