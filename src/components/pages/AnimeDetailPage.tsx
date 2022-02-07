import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useMediaQuery } from "./__generated__/AnimeDetail.types";
import ErrorPage from "next/error";
import AnimeDetail from "../anime-detail/AnimeDetail";
import Loader from "../Loader";

const AnimeDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useMediaQuery({
    variables: { id: Number(id) },
  });
  return id ? (
    <>
      {error && <ErrorPage statusCode={500} title={error.message} />}
      {loading && <Loader />}
      {data && (
        <div>
          <AnimeDetail anime={data} />
          <br />
          <div style={{ textAlign: "end" }}>
            <Link href={{ pathname: "/", query: { page: router.query?.page } }}>
              <a style={{ color: "#0170F3", textDecoration: "underline" }}>
                Go Back
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  ) : (
    <ErrorPage statusCode={404} />
  );
};

export default AnimeDetailPage;
