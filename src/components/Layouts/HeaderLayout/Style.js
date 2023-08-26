import { css } from "@emotion/react";

export const SHeadLayout = css`

`;

export const SHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 12px 8px 20px;
  border-bottom: 1px solid rgba(0,0,1,.04);
  width: 100%;
  height: 53px;
  background-color: #06b495;
`;

export const SLeftBox = css`
  display: flex;
`;

export const SNaverBox = css`
  display: flex;
  align-items: center;
  border: none;
  width: 21px;
  height: 21px;
  background-color: white;
  cursor: pointer;
`;

export const SMyplaceBox = css`
  border: none;
  margin-left: 3px;
  height: 21px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  transform: translateY(-2px);
  cursor: pointer;
`;

export const SNaverIcon = css`
  font-size: 10px;
  color: #06b495;
`;

export const SRightBox = css`
  display: flex;
`;

export const SCoupon = css`
  position: relative;
  display: flex;
  cursor: pointer;
`;

export const SCouponIcon = css`
  margin: 0px 5px;
  width: 36px;
  height: 36px;
  color: #ffff;
`;

export const SCouponName = css`
  position: absolute;
  text-align: center;
  font-size: 11px;
  color: white;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

export const SMenuBox = css`
  border: none;
  font-size: 25px;
  background-color: transparent;
  color: white;
`;

export const SMenuListIcon = css`
  display: flex;
  cursor: pointer;
`;

export const SProfileLayout = css`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #06b495;
`;

export const SProfilebar = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px 11px;
  height: 151px;
`;

export const SProfileTop = css`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  width: 335px;
  height: 64px;
`;

export const SProfileBottom = css`
  display: flex;
  justify-content: space-between;
  width: 335px;
  height: 38px;
`;

export const SProfilThumb = css`
  margin-right: 29px;
  border: 2px solid white;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  cursor: pointer;
`;

export const SLoginButton = css`
  display: flex;
  align-items: center;
  border: none;
  width: 98px;
  height: 20px;
  font-size: 17px;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
`;

export const SChevronRightIcon = css`
  transform: translateY(2px);
  color: #fff;
`;

export const SReviewButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0cc5a4;;
  border-radius: 8px;
  width: 226px;
  font-size: 16px;
  font-weight: 700;
  background-color: #0cc5a4;
  color: #fff;
  cursor: pointer;
`;

export const SPencilIcon = css`
  margin: 3px 5px 0px 0px;
  color: white;
`;

export const SMissionButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #0cc5a4;;
  border-radius: 8px;
  width: 102px;
  font-size: 16px;
  font-weight: 700;
  background-color: #0cc5a4;
  color: #fff;
  cursor: pointer;
`;

export const SCheckIcon = css`
  margin: 3px 5px 0px 0px;
`;