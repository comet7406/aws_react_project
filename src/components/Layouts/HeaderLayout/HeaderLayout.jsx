import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style";
import { HiChevronRight, HiMenu } from "react-icons/hi";
import { SiNaver } from "react-icons/si";
import { BsTicket } from "react-icons/bs";
import { PiPencilSimpleLineFill } from "react-icons/pi";
import { BsCheck2Circle } from "react-icons/bs";
import profile from "../../../assets/profile.png";
function HeaderLayout(props) {
    return (
        <div>
            <div css={S.SHeadLayout}>
                <div css={S.SHeader}>
                    <div css={S.SLeftBox}>
                        <button css={S.SNaverBox}><SiNaver css={S.SNaverIcon}/></button>
                        <button css={S.SMyplaceBox}>MY플레이스</button>
                    </div>
                    <div css={S.SRightBox}>
                        <div css={S.SCoupon}>
                            <BsTicket css={S.SCouponIcon}/>
                            <span css={S.SCouponName}>쿠폰</span>
                        </div>
                        <button css={S.SMenuBox}><HiMenu css={S.SMenuListIcon}/></button>
                    </div>
                </div>
                <div css={S.SProfileLayout}>
                    <div css={S.SProfilebar}>
                        <div css={S.SProfileTop}>
                            <img css={S.SProfilThumb} src={profile} />
                            <button css={S.SLoginButton}>로그인하기</button>
                            <HiChevronRight css={S.SChevronRightIcon}/>              
                        </div>
                        <div css={S.SProfileBottom}>
                            <button css={S.SReviewButton}>
                                <div css={S.SPencilIcon}><PiPencilSimpleLineFill  /></div>
                                <span>리뷰 쓰기</span>
                            </button>
                            <button css={S.SMissionButton}>
                                <div css={S.SCheckIcon}><BsCheck2Circle /></div>
                                <span>미션</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderLayout;