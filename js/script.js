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

      counter: 0
    }
    
  },

  methods:{
    getDone(index){
      this.tasks[index].isDone = !this.tasks[index].isDone
    }
  },

  mounted(){
    console.log(this.tasks[0].text, this.tasks[0].isDone)
  }

}).mount('#app')