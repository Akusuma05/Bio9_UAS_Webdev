$(document).ready(function(){
    GetLeaderboard();
});

function GetLeaderboard(){
    $.ajax({
        url: 'http://127.0.0.1:8000/getLeaderboard',
        type: 'get',
        dataType: 'json',
        success: function(response){

            var len = 0;
            $('#userTable tbody').empty(); // Empty <tbody>
            if(response['data'] != null){
              len = response['data'].length;
            }

            if(len > 0){
                for(var i=0; i<len; i++){
                   var name = response['data'][i].name;
                   var total_damage = response['data'][i].total_damage;
  
                   var tr_str = "<tr>" +
                     "<td align='center'>" + (i+1) + "</td>" +
                     "<td align='center'>" + name + "</td>" +
                     "<td align='center'>" + total_damage + "</td>" +
                   "</tr>";
  
                   $("#leaderboardTable tbody").append(tr_str);
                }
             }else{
                var tr_str = "<tr>" +
                    "<td align='center' colspan='4'>No record found.</td>" +
                "</tr>";
  
                $("#leaderboardTable tbody").append(tr_str);
             }
        }
    });
}