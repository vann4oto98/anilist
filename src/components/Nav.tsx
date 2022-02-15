import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Search from "./search/Search";

const Nav = () => {
  return (
    <AppBar sx={{ background: "black", position: "sticky" }}>
      <Toolbar>
        <Link href="/">
          <Button sx={{ color: "white", flex: 1 }}>Top Rated</Button>
        </Link>
        <Search />
        <Link href="/">
          <Button sx={{ marginLeft: "auto", flex: 1 }}>
            <Typography sx={{ color: "#0070f3" }}>Ani</Typography>
            <Typography sx={{ color: "white" }}>List</Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
