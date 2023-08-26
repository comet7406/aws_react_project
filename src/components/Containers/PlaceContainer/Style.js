import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    padding: 25px 20px;
    width: 100%;
    height: 490px;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    padding: 34px 30px 40px 30px;
    width: 720px;
    height: 440px;
    background-image: linear-gradient(127deg,#eb8787 7%,#ef9177 87%);
`;

export const SFlagIcon = css`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 25px;
    color: white;
`;

export const SContent = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
`;

export const SHeaderFont = css`
    line-height: 25px;
    font-size: 20px;
`;

export const SFontBold = css`
    font-weight: 600;
`;

export const SContentFont = css`
    line-height: 25px;
    margin-top: 5px;
    font-size: 15.5px;
    color: #ffffff;
`;

export const SPlaceImg = css`
    margin-top: 27px;
    width: 225px;
    height: 180px;
    cursor: pointer;
`;

export const SReviewButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 22px;
    width: 143px;
    padding: 9px 0px;
    font-size: 16px;
    color: #fff;
    background-color: transparent;
`;