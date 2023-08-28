import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';
import { MdOutlineLocationSearching } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
import profile from "../../../assets/profile.png";
import profileDesign from "../../../assets/profileDesign.png";
import { HiOutlineDotsVertical } from 'react-icons/hi';
import lodgment from "../../../assets/lodgment1.jpg";
import lodgment2 from "../../../assets/lodgment2.png";
import lodgment3 from "../../../assets/lodgment3.jpg";

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
                            <div css={S.SMenuBox(location.pathname.startsWith(menu.path))} key={menu.id} onClick={() => {
                                handleLinkClick(menu.path)
                            }}>{menu.name}</div>
                        ))}
                        <button css={S.SButton}>
                            <AiOutlinePlus css={S.SPlusIcon}/>
                            <span>관심지역</span>
                        </button>
                    </div>
                    <div >
                        <button css={S.SRightbutton}>
                            <div css={S.SDivideBar}></div>
                            <MdOutlineLocationSearching css={S.SLocationIcon}/>
                            <span>현위치</span>
                        </button>
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
        </div>
    );
}

export default FeedContainer;