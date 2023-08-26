import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import {GiGolfFlag} from "react-icons/gi";
import review from "../../../assets/review.png";

function VisitContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <GiGolfFlag css={S.SFlagIcon}/>
                <div css={S.SContent}>
                    <div css={S.SHeaderFont}>
                        정성스레 작성한 <strong css={S.SFontBold}>리뷰</strong>
                        <br />내 리뷰를 모아 만든 <strong css={S.SFontBold}>테마리스트</strong> 
                    </div>
                    <div css={S.SContentFont}>나의 발자취를 소중한 기록으로 남겨보세요.</div>
                </div>
                <img css={S.SReviewImg} src={review}/>
                <button css={S.SReviewButton}>리뷰 참여하기</button>
            </div>
        </div>
    );
}

export default VisitContainer;