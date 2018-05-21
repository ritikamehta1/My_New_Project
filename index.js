const app = {
    init(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        
        document
            .querySelector(selectors.formSelector) 
            .addEventListener('submit', ev => {
                ev.preventDefault()
                this.handleSubmit(ev) 
            })     
    }, 

    removeFlick(ev) {
        const item = ev.target.closest('.flick')
        item.remove()
    },

    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id
        item
            .querySelector('.flickName')
            .textContent = flick.name

        item
            .querySelector('.remove.button')
            .addEventListener('click', this.removeFlick) 
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
    templateSelector: '.flick.template',
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
