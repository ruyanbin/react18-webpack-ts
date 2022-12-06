/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 20:23:07
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-06 09:38:27
 * @FilePath: /react18-webpack-ts/src/layout/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import "./index.css"
import { Layout,Button } from 'antd';
import MenuComponent from "./component/Menu"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
export default function LayoutIndex() {
    const { Header, Footer, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
    return (
        <Layout className='wrapper'>
            <Sider collapsed={collapsed} >
            <MenuComponent/>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>
                <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
                    <Outlet />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
}
