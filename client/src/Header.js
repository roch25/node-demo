import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
           <div className="header">
               <h3>Animals</h3>
                <ul>
                    <li>
                        <p onClick={() => this.props.display('doggos')}>Doggos</p>
                        <div className="navh"></div>
                    </li>
                    <li>
                        <p onClick={() => this.props.display('pandas')}>Pandas</p>
                        <div className="navh"></div>
                    </li>
                </ul>
           </div>
        );
    }
}

export default Header;