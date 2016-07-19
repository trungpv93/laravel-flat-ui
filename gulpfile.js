var elixir = require('laravel-elixir');

elixir.config.assetsDir = './';

var bower_path = "./bower_components";

var paths = {
  'bootstrap'  : bower_path + "/bootstrap/",
  'jquery': bower_path + '/jquery/',
  'fontawesome': bower_path + '/font-awesome/',
	'flatui' : bower_path + '/flat-ui/'
};
	
elixir(function(mix) {
  
  mix.less('app.less')
        .copy(paths.bootstrap + 'fonts/**', 'public/fonts/bootstrap')
        .copy(paths.fontawesome + 'fonts/**', 'public/fonts/fontawesome')
				.copy(paths.flatui + 'fonts/**', 'public/fonts/flatui')
        .scripts([
            paths.jquery + "dist/jquery.js",
						paths.flatui + "dist/js/flat-ui.js",
            './resources/assets/js/*.js',
        ], 'public/js/app.js', './')
        .version([
            'css/app.css',
            'js/app.js'
        ])

});