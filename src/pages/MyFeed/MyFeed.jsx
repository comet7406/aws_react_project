import React from 'react';
/** @jsxImportSource @emotion/react */
import FooterContainer from "../../components/Containers/FooterContainer/FooterContainer";
import * as S from "./Style";

function MyFeed(props) {
    return (
        <div css={S.SLayout}>
            <FooterContainer />
        </div>
    );
}

export default MyFeed;