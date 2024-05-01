
'use strict';

const e = React.createElement;

class ColorChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "purple"};
  }

	render() {
		return(
			<div style={{backgroundColor: this.state.color}}>
				<p>Pick a color</p>
				
				<input type="radio" name="color" id="red" value="red" onInput={() => {this.state.color = "red"; reRender();}}/>
				<label htmlFor="red">Red</label>
				
				<input type="radio" name="color" id="blue" value="blue" onInput={() => {this.state.color = "blue"; reRender();}}/>
				<label htmlFor="blue">Blue</label>
				
				<input type="radio" name="color" id="green" value="green" onInput={() => {this.state.color = "green"; reRender();}}/>
				<label htmlFor="green">Green</label>
				
				<TestComponent display={false}/>
			</div>
			
		);
  }
}

function reRender()
{
	root.render(e(ColorChooser));
	console.log("rendering");
}


const domContainer = document.querySelector('#react-div');
const root = ReactDOM.createRoot(domContainer);
root.render(e(ColorChooser));
