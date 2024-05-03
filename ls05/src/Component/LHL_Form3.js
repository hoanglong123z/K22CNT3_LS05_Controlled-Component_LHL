import React, { Component } from 'react'

class LHL_Form3 extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:'Hoàng Long',
            Age:20,
            course:'Css'
        }
    }
    handleChange = (ev)=>{
        let name =ev.target.name;
        let val = ev.target.value;
        this.setState({
            [name]:val
        })
    }
    handleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.studentName+"\n" +this.state.Age +"\n"+this.state.course)
        let obj = {
            studentName:this.state.studentName,
            Age:this.state.Age,
            course:this.state.course
        }
        //gửi dữ liệu lên App
        this.props.onSubmit(obj)
    }
  render() {
    return (
      <div>
        <form name='lhlform'>
        <div>
                <label>Họ Và Tên:</label>
                <input name='studentName' value={this.state.studentName}
                onChange={this.handleChange}/>
            </div>
            <div>
                <label>Tuổi:</label>
                <input name='Age' value={this.state.Age}
                onChange={this.handleChange}/>
            </div>
            <div>
            <label>Chọn Khóa Học</label>
            <select value={this.state.course} name='course' onChange={this.handleChange}>
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='JS'>JS</option>
                <option value='REACTJS'>REACTJS</option>
            </select>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default LHL_Form3;
