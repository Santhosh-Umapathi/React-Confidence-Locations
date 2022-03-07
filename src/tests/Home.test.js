import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//Component
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Home Page", () => {
  it("should render my Home Page", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
});
