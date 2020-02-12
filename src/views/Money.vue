<template>
    <div>
        <Layout class-prefix="layout">

            <Tags :dataSource.sync="tags"></Tags>

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
    data() {
      return {
        tags: ['衣', '食', '住', '行']
      }
    }
  };
</script>

<style lang="scss">
    .layout-content {
        display: flex;
    }
</style>