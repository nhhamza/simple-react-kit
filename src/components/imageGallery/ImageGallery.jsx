import React from 'react';

import ImageGallery from 'react-image-gallery';
import ReactPlayer from 'react-player';

import 'react-image-gallery/styles/css/image-gallery.css';

const PREFIX_URL =
  'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

class Gallery extends React.Component {
  // TODO: CHANGE TO STATELESS COMPONENT AND DO TESTS.
  constructor() {
    super();
    this.state = {
      slideDuration: 450,
      slideInterval: 2000,
      showVideo: {},
    };
    this.onSlide = this.onSlide.bind(this);
    this.images = [
      {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        original: `${PREFIX_URL}4v.jpg`,
        embedUrl:
          'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
        renderItem: this.renderVideo.bind(this),
      },
      {
        original: `${PREFIX_URL}image_set_default.jpg`,
        thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
        imageSet: [
          {
            srcSet: `${PREFIX_URL}image_set_cropped.jpg`,
            media: '(max-width: 1280px)',
          },
          {
            srcSet: `${PREFIX_URL}image_set_default.jpg`,
            media: '(min-width: 1280px)',
          },
        ],
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
      },
    ];
  }

  onSlide() {
    this.resetVideo();
  }

  resetVideo() {
    this.setState({ showVideo: {} });
  }

  toggleShowVideo(url) {
    this.state.showVideo[url] = !this.state.showVideo[url];
    this.setState({
      showVideo: this.state.showVideo,
    });
  }

  renderVideo(item) {
    return (
      <div>
        {this.state.showVideo[item.embedUrl] ? (
          <div className="video-wrapper">
            <a
              className="close-video"
              onClick={this.toggleShowVideo.bind(this, item.embedUrl)}
            ></a>
            <ReactPlayer url="https://vimeo.com/261837680" playing />
          </div>
        ) : (
          <a onClick={this.toggleShowVideo.bind(this, item.embedUrl)}>
            <div className="play-button"></div>
            <img className="image-gallery-image" src={item.original} alt="" />
            {item.description && (
              <span
                className="image-gallery-description"
                style={{ right: '0', left: 'initial' }}
              >
                {item.description}
              </span>
            )}
          </a>
        )}
      </div>
    );
  }

  render() {
    return (
      <ImageGallery
        items={this.images}
        onSlide={() => this.onSlide()}
        showBullets={false}
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={this.state.slideDuration}
        slideInterval={this.state.slideInterval}
        additionalClass="app-image-gallery"
      />
    );
  }
}

export default Gallery;
