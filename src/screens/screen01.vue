<template>
    <div>
        <p01></p01>
        <p02></p02>
    </div>
</template>

<script>
import p01 from '../pages/01.vue';
import p02 from '../pages/02.vue';

export default {
    replace: false,
    components: {
        p01,
        p02
    }
}
</script>