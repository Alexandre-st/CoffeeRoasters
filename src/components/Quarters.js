import {v4 as uuidv4} from 'uuid';
import Uk from '../assets/about/desktop/illustration-uk.svg';
import Canada from '../assets/about/desktop/illustration-canada.svg';
import Australia from '../assets/about/desktop/illustration-australia.svg';

const Quarters = () => {

  const quarters = [
    {
      img: Uk,
      name: 'United Kingdom',
      street: '68  Asfordby Rd',
      city: 'Alcaston',
      zip: 'SY6 1YA',
      number: '+44 1241 918425',
    },
    {
      img: Canada,
      name: 'Canada',
      street: '1528  Eglinton Avenue',
      city: 'Toronto',
      zip: 'Ontario M4P 1A6' ,
      number: '+1 416 485 2997',
    },
    {
      img: Australia,
      name: 'Australia',
      street: '36 Swanston Street',
      city: 'Kewell',
      zip: 'Victoria',
      number: '+61 4 9928 3629',
    },
  ];


  return ( 
    quarters.map(quarter => {
      return (
        <div className="quarter-content" key={uuidv4()}>
        <img src={quarter.img} alt={quarter.name} />
        <h4 className="quarter-content-title">{quarter.name}</h4>
          <ul className="quarter-content-list">
            <li>{quarter.street}</li>
            <li>{quarter.city}</li>
            <li>{quarter.zip}</li>
            <li>{quarter.number}</li>
          </ul>
        </div>
      )
    })
  );
}
 
export default Quarters;