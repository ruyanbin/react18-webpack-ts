/*
 * @Author: ru ru@qq.com
 * @Date: 2022-12-06 16:59:39
 * @LastEditors: ru ru@qq.com
 * @LastEditTime: 2022-12-06 18:36:21
 * @FilePath: /react18-webpack-ts/src/router/interface/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface RouteObject {
	caseSensitive?: boolean;
	children?: RouteObject[];
	element?: React.ReactNode;
	key?:string;
	index?: any;
	path?: string;
	meta?: MetaProps;
	isLink?: string;
}
