import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { styles } from "./Search.styles";
import { useRouter } from "next/router";
import { useMediaSearchLazyQuery } from "./__generated__/MediaSearch.types";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState((router.query.search as string) ?? "");

  const [searchMedia] = useMediaSearchLazyQuery({
    variables: { search },
  });

  const onSearch = async () => {
    if (!search) return;

    try {
      const media = await searchMedia({ variables: { search } });

      router.push({
        pathname: `/anime/${media.data?.Media?.id}`,
      });
    } catch (e) {
      router.push({
        pathname: "/404",
      });
    }
  };

  return (
    <Paper sx={styles.PaperStyle}>
      <InputBase
        sx={styles.InputStyle}
        placeholder="Find anime..."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        onChange={(event) => setSearch(event.target.value)}
        value={search}
      />
      {search && (
        <IconButton onClick={() => setSearch("")}>
          <CloseIcon />
        </IconButton>
      )}
      <IconButton onClick={onSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
