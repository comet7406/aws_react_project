import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { css } from "@emotion/react";

function MainContainer({ children }) {
    return (
        <div css={S.SContainer}>
            {children}
        </div>
    );
}

export default MainContainer;