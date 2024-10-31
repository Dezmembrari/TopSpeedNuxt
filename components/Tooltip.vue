<template>
    <div className="mt-16 flex justify-center">
        <p className="text-lg">
            Hover the link to see the
            <a href="#"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                data-twe-toggle="tooltip" title="Hi! I'm tooltip">
                tooltip
            </a>
        </p>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { Tooltip, initTWE } from "tw-elements";

onMounted(() => {
    initTWE({ Tooltip });
});
</script>