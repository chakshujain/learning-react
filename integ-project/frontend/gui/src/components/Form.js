import React, { Component } from 'react'
import {Form,Button,Input} from 'antd'
import axios from 'axios'

const FormItem = Form.Item

class CustomForm extends Component {
   
    handleFormSubmit = (event,reqType,articleID)=>{

        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        switch(reqType){
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/',{title:title,content:content})
                        .then(res=> {console.log(res);window.location.reload()})
                        .catch(err=>{console.log(err);window.location.reload()})
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`,{title:title,content:content})
                        .then(res=> {console.log(res);window.location.reload()})
                        .catch(err=>{console.log(err);window.location.reload()})
        }   
        console.log(title,content);
    }

    render() {
        return (
            <div>
                <Form onSubmitCapture = {(event)=> this.handleFormSubmit(event,this.props.reqType,this.props.articleID)}>
                    <FormItem label = "Title">
                        <Input name = "title" placeholder = "Put a title here"/>
                    </FormItem>
                    <FormItem label = "Content">
                        <Input name = "content" placeholder = "Put content here"/>
                    </FormItem>
                    <FormItem>
                        <Button type = "primary" htmlType="submit">{this.props.btnText}</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default CustomForm
