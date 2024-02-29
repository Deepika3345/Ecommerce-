import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "./Context/ShopContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useDispatch, useSelector } from "react-redux";
import { logoOutUser } from "./features/auth/authSlice";
import LogoutIcon from "@mui/icons-material/Logout";


const Navbar = () => {
  const {  cartItems } = useContext(ShopContext);
  const { user } = useSelector((state) => state.auth);

  const logOutdispatch = useDispatch();

  const handlelogout = () => {
    logOutdispatch(logoOutUser());
  };

  return (
    <AppBar>
      <Toolbar id="navbar">
        <Typography sx={{ flexGrow: 1 }} className="catch-error">
          <Link to={"/"}>
            <img
              id="logo"
              src="https://static.wixstatic.com/media/abbf86_15da5a341f234c7584357c02ede9c0ed~mv2.png/v1/fill/w_340,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/abbf86_15da5a341f234c7584357c02ede9c0ed~mv2.png"
              alt=""
            />
          </Link>
        </Typography>
        <Box>
          {user ? (
            <>
              <section className="list-manage">
                <List className="list-items">
                  <Link
                    to="/electronic"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItem>Electronics </ListItem>
                  </Link>
                  <Link
                    to="/jewellery"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItem>Jewellery </ListItem>
                  </Link>
                  <Link
                    to="/menswear"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItem>Men's Wear</ListItem>
                  </Link>
                  <Link
                    to="/womenswear"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <ListItem>Women's Wear </ListItem>
                  </Link>
                </List>
                <span>
                  <Link to={"/cart"}>
                    <Button
                      variant="outlined"
                      sx={{ bgcolor: "red", marginLeft: "5px", color: "white" }}
                    >
                      <ShoppingCartIcon />
                      <sup>({cartItems.length})</sup>
                    </Button>
                  </Link>

                  <Button
                    variant="outlined"
                    sx={{ bgcolor: "red", marginLeft: "5px", color: "white" }}
                    onClick={handlelogout}
                  >
                    <LogoutIcon />
                  </Button>
                </span>
              </section>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <Button className="profile">
                  <PersonRoundedIcon />
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
