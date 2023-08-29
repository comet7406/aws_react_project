import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { SiNaver } from 'react-icons/si';

function BookingContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.STopContent}>
                <div css={S.SHeaderFont}>
                    <strong css={S.SFontBold}>로그인</strong>하고 예약,
                    <br />주문 내역을 확인해보세요.
                </div>
                <button css={S.SNaverLogin}>
                    <SiNaver css={S.SNaverIcon}/>
                    네이버 로그인
                </button>
            </div>
            <div css={S.SBottomContent}>
                <div css={S.SHeaderFont}>
                    <strong css={S.SFontBold}>비회원 </strong>예약확인
                </div>
                <div css={S.SInputTopBox}>
                    <input css={S.SInputText} type="text" placeholder='예약번호 입력'/>
                </div>
                <div css={S.SInputBottomBox}>
                    <input css={S.SInputText} type="text" placeholder='예약자명 입력'/>
                </div>
                <button css={S.SReservationLogin}>내 예약 확인</button>
            </div>
        </div>
    );
}

export default BookingContainer;