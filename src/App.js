
import React, { Component } from "react";
import PageOne from "./page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CpapMachines from "./page/CpapMachines";
import Navbar from "./component/Navbar";
import SecNav from "./component/SecNav";
import Inbox from "./component/Inbox";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <SecNav />
          <div className="lg:hidden md:hidden py-2 grid justify-center items-center left-0 right-0 absolute">
            <Inbox />
          </div>

          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/cpap_machine" element={<CpapMachines />} />
          </Routes>
        </BrowserRouter>



      </div>
    )
  }
}

export default App