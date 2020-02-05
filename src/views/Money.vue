<template>
    <div>
        <Layout class-prefix="layout">

            <Tags></Tags>

            <Notes></Notes>

            <Types></Types>

            <NumberPad></NumberPad>

        </Layout>
    </div>
</template>

<script>
  import NumberPad from '@/components/Money/NumberPad';
  import Notes from '@/components/Money/Notes';
  import Tags from '@/components/Money/Tags';
  import Types from '@/components/Money/Types';

  export default {
    name: 'money',
    components: {Types, Tags, Notes, NumberPad},
  };
</script>

<style lang="scss">
    .layout-content {
        display: flex;
    }
</style>