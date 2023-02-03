<template>
    <div className='flex justify-between mx-auto'>
        <p>{{ title }}</p>
        <p>{{ value }} kWh</p>
    </div>
</template>

<script>
export default {
    name: 'Energy',
    props: ['title', 'value']
}
</script>