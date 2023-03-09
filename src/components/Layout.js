import { AppBar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AppBar
        position="relative"
        sx={{ padding: "10px 0", borderRadius: "5px", marginBottom: "50px" }}
      >
        <h1>Welcome to ultimate form!</h1>
      </AppBar>
      
        <main className="main total">
          <div className="container ">
            <div className="outlet">
               <Outlet/>
            </div>
          </div>
        </main>
      <footer className="footer">My form footer</footer>
    </>
  );
};

export default Layout;
