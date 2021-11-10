import { v4 as uuidv4 } from 'uuid';

const Step = () => {
  
  const steps = [
    {
      number: '01',
      title: 'Pick your coffee',
      text: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.'
    },
    {
      number: '02',
      title: 'Choose the frequency',
      text: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.'
    },
    {
      number: '03',
      title: 'Receive and enjoy!',
      text: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.'
    }
  ];
  
  return ( 
    steps.map(step => {
      return (
        <div className="step-content" key={uuidv4()}>
          <span className="step-dot"></span>
          <h5 className="step-content-number">{step.number}</h5>
          <h3 className="step-content-title">{step.title}</h3>
          <p className="step-content-txt">{step.text}</p>
        </div>
      )
    })
  );
};

export default Step;
