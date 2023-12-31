import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineLocationSearching } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import profile from "../../../assets/profile.png";
import profileDesign from "../../../assets/profileDesign.png";
import { HiChevronRight, HiOutlineDotsVertical } from 'react-icons/hi';
import lodgment from "../../../assets/lodgment1.jpg";
import lodgment2 from "../../../assets/lodgment2.png";
import lodgment3 from "../../../assets/lodgment3.jpg";
import bedIcon from "../../../assets/bedIcon.png";
import starIcon from "../../../assets/starIcon.png";
import smileIcon from "../../../assets/smileIcon.png";
import loveIcon from "../../../assets/loveIcon.png";
import sofaIcon from "../../../assets/sofaIcon.png";
import { LiaSmile } from "react-icons/lia"
import { CiStar } from "react-icons/ci"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

function FeedContainer(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [ isSelected, setIsSelected ] = useState(false);

    const menus = [
        {
            id: 1,
            name: "전체",
            path: "/my/feed/all"
        },
        {
            id: 2,
            name: "팔로잉",
            path: "/my/feed/following"
        }
    ]

    const [ isCategorySelected, setIsCategorySelected ] = useState(false);

    const categoryMenus = [
        {
            id: 1,
            name: "숙박"
        },
        {
            id: 2,
            name: "낚시"
        },
        {
            id: 3,
            name: "카페"
        },
        {
            id: 4,
            name: "문화예술"
        },
        {
            id: 5,
            name: "양식"
        },
        {
            id: 6,
            name: "테마파크"
        },
        {
            id: 7,
            name: "일식"
        },
        {
            id: 8,
            name: "아이와 함께"
        },
        {
            id: 9,
            name: "클래스 · 소품"
        },
    ]

    const handleLinkClick = (path) => {
        navigate(path);
    }

    const handleCategoryClick = (id) => {
        setIsCategorySelected(id === isCategorySelected ? null : id);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.STopContainer}>
                <div css={S.STypeTablist}>
                    <div css={S.SLeftbutton}>
                        {menus.map(menu => (
                            <div 
                                css={S.SMenuBox(
                                    location.pathname.startsWith(menu.path) || (location.pathname === "/my/feed" && menu.id === 1 || (location.pathname === "/" && menu.id === 1))
                                )} 
                                key={menu.id} onClick={() => {
                                handleLinkClick(menu.path)
                            }}>{menu.name}
                            </div>
                        ))}
                        <button css={S.SButton}>
                            <AiOutlinePlus css={S.SPlusIcon}/>
                            <span>관심지역</span>
                        </button>
                    </div>
                    <div css={S.SRightbutton}>
                        <div css={S.SDivideBar}></div>
                        <MdOutlineLocationSearching css={S.SLocationIcon}/>
                        <span>현위치</span>
                    </div>
                </div>
            </div>
            <div css={S.SMiddleContainer}>
                <div css={S.SCatgegoryTablist}>
                    <div css={S.SCategoryButton}>
                        {categoryMenus.map(item => (
                            <div css={S.SCategoryBox(item.id === isCategorySelected)} onClick={() => {
                                handleCategoryClick(item.id)
                            }}>{item.name}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div css={S.SFooterContainer}>
                <div css={S.SFooterLeftItem}>
                    <div css={S.SProfileContainer}>
                        <img src={profile} css={S.SProifle}/>
                        <img src={profileDesign} css={S.SProfileDesign}/>
                    </div>
                    <div css={S.SUserInfo}>
                        <div css={S.SUserName}>Comet7406</div>
                        <div css={S.SUserData}>
                            <span>사진리뷰 77</span> · <span>팔로워 7</span>
                        </div>
                    </div>
                </div>
                <div css={S.SFooterRightItem}>
                    <button css={S.SFollowButton}>팔로우</button>
                    <HiOutlineDotsVertical css={S.SOutlineDot}/>
                </div>
            </div>
            <div css={S.SImgContainer}>
                <div css={S.SMainImg}>
                    <img src={lodgment} />
                </div>
                <div css={S.SSubImg}>
                    <div css={S.SSubImg1}>
                        <img src={lodgment2} />
                    </div>
                    <div css={S.SSubImg2}>
                        <img src={lodgment3} />
                    </div>
                </div>
            </div>
            <div css={S.STextContainer}>
                <p>뷰가 정말좋네요 좋은가격에 잘 묵었습니다. 다음엔 더 좋은 방으로 예약해서 묵어볼까싶어요~</p>
            </div>
            <div css={S.SReviewContainer}>
                <div css={S.SReviewIconBox}>
                    <img src={bedIcon} css={S.SReviewIcon}/>
                    <p>침구가 좋아요</p>
                </div>
                <div css={S.SReviewIconBox}>
                    <img src={starIcon} css={S.SReviewIcon}/>
                    <p>깨끗해요</p>
                </div>
                <div css={S.SReviewIconBox}>
                    <img src={smileIcon} css={S.SReviewIcon}/>
                    <p>호캉스하기 좋아요</p>
                </div>
                <div css={S.SReviewIconBox}>
                    <img src={loveIcon} css={S.SReviewIcon}/>
                    <p>친절해요</p>
                </div>
                <div css={S.SReviewIconBox}>
                    <img src={sofaIcon} css={S.SReviewIcon}/>
                    <p>인테리어가 멋져요</p>
                </div>
            </div>
            <div css={S.SReactionContainer}>
                <div css={S.SReactionLeftBox}>
                    <LiaSmile css={S.SSmileIcon}/>
                    <span css={S.SReactionText}>반응 남기기</span>
                </div>
                <div>
                    <span css={S.SVisitDateText}>8.29 화 방문</span>
                </div>
            </div>
            <div css={S.SVisitedPlaceContainer}>
                <div css={S.SVisitedInfoLeftBox}>
                    <div css={S.SVisitedPlaceNameBox}>
                        <p css={S.SVisitedPlaceNameText}>
                            반얀트리 카시아 속초
                        </p>
                        <HiChevronRight css={S.SChevronRightIcon} />
                    </div>
                    <p css={S.SVisitedPlaceAddressText}>호텔 · 속초시 대포항 개발사업지구</p>
                </div>
                <div css={S.SVisitedInfoRightBox}>
                    <CiStar css={S.SVisitedInfoStarIcon} />
                    <span css={S.SVisitedInfoSaveText}>저장</span>
                </div>
            </div>
        </div>
    );
}

export default FeedContainer;