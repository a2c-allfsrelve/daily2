import React from 'react';
import axios from 'axios';



class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            address:"",
            twitter:"",
            oshi:"",
            contact:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
        axios({
            method:'POST',
            url:'http://localhost:3000/contact/submit/',
            data:{name:this.state.name, address:this.state.address, twitter:this.state.twitter, oshi:this.state.oshi, contact:this.state.contact},
        }).then(response=>console.log(response.state));
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }
    render(){
    return(
        <div className="controls">
            {/* <form> */}
            <label className="contact_label" htmlFor="name">
                <p>お名前（必須）</p>
                <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label className="contact_label" htmlFor="address">
                <p>メールアドレス（必須）</p>
                <input type="text" name="address" id="address" value={this.state.address} onChange={this.handleChange}/>
            </label>
            <label className="contact_label" htmlFor="twitter" >
                <p>Twitterアカウント</p>
                <input type="text" name="twitter" id="teitter" value={this.state.twitter} onChange={this.handleChange}/>
            </label>
            <label className="contact_label" htmlFor="oshi">
                <p>推し</p>
                <input type="text" name="oshi" id="oshi" value={this.state.oshi} onChange={this.handleChange}/>
            </label>
            <label className="contact_label" htmlFor="otoiawase">
                <p>お問い合わせ内容（必須）</p>
                <textarea name="contact" id="otoiawase" value={this.state.contact} onChange={this.handleChange}></textarea>
            </label>
            <div className='sbm_button'>
                <button onClick={()=>this.handleSubmit()}>送信</button>
            </div>
            {/* </form> */}
        </div>
    )}
  }

  export default Contact