<template>
    <div>
        <svg class="icon">
            <use :xlink:href="'#'+name">
            </use>
        </svg>
    </div>
</template>

<script lang="ts">
  //import 一个目录
  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {
    importAll(require.context('../assets/icons', true, /\.svg$/));
  } catch (error) {
    console.log(error);
  }
  export default {
    name: 'Icon',
    props: ['name']
  };
</script>

<style lang="scss" scoped>
    .icon {
        width: 24px;
        height: 24px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>