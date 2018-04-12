import React, { Component } from 'react';
import { HashLoader } from 'react-spinners';
import PlaceCard from './PlaceCard';
import './Placelist.css';

class Placelist extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll() {
    const { loading } = this.props;
    const { hasNextPage } = this.props.places.pageInfo;

    if (
      (window.scrollY + window.innerHeight + 50 >= document.body.offsetHeight) &&
      !loading &&
      hasNextPage
    ) {
      this.props.loadMorePlaces();
    }
  }

  render() {
    const { places, loading } = this.props;

    let list = [];
    if (places) {
      list = places.edges.map(({ node }) => <PlaceCard key={node._id} {...node} />);
    }
    return (
      <div>
        <div className="placelist">
          {list}
        </div>
        {
          loading ?
            <div className="sweet-loader">
              <HashLoader loading={loading} />
            </div> : null
        }
      </div>
    );
  }
}

export default Placelist;
