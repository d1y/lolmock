const fs = require("fs")

const fetch = require("node-fetch")

const qjobs = require("qjobs")

const infos = require("./hero_list.json")

const createHeroInfoAPI = (id)=> `https://game.gtimg.cn/images/lol/act/img/js/hero/${ id }.js`

const heros = infos.hero

const heroSize = heros.length

const q = new qjobs({maxConcurrency:1})

let result = []

heros.map(item=> {
  q.add(async (args, next)=> {
    const item = args[0]
    const id = item['heroId']
    const api = createHeroInfoAPI(id)
    console.log("正在下载: ", item.name, id)
    const resp = await fetch(api)
    const data = await resp.json()
    result.push(data)
    next()
  }, [ item ])
})

q.on('start',function() {
  console.log('Starting ...')
})

q.on('end',function() {
  console.log('... All jobs done')
  fs.writeFileSync("1.js", JSON.stringify(result), "utf-8")
})

q.run()