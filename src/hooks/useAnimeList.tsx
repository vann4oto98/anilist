import { useRouter } from "next/router";
import React, { useMemo, useCallback } from "react";
import { useGetAnimesLazyQuery } from "../components/anime-list/__generated__/AniPage.types";
import { IAnimeCard } from "../helpers/types";

type Props = {
  animes: IAnimeCard[];
};

const useAnimeList = ({ animes }: Props) => {
  const router = useRouter();
  const defaultPage = useMemo(() => {
    const page = Number(router.query?.page);
    return isNaN(page) ? 1 : page;
  }, []);
  const [getAnimes, { loading, data }] = useGetAnimesLazyQuery({
    variables: {
      page: defaultPage,
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
      router.push(`?page=${page}`, undefined, { shallow: true });
      getAnimes({ variables: { page, perPage: 12 } });
    },
    []
  );

  return { onPageChange, animeList, defaultPage, loading };
};

export default useAnimeList;
