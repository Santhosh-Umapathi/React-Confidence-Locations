import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//Component
import Location from "../pages/Location";
import { BrowserRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Location Page", () => {
  it("should render my Location Page", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Location />
      </BrowserRouter>
    );
  });
});
