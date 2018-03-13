import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Hero from '../components/Hero/Hero';
import Spotlist from '../components/Spot/Spotlist';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <Hero />
      <Spotlist />
    </div>
  );
};

const SpotQuery = gql`
  query Spots($cursor: String, $first: Int) {
    spots(
      cursor: $cursor
      first: $first
    ) {
      total
      edges {
        cursor
        node {
          _id
          name
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const SpotsQueryOptions = {
  props({ data: { loading, spots, fetchMore } }) {
    return {
      loading,
      spots,
      loadMoreSpots: () => fetchMore({
        query: SpotQuery,
        variables: {
          cursor: spots.pageInfo.endCursor,
          first: 3,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEdges = fetchMoreResult.spots.edges;
          const { total, pageInfo, __typename } = fetchMoreResult.spots;
          return newEdges.length ? {
            __typename,
            total,
            edges: [...previousResult.spots.edges, ...newEdges],
            pageInfo,
          } : previousResult;
        },
      }),
    };
  },
};

const HomeWithData = graphql(SpotQuery, SpotsQueryOptions)(Home);

export default HomeWithData;
