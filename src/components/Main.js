import React,{ Component } from 'react';
import sampleUser1 from '../images/sampleUser1.jpg'
import Posts from './Posts'

class Main extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            posts: [],
           isOpened: false,            
        }
       
    }

    componentDidMount()
    {
        this.getAllPosts();
    }

    getAllPosts = () => {
        fetch('https://jsonstorage.net/api/items/14daec1e-b95e-4608-85dc-ac235836b0eb')
            .then( res => res.json() )
            .then( res => this.setState({
                posts: res.data
            }))
            .catch( err => console.log(err) )
    }
    
    
    renderPosts = ({id, name, user_image, location, text}) => {
        return (
            <Posts 
            id={id} 
            name={name} 
            user_image={user_image} 
            location={location} 
            text={text}
            />
        )
    }

    render(){

        const { posts } = this.state;

        return (
            <>
            <div className="container">

                <div className="row">                    
                    {posts.map(this.renderPosts)}                                    
                </div>

            </div>
            </>
        )
    }
}

export default Main