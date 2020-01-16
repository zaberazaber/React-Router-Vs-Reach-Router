
  import React from "react";
  import { Link } from "@reach/router";
  import Invoice from './invoice';
  
  const Dashboard = () => {
    return <div>
      <h1>Dashboard For Nested Routes</h1>
        <p><Link to="invoices/123">Invoice 123</Link></p>
        <Link to="invoices/abc">Invoice ABC</Link>
        <Invoice />
    </div>
  }
  
  
  
export default Dashboard