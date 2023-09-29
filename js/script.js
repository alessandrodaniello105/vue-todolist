// 2. Carico vue
const {createApp} = Vue;

// 3. Creo un'array di oggetti task 'predefinito' con parametri per testo e done
createApp({
  data(){
    return {
      tasks: [
        
        {
          text: 'task 1 vue',
          isDone: false
        },

        {
          text: 'task 2 vue',
          isDone: true
        },

        {
          text: 'task 3 vue',
          isDone: false
        }
      ],

      isEmpty: false
    }
    
  },

  methods:{
    getDone(index){
      this.tasks[index].isDone = !this.tasks[index].isDone
    },


    // 8. Quando clicco sull'icona, la task viene rimossa (con .slice(index, 1))
    getDelete(index){
      
      if (this.tasks[index].isDone) {
        this.tasks.splice(index, 1)
      if (this.tasks.length < 1) {
        this.tasks = [];
        this.isEmpty = true
        
      }
      } else {
        alert('ti piacerebbe')
      }
      
    }
  },

  mounted(){
    console.log(this.tasks[0].text, this.tasks[0].isDone)
  }

}).mount('#app')