//import React from 'react'

import AdminHeader from "./AdminHeader";
import Customerheader from "./Customerheader";
import NormalHeader from "./NormalHeader";

const RoleNav = () => {
    const user = JSON.parse(sessionStorage.getItem("active-customer"));
    const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  
    if (user !== null) {
      return <Customerheader />;
    } else if (admin !== null) {
      return <AdminHeader />;
    } else {
      return <NormalHeader />;
    }
  };
  
  export default RoleNav;
  