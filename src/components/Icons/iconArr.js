const iconArr = [
	'las la-newspaper',
	'las la-envelope',
	'las la-envelope-open',
	'las la-envelope-open-text',
	'las la-mail-bulk',
	'las la-at',
	'las la-plus',
	'las la-minus',
	'las la-inbox',
	'las la-shipping-fast',
	'las la-radiation',
	'las la-radiation-alt',
	'las la-coffee',
	'las la-save',
	'las la-compass',
	'las la-icons',
	'las la-code',
	'las la-terminal',
	'las la-tasks',
	'las la-table',
	'las la-paper-plane',

	'las la-link',
	'las la-file',
	'las la-file-alt',
	'las la-folder',
	'las la-folder-minus',
	'las la-folder-open',
	'las la-folder-plus',
	'las la-tag',
	'las la-tags',
	'las la-sitemap',
	'las la-paperclip',
	'las la-envelope',
	'las la-edit',
	'las la-briefcase',
	'las la-calendar',
	'las la-calendar-check',
	'las la-bullhorn',
	'las la-book',
	'las la-calculator',
	'las la-balance-scale',
	'las la-question-circle',
	'las la-bell',

	'las la-skull-crossbones',
	'las la-exclamation',
	'las la-exclamation-triangle',
	'las la-cat',
	'las la-dog',
	'las la-spider',
	'las la-frog',
	'las la-dragon',
	'las la-history',

	'las la-sort',
	'las la-broadcast-tower',
	'las la-rss',
	'las la-microphone',
	'las la-music',
	'las la-film',
	'las la-play',
	'las la-photo-video',
	'las la-play-circle',
	'las la-pause-circle',
	'las la-tv',
	'las la-video',
	'las la-podcast',
	'las la-volume-up',
	'las la-air-freshener',
	'las la-ambulance',
	'las la-bus',
	'las la-car',
	'las la-car-battery',
	'las la-oil-can',
	'las la-truck',
	'las la-apple-alt',
	'las la-cloud-sun',
	'las la-campground',
	'las la-wine-bottle',
	'las la-beer',
	'las la-cocktail',
	'las la-mug-hot',
	'las la-redo-alt',
	'las la-upload',
	'las la-download',
	'las la-cloud-upload-alt',
	'las la-cloud-download-alt',
	'las la-feather-alt',

	'las la-school',
	'las la-address-book',
	'las la-address-card',
	'las la-archive',
	'las la-globe',
	'las la-wallet',
	'las la-fire',
	'las la-fire-alt',
	'las la-hiking',
	'las la-map',
	'las la-map-signs',
	'las la-map-marked',
	'las la-mountain',
	'las la-route',
	'las la-toilet-paper',
	'las la-tree',

	'las la-dollar-sign',
	'las la-dove',
	'las la-gift',
	'las la-hand-holding-heart',
	'las la-handshake',
	'las la-heart',
	'lar la-heart',
	'las la-hand-holding-heart',
	'las la-hand-holding-usd',
	'las la-leaf',
	'las la-parachute-box',
	'las la-piggy-bank',
	'las la-ribbon',
	'las la-seedling',
	'las la-comment',
	'las la-comment-alt',
	'las la-sms',
	'las la-frown',
	'las la-meh',
	'las la-smile',
	'las la-icons',
	'las la-poo',

	'las la-baby',
	'las la-bath',
	'las la-cookie',
	'las la-cookie-bite',
	'lab la-react',
	'lab la-node',
	'lab la-readme',
	'lab la-js',
	'lab la-js-square',
	'lab la-github',
	'lab la-gitlab',
	'lab la-git-square',
	'lab la-git',
	'lab la-figma',
	'lab la-sketch',
	'lab la-evernote',
	'lab la-dribbble',
	'lab la-reddit',
	'lab la-html5',
	'lab la-css3',
	'lab la-sass',
	'lab la-less',
	'lab la-behance',
	'lab la-dev',
	'lab la-dropbox',
	'lab la-facebook',
	'lab la-pinterest-p',
	'lab la-gulp',
	'lab la-instagram',
	'lab la-java',
	'lab la-jira',
	'lab la-linux',
	'lab la-jenkins',
	'lab la-microsoft',
	'lab la-npm',
	'lab la-yarn',

	'lab la-trello',
	'lab la-centos',
	'lab la-ubuntu',
	'lab la-stack-overflow',
	'lab la-vuejs',
	'lab la-yandex',
	'lab la-vk',
	'lab la-youtube',
	'lab la-vimeo',
	'lab la-telegram',
	'lab la-linkedin',
	'lab la-twitter',
	'lab la-patreon',
	'lab la-whatsapp',
	'lab la-skype',

	'lab la-slack',
	'lab la-codepen',
	'lab la-android',
	'lab la-apple',
	'lab la-itunes-note',
	'lab la-bootstrap',
	'lab la-buffer',
	'lab la-buromobelexperte',
	'lab la-creative-commons',
	'lab la-cpanel',
	'lab la-creative-commons-pd',
	'lab la-discord',
	'lab la-docker',
	'lab la-chrome',
	'lab la-edge',
	'lab la-safari',
	'lab la-firefox',
	'lab la-ebay',
	'lab la-flipboard',
	'lab la-google',
	'lab la-google-play',
	'lab la-google-drive',
	'lab la-yandex',
	'lab la-yandex-international',
	'lab la-font-awesome-flag',
	'lab la-fort-awesome',
	'lab la-joomla',
	'lab la-drupal',
	'lab la-opencart',
	'lab la-wordpress-simple',
	'lab la-laravel',
	'lab la-symfony',
	'lab la-php',
	'lab la-swift',

	'lab la-usb',
	'lab la-sellsy',
	'lab la-mixcloud',
	'lab la-simplybuilt',
	'lab la-medapps',
	'lab la-medium',

	'las la-biking',
	'las la-gamepad',
	'las la-ice-cream',
	'las la-chess',
	'las la-chess-knight',
	'las la-chess-king',
	'las la-chess-queen',
	'las la-square-full',
	'las la-robot',
	'las la-snowman',
	'las la-keyboard',
	'las la-shield-alt',
	'las la-fire-extinguisher',

	'las la-shapes',
	'las la-graduation-cap',
	'las la-hat-cowboy',
	'las la-hat-wizard',
	'las la-mitten',
	'las la-socks',
	'las la-tshirt',
	'las la-user-tie',
	'las la-archive',
	'las la-window-maximize',
	'las la-bug',
	'las la-code-branch',
	'las la-file-code',
	'las la-filter',
	'las la-laptop-code',
	'las la-microchip',
	'las la-project-diagram',

	'las la-plug',
	'las la-mobile',
	'las la-brush',
	'las la-dumpster',
	'las la-hammer',
	'las la-toolbox',
	'las la-tools',
	'las la-wrench',
	'las la-ruler',
	'lab la-bitcoin',

	'las la-money-check',
	'las la-money-bill',
	'las la-ruble-sign',
	'las la-hourglass-start',
	'las la-stopwatch',
	'las la-magic',
	'las la-clone',
	'las la-eye',
	'las la-marker',
	'las la-palette',
	'las la-paint-roller',
	'las la-pencil-ruler',
	'las la-spray-can',
	'las la-angry',
	'las la-dizzy',
	'las la-sad-cry',
	'las la-atom',
	'las la-sun',
	'las la-solar-panel',
	'las la-sticky-note',
	'las la-bicycle',
	'las la-heartbeat',
	'las la-fish',
	'las la-dog',
	'las la-horse',
	'las la-carrot',
	'lab la-steam',
	'lab la-xbox',
	'lab la-playstation',
	'las la-book-dead',
	'las la-door-open',
	'las la-fan',
	'las la-image',
	'las la-id-card',
	'las la-camera',
	'las la-camera-retro',
	'las la-sliders-h',
	'las la-tint',
	'las la-box',
	'las la-dolly',
	'las la-shipping-fast',
	'las la-hard-hat',
	'las la-clipboard',
	'las la-clipboard-check',
	'las la-clipboard-list',
	'las la-info',
	'las la-key',
	'las la-magnet',
	'las la-lemon',
	'las la-life-ring',
	'las la-rocket',
	'las la-shopping-cart',
	'las la-road',
	'las la-wifi',
	'las la-superscript',
	'las la-drum',
	'las la-guitar',
	'las la-record-vinyl',
	'las la-home',
	'las la-hotel',
	'las la-store',
	'las la-landmark',
	'las la-hospital',
	'las la-tablets',
	'las la-clinic-medical',
	'las la-building',
	'las la-city',
	'las la-university',
	'las la-warehouse',
	'las la-birthday-cake',
	'las la-certificate',
	'las la-chart-area',
	'las la-chart-bar',
	'las la-chart-pie',
	'las la-columns',
	'las la-copy',
	'las la-paste',
	'las la-glasses',
	'las la-pen',
	'las la-percent',
	'las la-print',
	'las la-stream',
	'las la-binoculars',
	'las la-first-aid',
	'las la-quote-left',
	'las la-language',
	'las la-voicemail',
	'las la-chalkboard',
	'las la-server',
	'las la-desktop',
	'las la-laptop',
	'las la-database',
	'las la-hdd',
	'las la-satellite-dish',
	'las la-satellite',
	'las la-power-off',
	'las la-hourglass-half',
	'las la-adjust',
	'las la-clone',
	'las la-drafting-compass',
	'las la-fill',
	'las la-layer-group',
	'las la-object-ungroup',
	'las la-list',
	'las la-list-alt',
	'las la-list-ol',
	'las la-trash-alt',
	'las la-chalkboard-teacher',
	'las la-theater-masks',
	'las la-microscope',
	'las la-spa',
	'las la-hamburger',
	'las la-pizza-slice',
	'las la-carrot',
	'las la-venus-mars',
	'las la-dice',
	'las la-cloud-moon',
	'las la-wheelchair',
	'las la-swimming-pool',
	'las la-utensils',
	'las la-infinity',
	'las la-dumbbell',
	'las la-portrait',
	'las la-cog',
	'las la-cogs',
	'las la-star',
	'las la-share-alt',
	'las la-user-alt',
	'las la-user',
	'las la-trophy',
	'las la-vial',
];

export default iconArr;
