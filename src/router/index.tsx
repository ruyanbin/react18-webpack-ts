/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 20:20:04
 * @LastEditors: ru ru@qq.com
 * @LastEditTime: 2022-12-06 18:29:49
 * @FilePath: /react18-webpack-ts/src/router/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Navigate, useRoutes } from "react-router-dom";
import Global from './module/global'
import Baisc from './module/basic'
import { RouteObject} from "@/router/interface";
import {routerRecursive} from "@/utils/utils"
export const rootRouter:RouteObject[]=[
    {
        path:"/",
        element:<Navigate to="/login"/>
    },
    ...Global,
    ...Baisc
]

export const routerArr=routerRecursive(rootRouter)
export const Router = ()=>useRoutes(rootRouter)