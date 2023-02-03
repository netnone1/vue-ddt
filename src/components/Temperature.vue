<template>
 <div className='flex justify-between mx-auto'>
            <p>{{title}}</p>
            <p>{{value}} °C</p>
        </div>
</template>

<script>
export default {
    name: 'Temperature',
    props: ['title', 'value']
}
</script>