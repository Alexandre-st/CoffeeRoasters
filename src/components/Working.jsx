import { steps } from "../data/data";

const Working = () => {
  return (
    <div className="working-steps">
      {steps.map((step) => (
        <div className="working-steps-child" key={step.number}>
          <h4>{step.number}</h4>
          <h5>{step.title}</h5>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Working;
