import React from 'react';

class ListItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const listItem = this.props.li;
        return (
            <tr>
                <td>{listItem.id}</td>
                <td>{listItem.name}</td>
                <td>{listItem.breed}</td>
            </tr>
        );
    }
}

export default ListItem;