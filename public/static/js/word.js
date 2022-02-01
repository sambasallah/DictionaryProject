$(document).ready(function() {
    $("#submit").click(() => {
        const searchValue = $("#searchTerm").val();
        $.get(`http://localhost:3000/find?word=${searchValue}`, (data, status) => {
             let result = "";
              data.result.map((value, index) => {
                  result += `<p>${index + 1}(${value.wordtype}):: ${value.definition}</p><br>`;
              });
              $("#result").html(result.length > 1? result : `<h2>No Result</h2>`);
        });
    });
});