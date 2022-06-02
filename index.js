const isUnique =(str)=>{
  if(!str) return 'Se requiere string'
  if(str.lenght>128) return false
 
  let str_obj = {}
  for (let i = 0; i < str.length; i++) {
    if(str_obj[str[i]]){
      return false
    }
    str_obj[str[i]] = true
  }
  return true

}

module.exports = isUnique