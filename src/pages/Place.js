import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PlaceDetail from '../components/Place/PlaceDetail';

const PlaceQuery = gql`
query Place($id: ID!) {
  place(
    id: $id
  ) {
    _id
    name
    description
    address
    phone
    photos
    rating
    location {
      lat
      lng
    }
  }
}
`;

const Place = ({ match: { params: { placeId } } }) => (
  <Query query={PlaceQuery} variables={{ id: placeId }}>
    {({ loading, error, data: { place } }) => {
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <PlaceDetail place={place} />
      );
    }}
  </Query>
);

export default Place;
