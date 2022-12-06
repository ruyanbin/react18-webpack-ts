/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-12-05 20:25:25
 * @LastEditors: ru ru@qq.com
 * @LastEditTime: 2022-12-06 18:37:19
 * @FilePath: /react18-webpack-ts/src/router/module/global.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import Login from "../../views/Login/index"
import { RouteObject} from "@/router/interface";
 const globalRouter:RouteObject[]=[
    {
        path:"/login",
        element:<Login/>,
        key:"login",
        meta:{
            title:"登录",
        
        }
    }
]
export default globalRouter