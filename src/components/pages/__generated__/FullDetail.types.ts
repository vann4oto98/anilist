import * as Types from '../../../graphql/__generated__/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type IFullAnimeDetailQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type IFullAnimeDetailQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, bannerImage?: string | null, description?: string | null, season?: Types.IMediaSeason | null, seasonYear?: number | null, type?: Types.IMediaType | null, format?: Types.IMediaFormat | null, status?: Types.IMediaStatus | null, episodes?: number | null, duration?: number | null, chapters?: number | null, volumes?: number | null, genres?: Array<string | null> | null, synonyms?: Array<string | null> | null, source?: Types.IMediaSource | null, isAdult?: boolean | null, isLocked?: boolean | null, meanScore?: number | null, averageScore?: number | null, popularity?: number | null, favourites?: number | null, hashtag?: string | null, countryOfOrigin?: any | null, isLicensed?: boolean | null, isFavourite: boolean, isRecommendationBlocked?: boolean | null, isFavouriteBlocked: boolean, title?: { __typename?: 'MediaTitle', userPreferred?: string | null, romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', extraLarge?: string | null, large?: string | null } | null, startDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, endDate?: { __typename?: 'FuzzyDate', year?: number | null, month?: number | null, day?: number | null } | null, nextAiringEpisode?: { __typename?: 'AiringSchedule', airingAt: number, timeUntilAiring: number, episode: number } | null, relations?: { __typename?: 'MediaConnection', edges?: Array<{ __typename?: 'MediaEdge', id?: number | null, relationType?: Types.IMediaRelation | null, node?: { __typename?: 'Media', id: number, format?: Types.IMediaFormat | null, type?: Types.IMediaType | null, status?: Types.IMediaStatus | null, bannerImage?: string | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null } | null } | null> | null } | null, characterPreview?: { __typename?: 'CharacterConnection', edges?: Array<{ __typename?: 'CharacterEdge', id?: number | null, role?: Types.ICharacterRole | null, name?: string | null, voiceActors?: Array<{ __typename?: 'Staff', id: number, language?: string | null, name?: { __typename?: 'StaffName', userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null } | null } | null> | null, node?: { __typename?: 'Character', id: number, name?: { __typename?: 'CharacterName', userPreferred?: string | null } | null, image?: { __typename?: 'CharacterImage', large?: string | null } | null } | null } | null> | null } | null, staffPreview?: { __typename?: 'StaffConnection', edges?: Array<{ __typename?: 'StaffEdge', id?: number | null, role?: string | null, node?: { __typename?: 'Staff', id: number, language?: string | null, name?: { __typename?: 'StaffName', userPreferred?: string | null } | null, image?: { __typename?: 'StaffImage', large?: string | null } | null } | null } | null> | null } | null, studios?: { __typename?: 'StudioConnection', edges?: Array<{ __typename?: 'StudioEdge', isMain: boolean, node?: { __typename?: 'Studio', id: number, name: string } | null } | null> | null } | null, reviewPreview?: { __typename?: 'ReviewConnection', pageInfo?: { __typename?: 'PageInfo', total?: number | null } | null, nodes?: Array<{ __typename?: 'Review', id: number, summary?: string | null, rating?: number | null, ratingAmount?: number | null, user?: { __typename?: 'User', id: number, name: string, avatar?: { __typename?: 'UserAvatar', large?: string | null } | null } | null } | null> | null } | null, recommendations?: { __typename?: 'RecommendationConnection', pageInfo?: { __typename?: 'PageInfo', total?: number | null } | null, nodes?: Array<{ __typename?: 'Recommendation', id: number, rating?: number | null, userRating?: Types.IRecommendationRating | null, mediaRecommendation?: { __typename?: 'Media', id: number, format?: Types.IMediaFormat | null, type?: Types.IMediaType | null, status?: Types.IMediaStatus | null, bannerImage?: string | null, title?: { __typename?: 'MediaTitle', userPreferred?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null } | null, user?: { __typename?: 'User', id: number, name: string, avatar?: { __typename?: 'UserAvatar', large?: string | null } | null } | null } | null> | null } | null, externalLinks?: Array<{ __typename?: 'MediaExternalLink', site: string, url: string } | null> | null, streamingEpisodes?: Array<{ __typename?: 'MediaStreamingEpisode', site?: string | null, title?: string | null, thumbnail?: string | null, url?: string | null } | null> | null, trailer?: { __typename?: 'MediaTrailer', id?: string | null, site?: string | null } | null, rankings?: Array<{ __typename?: 'MediaRank', id: number, rank: number, type: Types.IMediaRankType, format: Types.IMediaFormat, year?: number | null, season?: Types.IMediaSeason | null, allTime?: boolean | null, context: string } | null> | null, tags?: Array<{ __typename?: 'MediaTag', id: number, name: string, description?: string | null, rank?: number | null, isMediaSpoiler?: boolean | null, isGeneralSpoiler?: boolean | null, userId?: number | null } | null> | null, mediaListEntry?: { __typename?: 'MediaList', id: number, status?: Types.IMediaListStatus | null, score?: number | null } | null, stats?: { __typename?: 'MediaStats', statusDistribution?: Array<{ __typename?: 'StatusDistribution', status?: Types.IMediaListStatus | null, amount?: number | null } | null> | null, scoreDistribution?: Array<{ __typename?: 'ScoreDistribution', score?: number | null, amount?: number | null } | null> | null } | null } | null };


export const FullAnimeDetailDocument = gql`
    query FullAnimeDetail($id: Int) {
  Media(id: $id) {
    id
    title {
      userPreferred
      romaji
      english
      native
    }
    coverImage {
      extraLarge
      large
    }
    bannerImage
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    description
    season
    seasonYear
    type
    format
    status(version: 2)
    episodes
    duration
    chapters
    volumes
    genres
    synonyms
    source(version: 3)
    isAdult
    isLocked
    meanScore
    averageScore
    popularity
    favourites
    hashtag
    countryOfOrigin
    isLicensed
    isFavourite
    isRecommendationBlocked
    isFavouriteBlocked
    nextAiringEpisode {
      airingAt
      timeUntilAiring
      episode
    }
    relations {
      edges {
        id
        relationType(version: 2)
        node {
          id
          title {
            userPreferred
          }
          format
          type
          status(version: 2)
          bannerImage
          coverImage {
            large
          }
        }
      }
    }
    characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
      edges {
        id
        role
        name
        voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
          id
          name {
            userPreferred
          }
          language: languageV2
          image {
            large
          }
        }
        node {
          id
          name {
            userPreferred
          }
          image {
            large
          }
        }
      }
    }
    staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
      edges {
        id
        role
        node {
          id
          name {
            userPreferred
          }
          language: languageV2
          image {
            large
          }
        }
      }
    }
    studios {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
    reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
      pageInfo {
        total
      }
      nodes {
        id
        summary
        rating
        ratingAmount
        user {
          id
          name
          avatar {
            large
          }
        }
      }
    }
    recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
      pageInfo {
        total
      }
      nodes {
        id
        rating
        userRating
        mediaRecommendation {
          id
          title {
            userPreferred
          }
          format
          type
          status(version: 2)
          bannerImage
          coverImage {
            large
          }
        }
        user {
          id
          name
          avatar {
            large
          }
        }
      }
    }
    externalLinks {
      site
      url
    }
    streamingEpisodes {
      site
      title
      thumbnail
      url
    }
    trailer {
      id
      site
    }
    rankings {
      id
      rank
      type
      format
      year
      season
      allTime
      context
    }
    tags {
      id
      name
      description
      rank
      isMediaSpoiler
      isGeneralSpoiler
      userId
    }
    mediaListEntry {
      id
      status
      score
    }
    stats {
      statusDistribution {
        status
        amount
      }
      scoreDistribution {
        score
        amount
      }
    }
  }
}
    `;

/**
 * __useFullAnimeDetailQuery__
 *
 * To run a query within a React component, call `useFullAnimeDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFullAnimeDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFullAnimeDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFullAnimeDetailQuery(baseOptions?: Apollo.QueryHookOptions<IFullAnimeDetailQuery, IFullAnimeDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IFullAnimeDetailQuery, IFullAnimeDetailQueryVariables>(FullAnimeDetailDocument, options);
      }
export function useFullAnimeDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IFullAnimeDetailQuery, IFullAnimeDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IFullAnimeDetailQuery, IFullAnimeDetailQueryVariables>(FullAnimeDetailDocument, options);
        }
export type FullAnimeDetailQueryHookResult = ReturnType<typeof useFullAnimeDetailQuery>;
export type FullAnimeDetailLazyQueryHookResult = ReturnType<typeof useFullAnimeDetailLazyQuery>;
export type FullAnimeDetailQueryResult = Apollo.QueryResult<IFullAnimeDetailQuery, IFullAnimeDetailQueryVariables>;