var recipes={food:"bread"};
function updateObjectWithKeyAndValue(object,key,value){
   return Object.assign({},object,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object['prop2']=2
  return object
}
function deleteFromObjectByKey(object,Key) {
 delete key;
  return Object.assign({},object)
  
}