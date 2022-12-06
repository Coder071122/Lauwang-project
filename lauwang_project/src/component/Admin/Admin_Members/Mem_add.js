import React from "react";


class Mem_add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title:"",
        number:""
    }
  }

  isChange = (event) =>{
      const name = event.target.name;
      const value = event.target.value;

      this.setState({
        [name]:value
      });
      var item={};
      item.title = this.state.title;
      item.number = this.state.number;
  }
  render(){
    return (
    <>
          <form className="form-container">
                <input
                      type="text"
                      placeholder="Họ và tên"
                      name="title"
                      className="input-text"
                      onChange={(event) => this.isChange(event)}
                  />
                <input
                      type="text"
                      placeholder="Số điện thoại"
                      name="number"
                      className="input"   
                      onChange={(event) => this.isChange(event)}
                  />
                  <div>
                    <button type="reset" className="btn-submit" onClick={(title,number)=> this.props.add(this.state.title,this.state.number)} value="Luu">Lưu</button>
                  </div>
          </form>
    </>
    );
  }
}
export default Mem_add;