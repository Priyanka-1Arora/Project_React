import React from "react";

export default function Navbar() {
    const img_style={
        height:"75px"
    }
  return (
    <>
    <nav className="navbar navbar-light" style={{backgroundColor:"lightblue"}}>
  <div className="container text-center">
    <a className="navbar-brand" href="#">
      <img src="https://www.brandbucket.com/sites/default/files/logo_uploads/455110/large_expressweather.png" alt="" style={img_style}/>
    </a>
  </div>
</nav>
    </>
  );
}
