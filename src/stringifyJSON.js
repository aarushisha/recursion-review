// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:



   var stringifyJSON = function(obj) {
     if (typeof obj === 'string') {
       return ('"' + obj + '"');
     } else if (obj === null || typeof obj === 'number' || typeof obj === 'boolean') {
       return "" + obj;
     } else if (Array.isArray(obj)) {
       var resultArray = [];
       for (var i = 0; i < obj.length; i++) {
         resultArray.push(stringifyJSON(obj[i]));
       }
       return ("[" + resultArray.join("," ) + "]");
     } else if (typeof obj === 'object') {
       var resultObjectArray = [];
       for (var key in obj) {
        if (key !== 'undefined' && key !== 'functions') {
          var keyValPair = [];
         keyValPair.push(stringifyJSON(key));
         keyValPair.push(stringifyJSON(obj[key]));
         resultObjectArray.push(keyValPair.join(':'));
        }
      }
      return "{"+ resultObjectArray.join(",") + "}";
  }
}; 
