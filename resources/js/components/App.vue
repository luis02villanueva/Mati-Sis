<template lang="">
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
            <Aside></Aside>
            <div
                class="wrapper d-flex flex-column flex-row-fluid"
                id="kt_wrapper"
            >
                <Navbar></Navbar>
                <div
                    class="content d-flex flex-column flex-column-fluid"
                    id="kt_content"
                >
                    <router-view></router-view>
                </div>
                <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Aside from "./Aside.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
    components: {
        Aside,
        Navbar,
        Footer,
    },
};
</script>
