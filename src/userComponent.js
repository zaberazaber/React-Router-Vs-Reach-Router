import React from 'react';


//------------------- ❌  🅁🄴🄰🄲🄷   ❌   -------------------//
const Users = (props) => {
    return <div>
                <h1>Welcome To Users !</h1>
                <h2>{props.userId}</h2>
            </div>
}
//------------------- ❌  🅁🄴🄰🄲🄷   ❌   -------------------//


//------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   -------------------//
// class Users extends React.Component{
//   render(){
//     return (
//       <div>
//         <h3>ID: {this.props.match.params.userId}</h3>
//       </div>
//     );
//   }
// }
///------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   -------------------//

export default Users