import React from 'react'
import Home from '../component/Home'
import ExampleUseEffect from '../component/ExampleUseEffect'
import FormHandling from '../component/FormHandling'
import TwoWayBonding from '../component/TwoWayBonding'
import LocalStorage from '../component/LocalStorage'
import ApiCalling from '../component/ApiCalling'
import UseEffectExamole from '../component/UseEffectExamole'
import RoutingExample from '../component/RoutingExample'
import DynamicRouting from '../component/DynamicRouting'
import RealDynamicRouting from '../component/RealDynamicRouting'
import PropsEx from '../component/PropsEx'
import UseNavigate from '../component/UseNavigate'
import Home1 from '../Pages/Home1'
import About1 from '../Pages/About1'
import Contatc1 from '../Pages/Contatc1'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
 
  return (
 <>

<div>
{/* <Home/> */}
{/* <ExampleUseEffect/> */}
{/* <FormHandling/> */}
{/* <TwoWayBonding/> */}
{/* <LocalStorage/> */}
{/* <ApiCalling/> */}
{/* <UseEffectExamole/> */}

{/* <RoutingExample/> */}


{/* <DynamicRouting/> */}
{/* <RealDynamicRouting/> */}


{/* <PropsEx name='jaya' age='12'/>
 */}


    
<UseNavigate/>

 <Routes>
        <Route path='/about' element={<About1/>}/>
      </Routes>

</div>

 </>


  )
}

export default App
