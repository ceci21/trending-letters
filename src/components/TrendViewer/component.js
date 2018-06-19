import React from 'react';
import { LoadingSpinner } from '../LoadingSpinner';
import { embedTrendViewer } from '../../lib';

import './styles.css';

class TrendViewerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
    this.lastSelectedLetters = this.props.selectedLetters.slice();
    this.isNewIframe = false;
    this.isLoaded = false;
    this.flag = false;
  }

  // shouldComponentUpdate() {
  //   if (this.isNewIframe && this.state.isLoaded) {
  //     this.setState({ isLoaded: false });
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    const { reloadHandler } = this;
    let { lastSelectedLetters, isLoaded } = this;
    const { selectedLetters } = this.props;
    if (
      selectedLetters.length >= 0 &&
      lastSelectedLetters !== selectedLetters
    ) {
      this.lastSelectedLetters = selectedLetters;
      embedTrendViewer(selectedLetters, message => {
        this.isNewIframe = true;
        this.isLoaded = false;
        const iframe = document
          .getElementsByClassName('trend-graph')[0]
          .getElementsByTagName('iframe')[0];
        iframe.onload = () => {
          this.isNewIframe = false;
          this.isLoaded = true;
          this.forceUpdate();
        };
        this.forceUpdate();
      });
    }

    return (
      <div className="trend-viewer">
        <LoadingSpinner disabled={isLoaded} />
        <div className="trend-graph" ref={this.trendGraphRef} />
      </div>
    );
  }
}

export const TrendViewer = TrendViewerComponent;

// if (iframe) {
//   iframe.onload = () => {
//     this.setState({ hasLoaded: true });
//   };
// }

// if (!hasStarted && iframe && iframe.nodeType === 'iframe') {
//   this.setState({ hasStarted: true })
// }

// if (iframe && iframe.readyState !== 'complete' && this.state.isLoaded) {
//   this.setState({ isLoaded: false });
// }

// if (isLoaded) {

// }

// embedTrendViewer(selectedLetters, () => {
//   // when iframe is added to trendviewer element, check if iframe is loaded
//   trendViewerDOMElement.
// });

// let firstChild;
// let iframe;
// let spinner;
// let children = [];

// if (trendViewerDOMElement) {
//   children = trendViewerDOMElement.childNodes;
//   if (children.length > 0) {
//     for (let i = 0; i < children.length; i++) {
//       children[i];
//     }
//   }
// }

// shouldComponentUpdate = () => {
//   const { reloadHandler } = this;
//   const { hasStarted, isLoaded } = this.state;
//   const { selectedLetters } = this.props;
//   const trendViewerDOMElement = document.getElementsByClassName(
//     'trend-viewer'
//   )[0];

//   // if trend-viewer dom element has been loaded:
//   if (trendViewerDOMElement) {
//     const iframe = trendViewerDOMElement.firstChild;
//     // if trend-viewer has not loaded an iframe yet:
//     if (!iframe && selectedLetters.length <= 0) {
//       // do nothing
//       // return false;
//     }
//     if (!iframe && selectedLetters.length > 0) {
//       // return true;
//     }
//     // if iframe has loaded and is indeed an iframe
//     if (iframe && iframe.nodeType === 'iframe') {
//       // add spinner
//       return true;
//     }
//   }
// };
