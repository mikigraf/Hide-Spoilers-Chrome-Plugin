
var banned = ["Star Wars", "The Force Awakens","Luke Skywalker","Leia","Skywalker","Han Solo","Jedi","Sith"];
for (var i = 0; i< banned.length; i++) {
    $("div:contains('"+banned[i]+"')").each(function() {
		 $(this).hide();
    });
}
