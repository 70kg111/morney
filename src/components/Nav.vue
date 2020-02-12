<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="label"></Icon>
            记账
        </router-link>

        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="money"></Icon>
            标签
        </router-link>

        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistic"></Icon>
            统计
        </router-link>
    </nav>
</template>

<script>

  export default {
    name: 'Nav'
  };
</script>

<style lang="scss" scoped>

    @import "~@/assets/style/helper.scss";

    nav {
        display: flex;
        @extend %outerShadow;
        flex-direction:row;
        font-size: 12px;
        > .item {
            width:33.333%;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction: column;
            padding: 2px 0;
        }
        > .item.selected{
            background-color: $color-highlight;
        }
    }

</style>