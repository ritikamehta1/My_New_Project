const app = {
    init(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)

        document
            .querySelector(selectors.formSelector) 
            .addEventListener('submit', ev => {
                ev.preventDefault()
                this.handleSubmit(ev) 
            })     
    }, 

    renderListItem(flick) {
        const item = document.createElement('li')
        item.dataset.id = flick.id
        item.textContent = flick.name
        return item
    },

    handleSubmit(ev) {
      ev.preventDefault() 
      const f = ev.target
      const flick = {
          id: ++this.max,  
          name: f.flickName.value,
      }

      this.flicks.unshift(flick)

      const item = this.renderListItem(flick)
      this.list.insertBefore(item, this.list.firstElementChild)

      f.reset()
    },
}

app.init({
    formSelector: '#flickForm',
    listSelector: '#flickList',
})


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
