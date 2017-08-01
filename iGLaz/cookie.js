function writeCookie(name, value, days) {
	// Domyślnie nie ma daty wygaśnięcia, więc ciasteczko będzie tymczasowe
	var expires = "";
	// Określenie liczby dni (daty wygaśnięcia) zapewnia ciasteczku trwałość
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	}
	// Zapisuje ciasteczko o podanej nazwie, wartości i dacie wygaśnięcia
	document.cookie = name + "=" + value + expires + "; path=/";
	}
function readCookie(name) {
	// Odnajduje określone ciasteczko i zwraca jego wartość
	var searchName = name + "=";
	var cookies = document.cookie.split(';');
	for(var i=0; i < cookies.length; i++) {
		var c = cookies[i];
		while (c.charAt(0) == ' ')
		c = c.substring(1, c.length);
		if (c.indexOf(searchName) == 0)
			return c.substring(searchName.length, c.length);
	 }
	return null;
}
function eraseCookie(name) {
	// Usuwa ciasteczko o podanej nazwie
	writeCookie(name, "", -1);
}