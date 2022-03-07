import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//Component
import ArticleCard from "../components/page/ArticleCard";
import { BrowserRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Location Card", () => {
  it("should render my Location Card", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ArticleCard />
      </BrowserRouter>
    );
  });

  it("should receive 'item' object", () => {
    const item = {
      id: "1",
      locationType: "test",
      address: {},
      locationDetails: "test",
      locationUserRole: "test",
      locationName: "test",
    };
    const wrapper = shallow(
      <BrowserRouter>
        <ArticleCard item={item} />
      </BrowserRouter>
    );

    expect(wrapper.children().prop("item")).not.toBeNull();

    expect(wrapper.children().prop("item")).toEqual({
      id: "1",
      locationType: "test",
      address: {},
      locationDetails: "test",
      locationUserRole: "test",
      locationName: "test",
    });
  });
});
