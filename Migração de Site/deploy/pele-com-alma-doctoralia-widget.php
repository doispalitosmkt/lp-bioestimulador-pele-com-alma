<?php
/**
 * Plugin Name: Pele com Alma - Doctoralia Floating Widget
 * Description: Displays the Doctoralia appointment widget on every public page.
 * Version: 1.0.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Keep the Doctoralia and WhatsApp floating controls from overlapping.
 */
function pca_doctoralia_widget_styles() {
	if ( is_admin() ) {
		return;
	}
	?>
	<style id="pca-doctoralia-widget-css">
		@media (min-width: 769px) {
			iframe[title="Widget de marcação de consultas médicas"] {
				left: 10px !important;
				right: auto !important;
			}
		}

		@media (max-width: 768px) {
			.joinchat {
				--bottom: 90px !important;
			}
		}
	</style>
	<?php
}
add_action( 'wp_head', 'pca_doctoralia_widget_styles', 100 );

/**
 * Load the Doctoralia booking control once, at the end of every public page.
 */
function pca_doctoralia_floating_widget() {
	if ( is_admin() ) {
		return;
	}
	?>
	<a
		id="zl-url"
		class="zl-url"
		href="https://www.doctoralia.com.br/paula-sian-lopes/dermatologista/sao-paulo"
		rel="nofollow"
		data-zlw-doctor="paula-sian-lopes"
		data-zlw-type="button_calendar_floating_medium"
		data-zlw-opinion="false"
		data-zlw-hide-branding="true"
		data-zlw-saas-only="true"
		data-zlw-a11y-title="Widget de marcação de consultas médicas"
	>Marque uma consulta</a>
	<script>
		!function (doc, tag, id) {
			var script, firstScript = doc.getElementsByTagName(tag)[0];
			if (!doc.getElementById(id)) {
				script = doc.createElement(tag);
				script.id = id;
				script.src = 'https://platform.docplanner.com/js/widget.js';
				firstScript.parentNode.insertBefore(script, firstScript);
			}
		}(document, 'script', 'zl-widget-s');
	</script>
	<?php
}
add_action( 'wp_footer', 'pca_doctoralia_floating_widget', 100 );
