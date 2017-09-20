google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);

function drawChart(titl, work, nowork) {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     work],
      ['Free',      nowork],
    ]);

    var options = {
      title: titl
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

var graph = function(num){
    if(num==1){
        var work = parseInt(document.getElementById("yearnum").innerHTML)
        var nowork = 80*10-work;
        $('#title').text('Yearly Summary')
        drawChart("Yearly Time Usage", work, nowork)
    }
    else if(num==2){
        var work = parseInt(document.getElementById("monthnum").innerHTML)
        var date = new Date;
        var n = (date.getDate() - 7) * 10 - work
        $('#title').text('Monthly Summary')
        drawChart("Monthly Time Usage", work, n)
    }
    else if(num==3){
        var work = 15//parseInt(document.getElementById("weeknum").innerHTML)
        var date = new Date;
        var n = 40 - work//work

        $('#title').text('Weekly Summary')
        drawChart("Weekly Time Usage", work, n)
    }

}

$(function(){
    $('#year').click(function(){graph(1)});
    $('#month').click(function(){graph(2)});
    $('#week').click(function(){graph(3)});

    $.getJSON("http://api.reimaginebanking.com/accounts/58fd1d64ceb8abe24250d7fe?key=b4e4fae477cb254ac7390e3cbda600b0", function(data){
        $("#money").html("$"+data.balance)

    });

});
