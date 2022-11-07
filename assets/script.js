$(document).ready(function (){
    var datetime = new Date();
    console.log(datetime);
    document.getElementById("time").textContent = datetime;
    function refreshTime() {
        const timeDisplay = document.getElementById("time");
        const dateString = new Date().toLocaleString();
        const formattedString = dateString.replace(", ", " - ");
        timeDisplay.textContent = formattedString;
     }
        setInterval(refreshTime, 1000);

    var container = document.querySelector(".container");
    var blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var date = new Date();

    function isCurrentPastOrFuture(hour) {
        if (date.getHours() === hour) {
            return 1
         } else if (date.getHours() > hour) {
            return 2
         } else {
            return 3
        }
    }

    for (var i = 0; i< blocks.length; i++) {
     var wrapper = document.createElement("div");
     wrapper.setAttribute("class", "row timeblock");
     if (isCurrentPastOrFuture(blocks[i]) === 1) {
        wrapper.classList.add("present");
         } else if (isCurrentPastOrFuture(blocks[i]) === 2) {
        wrapper.classList.add("past");
        } else {
        wrapper.classList.add("future");
         }
    var block = document.createElement("div");
    var textBox = document.createElement('textArea');
    var saveBtn = document.createElement("Button")
    textBox.setAttribute("class", "description col-md-10");
    block.setAttribute("class", "hour col-md-1");
    block.setAttribute("id", "hour");
    saveBtn.setAttribute("class", "saveBtn col-md-1");
    block.textContent = moment(blocks[i], 'HH').format('h a');
    wrapper.appendChild(block);
    wrapper.appendChild(textBox);
    container.appendChild(wrapper);
    wrapper.appendChild(saveBtn);
   
    }
    $('.saveBtn').on('click', function() {
        var value = $(this).siblings('.description').val();
        var time = $(this).siblings('hour').val();
       // var time = $(this).parent().attr('id');
        console.log;
        localStorage.setItem(time, value);
        //localStorage.setItem('time', time);
        //localStorage.setItem('value', value);
        $('.notification').addClass('show');
    })
    
    $('#blocks[i] .description').val(localStorage.getItem('hour'));
});
