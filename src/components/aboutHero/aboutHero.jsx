import './aboutHero.css';
import { Images } from '../../assets/images.js';

function AboutHero() {
    return (
        <div className="about-hero">
            <div className='ah-top'>
                <div className='img-wrap'>
                    <img className='ah-img-1' src={Images.p4} />
                    <img className='ah-img-2' src={Images.p6} />
                    <img className='ah-img-height' src={Images.p4} />
                </div>
            </div>
            
            <div className='ah-base'>
                <div className='ah-headline'>ABOUT US</div>
                <h2>Masterix Handyman Services – Built Righte</h2>
                <p>Founded with the mission to simplify home improvement, Masterix Handyman Services LLC was built from the ground up by professionals who understand that time, budget, and trust are non-negotiable when it comes to your home. Whether it’s a quick repair, a full basement remodel, or emergency restoration, we approach every project with a “do it once, do it right” philosophy <br />Based in Clearfield, Utah, we believe your home should be more than just a place to live — it should reflect your lifestyle, support your daily needs, and give you peace of mind</p>
            </div>
        </div>
    )
}

export default AboutHero;