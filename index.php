<?php 
/*
Plugin Name: ALT Lab Gravity Forms to localStorage
Plugin URI:  https://github.com/
Description: Reading and writing GF fields to localStorage for use in later forms
Version:     1.73
Author:      ALT Lab (Matt Roberts)
Author URI:  http://altlab.vcu.edu
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Domain Path: /languages
Text Domain: my-toolset

*/
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );


add_action('wp_enqueue_scripts', 'localstore_load_scripts');

function localstore_load_scripts() {                           
    $deps = array('jquery');
    $version= '1.73';
    $in_footer = true;    
    wp_enqueue_script('localstore-main-js', plugin_dir_url( __FILE__) . 'js/localstore-main.js', $deps, $version, $in_footer); 
    wp_enqueue_style( 'localstore-main-css', plugin_dir_url( __FILE__) . 'css/localstore-main.css');
}




//LOGGER -- like frogger but more useful

if ( ! function_exists('write_log')) {
   function write_log ( $log )  {
      if ( is_array( $log ) || is_object( $log ) ) {
         error_log( print_r( $log, true ) );
      } else {
         error_log( $log );
      }
   }
}