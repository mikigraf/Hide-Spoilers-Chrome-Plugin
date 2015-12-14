
var banned = ["Star Wars", "The Force Awakens","Luke Skywalker","Leia","Skywalker","Han Solo","Jedi","Sith"];
$.extend($.expr[":"], {
  "containsCaseInsensitive": function(elem, i, match, array) {
    return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
for (var i = 0; i< banned.length; i++) {
	$("div:containsCaseInsensitive('star wars')").hide();
}
