import React from 'react';


//------------------- ❌  🅁🄴🄰🄲🄷   ❌   -------------------//
const Users = (props) => {
    console.log(props)
    return <div>
                <h1>Welcome To Reach Users !</h1>
                <h3>ID: {props.userId}</h3>
            </div>
}
//------------------- ❌  🅁🄴🄰🄲🄷   ❌   -------------------//


//------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   -------------------//
// class Users extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>Welcome To React Users !</h1>
//         <h3>ID: {this.props.match.params.userId}</h3>
//       </div>
//     );
//   }
// }
///------------------- ⭕ 【ＲＥＡＣＴ】 ⭕   -------------------//

export default Users