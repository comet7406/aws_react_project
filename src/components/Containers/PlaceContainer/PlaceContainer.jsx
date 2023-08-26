import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import {GiGolfFlag} from "react-icons/gi";
import place from "../../../assets/place.png";

function PlaceContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <GiGolfFlag css={S.SFlagIcon}/>
                <div css={S.SContent}>
                    <div css={S.SHeaderFont}>
                        가고싶은 맛집, 카페 저장하고
                        <br />나의 <strong css={S.SFontBold}>리스트</strong>를 만들어 보세요
                    </div>
                    <div css={S.SContentFont}>여행 코스도 계획하기도 굳~</div>
                </div>
                <img css={S.SPlaceImg} src={place}/>
            </div>
        </div>
    );
}

export default PlaceContainer;