import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Hero from '../components/Hero/Hero';
import Placelist from '../components/Placelist/Placelist';

const PlaceQuery = gql`
  query Places($cursor: String, $first: Int, $filter: String) {
    places(
      cursor: $cursor
      first: $first
      filter: $filter
    ) {
      edges {
        cursor
        node {
          _id
          name
          address
          phone
          photos {
            src
            width
            height
          }
          rating
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const HomeWithData = () => (
  <Query query={PlaceQuery} variables={{ first: 10 }} notifyOnNetworkStatusChange>
    {({
      data: { places }, loading, fetchMore, refetch,
      }) => (
        <div>
          <Hero refetch={refetch} />
          <Placelist
            loading={loading}
            places={places || {}}
            loadMorePlaces={() =>
            fetchMore({
              variables: {
                cursor: places.pageInfo.endCursor,
                first: 3,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const newEdges = fetchMoreResult.places.edges;
                const { pageInfo, __typename } = fetchMoreResult.places;

                return newEdges.length
                  ? {
                      places: {
                        __typename,
                        edges: [...previousResult.places.edges, ...newEdges],
                        pageInfo,
                      },
                    }
                  : previousResult;
              },
            })
          }
          />
        </div>
    )}
  </Query>
);

export default HomeWithData;
