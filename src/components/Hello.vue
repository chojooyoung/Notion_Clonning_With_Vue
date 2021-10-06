<template>
  <h1>Hello</h1>
  <div>{{ msg }}</div>
  <div>moduleCount</div>
  <div>{{ $store.state.count.moduleCount }}</div>

  <button @click="increaseCount">
    +
  </button>
  <button @click="decreseCount">
    -
  </button>
  <div>{{ messageModule }} // {{ reversedMessageModule }}</div>
  <button @click="fetchTodo">
    fetchTodo
  </button>
</template>

<script>
//import {mapState, mpaGetters, mapMutations, mapActions} from 'vuex'
export default {
    computed:{

        Modulecount(){
            return this.$store.state.count.Modulecount
        },
        // ...mapState('count',[
        //     'Modulecount'
        // ]), // mapState('네임스페이스' [ '네임스페이스에서 가져올 데이터'])

        msg(){
            return this.$store.state.msg
        },
        // ...mapState('message',[
        //     'message'
        // ]),
        count(){
            return this.$store.state.count
        },
        //...mapState(['count'])

        messageModule(){
            return this.$store.state.message.message
        },

        reversedMessageModule(){
            return this.$store.getters['message/reversedMessageModule']
        }
        // ...mpaGetters('message',[
        //     'reversedMessageModule'
        // ]),
    },
    methods:{
        // ...mapMutations('count',[
        //     'increaseCount',
        //     'decreaseCount',
        // ]),
        increaseCount(){
            this.$store.commit('count/increaseCount')

        },
        decreseCount(){
            this.$store.commit('count/decreaseCount')

        },
        fetchTodo(){
            this.$store.dispatch('message/fetchTodo')
        }
        // ...mapActionns('message',[
        //     'fetchTodo'
        // ]),
    }

}
</script>

<style scoped lang="scss">
$color:red;
h1{
    color:$color
}

</style>