import styles from "../../../styles/Anime.module.css";
import Link from "next/link";
import { IAnimeCard } from "../../helpers/types";

type Props = {
  anime: IAnimeCard;
};

const AnimeCard = ({ anime }: Props) => {
  const { id, coverImage, title } = anime;
  return (
    <Link href="/anime/[id]" as={`/anime/${id}`}>
      <a className={`${styles.card}`}>
        <div className={styles.imgWrap}>
          <img className={styles.imgImg} src={coverImage.large} />
          <div className={styles.imgDescriptionLayer}>
            <p className={styles.imgDescription}>
              {title.english ?? title.romaji} &rarr;
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AnimeCard;
