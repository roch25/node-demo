import React from 'react';
import ListItem from './ListItem'

class AnimalList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.list;
        let keys;
        list.map((item) => {
            keys = Object.keys(item); // issue*
            keys.map(item => {
                console.log(item);
            })
        })
        return (
            <ul> 
                <table className = 'table'>
                    <thead>
                    {
                        keys.map(item => (<th>{item}</th>)) // issue*
                    }
                    </thead>
                    <tbody>
                    {list.map(item => (<ListItem li = {item}/>))}   
                    </tbody>
                </table>
            </ul>
        );
    }
}   

export default AnimalList;