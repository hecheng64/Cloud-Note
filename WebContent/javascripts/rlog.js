var __rl_npid, __rl_ncat, __rl_nver = "0.15", __rl_nchr = "", __rl_njve = 0, __rl_nref = "", __rl_nres = "", __rl_nlmf = 0, __rl_nssn = "NULL", __rl_ncoo = "NULL", __rl_post, __rl_nfrg = "";
function __rl_void() {
}
var __rl_domain_array = [ '163.com', 'youdao.com', '126.am', 'iyoudao.net' ], _non__rl_domain_array = [ '163.letv.com' ], __rl_cdmn = __rl_get_domain(), _non__rl_cdmn = non__rl_get_domain(), __rl_src_addr = "//rlogs.youdao.com";
function __rl_pageview_func() {
	if (typeof __rl_npid == "undefined" || !__rl_npid) {
		return
	}
	__rl_ncat = "pageview";
	__rl_nref = escape(document.referrer);
	_rl_get_navigation_info();
	var __rl_q = "&_nref=" + __rl_nref;
	__rl_q += "&_nres=" + __rl_nres + "&_nlmf=" + __rl_nlmf;
	__rl_q += "&_njve=" + __rl_njve + "&_nchr=" + __rl_nchr;
	__rl_nfrg = window.location.hash;
	if (__rl_nfrg != "") {
		__rl_q += "&_nfrg=" + escape(__rl_nfrg.substring(1))
	}
	_rl_request_img(__rl_q)
}
function _rl_request_img(a) {
	var now = (new Date()).getTime();
	document.cookie = "___rl__test__cookies=" + now;
	__rl_ncoo = _rl_get_cookie("OUTFOX_SEARCH_USER_ID");
	if (__rl_ncoo == -1) {
		if (_rl_get_cookie("___rl__test__cookies") == now) {
			__rl_ncoo = 2147483647 * Math.random();
			_rl_set_cookie("OUTFOX_SEARCH_USER_ID", __rl_ncoo)
		}
	}
	__rl_nssn = _rl_get_cookie("P_INFO");
	if (__rl_nssn == -1) {
		__rl_nssn = "NULL"
	} else {
		__rl_nssn = __rl_nssn.substr(0, __rl_nssn.indexOf("|"))
	}
	var b = __rl_src_addr + "/rlog.php?_npid=" + __rl_npid + "&_ncat="
			+ __rl_ncat;
	b += "&_nssn=" + __rl_nssn + "&_ncoo=" + __rl_ncoo + "&_nver=" + __rl_nver;
	b += a + "&_ntms=" + now;
	__rl_post = __rl_post || [];
	for (var i = 0; i < __rl_post.length; ++i) {
		p = __rl_post[i] || [];
		b += "&" + p[0] + "=" + p[1]
	}
	var n = "log_" + (+new Date()), _img;
	_img = window[n] = new Image(1, 1);
	_img.src = b;
	_img.onload = function() {
		window[n] = null;
		__rl_void()
	};
	_img.onerror = function() {
		window[n] = null
	};
	_img = null
}
function _rl_get_navigation_info() {
	__rl_nres = "-";
	if (self.screen) {
		__rl_nres = screen.width + "x" + screen.height
	} else if (self.java) {
		var j = java.awt.Toolkit.getDefaultToolkit(), s = j.getScreenSize();
		__rl_nres = s.width + "x" + s.height
	}
	var d = new Date(document.lastModified);
	__rl_nlmf = d.getTime() / 1000;
	var b = window.navigator;
	__rl_njve = b && b.javaEnabled() ? 1 : 0;
	__rl_nchr = document.characterSet || document.charset || "-";
	__rl_nchr = __rl_nchr.toLowerCase()
}
function __rl_get_domain() {
	var domain_name = document.domain, arr_domain_name = domain_name.split("."), domain_name_length = arr_domain_name.length, pattern = /^\d+$/g;
	if (pattern.test(arr_domain_name[domain_name_length - 1])) {
		return domain_name
	}
	if (arr_domain_name.length < 3) {
		return "." + domain_name
	}
	var domain_suffixes = [ 'com', 'net', 'org', 'gov', 'co' ], i, suffix_found = false;
	for (i = 0; i < domain_suffixes.length; i++) {
		if (arr_domain_name[domain_name_length - 2] == domain_suffixes[i]) {
			suffix_found = true
		}
	}
	if (!suffix_found) {
		return "." + arr_domain_name[domain_name_length - 2] + "."
				+ arr_domain_name[domain_name_length - 1]
	} else {
		return "." + arr_domain_name[domain_name_length - 3] + "."
				+ arr_domain_name[domain_name_length - 2] + "."
				+ arr_domain_name[domain_name_length - 1]
	}
}
function non__rl_get_domain() {
	var domain_name = document.domain, arr_domain_name = domain_name.split("."), domain_name_length = arr_domain_name.length;
	pattern = /^\d+$/g;
	if (pattern.test(arr_domain_name[domain_name_length - 1])) {
		return domain_name
	}
	if (arr_domain_name.length < 4) {
		return "." + domain_name
	}
	var domain_suffixes = [ 'com', 'net', 'org', 'gov', 'co' ], i, suffix_found = false;
	for (i = 0; i < domain_suffixes.length; i++) {
		if (arr_domain_name[domain_name_length - 2] == domain_suffixes[i]) {
			suffix_found = true
		}
	}
	if (!suffix_found) {
		return "." + arr_domain_name[domain_name_length - 3] + "."
				+ arr_domain_name[domain_name_length - 2] + "."
				+ arr_domain_name[domain_name_length - 1]
	} else {
		return "." + arr_domain_name[domain_name_length - 4] + "."
				+ arr_domain_name[domain_name_length - 3] + "."
				+ arr_domain_name[domain_name_length - 2] + "."
				+ arr_domain_name[domain_name_length - 1]
	}
}
function _rl_set_cookie(name, value) {
	var _epd = new Date();
	_epd.setTime(_epd.getTime() + 1000 * 60 * 60 * 24 * 365 * 2);
	document.cookie = name + "=" + value + ";expires=" + _epd.toGMTString()
			+ ";path=/;domain=" + __rl_cdmn
}
function _rl_get_cookie(name) {
	var __rl_dc = document.cookie, __rl_cname = name + "=", __rl_clen = __rl_dc.length, __rl_cbegin = 0;
	while (__rl_cbegin < __rl_clen) {
		var __rl_vbegin = __rl_cbegin + __rl_cname.length;
		if (__rl_dc.substring(__rl_cbegin, __rl_vbegin) == __rl_cname) {
			var __rl_vend = __rl_dc.indexOf(";", __rl_vbegin);
			if (__rl_vend == -1) {
				__rl_vend = __rl_clen
			}
			return unescape(__rl_dc.substring(__rl_vbegin, __rl_vend))
		}
		__rl_cbegin = __rl_dc.indexOf(" ", __rl_cbegin) + 1;
		if (__rl_cbegin == 0) {
			break
		}
	}
	return -1
}
function __rl_click_func(e) {
	if (typeof __rl_npid == "undefined" || !__rl_npid) {
		return
	}
	__rl_ncat = "click";
	var evt = e || window.event;
	var eventSrc = evt.target || evt.srcElement;
	if (!eventSrc.href) {
		return
	}
	var __rl_q = "&_nhrf=" + escape(eventSrc.href) + "&_nnnm="
			+ eventSrc.nodeName;
	_rl_request_img(__rl_q)
}
function __rl_event(a) {
	if (typeof __rl_npid == "undefined" || !__rl_npid) {
		return
	}
	__rl_ncat = "event";
	var __rl_q = "&_nhrf=" + escape(a);
	_rl_request_img(__rl_q)
}
if (typeof __rl_pageview == "undefined" || __rl_pageview) {
	__rl_pageview_func()
}
if (typeof __rl_click != "undefined" && __rl_click) {
	var d = document;
	d.addEventListener ? d.addEventListener('click', __rl_click_func, false)
			: d.attachEvent('onclick', __rl_click_func)
}