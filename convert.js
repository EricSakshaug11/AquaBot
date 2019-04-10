exports.convert(arg){
	arg = arg.toLowerCase();
	arg.replace(/\s/g,''); //Remove all whitespace from the input string
	var value = arg.parseFloat();
	if(value.isNaN()){
		return "Error: Conversion requires a number!";
	}else if(arg.includes("fl oz") || arg.includes("fluid ounces")){
		return "Converted: " + value + "fl oz to: " + convertFlOzToL(value) + "l";
	}else if(arg.includes("lbs") || arg.includes("pounds")){
		return "Converted: " + value + "lbs to: " + convertLbsToKG(value) + "kg";
	}	
	else if(arg.includes("l") || arg.includes("g") || arg.includes("m") || arg.includes("liter") || arg.includes("gram") || arg.includes("meter")){
		arg = convertToBaseUnits(arg, value);
	}else if(arg.includes("l") || arg.includes("liter") || arg.includes ("litre"){ //because the English spell it weird.
		var out = 
		//TODO: Logic to pick between gallon, fl oz, tbsp, or tsp for output.
	}else{
		return "Error: invalid base units detected. Please see info page for base unit formatting.";
	}
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
