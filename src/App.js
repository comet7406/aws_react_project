/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { GSCommon } from "./styles/common";
import { Reset } from "styled-reset";
import HeaderLayout from "./components/Layouts/HeaderLayout/HeaderLayout";
import MainLayout from "./components/Layouts/MainLayout/MainLayout";
import MainContainer from "./components/Containers/MainContainer/MainContainer";
import { Route, Routes } from "react-router-dom";
import MyFeed from "./pages/MyFeed/MyFeed";
import MyVisit from "./pages/MyVisit/MyVisit";
import MyReview from "./pages/MyReview/MyReview";
import MyBookings from "./pages/MyBookings/MyBookings";
import MyPlace from "./pages/MyPlace/MyPlace";
import CategoryTablist from "./components/CategoryTablist/CategoryTablist";

function App() {
  return (
    <>
      <Reset />
      <Global styles={GSCommon}/>
      <MainLayout>
        <HeaderLayout />
        <CategoryTablist />
        <MainContainer>
          <Routes>
            <Route path="/my/feed" element={ <MyFeed /> }/>
            <Route path="/my/visit" element={ <MyVisit /> }/>
            <Route path="/my/review" element={ <MyReview /> }/>          
            <Route path="/my/bookings" element={ <MyBookings /> }/>          
            <Route path="/my/place" element={ <MyPlace /> }/>          
          </Routes>
        </MainContainer>
      </MainLayout>

    </>
  );
}

export default App;
