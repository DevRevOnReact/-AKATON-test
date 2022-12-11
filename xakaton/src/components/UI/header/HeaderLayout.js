import React, {Component} from 'react'
import Drawer from "../../Navigation/Drawer/Drawer";
import Header from "./Header";

class HeaderLayout extends Component {

    state = {
        menu: false
    }


    menuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
    return (
        <div>
        <Header />
        <div>
            <Drawer
                isOpen={this.state.menu}
                onClose={this.menuCloseHandler}
            />
            {/*<MenuToggle*/}
            {/*    onToggle={this.toggleMenuHandler}*/}
            {/*    isOpen={this.state.menu}*/}
            {/*/>*/}
            <main>
                { this.props.children }
            </main>
        </div>
        </div>
    );
    }
};

export default HeaderLayout;
