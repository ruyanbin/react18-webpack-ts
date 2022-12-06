/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 20:25:25
 * @LastEditors: ru ru@qq.com
 * @LastEditTime: 2022-12-06 18:36:59
 * @FilePath: /react18-webpack-ts/src/router/module/global.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { LayoutIndex } from "@/router/constant";
import lazyLoad from "@/router/utils/lazyLoad";
import Home from "@/views/home/index"
import { lazy } from "react";
import { RouteObject} from "@/router/interface";
 const basicRouter:RouteObject[]=[
    { 
        element:<LayoutIndex/>,
        children:[
            {
                path:"/home",
                element:<Home/>,
                key:"home",
                meta:{
                    title:"router.home",
                   
                }
            },
            {
                path:"/echart",
                element:lazyLoad(lazy(()=>import('@/views/basic/echart'))),
                key:"echart",
                meta:{
                    title:"router.echarts",
                    key:"echart"
                }
            }
        ]

    }
]
export default basicRouter