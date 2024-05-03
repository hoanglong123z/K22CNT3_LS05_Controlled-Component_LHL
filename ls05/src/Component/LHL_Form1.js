import React, { Component } from 'react'

 class LHL_Form1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName: "Lê Hoàng Long"
        }
    }
    //hàm xử lý sự kiện
    handleChange = (ev)=>{
        //lấy giá trị khi thay đổi trên form
        let ten = ev.target.name;
        let gtri = ev.target.value;
        //cập nhật state
        this.setState({
            studentName:ev.target.value
        })
    }

    handleSubmit = (ev)=>{
        ev.preventDefault();
        //lấy giá trị mới  trong state
        alert(this.state.studentName)
    }
    render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Họ Và Tên:</label>
                <input name='studentName' value={this.state.studentName}
                onChange={this.handleChange}/>
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default LHL_Form1;