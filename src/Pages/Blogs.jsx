import Lately from "../components/Blog/blogy/cards/lately/Lately"
import Stories from "../components/Blog/blogy/cards/stories/Stories"
import Hero from "../components/Blog/blogy/hero/Hero"
import Recommended from "../components/Blog/blogy/cards/recommended/Recommended" 

function Blogs() {
  return (
    <div>
      <Hero/>
      <Stories/>
      <Lately/>
      <Recommended/>
    </div>
  )
}

export default Blogs

