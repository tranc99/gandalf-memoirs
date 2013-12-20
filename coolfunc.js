var tripPaymentData = { total: 2, rows: [ {regionNumber: 10}, {regionNumber: 20}] };
function isSingleRegion() {
	if (tripPaymentData.total > 1) {
		var currentRegionNumber = $("#tv-region-number").html();  
		//check for same region
		for (i = 0; i < tripPaymentData.total; i++) {
			if (tripPaymentData.rows[i].regionNumber != currentRegionNumber) {
				return false;
			}	
		}
		return true;
	}
}


//call this function assign into a bool, if bool is false, set HTML to "Multiple Regions", through the fmt imperative

function setRegion() {

	var oneRegion = isSingleRegion();
	if (oneRegion == false) {
		$("#tv-region-number").html("...to the Machine!");
		$("#tv-region-number").css("background-color", "red")
	}
};


//function to set default date
function defaultDates() {
	var from = new Date();
	//from = from.addDays(frmOffset);
	//from.setHours(0, 0, 0, 0);
	return from;
}
