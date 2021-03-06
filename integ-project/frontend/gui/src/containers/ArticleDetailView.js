import React, { Component } from 'react'
import axios from 'axios'
import {Card,Button} from 'antd'
import CustomForm from '../components/Form'
class ArticleDetail extends Component {

    state = {
        article: {}
    }

    componentDidMount(){
        const articleID = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res =>{
                this.setState({
                    article:res.data
                })
                
            })
            .catch(err => console.log(err))
    }
    handleDelete = (event)=>{
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
                .then(res=>console.log("Deleted"))
                .catch(err=>console.log(err))
        this.forceUpdate();
        this.props.history.push('/')

    }
 
    render() {
        return (
            <div>
                <Card title = {this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <h2>Update the Form</h2>
                    <CustomForm reqType = 'put' articleID = {this.props.match.params.articleID} btnText = "Update"/>
                <form onSubmit = {this.handleDelete}>
                    <Button type = "danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}

export default ArticleDetail;
