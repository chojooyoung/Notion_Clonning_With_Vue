export default{
    namespaced:true,
    state(){
        return{
            workspaces:[]
        }
    },
    getters:{},
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
            await fetch('https://kdt.roto.codes/documents/',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'x-username': 'jooyoung'
                },
                body:JSON.stringify({
                    title:'',
                    parent:parentId
                })
            }).then(res=>res.json())
            dispatch('readWorkspaces')
        },
        async readWorkspaces({commit}){
            const workspaces = await fetch('https://kdt.roto.codes/documents/',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'x-username':'jooyoung'
                }
            }).then(res=>res.json())
            console.log(workspaces)
            commit('assignState',{
                workspaces:workspaces
            })
        },
        updateWorkspace(){

        },
        async deleteWorkspace({dispatch},payload){
            const{id}=payload
            await fetch(`https://kdt.roto.codes/documents/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json',
                    'x-username':'jooyoung'
                }
            }).then(res=>res.json())
            dispatch('readWorkspaces')

        }
    }
}