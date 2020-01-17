import React from 'react'
import ReactDOM from 'react-dom'
import {
    useParams,
    useLocation
} from 'react-router-dom'

//------------------- ❌  🅁🄴🄰🄲🄷   ❌   -------------------//
const Fusion = (props) => {
    return <div>useParams Implementation
      <p>You have tried path="/blog/:paramValue"</p>
      <div>the paramValue is <span style={{color: "red"}}>{props.paramValue}</span></div>
  </div>
}
//------------------- ❌  🅁🄴🄰🄲🄷   ❌   -------------------//


//------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   -------------------//
// function Fusion({ match }) {
//   let { paramValue } = match.params
//   return <div>useParams Implementation
//       <p>You have tried path="/blog/:paramValue"</p>
//       <p> try<span> path="/posts/:paramValue"</span> instead</p>
//       <div>the paramValue is <span style={{color: "red"}}>{paramValue}</span></div>
//   </div>
// }

// using useParams
// function Fusion() {
//     let { paramValue } = useParams();
//     let location = useLocation();
//     return <div>useParams Implementation
//          <p>You have tried path="/blog/:paramValue"</p>
//         <p> try<span> path="/posts/:paramValue"</span> instead</p>
//         <div>the paramValue is <span style={{ color: "red" }}>{paramValue}</span></div>
//         <div>The location is <span style={{ color: "red" }}>{location.pathname}</span></div>
//     </div>
// }
//------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   -------------------//

export default Fusion;

