/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 20:21:58
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-12-06 10:28:27
 * @FilePath: /react18-webpack-ts/src/views/home/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {
  Button,
  DatePicker,
  Pagination,
  Popconfirm,
  Select,
  TimePicker,
} from 'antd';
import { useTranslation,Trans } from 'react-i18next';
export default function Home() {
  const { t, i18n } = useTranslation();
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
