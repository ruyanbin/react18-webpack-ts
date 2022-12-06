/*
 * @Author: ru ru@qq.com
 * @Date: 2022-12-06 18:16:39
 * @LastEditors: ru ru@qq.com
 * @LastEditTime: 2022-12-06 18:22:28
 * @FilePath: /react18-webpack-ts/src/utils/util.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RouteObject } from "@router/interface"
export const routerRecursive=(routes:RouteObject[],result:RouteObject[]=[])=>{
    // for(let key in routes){

    // }
    routes.forEach(item=>{
        if(item.children&&item.children.length){
            routerRecursive(item.children,result)
        } else {
            result.push(item)
        }

    })
    return result
}