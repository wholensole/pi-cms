import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal'
declare var $: any
@Injectable()
export class AppConstants {
	baseURL: string = '#'
	imageBase: String = '#'
	tinymceApiKey: String = '#'
	editorOptions: any = {
		height: '500',
		menubar: false,
		plugins: [
			'advlist autolink lists link image charmap print preview anchor',
			'searchreplace visualblocks code',
			'insertdatetime media table paste code help wordcount'
		],
		toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image code | removeformat',
		extended_valid_elements : 'mycustomblock[id],ngx-slick-carousel',
		verify_html: false
	}
	cms:any = {
		title: 'PI CMS',
		version : '1.0.0'
	}
  	site = {
		title: 'PI CMS Systems'
	}
  postTypesMap = [
		{
			url: 'support',
			title: 'Support'
		},
		{
			url: 'page',
			title: 'Page'
		},
		{
			url: 'faq',
			title: 'FAQ'
		},
		{
			url: 'post',
			title: 'Post'
		},
		{
			url: 'career',
			title: 'Career'
		},
		{
			url: 'solution',
			title: 'Solution'
		},
		{
			url: 'industry',
			title: 'Industry'
		},
		{
			url: 'press-release',
			title: 'Press Release'
		},
		{
			url: 'team-member',
			title: 'Team Member'
		},
		{
			url: 'case-study',
			title: 'Case Study'
		}
	]
	constructor(@Inject(WINDOW) private window: Window, ) {}
    getFormUrlEncoded(toConvert) {
		const formBody = []
		for (const property in toConvert) {
			const encodedKey = encodeURIComponent(property)
			const encodedValue = encodeURIComponent(toConvert[property])
			formBody.push(encodedKey + '=' + encodedValue)
		}
		return formBody.join('&')
    }

    isValidURL(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
	}

	addStyletoDoc(css) {
		$(document).find('#page-style').remove()
		let head = document.getElementsByTagName('head')[0];
		let style = document.createElement('style');
		style.type = 'text/css';
		style.id = 'page-style'
		style.appendChild(document.createTextNode(css));
		head.appendChild(style);
	}
	addScriptoDoc(js) {
		$(document).find('#page-script').remove()
		let head = document.getElementsByTagName('head')[0];
		let script = document.createElement('script');
		script.type = 'text/javascript';
		script.id = 'page-script'
		script.appendChild(document.createTextNode(js));
		head.appendChild(script);
  }
  getUrlVars(url) {
    let vars = {};
    let parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
	setPageTitle(t) {
		document.getElementsByTagName('title')[0].innerHTML = t + ' | PI CMS'
	}
  setPageCanonical(t) {
    $('head').append('<link rel="canonical" href="'+t+'" />')
  }
  setPageRobots(t) {
    $('head').append('<meta name="robots" content="'+t+'" />')
  }
  setPageKewords(t) {
    $('head').append('<meta name="keywords" content="'+t+'">')
  }
  setPageDescription(t) {
    $('head').append('<meta name="description" content="'+t+'">')
  }
	getCountryList() {
		return {'AF':'Afghanistan',
		'AX':'Aland Islands',
		'AL':'Albania',
		'DZ':'Algeria',
		'AS':'American Samoa',
		'AD':'Andorra',
		'AO':'Angola',
		'AI':'Anguilla',
		'AQ':'Antarctica',
		'AG':'Antigua and Barbuda',
		'AR':'Argentina',
		'AM':'Armenia',
		'AW':'Aruba',
		'AU':'Australia',
		'AT':'Austria',
		'AZ':'Azerbaijan',
		'BS':'Bahamas',
		'BH':'Bahrain',
		'BD':'Bangladesh',
		'BB':'Barbados',
		'BY':'Belarus',
		'BE':'Belgium',
		'BZ':'Belize',
		'BJ':'Benin',
		'BM':'Bermuda',
		'BT':'Bhutan',
		'BO':'Bolivia',
		'BA':'Bosnia and Herzegovina',
		'BW':'Botswana',
		'BV':'Bouvet Island',
		'BR':'Brazil',
		'IO':'British Indian Ocean Territory',
		'VG':'British Virgin Islands',
		'BN':'Brunei',
		'BG':'Bulgaria',
		'BF':'Burkina Faso',
		'BI':'Burundi',
		'KH':'Cambodia',
		'CM':'Cameroon',
		'CA':'Canada',
		'CV':'Cape Verde',
		'BQ':'Caribbean Netherlands',
		'KY':'Cayman Islands',
		'CF':'Central African Republic',
		'TD':'Chad',
		'CL':'Chile',
		'CN':'China',
		'CX':'Christmas Island',
		'CC':'Cocos (Keeling) Islands',
		'CO':'Colombia',
		'KM':'Comoros',
		'CG':'Congo (Brazzaville)',
		'CD':'Congo (Kinshasa)',
		'CK':'Cook Islands',
		'CR':'Costa Rica',
		'HR':'Croatia',
		'CU':'Cuba',
		'CW':'Curaçao',
		'CY':'Cyprus',
		'CZ':'Czech Republic',
		'DK':'Denmark',
		'DJ':'Djibouti',
		'DM':'Dominica',
		'DO':'Dominican Republic',
		'EC':'Ecuador',
		'EG':'Egypt',
		'SV':'El Salvador',
		'GQ':'Equatorial Guinea',
		'ER':'Eritrea',
		'EE':'Estonia',
		'ET':'Ethiopia',
		'FK':'Falkland Islands',
		'FO':'Faroe Islands',
		'FJ':'Fiji',
		'FI':'Finland',
		'FR':'France',
		'GF':'French Guiana',
		'PF':'French Polynesia',
		'TF':'French Southern Territories',
		'GA':'Gabon',
		'GM':'Gambia',
		'GE':'Georgia',
		'DE':'Germany',
		'GH':'Ghana',
		'GI':'Gibraltar',
		'GR':'Greece',
		'GL':'Greenland',
		'GD':'Grenada',
		'GP':'Guadeloupe',
		'GU':'Guam',
		'GT':'Guatemala',
		'GG':'Guernsey',
		'GN':'Guinea',
		'GW':'Guinea-Bissau',
		'GY':'Guyana',
		'HT':'Haiti',
		'HM':'Heard Island and McDonald Islands',
		'HN':'Honduras',
		'HK':'Hong Kong S.A.R., China',
		'HU':'Hungary',
		'IS':'Iceland',
		'IN':'India',
		'ID':'Indonesia',
		'IR':'Iran',
		'IQ':'Iraq',
		'IE':'Ireland',
		'IM':'Isle of Man',
		'IL':'Israel',
		'IT':'Italy',
		'CI':'Ivory Coast',
		'JM':'Jamaica',
		'JP':'Japan',
		'JE':'Jersey',
		'JO':'Jordan',
		'KZ':'Kazakhstan',
		'KE':'Kenya',
		'KI':'Kiribati',
		'KW':'Kuwait',
		'KG':'Kyrgyzstan',
		'LA':'Laos',
		'LV':'Latvia',
		'LB':'Lebanon',
		'LS':'Lesotho',
		'LR':'Liberia',
		'LY':'Libya',
		'LI':'Liechtenstein',
		'LT':'Lithuania',
		'LU':'Luxembourg',
		'MO':'Macao S.A.R., China',
		'MK':'Macedonia',
		'MG':'Madagascar',
		'MW':'Malawi',
		'MY':'Malaysia',
		'MV':'Maldives',
		'ML':'Mali',
		'MT':'Malta',
		'MH':'Marshall Islands',
		'MQ':'Martinique',
		'MR':'Mauritania',
		'MU':'Mauritius',
		'YT':'Mayotte',
		'MX':'Mexico',
		'FM':'Micronesia',
		'MD':'Moldova',
		'MC':'Monaco',
		'MN':'Mongolia',
		'ME':'Montenegro',
		'MS':'Montserrat',
		'MA':'Morocco',
		'MZ':'Mozambique',
		'MM':'Myanmar',
		'NA':'Namibia',
		'NR':'Nauru',
		'NP':'Nepal',
		'NL':'Netherlands',
		'AN':'Netherlands Antilles',
		'NC':'New Caledonia',
		'NZ':'New Zealand',
		'NI':'Nicaragua',
		'NE':'Niger',
		'NG':'Nigeria',
		'NU':'Niue',
		'NF':'Norfolk Island',
		'MP':'Northern Mariana Islands',
		'KP':'North Korea',
		'NO':'Norway',
		'OM':'Oman',
		'PK':'Pakistan',
		'PW':'Palau',
		'PS':'Palestinian Territory',
		'PA':'Panama',
		'PG':'Papua New Guinea',
		'PY':'Paraguay',
		'PE':'Peru',
		'PH':'Philippines',
		'PN':'Pitcairn',
		'PL':'Poland',
		'PT':'Portugal',
		'PR':'Puerto Rico',
		'QA':'Qatar',
		'RE':'Reunion',
		'RO':'Romania',
		'RU':'Russia',
		'RW':'Rwanda',
		'BL':'Saint Barthélemy',
		'SH':'Saint Helena',
		'KN':'Saint Kitts and Nevis',
		'LC':'Saint Lucia',
		'MF':'Saint Martin (French part)',
		'PM':'Saint Pierre and Miquelon',
		'VC':'Saint Vincent and the Grenadines',
		'WS':'Samoa',
		'SM':'San Marino',
		'ST':'Sao Tome and Principe',
		'SA':'Saudi Arabia',
		'SN':'Senegal',
		'RS':'Serbia',
		'SC':'Seychelles',
		'SL':'Sierra Leone',
		'SG':'Singapore',
		'SX':'Sint Maarten',
		'SK':'Slovakia',
		'SI':'Slovenia',
		'SB':'Solomon Islands',
		'SO':'Somalia',
		'ZA':'South Africa',
		'GS':'South Georgia and the South Sandwich Islands',
		'KR':'South Korea',
		'SS':'South Sudan',
		'ES':'Spain',
		'LK':'Sri Lanka',
		'SD':'Sudan',
		'SR':'Suriname',
		'SJ':'Svalbard and Jan Mayen',
		'SZ':'Swaziland',
		'SE':'Sweden',
		'CH':'Switzerland',
		'SY':'Syria',
		'TW':'Taiwan',
		'TJ':'Tajikistan',
		'TZ':'Tanzania',
		'TH':'Thailand',
		'TL':'Timor-Leste',
		'TG':'Togo',
		'TK':'Tokelau',
		'TO':'Tonga',
		'TT':'Trinidad and Tobago',
		'TN':'Tunisia',
		'TR':'Turkey',
		'TM':'Turkmenistan',
		'TC':'Turks and Caicos Islands',
		'TV':'Tuvalu',
		'VI':'U.S. Virgin Islands',
		'UG':'Uganda',
		'UA':'Ukraine',
		'AE':'United Arab Emirates',
		'GB':'United Kingdom',
		'US':'selected="selected">United States',
		'UM':'United States Minor Outlying Islands',
		'UY':'Uruguay',
		'UZ':'Uzbekistan',
		'VU':'Vanuatu',
		'VA':'Vatican',
		'VE':'Venezuela',
		'VN':'Vietnam',
		'WF':'Wallis and Futuna',
		'EH':'Western Sahara',
		'YE':'Yemen',
		'ZM':'Zambia',
		'ZW':'Zimbabwe'};
	}
	getTodaysDate() {
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0');
		let yyyy = today.getFullYear();
		return (dd + '-' + mm + '-' + yyyy)
	}
	getProblemType() {
		return {
			'app_problem':'Application problem',
			'blank_screen':'Blank screen',
			'bsod':'Blue Screen (BSOD',
			'boot_problem':'Boot problem',
			'config_problem':'Configuration problem',
			'cp_issue':'ControlPoint issue',
			'fails_boot':'Fails during boot',
			'graphics_problem':'Graphics Problem',
			'hardware_issue':'Hardware Issue',
			'input_node_issue':'Input node issue',
			'installation_problem':'Installation problem',
			'linux_os_issue':'Linux OS issue',
			'network_problem':'Network problem',
			'output_node_issue':'Output node issue',
			'out_of_disk_space_errors':'Out of disk space errors',
			'out_of_memory':'Out of memory errors',
			'rgb_problem':'RGB Problem',
			'software_issue':'Software issue',
			'software_upgrade_issues':'Software upgrade issues',
			'suggestion':'Suggestion',
			'switch_issue':'Switch issue',
			'sys_hang_lock':'System Hang, Lock-up',
			'video_problem':'Video problem',
			'windows_os_issue':'Windows OS issue',
			'wont_power':"Won't power on",
			'other':'Other',
		}
	}
}
