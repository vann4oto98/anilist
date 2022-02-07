import * as Types from '../../../graphql/__generated__/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type IMediaQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type IMediaQuery = { __typename?: 'Query', Media?: { __typename?: 'Media', id: number, bannerImage?: string | null, description?: string | null, title?: { __typename?: 'MediaTitle', romaji?: string | null, english?: string | null, native?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null } | null };


export const MediaDocument = gql`
    query media($id: Int) {
  Media(id: $id) {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
      large
    }
    bannerImage
    description
  }
}
    `;

/**
 * __useMediaQuery__
 *
 * To run a query within a React component, call `useMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMediaQuery(baseOptions?: Apollo.QueryHookOptions<IMediaQuery, IMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMediaQuery, IMediaQueryVariables>(MediaDocument, options);
      }
export function useMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMediaQuery, IMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMediaQuery, IMediaQueryVariables>(MediaDocument, options);
        }
export type MediaQueryHookResult = ReturnType<typeof useMediaQuery>;
export type MediaLazyQueryHookResult = ReturnType<typeof useMediaLazyQuery>;
export type MediaQueryResult = Apollo.QueryResult<IMediaQuery, IMediaQueryVariables>;