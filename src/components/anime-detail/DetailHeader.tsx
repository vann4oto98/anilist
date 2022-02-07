import React, { useState } from "react";
import { IMediaQuery } from "../pages/__generated__/AnimeDetail.types";
import styles from "../../../styles/AnimeDetail.module.css";
import imgStyles from "../../../styles/Anime.module.css";
//@ts-ignore
import ReactHtmlParser from "react-html-parser";
import { useFullAnimeDetailLazyQuery } from "../pages/__generated__/FullDetail.types";
import DataModal from "./DataModal";

const DetailHeader = ({ anime }: { anime: IMediaQuery }) => {
  const { title, bannerImage, description, coverImage } = anime.Media!;
  const [openModal, setOpenModal] = useState(false);
  const [loadAllData, { loading, data }] = useFullAnimeDetailLazyQuery({
    variables: { id: anime.Media?.id },
  });

  return (
    <div>
      <img className={styles.banner} src={bannerImage ?? ""} alt="banner" />
      <h1>{title?.english ?? title?.romaji}</h1>
      <div className={styles.content}>
        <div
          onClick={() => {
            setOpenModal(true);
            loadAllData();
          }}
          className={imgStyles.imgWrap}
          style={{ cursor: "pointer" }}
        >
          <img
            className={styles.cover}
            src={coverImage?.large ?? ""}
            alt="cover"
          />
          <div className={imgStyles.imgDescriptionLayer}>
            <p className={imgStyles.imgDescription}>
              Open Details (Lazy Query) &rarr;
            </p>
          </div>
        </div>
        <span className={styles.description}>
          {ReactHtmlParser(description)}
        </span>
      </div>
      <DataModal
        loading={loading}
        data={data}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default DetailHeader;
