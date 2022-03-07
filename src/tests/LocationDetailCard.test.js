import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//Component
import ArticleDetailCard from "../components/page/ArticleDetailCard";
import { BrowserRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Location Detail Card", () => {
  it("should render my Location Detail Card", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ArticleDetailCard />
      </BrowserRouter>
    );
  });

  it("should receive 'item' object", () => {
    const item = {
      locationType: "test",
      address: {},
      locationDetails: "test",
      locationUserRole: "test",
      locationName: "test",
      numberofDevices: "test",
      subscriptionActive: "test",
      newLocation: "test",
    };
    const wrapper = shallow(
      <BrowserRouter>
        <ArticleDetailCard item={item} />
      </BrowserRouter>
    );

    expect(wrapper.children().prop("item")).not.toBeNull();

    expect(wrapper.children().prop("item")).toEqual({
      locationType: "test",
      address: {},
      locationDetails: "test",
      locationUserRole: "test",
      locationName: "test",
      numberofDevices: "test",
      subscriptionActive: "test",
      newLocation: "test",
    });
  });
});
