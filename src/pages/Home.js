import { Link } from 'react-router-dom';
import Coffee from "../components/Coffee";
import Feature from "../components/Feature";
import Step from "../components/Step";

const Home = ({props }) => {

  return ( 
    <main className="main">
      <section className="home">
        <div className="hero-content">
          <h1 className="hero-content-title">Great coffee made simple.</h1>
          <p className="hero-content-text">
            Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
          </p>
          <button className="button">
            <Link to="/plan">
              Create your plan
            </Link>
          </button>
        </div>
      </section>

      <section className="collection">
        <h2 className="collection-title">our collection</h2>
        <div className="collection-container">
          <Coffee />
        </div>
      </section>

      <section className="choose">
        <h3 className="choose-title">Why choose us?</h3>
        <p className="choose-txt">
          A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.
        </p>
        <div className="choose-container">
          <Feature />          
        </div>
      </section>
      
      <section className="step">
        <h3 className="step-title">How it works</h3>
        <div className="step-process"></div>
        <div className="step-container">
          <Step />
        </div>
        <Link to="/plan">
          <button className="step-button button">Create your plan</button>
        </Link>
      </section>
    </main>
  );
}
 
export default Home;