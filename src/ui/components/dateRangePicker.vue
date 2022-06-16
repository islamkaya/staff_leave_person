<template>
   <Datepicker v-model="date" ref="datepicker" @update:modelValue="handleDate" range/>

</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import { ref, onMounted } from 'vue';
export default {
    setup() {
        const date = ref();
        const handleDate = (modelData) => {
          date.value = modelData;
          // do something else with the data
        }

        // For demo purposes assign range from the current date
        onMounted(() => {
            const startDate = new Date();
            const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
            date.value = [startDate, endDate];
            
        })
        
        return {
            date,
            handleDate,
        }
    },
    components: {
        Datepicker
    }
};
</script>
