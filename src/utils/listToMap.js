const listToMap = (list, keyField) =>
   list.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {});

   export default listToMap;