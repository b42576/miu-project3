var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function (data) {
    var id = Math.floor(Math.random() * 100000001);
    var info = JSON.stringify(data);
    console.log(data);
    localStorage.setItem(id, info);
    console.log(id);
    console.log(info);
    //window.location.reload();
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});

$('#home').on('pageinit', function () {

    var myForm = $('#pricebookForm');
    myForm.validate({
        errorElement: "label",
        rules: {
            location:{required:true},
            department:{required:true},
            productBrand: {required:true},
            productName: {required:true},
            productRating: {required:true},
            datePurchased: {required:true,dateISO:true},
            price: {required:true,number:true,minlength:3}
        },
        messages: {
            location: "You're going to want to remember what store you were in.",
            department: "This is for better clarification of what part of the store you were in.",
            productBrand: "Please enter the brand name of the product.",
            productName: "Take a look at some of the examples of the product names.",
            productRating: "How likely would you purchase this item again?",
            datePurchased: "Dates are required because dated prices may have gone up.",
            price: "Recording the prices will allow you to find the best price."
        },
        invalidHandler: function (form, validator) {
                var errors = validator.numberOfInvalids();
                if (errors) {
                    var message = errors == 1
                    ? 'You missed 1 field. It has been highlighted'
                    : 'You missed ' + errors + ' fields. They have been highlighted';
                    $("div.error span").html(message);
                    $("div.error").show();
                } else {
                    $("div.error").hide();
                }
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



