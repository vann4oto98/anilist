import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Nav = () => {
  return (
    <AppBar sx={{ background: "black", position: "sticky" }}>
      <Toolbar>
        <Link href="/">
          <Button sx={{ color: "white" }}>HOME</Button>
        </Link>
        <Link href="/">
          <Button sx={{ marginLeft: "auto" }}>
            <Typography sx={{ color: "#0070f3" }}>Ani</Typography>
            <Typography sx={{ color: "white" }}>List</Typography>
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
