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

export const SMenuBox = (isSelected) => css`
    display: flex;
    justify-content: center;
    margin-top: 17px;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: 600;
    width: 85px;
    color: ${isSelected ? "white" : "rgba(255,255,255,.7)"};
    border-bottom: ${isSelected ? "3px solid white" : "3px solid transparent"};
    cursor: pointer;
`;
