
import HeroSection from "../components/Home/heroSetion/HeroSection";

import Slider from "../components/Home/Slider/Slider"
// import Moresec from '../components/Home/Moresec/Moresec';
// import Servicessec from '../components/Home/Servicessec/Servicessec';
// import Ourfeature from '../components/Home/Ourfeature/Ourfeature';
import EventsSection from '../components/Home/EventsSection/EventsSection';
import DonationCards from '../components/Home/DonationCards/DonationCards';
import Hopes from '../components/Home/Hopes/Hopes';
import Card from "../components/Home/card/Card";
function Homes() {
  return (
  <>
  
 <HeroSection/>
 <Hopes/>
  <Card/>
<Slider/>
{/* <Moresec/> */}
{/* <Servicessec/>
<Ourfeature/> */}
<EventsSection/>
<DonationCards/>
  </>
  )
}

export default Homes;
