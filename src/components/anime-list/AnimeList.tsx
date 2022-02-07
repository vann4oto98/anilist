import { Grid, Pagination } from "@mui/material";
import styles from "../../../styles/Anime.module.css";
import { IAnimeCard } from "../../helpers/types";
import useAnimeList from "../../hooks/useAnimeList";
import AnimeCard from "./AnimeCard";

type Props = {
  animes: IAnimeCard[];
};

const AniList = ({ animes }: Props) => {
  const { animeList, onPageChange } = useAnimeList({ animes });

  return (
    <>
      <Grid
        container
        className={styles.grid}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
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
        onChange={onPageChange}
        count={10}
        shape="rounded"
      />
    </>
  );
};

export default AniList;
