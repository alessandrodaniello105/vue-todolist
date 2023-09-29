Vue To Do List
===

1. Creo la todo list in maniera statica nel DOM (con custom css)
1. Carico Vue
1. Creo un'array di oggetti task 'predefinito' con parametri per testo e done
1. Stampo le tasks all'interno di una lista HTML (ciclando, della lista, sia l'elemento che l'index)
1. Creo la classe css stroked
1. Bindo questa classe dinamicamente all'elemento todo, e al click dell'elemento invoco la funzione che mi toggla il done = !done
1. Aggiungo un icona di 'rimozione task' ad ogni item
1. Quando clicco sull'icona, la task viene rimossa (con .slice(index, 1))
1. Creo un oggetto con testo vuoto e done false che sarà il mio "template" task che pusherò
1. Bindo l'input text, col v-model, al "template task" (e trimmo la stringa come metodo di v-model)
1. Creo una funzione che pusha (con unshift per averlo all'indice 0) la stringa in input nell'array delle tasks
1. Invoco la funzione al click del bottone 'Aggiungi'
1. Aggiungo la possibilità di invocare questa funzione anche al rilascio del tasto enter all'interno del campo input