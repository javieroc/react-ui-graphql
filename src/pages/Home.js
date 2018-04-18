import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Hero from '../components/Hero/Hero';
import Placelist from '../components/Placelist/Placelist';

const PlaceQuery = gql`
  query Places($cursor: String, $first: Int) {
    places(
      cursor: $cursor
      first: $first
    ) {
      total
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
  <Query query={PlaceQuery} notifyOnNetworkStatusChange>
    {({ data: { places }, loading, fetchMore }) => (
      <div>
        <Hero />
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
                const { total, pageInfo, __typename } = fetchMoreResult.places;

                return newEdges.length
                  ? {
                      places: {
                        __typename,
                        total,
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
