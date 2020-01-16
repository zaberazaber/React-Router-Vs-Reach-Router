import React from 'react';

const Invoice = (props) => {
    console.log(props)
    return <div>
                <h1>The Value Of The Nested Routes</h1>
                <h2>{props.invoiceId}</h2>
            </div>
}

  export default Invoice;