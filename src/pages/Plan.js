import Composition from "../components/Composition";
import Step from "../components/Step";

const Plan = () => {
  return ( 
    <div className="main">
      <section className="hero-content">
        <h1 className="hero-content-title">Create a plan</h1>
        <p className="hero-content-text">
        Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.
        </p>
      </section>

    <section className="step">
      <Step />
    </section>
  
     <Composition />
      <div className="dropdown">

      </div>
    </div>
  );
}
 
export default Plan;