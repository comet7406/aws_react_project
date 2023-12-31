import React from 'react';
/** @jsxImportSource @emotion/react */
import VisitContainer from '../../components/Containers/VisitContainer/VisitContainer';
import FooterContainer from '../../components/Containers/FooterContainer/FooterContainer';
import * as S from "./Style";

function MyVisit(props) {
    return (
        <div css={S.SLayout}>
            <VisitContainer>

            </VisitContainer>
            <FooterContainer />
        </div>
    );
}

export default MyVisit;