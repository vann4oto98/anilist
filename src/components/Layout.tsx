import { Box } from "@mui/material";
import Meta from "./Meta";
import Nav from "./Nav";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta
        title="AniList"
        keywords={"anime"}
        description={"A place for all anime fans"}
      />
      <Nav />
      <Box sx={{ padding: "2rem" }}>{children}</Box>
    </>
  );
};

export default Layout;
