import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import visitImg from "../../../assets/visitImg.png";

function VisitContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SContent}>
                    <div css={S.SHeaderFont}>
                        <strong css={S.SFontBold}>영수증/카드내역 인증, 예약, 주문</strong>
                        한<br />장소가 나의 기록이 됩니다.
                    </div>
                    <div css={S.SContentFont}>방문했던 곳을 한 눈에 모아보세요.</div>
                </div>

                <img css={S.SVisitImg} src={visitImg}/>
            </div>
        </div>
    );
}

export default VisitContainer;