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

  addTrendGraph = () => {
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
        const trendGraphDOMNode = document
        .getElementsByClassName('trend-graph')[0]
        const iframe = trendGraphDOMNode.getElementsByTagName('iframe')[0];
        iframe.onload = () => {
          this.isNewIframe = false;
          this.isLoaded = true;                
          this.forceUpdate();
        };
        this.forceUpdate();
      });
    }
  };

  componentDidMount() {
    this.addTrendGraph();
  }

  componentDidUpdate() {
    this.addTrendGraph();
  }

  render() {
    const { isLoaded } = this;
    const isHidden = (isLoaded) ? '' : 'hidden';
    return (
      <div className="trend-viewer">
        <LoadingSpinner disabled={isLoaded} />
        <div className={`trend-graph ${isHidden}`} />
      </div>
    );
  }
}

export const TrendViewer = TrendViewerComponent;
