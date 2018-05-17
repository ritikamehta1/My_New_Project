const app = {
    init: function(formSelector) {
        this.max = 0

        document
            .querySelector(formSelector) 
            .addEventListener('submit', ev => {
                ev.preventDefault()
                this.handleSubmit(ev) 
            })     
    },

    handleSubmit: function(ev) {
      ev.preventDefault() 
      const f = ev.target
      const flick = {
          id: ++this.max,  
          name: f.flickName.value,
      }
      console.log(flick)
      f.reset()
    },
}

app.init('#flickForm')


// const form = document.querySelector('form#movieForm')

// function renderListItem(label, value) {
//   const item = document.createElement('li')
//   item.textContent = `${label}: `
//   try {
//     item.appendChild(value)
//   } catch(e) {
//     item.textContent += value
//   }
//   return item
// }

// function renderList(data) {
//   const list = document.createElement('ul')
//   Object.keys(data).forEach(label => {
//     const item = renderListItem(label, data[label])
//     list.appendChild(item)
//   })
//   return list
// }

// const handleSubmit = function(ev) { 
//   ev.preventDefault()
//   const form = ev.target
//   const movie = {
//     'Movie': form.movieName.value,
//     'Genre': form.genre.value,
//   }
//   const list = renderList(movie)
//   const movies = document.querySelector('#movies')
//   movies.appendChild(list)

//   form.reset()
//   form.movieName.focus()
// }

// form.addEventListener('submit', handleSubmit)
