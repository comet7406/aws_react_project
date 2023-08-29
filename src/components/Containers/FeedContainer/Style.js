import { css } from "@emotion/react";

export const SLayout = css`

`;

export const STopContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    background-color: #f8fafb;
    height: 66px;
`;

export const STypeTablist = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 720px;
    height: 42px;
`;

export const SMenuBox = (isSelected) => css`
    display: flex;
    align-items: center;
    margin-right: 8px;
    border: none;
    border-radius: 5px;
    padding: 11px 13px;
    font-size: 15px;
    color: #424242;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,.06);
    color: ${isSelected ? "white" : "#424242"};
    background-image: ${isSelected ? "linear-gradient(90deg,#2d8dee,#2da1ee)" : "white"};
    box-shadow: ${isSelected ? "0 2px 6px 0 rgba(37,146,255,.35)" : ""};
    font-weight: ${isSelected ? "700" : ""};
    cursor: pointer;
`;

export const SLeftbutton = css`
    display: flex;
    padding: 6px 98px 6px 0px;
`;

export const SButton = css`
    border: none;
    border-radius: 5px;
    padding: 11px 13px;
    font-size: 15px;
    color: #424242;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,.06);
    cursor: pointer;
`;

export const SPlusIcon = css`
    padding-top: 5px;
    font-size: 18px;
`;

export const SRightbutton = css`
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    border: none;
    border-radius: 5px;
    padding: 13px;
    font-size: 15px;
    font-weight: 700;
    color: #7f8daa;
    background-color: transparent;
    cursor: pointer;
`;

export const SDivideBar = css`
    position: absolute;
    border-radius: 2px;
    border: 1px solid #dbdbdb;
    left: 3px;
    width: 2px;
    height: 24px;
    color: #e2e5e8;
`;

export const SLocationIcon = css`
    margin: -1px 3px 0px 0px;
`;

export const SMiddleContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 10px 0px 2px 0px;
    height: 48px;
`;

export const SCatgegoryTablist = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    width: 720px;
    height: 42px;
`;

export const SCategoryButton = css`
    display: flex;
`;

export const SCategoryBox = (isCategorySelected) => css`
    display: flex;
    align-items: center;
    margin-right: 8px;
    border: 1px solid #eaeef2;
    border-radius: 19px;
    padding: 11px 13px;
    font-size: 12px;
    color: #666666;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,.06);
    font-weight: ${isCategorySelected ? "700" : ""};
    color: ${isCategorySelected ? "white" : "#666666"};
    background-color: ${isCategorySelected ? "#424242" : "white"};
    cursor: pointer;
`;

export const SFooterContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    padding: 26px 0px 10px 25px;
    width: 680px;
    height: 65px;
`;

export const SFooterLeftItem = css`
    display: flex;
`;

export const SProfileContainer = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SProifle = css`
    position: absolute;
    border: 2px solid white;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    cursor: pointer;
`;

export const SProfileDesign = css`
    position: absolute;
    width: 56px;
    height: 56px;
    cursor: pointer;
`;

export const SUserInfo = css`
    margin-left: 35px;
    text-align: left;
    line-height: 20px;
`;

export const SUserName = css`
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`;

export const SUserData = css`
    font-size: 13px;
    color: #8f8f8f;
    cursor: pointer;
`;

export const SFooterRightItem = css`
    display: flex;
    align-items: center;
    height: 30px;
`;

export const SFollowButton = css`
    border: none;
    border-radius: 4px;
    font-weight: 600;
    color: #287cff;
    background: #eff6fe;
    width: 70px;
    height: 30px;
    cursor: pointer;
`;

export const SOutlineDot = css`
    margin-left: 10px;
    color: #b8b8b8;
    cursor: pointer;
`;

export const SImgContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    padding: 15px 20px 10px 20px;
    width: 720px;
`;

export const SMainImg = css`
    display: flex;
    margin-right: 2px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 402px;
    height: 360px;
    overflow: hidden;
`;

export const SSubImg = css`
    flex-direction: column;
    height: 360px;
`;

export const SSubImg1 = css`
    display: flex;
    margin-bottom: 2px;
    border-top-right-radius: 8px;
    width: 278px;
    height: 179px;
    overflow: hidden;
`;

export const SSubImg2 = css`
    display: flex;
    border-bottom-right-radius: 8px;
    width: 278px;
    height: 179px;
    overflow: hidden;
`;

export const STextContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0px 20px 10px 20px;
    font-size: 15px;
    width: 720px;
    color: #666666;
`;

export const SReviewContainer = css`
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0px 20px 0px 20px;
    width: 720px;
`;

export const SReviewIconBox = css`
    display: flex;
    border-radius: 4px;
    margin-right: 4px;
    padding: 4px 7px;
    height: 24px;
    font-size: 13px;
    color: #666666;
    background-color: #f5f7f8;;
`;

export const SReviewIcon = css`
    display: flex;
    margin: 0px 5px 0px 0px;
`;

export const SReactionContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 17px 20px 15px 20px;
    width: 720px;
`;

export const SReactionLeftBox = css`
    display: flex;
    align-items: center;
`;
 
export const SSmileIcon = css`
    margin-right: 6px;
    font-size: 32px;
`;

export const SReactionText = css`
    font-size: 16px;
    color: #424242;
`;

export const SVisitDateText = css`
    font-size: 13px;
    color: #9A9A9A;
`;

export const SVisitedPlaceContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    border: 1px solid #ecf0f2;
    border-radius: 8px;
    padding: 6px 16px 12px 15px;
    width: 680px;
    height: 68px;
`;

export const SVisitedInfoLeftBox = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const SVisitedPlaceNameBox = css`
    display: flex;
    align-items: center;
`;

export const SVisitedPlaceNameText = css`
    font-size: 17px;
    font-weight: 600;
    line-height: 30px;
    color: #242424;
`;

export const SChevronRightIcon = css`
    font-size: 22px;
    font-weight: 500;
`;

export const SVisitedPlaceAddressText = css`
    font-size: 13px;
    color: #8f8f8f;
`;

export const SVisitedInfoRightBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SVisitedInfoStarIcon = css`
    font-size: 21px;
    color: #8f8f8f;
`;

export const SVisitedInfoSaveText = css`
    margin-top: 6px;
    font-size: 11px;
    color: #8f8f8f;
`;