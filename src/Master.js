import React from "react";
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import 'antd/dist/antd.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Master = (props) => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
                    <Menu.Item key="2"><a href= "/about">About</a></Menu.Item>
                </Menu>
            </Header>
            <div>
                {props.children}
            </div>
        </Layout>
    )
}
export default Master;