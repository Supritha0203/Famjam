import React, {useState, useEffect, Component} from 'react'
import axios from 'axios';

export default class CreateAlbum extends Component{

  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this)
    this.onSubmission = this.onSubmission.bind(this);
    this.state = {
        profileImg: '',
        name:'',
        desc:''
    }
}
onFileChange(e) {
  this.setState({ profileImg: e.target.files[0] })
}
 onTextChange(e){
  this.setState({name:e.target.value})
  this.setState({desc:e.target.value})
 }
 
  
  async onSubmission (event){
    event.preventDefault()
    // const formData = new FormData()
    // formData.append('title',this.state.name)
    // formData.append('img', this.state.profileImg)
    // formData.append("description",this.state.desc)
    // console.log(formData)
    try{
       await axios.post('http://localhost:5000/createalbum',{
        
       title:this.state.name,
       img:this.state.profileImg,
       description:this.state.desc,
      } )
      .then((response)=>{
        console.log(response)
      })
    }
    catch(err){
      console.log(err)
    }
   }
  render(){
  return (
    <div className="container">
     <form >
     <div className="form-group">
    <label htmlFor="exampleInputEmail1">Album Name</label>
    <input type="text"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" required onChange={this.onTextChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Description</label>
    <input type="text"  className="form-control" id="exampleInputPassword1" placeholder="Describe the moment" required onChange={this.onTextChange}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlFile1">Select a representing pic</label>
    <br/>
    <input type="file" accept="image/*" onChange={this.onFileChange} className="form-control-file" id="exampleFormControlFile1" required/>
  </div>
  <button type="submit" onClick={this.onSubmission} className="btn btn-success">Submit</button>
  
</form>
    </div>
  )}
}

