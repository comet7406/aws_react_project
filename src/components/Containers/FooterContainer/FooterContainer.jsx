import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function FooterContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.STopContent}>
                <div css={S.SButton}>로그인</div>
                <span>|</span>
                <div css={S.SButton}>전체서비스</div>
            </div>
            <div css={S.SMiddleContent}>
                <div css={S.SButton}>이용정책</div>
                <span>|</span>
                <div css={S.SButton}>MY플레이스 고객센터</div>
                <span>|</span>
                <div css={S.SButton}>신고센터</div>
                <span>|</span>
                <div css={S.SButton}>공지사항</div>
            </div>
            <div css={S.SBottomContent}>
                <div css={S.SButton}>
                    <span css={S.SCIcon}>ⓒ</span>
                    NAVER Corp.
                </div>
            </div>
        </div>
    );
}

export default FooterContainer;