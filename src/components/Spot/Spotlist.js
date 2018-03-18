import React, { Component } from 'react';
import { HashLoader } from 'react-spinners';
import SpotCard from './SpotCard';
import './Spotlist.css';

class Spotlist extends Component {
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
    const { hasNextPage } = this.props.spots.pageInfo;

    if (
      (window.scrollY + window.innerHeight + 50 >= document.body.offsetHeight) &&
      !loading &&
      hasNextPage
    ) {
      this.props.loadMoreSpots();
    }
  }

  render() {
    const { spots, loading } = this.props;

    let list = [];
    if (spots) {
      list = spots.edges.map(({ node }) => <SpotCard key={node._id} {...node} />);
    }
    return (
      <div>
        <div className="spotlist">
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

export default Spotlist;
