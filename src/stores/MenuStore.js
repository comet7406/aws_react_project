import { css } from "@emotion/react";
import { atom } from "recoil";

export const isMenuOpenState = atom({
    key: "isMenuOpenState",
    default: false
});