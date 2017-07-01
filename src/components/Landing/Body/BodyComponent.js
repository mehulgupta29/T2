import React from 'react';
import {connect} from 'react-redux';
import CreateBet from './CreateBet';
import TreatsBoard from './TreatsBoard';
// import {Responsive, WidthProvider} from 'react-grid-layout';
// const ResponsiveReactGridLayout = WidthProvider(Responsive);
// var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
//
// var WidthProvider = require('react-grid-layout').WidthProvider;
// var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
// ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

class BodyComponent extends React.Component {

  constructor(props){
    super(props);

    // {lg: layout1, md: layout2, ...}
    const layouts = {
      lg: [
        {i: 'createBet', x: 0, y: 0, w: 6, h: 10, static: false},
        {i: 'treatsBoard', x: 6, y: 0, w: 6, h: 10, static: false}
      ],
      md: [
        {i: 'createBet', x: 0, y: 0, w: 5, h: 5, static: true},
        {i: 'treatsBoard', x: 0, y: 5, w: 5, h: 5, static: true}
      ]
    };

    this.state = {
      layout: layouts,
      breakpoints: {lg: 1000, md: 800},
      cols: {lg: 12, md: 10},
      width: 1200,
      rowHeight: 30
    };
  }

  onLayoutChange(layout, allLayouts) {
    console.log("onLayoutChange: ",layout, allLayouts);
    // this.props.onLayoutChange(layout);
    this.setState({layout: allLayouts});
  }

  render() {
    const {layout, breakpoints, cols, width, rowHeight} = this.state;
    return (
      <ResponsiveReactGridLayout className="layout"
                                 layouts={layout}
                                 breakpoints={breakpoints}
                                 cols={cols}
                                 width={width}
                                 rowHeight={rowHeight}
                                 onLayoutChange={(layout, allLayouts) => this.onLayoutChange(layout, allLayouts)}
      >
        <CreateBet key={"createBet"} {... this.props}/>
        <TreatsBoard key={"treatsBoard"} {... this.props}/>
      </ResponsiveReactGridLayout>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(BodyComponent);

const styles = {
  bodyRoot: {
    backgroundColor: '#c3ddff',
    height: '90vh'
  }
};
