import React from 'react';
/** @jsxImportSource @emotion/react */
import ReviewContainer from '../../components/Containers/ReviewContainer/ReviewContainer';
import FooterContainer from '../../components/Containers/FooterContainer/FooterContainer';
import * as S from "./Style";

function MyReview(props) {
    return (
        <div css={S.SLayout}>
            <ReviewContainer>

            </ReviewContainer>
            <FooterContainer />
        </div>
    );
}

export default MyReview;