import _ from 'lodash'

export default function solution(content){
  // BEGIN
 const data = content.split('\n').flatMap((el)=>el != '' ? [el] : []).slice(1)
 console.log(`Count: ${data.length}`)
 const cities = _.uniq(data.map((el)=>el.split(',')).map((el)=>el[7]))
 console.log(`Citiles: ${cities.sort().join(' ,')}`)
 const humidity = data.map((el)=>el.split(',')).map((el)=>el[3])
 console.log(`Humidity: Min: ${Math.min(...humidity)}, Max: ${Math.max(...humidity)} `)
 const hottestDay = data.map((el)=>el.split(',')).sort((a,b) =>b[1] -a[1])
 console.log(`HottestDay: ${hottestDay[0][0]} ${hottestDay[0][7]}`)
 const temCity = {}
 data.map((el)=>el.split(',')).map(([,max,,,,,,name])=>{temCity[name] === undefined ? temCity[name] = Number(max) : temCity[name] +=Number(max)})
 console.log(`HottestCity: ${Object.entries(temCity).sort((a,b)=>b[1]-a[1])[0][0]}`) 
 // END

}