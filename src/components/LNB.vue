<template>
  <nav>
    <div class="header">
      <div class="user-profile"></div>
      주영의 Notion
    </div>
    <ul>
      <WorkspaceItem
        v-for="workspace in workspaces"
        :key="workspace.id"
        :workspace="workspace" />
    </ul>
    <div class="actions"></div>
  </nav>
</template>
<script>
import WorkspaceItem from '~/components/WorkspaceItem'
export default {
  components:{
    WorkspaceItem
  },
  computed:{
    workspaces(){
      return this.$store.state.workspace.workspaces
    }
  },
  created(){
    this.$store.dispatch('workspace/readWorkspaces')
  }
}
</script>


<style lang ="scss" scoped>

nav {
    width: 240px;
    height:100%;
    background-color: $color-background;

    .header {
        padding:14px;
        font-weight: 700;
        display: flex;
        align-items: center;
        .user-profile{
            width:20px;
            height: 20px;
            border-radius: 4px;
            margin-right:4px;
            background-image: url(https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Fac538c20-c4da-4f78-b4c1-6c735fe796fd%2F20200116_151531.jpg?table=space&id=68e8d3b6-556e-4d46-bd12-48e398dfa874&width=40&userId=3eda5184-1062-498d-b2ed-c85c530ae41a&cache=v2);
            background-size: cover;
        }
    }
    ul{

    }
    .action{

    }
}
</style>