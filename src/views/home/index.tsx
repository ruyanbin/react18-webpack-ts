/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 20:21:58
 * @LastEditors: ru ru@qq.com
 * @LastEditTime: 2022-12-06 16:48:34
 * @FilePath: /react18-webpack-ts/src/views/home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {
  DatePicker,
  Pagination,
  Popconfirm,
  TimePicker,
} from 'antd';
import { useTranslation, } from 'react-i18next';
const Home=()=> {
  const { t } = useTranslation();
  return (
   <>
 <p>{t('hello')}</p>

   <hr />
     <div className="example">
        <Pagination defaultCurrent={1} total={50} showSizeChanger />
      </div>
      <div className="example">

        <DatePicker />
        <TimePicker />
      
      </div>
      <div className="example">
       
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </div>
   </>
  )
}

export default Home