// If you can see 'Hello, World!' in the console, then you can remove this and replace it your code

// YOUR JS CODE GOES HERE

//I need to have an up to date by the minute time that i can use to determine time. will have to get that from API
//compare listed time against current time to determine color of textarea.
// var currentTime = moment().get("hour");
// console.log(currentTime);
// console.log("__________________________________");
// console.log(moment().format("h"));
// console.log(moment().format("kk"));

$("#currentDay").html(moment().format("llll"));
// var now = moment();
// console.log(moment().format("LLLL"));
// console.log("#nine".val());

// console.log($(this).val);
// var timeEl = document.getElementById("nine");
// var nine = $("#nine").val();
// console.log(nine);
// // console.log(document.getElementById("nine").value);
// console.log;
// // console.log(timeEl.innerText);

// console.log($("#nine").val());
// console.log($("#nine").attr("data-value"));
// console.log($("data-value"));
// var userInput = $("#textarea").val;
var mathTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var times = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < times.length; i++) {
	// var newRow = $("<div>");
	// newRow.addClass("time-block col-sm-2 text-center pt-2");
	// newRow.attr("data-value", times[i]);
	// newRow.text("this is the time " + times[i]);
	// $("#newDiv").append(newRow);
	var timeEl = $("<div>");
	timeEl.text(times[i]);
	timeEl.attr("data-value", mathTime[i]);
	timeEl.addClass("time-block hour col-sm-2 text-center pt-2 row");
	var textInput = $("<textarea>");
	textInput.addClass("h-50 description mx-auto col-sm-8 row");
	textInput.attr("id", "textInput-" + mathTime[i]);
	textInput.attr("rows", "1");
	textInput.attr("data-value", mathTime[i]);
	var saveBtn = $("<button>");
	saveBtn.text("save");
	saveBtn.attr("button save");
	saveBtn.attr("data-value", mathTime[i]);
	saveBtn.addClass("h-50 btn btn-primary col-sm-2 saveBtn text-wrap row");

	if (mathTime[i] == moment().format("kk")) {
		textInput.addClass("present");
	} else if (mathTime[i] < moment().format("kk")) {
		textInput.addClass("past");
	} else {
		textInput.addClass("future");
	}
	$("#newDiv").append(timeEl, textInput, saveBtn);
	// console.log("data-value");
}

// $("attr.save").on("click", function () {
// 	localStorage.set;
// });

$("button").on("click", function () {
	// console.log($(this).attr("data-value"));
	var btnNum = "#textInput-" + $(this).attr("data-value");
	// console.log(btnNum);
	// console.log($(btnNum).val());
	localStorage.setItem(btnNum, $(btnNum).val());
	// valueArr.push(btnNum);
});

// var valueArr = [];
// console.log(valueArr);
// console.log();
// console.log(localStorage);

function init() {
	for (var k = 0; k < mathTime.length; k++) {
		$("#textInput-" + mathTime[k]).text(
			localStorage.getItem("#textInput-" + mathTime[k])
		);
		console.log("#textInput-" + mathTime[k]);
	}
}
init();

//need to make a div class=container and div=row
//I need to make a div for time, textarea, and savebtn
//time dive needs class col-sm-2, text center, pt-2 time-block
//time needs inner html equal to i with additional math to work in timeMath
//textarea needs to default, and save to local storage
//textarea need class h-50, form control, and col-sm-8
// save button needs a .on("hover")attr and functionality
//button needs type=button class=h-50, btn, btn-primary, col-sm-2 saveBtn, and text-wrap
// this loop needs to create 8 rows
//need to add data-value to textarea and button that corilate so I can use that with local storage
//
