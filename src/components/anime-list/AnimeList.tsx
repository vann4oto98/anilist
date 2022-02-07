import { Grid, Pagination } from "@mui/material";
import styles from "../../../styles/Anime.module.css";
import { IAnimeCard } from "../../helpers/types";
import useAnimeList from "../../hooks/useAnimeList";
import AnimeCard from "./AnimeCard";
import Loader from "../Loader";

type Props = {
  animes: IAnimeCard[];
};

const AniList = ({ animes }: Props) => {
  const { animeList, onPageChange, defaultPage, loading } = useAnimeList({
    animes,
  });

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 6, md: 4 }}
        justifyContent={"center"}
      >
        {loading && <Loader />}
        {animeList.map((anime) => (
          <Grid key={anime.id} item>
            <AnimeCard anime={anime} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          padding: "1rem",
        }}
        defaultPage={defaultPage}
        onChange={onPageChange}
        count={200}
        shape="rounded"
      />
    </>
  );
};

export default AniList;
