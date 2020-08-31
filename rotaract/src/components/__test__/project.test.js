import React from 'react';
import ReactDOM from 'react-dom';
import Projects from '../Projects';

import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import renderer from 'react-test-renderer';
import { it } from 'date-fns/locale';


afterEach(cleanup);

it("Projects renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Projects club_id={1} />, div);
})

it("Projects snapshot", () => {
    const dom = renderer.create(<Projects club_id={1} />).toJSON();
    expect(dom).toMatchSnapshot();
})