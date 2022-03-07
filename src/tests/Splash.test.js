import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//Component
import Splash from "../pages/Splash";
import { BrowserRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Splash Page", () => {
  it("should render my Splash Page", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Splash />
      </BrowserRouter>
    );
  });
});
