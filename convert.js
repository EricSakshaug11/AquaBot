var convert = require('convert-units');

exports.convert(arg){
	arg = arg.toLowerCase();
	arg.replace(/\s/g,''); //Remove all whitespace from the input string
  
}

convertToBaseUnits(inUnit, inValue){
	
}

convertLbsToKG(inValue){
	return inValue / 2.205;
}

convertFlOzToL(inValue){
	return inValue / 33.814;
}

convertLiter(){
	
};
