import React from 'react';
import ReactDOM from 'react-dom';
import Members from '../Members';

import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import renderer from 'react-test-renderer';
import { it } from 'date-fns/locale';


afterEach(cleanup);

it("Member renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Members clubId={1} />, div);
})

it("Member snapshot", () => {
    const dom = renderer.create(<Members clubId={1} />).toJSON();
    expect(dom).toMatchSnapshot();
})