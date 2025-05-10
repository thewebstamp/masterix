import './testimonial.css';
import { Images } from '../../assets/images';
import { useRef, useEffect } from 'react';

function Testimonial() {
    const testimonial = [
        {
            name: 'SARAH L',
            address: 'Clearfield, UT',
            review: "From framing to HVAC, every detail was handled with professionalism. The 3D design helped us visualize everything, and the result exceeded expectations. Highly recommend this team"
        },
        {
            name: 'JAMES R',
            address: 'Aspen, CO',
            review: 'Our full bathroom remodel was done in 3 days—clean, efficient, and built right. The fact that they’re Schluter® Certified gave me total peace of mind'
        },
        {
            name: 'EMILY T, REALTOR',
            address: 'Utah County',
            review: "They’re dependable, quick, and their work adds real value to my listings. Whether it's tile work, drywall, or finishing touches, Masterix always delivers"
        }
    ];

    const testimonialB = useRef();

    function slideUp() {
        if (window.location.pathname == "/") {
            if (window.innerHeight * 0.9 >= testimonialB.current.getBoundingClientRect().top) {
                testimonialB.current.classList.add("slide-up");
            } else {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", slideUp);

        return () => {
            if (window.location.pathname == "/") {
                testimonialB.current.classList.remove("slide-up");
            }
        }
    }, []);

    return (
        <div className="testimonial-comp">
            <div className="t-top">
                <div className="t-screen"></div>
                <img src={Images.heroImg3} alt="" />
            </div>

            <div className="t-base" ref={testimonialB}>
                <div className="t-headline">💬 WHAT OUR CLIENTS SAY</div>
                <h2>Trusted by Homeowners. Recommended by Professionals</h2>
                <div className="testimonial-wrap">
                    {testimonial.map((review, i) => (
                        <div className="t-reviews" key={i}>
                            <div className="review">
                                <div className="big-circle"></div>
                                <div className="small-circle"></div>
                                <p>{review.review}</p>
                            </div>
                            <p className='a'>{review.name}</p>
                            <p className='t-address'>{review.address}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="base-rev">
                {/* <a className='facebook-review' href="https://web.facebook.com/profile.php?id=61555744794312&sk=reviews" target='_blank'><img src={Images.facebookReviews} alt="" /></a> */}
            </div>
        </div>
    )
}

export default Testimonial;