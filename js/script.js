var pages = ["about", "workflow", "contact", "login"];

for (var i=0; i < pages.length; i++) {
	if (window.location.href.indexOf(pages[i]) > -1) {
		$(".page-link." + pages[i]).addClass("page-active")
	}
}