import React from 'react';
import ListItem from './ListItem'

class AnimalList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.list;
        console.log(list);
        return (
            <ul> 
             <table className = 'table'>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Breed</th>
                </tr>
                {list.map(item => (<ListItem li = {item}/>))}   
            </table>
            </ul>
        );
    }
}   

export default AnimalList;