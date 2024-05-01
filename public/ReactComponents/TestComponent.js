
'use strict';

const e = React.createElement;

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

	render() {
		if(this.props.display == true)
		{
		return(
			<div>
				<p>Hello World</p>
				<button>click me</button>
			</div>
		);
		}
		else
		{
			return(null);
		}
		
  }
}


