import * as Types from '../../../graphql/__generated__/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type IMediaSearchQueryVariables = Types.Exact<{
  search?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type IMediaSearchQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, description?: string | null, meanScore?: number | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null } | null };


export const MediaSearchDocument = gql`
    query MediaSearch($search: String) {
  Media(search: $search) {
    id
    title {
      english
      romaji
    }
    coverImage {
      large
    }
    description
    meanScore
  }
}
    `;

/**
 * __useMediaSearchQuery__
 *
 * To run a query within a React component, call `useMediaSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaSearchQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useMediaSearchQuery(baseOptions?: Apollo.QueryHookOptions<IMediaSearchQuery, IMediaSearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMediaSearchQuery, IMediaSearchQueryVariables>(MediaSearchDocument, options);
      }
export function useMediaSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMediaSearchQuery, IMediaSearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMediaSearchQuery, IMediaSearchQueryVariables>(MediaSearchDocument, options);
        }
export type MediaSearchQueryHookResult = ReturnType<typeof useMediaSearchQuery>;
export type MediaSearchLazyQueryHookResult = ReturnType<typeof useMediaSearchLazyQuery>;
export type MediaSearchQueryResult = Apollo.QueryResult<IMediaSearchQuery, IMediaSearchQueryVariables>;