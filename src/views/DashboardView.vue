<script setup>
import DashboardMenuBlock from '../components/DashboardMenuBlock.vue';

</script>

<template>
    <div class="w-screen h-screen grid grid-cols-4 p-10">
        <div class="">
            <DashboardMenuBlock title="Stats" routeto="/"/>
            <DashboardMenuBlock title="Users" routeto="/users"/>
        </div>
        <div class="col-span-3">
            <RouterView/>
        </div>
    </div>
</template>