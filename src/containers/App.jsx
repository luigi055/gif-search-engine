import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import GifList from '../components/GifList';
import Search from '../components/Search';
import GifModal from '../components/GifModal';

// `http://api.giphy.com/v1/gifs/search?q=$(encodeURIComponent(term))&api_key=dc6zaTOxFJmzC`

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gifs, requestGifs, openModal, closeModal, modalIsOpen, selectedGif  } = this.props;
    return (
      <div>
        <Search onTermChange={requestGifs} />
        <GifList
          gifs={this.props.gifs}
          onGifSelect={selectGif => openModal(selectGif)}
        />
        <GifModal 
          modalIsOpen={modalIsOpen}
          selectedGif={selectedGif}
          onRequestClose={() => closeModal()}
        />
      </div>
    );
  }
}

App.defaultProps = {
  gifs: [],
};

App.propTypes = {
  gifs: React.PropTypes.array,
};

function mapStateToProps(state) {
  return {
    gifs: state.gifs.data,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif,
  };
}

export default connect(mapStateToProps, actions)(App);
