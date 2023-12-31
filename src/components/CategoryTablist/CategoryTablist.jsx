import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useLocation, useNavigate } from 'react-router-dom';
import { isMenuOpenState } from "../../stores/MenuStore";

function CategoryTablist(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const [ isSelected, setIsSelected ] = useState(false);

    const menus = [
        {
            id: 1,
            name: "피드",
            path: "/my/feed"
        },
        {
            id: 2,
            name: "타임라인",
            path: "/my/visit"
        },
        {
            id: 3,
            name: "리뷰",
            path: "/my/review"
        },
        {
            id: 4,
            name: "예약·주문",
            path: "/my/bookings"
        },
        {
            id: 5,
            name: "저장",
            path: "/my/place"
        }
    ]

    const handleLinkClick = (path) => {
        navigate(path);
    }

    return (
        <div css={S.SContainer}>
            <div css={S.SMenuBoxContainer}>
                {menus.map(menu => (
                    <div 
                        css={S.SMenuBox(
                            location.pathname.startsWith(menu.path) || (location.pathname === "/" && menu.id === 1)
                            )} 
                            key={menu.id} onClick={() => {
                        handleLinkClick(menu.path)
                    }}>{menu.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryTablist;