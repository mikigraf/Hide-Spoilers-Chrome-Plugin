var banned = ["Star Wars", "The Force Awakens","Luke Skywalker","Luke","Leia","Skywalker","Han Solo","Jedi","Sith","Force Awakens","Darth Vader","JJ Abrams","J.J. Abrams","J. J. Abrams","Kylo ren","rey","finn", "bb-8"];

$.extend($.expr[":"], {
  "containsCaseInsensitive": function(elem, i, match, array) {
    return elem.firstChild != null && elem.firstChild.nodeValue != null && (elem.firstChild.nodeValue).toLowerCase().indexOf((match[3]).toLowerCase()) >= 0;
  }
});
for (var i = 0; i < banned.length; i++) {
	var elems = $(":containsCaseInsensitive('" + banned[i] + "')");
	for(var j = 0; j < elems.length; j++) {
		$(elems[j]).parent()[0].style = "position:relative";
		$(elems[j]).append('<div style="position:absolute;top:0;left:0;width:100%;height:100%;background-color: #000;opacity: 1;z-index: 10000;"></div>');
	}
}