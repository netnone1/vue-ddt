<template>
    <div className='flex justify-between mx-auto'>
        <p>{{ title }}</p>
        <p>{{ value }} mm/g</p>
    </div>
</template>

<script>
export default {
    name: 'Pm',
    props: ['title', 'value']
}
</script>