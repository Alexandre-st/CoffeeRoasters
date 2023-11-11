import { Link } from "react-router-dom";
import coffeeBean from "../assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "../assets/home/desktop/icon-gift.svg";
import truckIcon from "../assets/home/desktop/icon-truck.svg";
import heroDesktop from "../assets/home/desktop/image-hero-coffeepress.jpg";
import heroMobile from "../assets/home/mobile/image-hero-coffeepress.jpg";
import heroTablet from "../assets/home/tablet/image-hero-coffeepress.jpg";
import Coffee from "../components/Coffee";
import Working from "../components/Working";

const Homepage = () => {
  return (
    <main className="home container">
      <section className="hero">
        <picture className="hero-img">
          <source srcSet={heroDesktop} media="(min-width: 1024px)" />
          <source srcSet={heroTablet} media="(min-width: 768px)" />
          <img src={heroMobile} alt="Great coffee made simple" />
        </picture>
        <div className="hero-content">
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="/">Create your plan</Link>
        </div>
      </section>
      <section className="collection">
        <h2>our collection</h2>
        <Coffee />
      </section>
      <section className="selection">
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div className="selection-content">
          <div className="selection-content-child">
            <img src={coffeeBean} alt="Best quality of coffee beans" />
            <h3>Best quality</h3>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div className="selection-content-child">
            <img src={giftIcon} alt="Exclusive benefits" />
            <h3>Exclusive benefits</h3>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
          <div className="selection-content-child">
            <img src={truckIcon} alt="Free shipping" />
            <h3>Free shipping</h3>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </section>
      <section className="working">
        <h2>How it works</h2>
        <Working />
        <Link to="/">Create your plan</Link>
      </section>
    </main>
  );
};

export default Homepage;
