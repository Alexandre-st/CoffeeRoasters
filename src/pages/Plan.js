import Composition from "../components/Composition";
import StepPlan from "../components/StepPlan";

const Plan = () => {
  return ( 
    <main>
      <div className="main">
        <section className="plan">
          <div className="hero-content">
            <h1 className="hero-content-title">Create a plan</h1>
            <p className="hero-content-text">
            Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.
            </p>
          </div>
        </section>
      </div>

      <section className="step-plan">
        <div className="step-plan-process"></div>
        <div className="step-plan-container">
          <StepPlan/>
        </div>
      </section>
    
      <div className="main">
        <Composition />
          <div className="dropdown">

          </div>
      </div>
    </main>
  );
}
 
export default Plan;