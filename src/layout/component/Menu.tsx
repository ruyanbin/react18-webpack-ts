/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 21:45:45
 * @LastEditors: ru ru@qq.com
 * @LastEditTime: 2022-12-06 18:42:12
 * @FilePath: /react18-webpack-ts/src/layout/component/Menu.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, useState,} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  MailOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import {routerArr} from "@/router"
import { RouteObject} from "@/router/interface";
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
    type,
  } as MenuItem;
}


const MenuComponent:FC=()=>{
  const {t} = useTranslation()
  const navigate=useNavigate()
  const [mode] = useState<'vertical' | 'inline'>('inline');
  const [key,setKey]=useState([])
  const items: MenuItem[] = [
    getItem(t('router.home'), 'home', <PieChartOutlined />),
    getItem(t('router.basic'), '2', <MailOutlined />, [
      getItem(t('router.echarts'), 'echart'),
    ]),
    // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //   getItem('Option 9', '9'),
    //   getItem('Option 10', '10'),
    //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    // ]),
  ];
  // console.log(routerArr,'routerArr')
  const onMenuClick=(e:any)=>{
    console.log(e,'e')
    
  setKey(e.keyPath)
  const findObj=routerArr.find((it)=>it.key&&it.key===e.key)
  if(findObj&&findObj.path){
    navigate(findObj.path)
  }
  }

    return (
      <Menu
      mode={mode}
        defaultSelectedKeys={key}
        defaultOpenKeys={key}
        onClick={onMenuClick}
        items={items}
      />
    )
}

export default MenuComponent