

import BoardSection from "./components/BoardSection";
import Homepagepricing from "./components/Homepagepricing";
import HomepageSc2 from "./components/homepageSc2";

import HomepageSec1 from "./components/homepageSec1";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";



export default function Home() {
  return(
    
      <div>
      <HomepageSec1 />
      <HomepageSc2 />
      <Homepagepricing />
      <StatsSection />
      <BoardSection />
      <Testimonials />
      
      </div>

    
  )
    
}
