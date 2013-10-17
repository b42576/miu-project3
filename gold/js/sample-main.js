$('#home').on('pageinit', function(){
	//code needed for home page goes here
});

$('#home').on('pageinit', function () {

    var myForm = $('#pricebookForm');
    myForm.validate({
        rules: {
            location:{required:true},
            productBrand: {required:true},
            productName: {required:true},
            datePurchased: {required:true,date:true},
            price: {required:true,number:true}
        },
        messages: {
            location: "Please select a store",
            productBrand: "Please enter the brand name of the product",
            datePurchased: "A date is required."
        },
        invalidHandler: function (form, validator) {
        },
        //errorPlacement: function (error, element) {
        //    error.appendTo(element.parent("div").previous("label"));
        //},
        submitHandler: function () {
            var data = myForm.serializeArray();
            storeData(data);
        }
    });

    //any other code needed for addItem page goes here

});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function (data) {
    var id = Math.floor(Math.random()*100000001);
    var info=JSON.stringify(data);
    localStorage.setItem(id, info);
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


