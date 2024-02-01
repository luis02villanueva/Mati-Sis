const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .styles(
        [
            "resources/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css",
            "resources/assets/plugins/custom/datatables/datatables.bundle.css",
            "resources/assets/plugins/global/plugins.bundle.css",
            "resources/assets/css/style.bundle.css",
        ],
        "public/css/plantilla.css"
    )
    .scripts(
        [
            "resources/assets/plugins/global/plugins.bundle.js",
            "resources/assets/js/scripts.bundle.js",
            "resources/assets/plugins/custom/fullcalendar/fullcalendar.bundle.js",
            "resources/assets/plugins/custom/datatables/datatables.bundle.js",
            "resources/assets/js/widgets.bundle.js",
            "resources/assets/js/custom/widgets.js",
            "resources/assets/js/custom/apps/chat/chat.js",
            "resources/assets/js/custom/utilities/modals/upgrade-plan.js",
            "resources/assets/js/custom/utilities/modals/create-app.js",
            "resources/assets/js/custom/utilities/modals/users-search.js",
        ],
        "public/js/plantilla.js"
    )
    .copyDirectory("resources/assets/media", "public/assets/media")
    .copyDirectory(
        "resources/assets/plugins/global/fonts",
        "public/fonts"
    );
