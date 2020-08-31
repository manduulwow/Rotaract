import React from 'react';
import ReactDOM from 'react-dom';
import About from '../About';

import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import renderer from 'react-test-renderer';

afterEach(cleanup);

it("Matches snapshot", () => {
    const dom = renderer.create(<About clubName={["name1","name2"]}/>).toJSON();
    expect(dom).toMatchSnapshot();
})


