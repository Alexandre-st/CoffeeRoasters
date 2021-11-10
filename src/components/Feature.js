import {v4 as uuidv4} from 'uuid';
import Coffee from '../assets/home/desktop/icon-coffee-bean.svg';
import Gift from '../assets/home/desktop/icon-gift.svg';
import Truck from '../assets/home/desktop/icon-truck.svg';

const Feature = () => {

  const features = [
    {
      img: Coffee,
      name: 'Coffee',
      title: 'Best quality',
      text: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
    },
    {
      img: Gift,
      name: 'Gift',
      title: 'Exclusive benefits',
      text: 'Special offers and swag when you subscribe, including 30% off your first shipment.'
    },
    {
      img: Truck,
      name: 'Truck',
      title: 'Free shipping',
      text: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
    }
  ];

  return ( 
    features.map(feature => {
      return (
        <div className="choose-content" key={uuidv4()}>
          <img className="choose-content-img" src={feature.img} alt={feature.name} />
          <div className="choose-content-container">
            <h4 className="choose-content-title">{feature.title}</h4>
            <p className="choose-content-txt">{feature.text}</p>
          </div>
        </div>
      );
    })
  );
};
 
export default Feature;