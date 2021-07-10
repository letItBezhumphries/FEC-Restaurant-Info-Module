import React, { useState } from "react";
import Tabs from "./tabs";

const restaurantNavbar = () => {  
  return (
    <Tabs>
      <div label="Overview" href="#overview" eventKey="1">Overview</div>
      <div label="Photos" href="#photos" eventKey="2">Photos</div>
      <div label="Popular dishes" href="#popular" eventKey="3">Popular dishes</div>
      <div label="Menu" href="#menu" eventKey="4">Menu</div>
      <div label="Reviews" href="#reviews" eventKey="5">Reviews</div>   
    </Tabs>
  )
}

export default restaurantNavbar;