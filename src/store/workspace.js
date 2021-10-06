import router from '~/routes' 

export default{
  namespaced:true,
  state(){
      return{
          workspaces: [],
          currentWorkspace: {},
          currentWorkspacePath: [],
          loadings: []
      }
  },
  getters:{
    loading(state) {
      return state.loadings.some(loading => loading)
    }
  },
  mutations:{
      assignState(state, payload){
          Object.keys(payload).forEach(key=>{
              state[key] =payload[key]
          })
      }
  },
  actions:{
      async createWorkspace({dispatch},payload={}){
          const{parentId}=payload
           const workspace = await _request({
              method:'POST',
              body:JSON.stringify({
                  title:'',
                  parent:parentId
              })
          })
          dispatch('readWorkspaces')
          router.push({
            name: 'Workspace',
            params: {
              id: workspace.id
            }
          })
      },
      async readWorkspaces({commit,dispatch}){
        const workspaces = await _request({
            method:'GET',
        })
        console.log(workspaces)
        commit('assignState',{
            workspaces
        })
        if (!workspaces.length) {
          await dispatch('createWorkspace')
        }

    },

      async readWorkspace({commit},payload){
        const {id} = payload
        try{
          const workspace = await _request({
            id,
            method:'GET',
        })
        commit('assignState',{
            currentWorkspace:workspace
        })
        } catch(error){
          router.push('/error')

        }
      },

      
      async updateWorkspace({ dispatch }, payload) {
        const{id, title, content}=payload
        await _request({
            id,
            method:'PUT',
            body:JSON.stringify({
                title,
                content
            })
        })
        dispatch('readWorkspaces')
      },
      async deleteWorkspace({state,dispatch},payload){
          const{id}=payload
          await _request({
              id,
              method:'DELETE',
          })
          dispatch('readWorkspaces')
          if (id === parseInt(router.currentRoute.value.params.id, 10)) {
            router.push({
              name: 'Workspace',
              params: {
                id: state.workspaces[0].id
              }
            })
          }

      }
  }
}

async function _request(options) {
  const {id=''} =options

  return await fetch(`https://kdt.roto.codes/documents/${id}`,{
    ...options,
      headers:{
        'Content-Type':'application/json',
        'x-username': 'jooyoung'
    }
}).then(res=>res.json())
}