<template>
    <div class="title">
        <h1>
            {{titleHome}}
        </h1>
    </div>
    
    
</template>
<script>
export default {
    name: 'Title',
    props: {
        titleHome: String
    }
}
</script>
<style lang="scss" scoped>
    .title{
        display: flex;
        justify-content: center;

        h1{
            font-size: 30px;
            position: relative;
            display: flex;
            justify-content: center;

            &::before{
                content: "";
                position: absolute;
                border-radius: 1rem;
                width: 2rem;
                height: 5px;
                background-color: rgba(255, 255, 255, 0.274);
                top: 2rem;
            }
        }
    }
</style>
