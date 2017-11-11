import React, { Component } from 'react';
import Search from './Search.js';
import PastSearches from './PastSearches.js';


class Sidebar extends Component {


  render() {
    return (
      <div style={{maxWidth: '40%', height: 'auto', background: 'red', marginLeft: '30px', padding: '20px'}}>
        <Search getSearchResult={this.props.getSearchResult} goToFavorites={this.props.goToFavorites}/>
        <PastSearches searchRequest={this.props.searchRequest} pastSearches={this.props.pastSearches} handleRemovePastSearch={this.props.handleRemovePastSearch} pastSearchClick={this.props.pastSearchClick}/>
      </div>
    );
  }
}

export default Sidebar;
