const { Console } = require('console');
var testData = require('../testData/GQLtestData.json');
exports.JsonUtil = class JsonUtil {
    
     getTestData(testid){
        var i=0;
        var oData;
        while(i<testData.length){
            if(testData[i].dataId==testid){                
                oData = testData[i]
                break;
            }
            i++;
        }
        return oData;

    }

}