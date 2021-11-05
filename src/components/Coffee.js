import {v4 as uuidv4} from 'uuid';
import Espresso from '../assets/home/desktop/image-gran-espresso.png';
import Planalto from '../assets/home/desktop/image-planalto.png';
import Piccollo from '../assets/home/desktop/image-piccollo.png';
import Danche from '../assets/home/desktop/image-danche.png';

const Coffee = () => {
  
  const coffees = [
    {
      img: Espresso,
      name: 'Gran Espresso',
      text: 'Light and flavorful blend with cocoa and black pepper for an intense experience'
    },
    {
      img: Planalto,
      name: 'Planalto',
      text: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts'
    },
    {
      img: Piccollo,
      name: 'Piccollo',
      text: 'Mild and smooth blend featuring notes of toasted almond and dried cherry '
    },
    {
      img: Danche,
      name: 'Danche',
      text: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes'
    },
  ];

  return ( 
    coffees.map(coffee => {
      return (
        <div className="collection-content" key={uuidv4()}>
          <img className="collection-content-img" src={coffee.img} alt={coffee.name} />
          <h4 className="collection-content-title">{coffee.name}</h4>
          <p className="collection-content-p">{coffee.text}</p>
        </div>
      )
    })
  );
};
 
export default Coffee;