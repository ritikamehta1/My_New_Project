const app = {
    init: function(formSelector) {
        document
            .querySelector(formSelector) 
            .addEventListener('submit', this.handleSubmit)      
    },

    handleSubmit: function(ev) {
      ev.preventDefault() 
      const f = ev.target
      console.log(f.flickName.value)
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
