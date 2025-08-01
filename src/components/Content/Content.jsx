import burger from '../../assets/burger.jpg'
import homecooked from '../../assets/cooked-meal.jpg'
import pasta from '../../assets/macandcheese.jpg'
import ramen from '../../assets/Ramen.jpg'
import pancakes from '../../assets/pancakes.jpg'
import salad from '../../assets/Salad.jpg'
import uniqueCuisine from '../../assets/dolores-preciado-Vu_fjfasu-4-unsplash.jpg'
import './Content.css'

console.log(burger)
function Content() {
    return (
        <>
            <section className="content-section">
                <div className="service-info">
                    <p className="what-we-offer">
                        Thousands of recipes. Easy organization. Your personal cooking companion.
                    </p>
                </div>
                <div className="image-container">

                    <div className="image-card">
                        <a href="/">
                            <img src={burger} className="round-content" alt="Burger" />
                            <div className="overlay"></div>
                            <p className="image-label">Juicy Burgers</p>
                        </a>
                    </div>
                    <div className="image-card">
                        <a href="/">
                            <img src={homecooked} className="round-content" alt="Burger" />
                            <div className="overlay"></div>
                            <p className="image-label">Comfort Homecooked Meals</p>
                        </a>
                    </div>
                    <div className="image-card">
                        <a href="/">
                            <img src={pasta} className="round-content" alt="Burger" />
                            <div className="overlay"></div>
                            <p className="image-label">Creamy Pasta Dishes</p>
                        </a>
                    </div>

                    <div className="image-card">
                        <a href="/">
                            <img src={ramen} className="round-content" alt="Burger" />
                            <div className="overlay"></div>
                            <p className="image-label">Soul-Warming Ramen Bowls</p>
                        </a>
                    </div>
                    <div className="image-card">
                        <a href="/">
                            <img src={pancakes} className="round-content" alt="Burger" />
                            <div className="overlay"></div>
                            <p className="image-label">Fluffy Pancake Breakfasts</p>
                        </a>
                    </div>
                    <div className="image-card">
                        <a href="/">
                            <img src={salad} className="round-content" alt="Burger" />
                            <div className="overlay"></div>
                            <p className="image-label">Fresh and Healthy Salads</p>
                        </a>
                    </div>
                    <div className="image-card">
                        <a href="/">
                            <img src={uniqueCuisine} className="round-content" alt="Burger" />
                            <div className="overlay"></div>
                            <p className="image-label">Explore Global Flavors</p>
                        </a>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Content;
