import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useMediaQuery } from "./__generated__/AnimeDetail.types";
import ErrorPage from "next/error";
import styles from "../../../styles/Loader.module.css";
import DetailHeader from "../anime-detail/DetailHeader";

const AnimeDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <ErrorPage statusCode={404} />;
  }
  const { data, loading, error } = useMediaQuery({ variables: { id: +id! } });
  return (
    <>
      {error && <ErrorPage statusCode={500} title={error.message} />}
      {loading && <div className={styles.loader} />}
      {data && (
        <div>
          <DetailHeader anime={data} />
          <br />
          <div style={{ textAlign: "end" }}>
            <Link href="/">
              <a style={{ color: "#0170F3", textDecoration: "underline" }}>
                Go Back
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeDetailPage;
