import React from 'react';
/** @jsxImportSource @emotion/react */
import FooterContainer from "../../components/Containers/FooterContainer/FooterContainer";
import * as S from "./Style";
import FeedContainer from '../../components/Containers/FeedContainer/FeedContainer';

function MyFeed(props) {
    return (
        <div css={S.SLayout}>
            <FeedContainer />
            <FooterContainer />
        </div>
    );
}

export default MyFeed;