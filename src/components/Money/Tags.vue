<template>
    <div class="tags">
        <div class="new">
            <button>新增标签</button>
        </div>
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "Tags"
  }
</script>

<style lang="scss" scoped>
    .tags {
        font-size: 14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                margin-top: 4px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #d9d9d9;
                padding: 0 16px;
                height: 24px;
                border-radius: (24px/2);
                text-align: center;
                margin-right: 12px;
            }
        }

        > .new {
            padding-top: 16px;

            > button {
                background: transparent;
                border: none;
                border-bottom: 1px solid;
                color: #999999;
                padding: 0 3px;
            }
        }
    }

</style>