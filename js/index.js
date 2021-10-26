$.get("http://ip-api.com/json/?fields=status,query", {
    mode: 'no-cors'
},function(data) {
    $("#sender")
    .attr('value', data.query);
},"json");

