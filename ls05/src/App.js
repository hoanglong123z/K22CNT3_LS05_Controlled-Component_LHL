import React, { Component } from 'react'
import LHL_Form1 from './Component/LHL_Form1';
import LHL_Form2 from './Component/LHL_Form2';
import LHL_Form3 from './Component/LHL_Form3';

 class App extends Component {

  handleSubmit =(param)=>{
    console.log(param);
  }
  render() {
    return (
      <div>
        <h1>Event - Form - Controlled Component</h1>
        <div>
          <LHL_Form1/>
          <LHL_Form2/>
          <LHL_Form3 onSubmit={this.handleSubmit} />
        </div>
      </div>
    )
  }
}
export default App;