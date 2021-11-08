import CommitmentDesktop from '../assets/about/desktop/image-commitment.jpg';
import CommitmentTablet from '../assets/about/tablet/image-commitment.jpg';
import CommitmentMobile from '../assets/about/mobile/image-commitment.jpg';
import QualityDesktop from '../assets/about/desktop/image-quality.jpg';
import QualityTablet from '../assets/about/tablet/image-quality.jpg';
import QualityMobile from '../assets/about/mobile/image-quality.jpg';
import Quarters from '../components/Quarters';

const About = () => {
  return ( 
    <main className="main">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-content-title-about">About us</h1>
          <p className="hero-content-text-about">
          Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.
          </p>
        </div>
      </section>

      <section className="description">
        <div className="description-first">
          <picture className="description-first-img">
            <source media="(min-width: 1024px)" srcSet={CommitmentDesktop} />
            <source media="(min-width: 768px)" srcSet={CommitmentTablet} />
            <img className="description-first-img" src={CommitmentMobile} alt="Commitment demonstration" />
          </picture>
          <h2 className="description-title">Our commitment</h2>
          <p className="description-txt">
          We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.
          </p>
        </div>
        <div className="description-second">
          <h2 className="description-title">Uncompromising quality</h2>
          <p className="description-txt">
          Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.
          </p>
          <picture>
            <source media="(min-width: 1024px)" srcSet={QualityDesktop} />
            <source media="(min-width: 768px)" srcSet={QualityTablet} />
            <img className="description-second-img" src={QualityMobile} alt="Quality Coffee"  />
          </picture>
        </div>
      </section>

      <section className="quarter">
        <Quarters />
      </section>

    </main>
  );
}
 
export default About;