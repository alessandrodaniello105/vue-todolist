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

      isEmpty: false,
    
      // 9. Creo un oggetto con testo vuoto e done false che sarà il mio "template" task che pusherò
      newTask: {
        text: '',
        isDone: false
      }
    
    }
    
  },

  methods:{

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
      
    },

    // 11. Creo una funzione che pusha (con unshift per averlo all'indice 0) la stringa in input nell'array delle tasks
    addTask(element){
      if (this.tasks.includes(element)) {
        alert('Questa task è stata già inserita')
      } else {
        this.tasks.unshift(element)
      }
    }


  },



  mounted(){
    console.log(this.tasks[0].text, this.tasks[0].isDone)
  }

}).mount('#app')