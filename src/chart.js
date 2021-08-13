import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';

export default class chart extends Component {
	constructor(props) {
		super(props);
		this.divRef = React.createRef();
	}

	shouldComponentUpdate() {
		return false;
	}

	componentDidMount() {
		this.chart = new OrgChart(this.divRef.current, {
			nodes: this.props.nodes,
			enableDragDrop: true,
			// direction: 'r2l',
			// direction: 'l2r',
			// direction: 'b2t',
			enableSearch: false,
			nodeMenu: {
				details: { text: "Details" },
				edit: { text: "Edit" },
				add: { text: "Add" },
				remove: { text: "Remove" },	 
			},
			nodeBinding: {
				field_0: "name",
				field_1: "title",
				img_0: "img"
			}
		});
		console.log("ALL NODES",this.props.nodes);
		console.log("Selected Nodes",  );
	}

	render() {
		return (
			<div id="tree" ref={this.divRef}></div>
		);
	}
}