import React from 'react';
import ReactDOM from 'react-dom';
import ClubPage from '../ClubPage';
import ClubInfo from '../ClubInfo';


import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

import renderer from 'react-test-renderer';
import { it } from 'date-fns/locale';

afterEach(cleanup);


it("ClubPage renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<ClubPage />, div);
})

it("ClubInfo renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<ClubInfo club_id={1}/>, div);
})

