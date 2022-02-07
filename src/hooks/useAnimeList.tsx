import React, { useState, useMemo, useCallback } from "react";
import { useGetAnimesLazyQuery } from "../components/anime-list/__generated__/AniPage.types";
import { IAnimeCard } from "../helpers/types";

type Props = {
  animes: IAnimeCard[];
};

const useAnimeList = ({ animes }: Props) => {
  const [getAnimes, { loading, data }] = useGetAnimesLazyQuery({
    variables: {
      page: 1,
      perPage: 12,
    },
  });

  const animeList = useMemo(() => {
    if (!data && !loading) {
      return animes;
    }

    return (
      data?.Page?.media?.map((media) => ({ ...media } as IAnimeCard)) ?? []
    );
  }, [animes, data]);

  const onPageChange = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      getAnimes({ variables: { page, perPage: 12 } });
    },
    []
  );

  return { onPageChange, animeList };
};

export default useAnimeList;
