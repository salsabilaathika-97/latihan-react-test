import React from "react";
import Enyzme, { shallow } from "enzyme";
import Header from "../components/Header";
import Adapter from 'enzyme-adapter-react-16';

Enyzme.configure({adapter: new Adapter()});

test("Header component expect", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot();
})