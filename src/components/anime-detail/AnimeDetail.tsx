import React, { useState } from "react";
import { IMediaQuery } from "../pages/__generated__/AnimeDetail.types";
//@ts-ignore
import ReactHtmlParser from "react-html-parser";
import { useFullAnimeDetailLazyQuery } from "../pages/__generated__/FullDetail.types";
import DataModal from "./DataModal";
import { Grid, Typography, Box } from "@mui/material";

const DetailHeader = ({ anime }: { anime: IMediaQuery }) => {
  const { title, bannerImage, description, coverImage } = anime.Media!;
  const [openModal, setOpenModal] = useState(false);
  const [loadAllData, { loading, data }] = useFullAnimeDetailLazyQuery({
    variables: { id: anime.Media?.id },
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <img style={{ width: "100%" }} src={bannerImage ?? ""} alt="banner" />
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{ padding: "1rem", display: "flex", justifyContent: "center" }}
        >
          <Typography component="h1" variant="h3">
            {`${title?.english ?? title?.romaji} | ${title?.native}`}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            setOpenModal(true);
            loadAllData();
          }}
          src={coverImage?.large ?? ""}
          alt="cover"
        />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography component="span" variant="body2">
          {ReactHtmlParser(description)}
        </Typography>
      </Grid>
      <DataModal
        loading={loading}
        data={data}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </Grid>
  );
};

export default DetailHeader;
