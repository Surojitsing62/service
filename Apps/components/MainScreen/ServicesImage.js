import elctornics from '../../Images/Main_Screen_Image/electrician.png';
import plumbers from '../../Images/Main_Screen_Image/plumber.png';
import saw from '../../Images/Main_Screen_Image/carpenter.png';
import painter from '../../Images/Main_Screen_Image/painter.png';

let serviceimagedata;
export default serviceimagedata = [
  {
    id: 1,
    imgsrc: plumbers,
    title: 'Plumbers',
    url: 'PlumberStack',
  },
  {
    id: 2,
    imgsrc: elctornics,
    title: 'Electronics',
    url: 'ElectronicStack',
  },
  {
    id: 3,
    imgsrc: saw,
    title: 'Carpenters',
    url: 'CarpenterStack',
  },
  {
    id: 4,
    imgsrc: painter,
    title: 'Painter',
    url: 'CleaningStack',
  },
];
