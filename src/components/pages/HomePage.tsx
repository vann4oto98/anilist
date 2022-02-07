import { IAnimeCard } from "../../helpers/types";
import AnimeList from "../anime-list/AnimeList";
import Header from "../Header";

type Props = {
  animes: IAnimeCard[];
};

const Home = ({ animes }: Props) => {
  return (
    <div>
      <Header />
      <AnimeList animes={animes} />
    </div>
  );
};

export default Home;
