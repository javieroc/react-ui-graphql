import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Hero from '../components/Hero/Hero';
import Placelist from '../components/Place/Placelist';

const Home = props => (
  <div>
    <Hero />
    <Placelist {...props.placeQuery} />
  </div>
);

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
          photos
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

const PlaceQueryOptions = {
  options: {
    notifyOnNetworkStatusChange: true,
  },
  props({ data: { loading, places, fetchMore } }) {
    return {
      placeQuery: {
        loading,
        places,
        loadMorePlaces: () => fetchMore({
          query: PlaceQuery,
          variables: {
            cursor: places.pageInfo.endCursor,
            first: 3,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.places.edges;
            const { total, pageInfo, __typename } = fetchMoreResult.places;
            return newEdges.length ? {
              places: {
                __typename,
                total,
                edges: [...previousResult.places.edges, ...newEdges],
                pageInfo,
              },
            } : previousResult;
          },
        }),
      },
    };
  },
};

const HomeWithData = graphql(PlaceQuery, PlaceQueryOptions)(Home);

export default HomeWithData;
