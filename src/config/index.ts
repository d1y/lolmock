/**
 * 获取英雄所有英雄列表`api`
 * ```ts
 *  const data = await fetch(HERO_LIST_API) as HeroList
 * ```
 */
export const HERO_LIST_API = `https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js`

/**
 * 生成英雄信息`api`路由
 * ```ts
 *  const api = createHeroInfoAPI(1) as any
 *  const resp = await fetch(api)
 * ```
 * @param id 英雄id
 * @returns 返回`api`路由
 */
export const createHeroInfoAPI = (id: number)=> `https://game.gtimg.cn/images/lol/act/img/js/hero/${ id }.js`