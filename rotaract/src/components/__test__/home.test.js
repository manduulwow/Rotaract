import React from 'react';
import ReactDOM from 'react-dom';
import About from '../About';
import Home from '../Home';

import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import renderer from 'react-test-renderer';
import { it } from 'date-fns/locale';

afterEach(cleanup);

const clubNames = ["name1","name2"];

it("Home renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
})

it("About renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<About clubName={clubNames}/>, div);
})

