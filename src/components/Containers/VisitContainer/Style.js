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
    justify-content: center;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    padding: 34px 30px 40px 30px;
    width: 720px;
    height: 440px;
    background-image: linear-gradient(142deg,#55abab,#6fc2ac);
`;

export const SFlagIcon = css`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    width: 20px;
    height: 20px;
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
    color: #bbedee;
`;

export const SVisitImg = css`
    margin-top: 27px;
    width: 235px;
    height: 155px;
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
    cursor: pointer;
`;