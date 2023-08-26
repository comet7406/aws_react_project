import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function FooterContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.STopContent}>
                <div>로그인</div>
                <span css={S.SDividerBar}>|</span>
                <div>전체서비스</div>
            </div>
            <div css={S.SMiddleContent}>
                <div>이용정책</div>
                <span>|</span>
                <div>MY플레이스 고객센터</div>
                <span>|</span>
                <div>신고센터</div>
                <span>|</span>
                <div>공지사항</div>
            </div>
            <div css={S.SBottomContent}>
                <div>ⓒNAVER Corp.</div>
            </div>
        </div>
    );
}

export default FooterContainer;