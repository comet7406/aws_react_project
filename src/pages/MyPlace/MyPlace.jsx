import React from 'react';
/** @jsxImportSource @emotion/react */
import PlaceContainer from '../../components/Containers/PlaceContainer/PlaceContainer';
import FooterContainer from '../../components/Containers/FooterContainer/FooterContainer';
import * as S from "./Style";

function MyPlace(props) {
    return (
        <div css={S.SLayout}>
            <PlaceContainer>
                
            </PlaceContainer>
            <FooterContainer />
        </div>
    );
}

export default MyPlace;