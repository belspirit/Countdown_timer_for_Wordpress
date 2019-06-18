//Add code for WP customizer, where we have field with date type. Its value - is the date when the action expires.

<?php

function my_customizer_init( $wp_customize ) {
    $my_transport = 'postMessage';

    // Add section for actions and discounts
    $wp_customize->add_section(
        'my_discount', // section id
        array(
            'title'       => 'Акции и скидки',
            'priority'    => 200,
            'description' => 'Акции и скидки' // not required
        )
    );

    // Add the field with action expire date
    $wp_customize->add_setting(
        'date', // field id
        array(
            'type'      => 'theme_mod',
            'transport' => $my_transport
        )
    );
    $wp_customize->add_control(
        'date', // field id
        array(
            'section'  => 'my_discount', // section id
            'label'    => 'Дата окончания действия акции',
            'type'     => 'date'
        )
    );


}
add_action( 'customize_register', 'my_customizer_init' );
