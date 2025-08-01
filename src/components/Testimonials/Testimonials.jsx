import firstTestimonial from '../../assets/testimonials/Testimonial-1.jpg'
import secondTestimonial from '../../assets/testimonials/Testimonial-2.jpg'
import thirdTestimonial from '../../assets/testimonials/Testimonial-3.jpg'
import fourthTestimonial from '../../assets/testimonials/Testimonial-4.jpg'
import fifthTestimonial from '../../assets/testimonials/Testimonial-5.jpg'

import './Testimonials.css'


const testimonials = [
    {
        id: 1,
        name: "Macy",
        image: firstTestimonial,
        description:
            "As a nutritionist, I’ve recommended countless food planning tools, but this recipe app stands out. The clean design and easy categorization help my clients stick to their meal plans. A must-have for anyone serious about healthy eating.",
        reviewStars: 5
    },
    {
        id: 2,
        name: "John",
        image: secondTestimonial,
        description:
            "Yo, I used to burn toast. Now I’m making homemade pasta and lemon garlic chicken. This app makes it stupid-easy to follow recipes—even for a guy like me who used to think 'sauté' was a dance move.",
        reviewStars: 4
    },
    {
        id: 3,
        name: "Amina",
        image: thirdTestimonial,
        description:
            "This app saved dinner—literally. I had 20 minutes, random stuff in the fridge, and no clue what to cook. Found a 15-minute recipe for spicy noodles, and now my roommate thinks I’m a gourmet chef. I’ll take the win.",
        reviewStars: 5
    },
    {
        id: 4,
        name: "Thabo",
        image: fourthTestimonial,
        description:
            "I used this app to prep meals for the week, and for once I didn't eat takeout 5 nights in a row. The grocery list feature alone deserves a round of applause!",
        reviewStars: 4
    },
    {
        id: 5,
        name: "Lerato",
        image: fifthTestimonial,
        description:
            "Not only does this recipe app help me try new dishes, but it also lets me save my family recipes. Now my gran’s legendary chakalaka lives on—digitally!",
        reviewStars: 5
    }
];


function Testimonials() {
    return (
        <>
            <section className='testimonial-section'>
                <h3>Testimonials</h3>
                <div className="card-container">
                    {
                        testimonials.map((testimonial) => {
                            return (
                                <div className="card" key={testimonial.id}>
                                    <div className='top-section'>
                                        <h4 className="testimonee-name">{testimonial.name}</h4>
                                        <img src={testimonial.image} width={200} height={200} alt={testimonial.name + "image"} />
                                        <div>
                                            {"⭐".repeat(testimonial.reviewStars)}
                                        </div>
                                    </div>
                                    <div className='bottom-section'>
                                        <p>{testimonial.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Testimonials;
