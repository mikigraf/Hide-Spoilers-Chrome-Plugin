
var banned = ["Star Wars", "The Force Awakens","Luke Skywalker","Luke","Leia","Skywalker","Han Solo","Jedi","Sith","Force Awakens","Darth Vader","JJ Abrams","J.J. Abrams","J. J. Abrams","Kylo ren","rey","finn", "bb-8"];
$.extend($.expr[":"], {
  "containsCaseInsensitive": function(elem, i, match, array) {
    return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
for (var i = 0; i< banned.length; i++) {
	$("div:containsCaseInsensitive('" + banned[i] + "')").hide();
}
