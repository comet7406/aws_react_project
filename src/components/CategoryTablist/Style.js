import { css } from "@emotion/react";

export const SContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    padding: 0px 20px;
    width: 100%;
    height: 51px;
    background-color: #06b495;
`;

export const SMenuBoxContainer = css`
    display: flex;
    justify-content: space-between;
    width: 375px;
`;

export const SMenuBox = (isSelected) => css`
    display: flex;
    justify-content: center;
    padding: 15px 5px;
    font-size: 17px;
    font-weight: 600;
    color: ${isSelected ? "white" : "rgba(255,255,255,.7)"};
    border-bottom: ${isSelected ? "3px solid white" : "3px solid transparent"};
    cursor: pointer;
`;
