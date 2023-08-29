import { css } from "@emotion/react";

export const GSCommon = css`
    * {
        box-sizing: border-box;
    }

    *::-webkit-scrollbar {
        border: none;
        width: 5px;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #dbdbdb;
    }
`;