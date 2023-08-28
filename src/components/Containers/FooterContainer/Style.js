import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 42px 0px 36px 0px;
    height: 160px;
`;

export const SButton = css`
    cursor: pointer;
`;

export const STopContent = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 145px;
    font-size: 15px;
    color: #8f8f8f;
`;

export const SMiddleContent = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    font-size: 13px;
    line-height: 50px;
    color: #666666;
`;

export const SBottomContent = css`
    display: flex;
    font-size: 13px;
    color: #666666;
`;

export const SCIcon = css`
    margin-right: 3px;
    margin-bottom: 2px;
    font-size: 12px;
`;