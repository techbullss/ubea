
import Section1 from "./aboutcomponents/section1";
import BoardSection from "./components/BoardSection";
import Homepagepricing from "./components/Homepagepricing";

import HomepageSec1 from "./components/homepageSec1";
import Testimonials from "./components/Testimonials";



export default function Home() {
  return(
    
      <div>
      <HomepageSec1 />
      <Section1 />
      <Homepagepricing />
      <BoardSection />
      <Testimonials />
      
      </div>

    
  )
    
}
