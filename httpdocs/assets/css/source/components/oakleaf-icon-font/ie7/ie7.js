/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'oakleaf-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-search': '&#xe62a;',
		'icon-brackets': '&#xe600;',
		'icon-contracts_placed': '&#xe601;',
		'icon-conversion': '&#xe602;',
		'icon-csr_charity': '&#xe603;',
		'icon-downchevron': '&#xe604;',
		'icon-down_arrow': '&#xe605;',
		'icon-email': '&#xe606;',
		'icon-executive': '&#xe607;',
		'icon-facebook': '&#xe608;',
		'icon-graduate': '&#xe609;',
		'icon-growth': '&#xe60a;',
		'icon-headcount': '&#xe60b;',
		'icon-hr_jobs': '&#xe60c;',
		'icon-human_capital_services': '&#xe60d;',
		'icon-international': '&#xe60e;',
		'icon-joiners': '&#xe60f;',
		'icon-left_arrow': '&#xe610;',
		'icon-left_chevron': '&#xe611;',
		'icon-linkedin': '&#xe612;',
		'icon-marketing': '&#xe613;',
		'icon-pagination_outline': '&#xe614;',
		'icon-pagination_solid': '&#xe615;',
		'icon-part_time': '&#xe616;',
		'icon-payroll': '&#xe617;',
		'icon-pensions': '&#xe618;',
		'icon-percentage': '&#xe619;',
		'icon-phone': '&#xe61a;',
		'icon-quote_bottom': '&#xe61b;',
		'icon-quote_top': '&#xe61c;',
		'icon-radio_button_selected': '&#xe61d;',
		'icon-radio_button': '&#xe61e;',
		'icon-research': '&#xe61f;',
		'icon-revenue': '&#xe620;',
		'icon-reward_jobs': '&#xe621;',
		'icon-right_arrow': '&#xe622;',
		'icon-right_chevron': '&#xe623;',
		'icon-sector_split': '&#xe624;',
		'icon-turnover': '&#xe625;',
		'icon-twitter': '&#xe626;',
		'icon-upchevron': '&#xe627;',
		'icon-up_arrow': '&#xe628;',
		'icon-years_experience': '&#xe629;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
