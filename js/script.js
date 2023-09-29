// 2. Carico vue
const {createApp} = Vue;

// 3. Creo un'array di oggetti task 'predefinito' con parametri per testo e done
createApp({
  data(){
    return {
      tasks: [
        
        {
          text: 'Studiare Vue',
          isDone: false
        },

        {
          text: 'Fare pausa',
          isDone: true
        },

        {
          text: 'Guadagnare con Vue',
          isDone: false
        },

        {
          text: 'Essere apprezzato dal team',
          isDone: false
        }

      ],

      isMin: false,

      isEmpty: false,
    
      // 9. Creo un oggetto con testo vuoto e done false che sarà il mio "template" task che pusherò
      newTask: {
        text: '',
        isDone: false
      },

      errorMessage: ''

    }
    
  },

  methods:{

    // 8. Quando clicco sull'icona, la task viene rimossa (con .slice(index, 1))
    getDelete(index){
      
      // Bonus 2. Aggiungo una verifica per rimuovere la task solo se isDone = true
      if (this.tasks[index].isDone) {

        this.tasks.splice(index, 1)

        if (this.tasks.length < 1) {
          // this.tasks = [];
          this.isEmpty = true
          
        }
      } else {
        alert('Ti piacerebbe')
      }
      
    },

    // 11. Creo una funzione che pusha (con unshift per averlo all'indice 0) la stringa in input nell'array delle tasks
    addTask(){
      
      
      // Bonus 1. Creo una funzione di verifica per la lunghezza minima dell'input task 
      if ((this.newTask.text.length == 0)) {

        this.errorMessage = 'Eddai almeno qualche lettera inseriscila';
        this.errorClock();

      } else if (this.newTask.text.length < 5) {

        this.errorMessage = 'Inserisci un task di almeno 5 lettere, per piacere';
        this.errorClock();

        
      } else if (this.tasks.includes(this.newTask)) {
        
        alert('Questo task è stato già inserito')
        
      } else {
        
        console.log(this.newTask)
        this.tasks.unshift({...this.newTask});
        
      }
      // this.newTask.text = '';
      console.log(this.tasks)
      
    },

    errorClock(){
      this.isMin = true;
      setTimeout(()=> {
      this.isMin = false;
      },2500)
    }


  },



  // mounted(){
  //   console.log(this.tasks[0].text, this.tasks[0].isDone)
  // }

}).mount('#app')