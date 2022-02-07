import React from "react";
import { NextPage } from "next";

import HomePage from "../src/components/pages/HomePage";
import client from "../src/helpers/apollo-client";
import {
  GetAnimesDocument,
  IGetAnimesQuery,
} from "../src/components/anime-list/__generated__/AniPage.types";
import { IAnimeCard } from "../src/helpers/types";

type Props = {
  animes: IAnimeCard[];
};

const Index: NextPage<Props> = ({ animes }) => <HomePage animes={animes} />;

Index.getInitialProps = async ({ query }) => {
  const page = Number(query?.page);
  const getAnimesResult = await client.query<IGetAnimesQuery>({
    query: GetAnimesDocument,
    variables: {
      page: page ?? 1,
      perPage: 12,
    },
  });

  const mapped: IAnimeCard[] | undefined =
    getAnimesResult.data?.Page?.media?.map(
      (media) => ({ ...media } as IAnimeCard)
    );

  return {
    animes: mapped ?? [],
  };
};

export default Index;
