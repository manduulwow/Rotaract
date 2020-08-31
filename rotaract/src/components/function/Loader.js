import React from 'react'
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader"

const override = css`
display: block;
margin: 0 auto;
border-color: #36D7B7;
`;

const Loader = () => {
    return (
        <div className="loading">
            <PuffLoader
                css={override}
                size={100}
                color={"#36D7B7"}
                loading={true}
            />
        </div>
    )
}

export default Loader