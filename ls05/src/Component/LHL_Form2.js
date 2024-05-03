import React, { Component } from 'react'

 class LHL_Form2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            KhoaHoc:"CSS"
        }
    }
    //hàm xử lý sự kiện
    handleChange=(ev)=>{
        this.setState({
            KhoaHoc:ev.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        alert(this.state.KhoaHoc)
    }
  render() {
    return (
      <div>
        <form>
            <label>Chọn Khóa Học
            <select value={this.state.KhoaHoc} name='KhoaHoc' onChange={this.handleChange}>
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='JS'>JS</option>
                <option value='REACTJS'>REACTJS</option>
            </select>
            </label>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
export default LHL_Form2;