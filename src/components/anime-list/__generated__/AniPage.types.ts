import * as Types from '../../../graphql/__generated__/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type IGetAnimesQueryVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>;
  perPage?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type IGetAnimesQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', media?: Array<{ __typename?: 'Media', id: number, description?: string | null, title?: { __typename?: 'MediaTitle', english?: string | null, romaji?: string | null } | null, coverImage?: { __typename?: 'MediaCoverImage', large?: string | null } | null } | null> | null } | null };


export const GetAnimesDocument = gql`
    query GetAnimes($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(sort: POPULARITY_DESC) {
      id
      title {
        english
        romaji
      }
      coverImage {
        large
      }
      description
    }
  }
}
    `;

/**
 * __useGetAnimesQuery__
 *
 * To run a query within a React component, call `useGetAnimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnimesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useGetAnimesQuery(baseOptions?: Apollo.QueryHookOptions<IGetAnimesQuery, IGetAnimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IGetAnimesQuery, IGetAnimesQueryVariables>(GetAnimesDocument, options);
      }
export function useGetAnimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IGetAnimesQuery, IGetAnimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IGetAnimesQuery, IGetAnimesQueryVariables>(GetAnimesDocument, options);
        }
export type GetAnimesQueryHookResult = ReturnType<typeof useGetAnimesQuery>;
export type GetAnimesLazyQueryHookResult = ReturnType<typeof useGetAnimesLazyQuery>;
export type GetAnimesQueryResult = Apollo.QueryResult<IGetAnimesQuery, IGetAnimesQueryVariables>;