import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";

function MainLayout({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

export default MainLayout;