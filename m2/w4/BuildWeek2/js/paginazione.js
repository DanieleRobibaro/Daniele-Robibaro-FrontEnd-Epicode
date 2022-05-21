class Paginazione {
    constructor(items = [], pageSize = 10) {
        this.items = items
        this.pageSize = Math.floor(pageSize)
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1
        this.currentPage = 1
        this.getVisibleItems()
    }
    prevPage() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
        this.getVisibleItems()
    }

    nextPage() {
        this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
        this.getVisibleItems()
    }

    firstPage() {
        this.currentPage = 1
        this.getVisibleItems()
    }

    lastPage() {
        this.currentPage = this.totalPages
        this.getVisibleItems()
    }
    goToPage(page) {
        if (Math.sign(page) === -1) {
            this.currentPage = 1
            this.getVisibleItems()
        } else {
            this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
            this.getVisibleItems()
        }
    }
    getVisibleItems() {
        let start = this.currentPage * this.pageSize - this.pageSize
        let end = this.currentPage * this.pageSize
        let lista = this.items.slice(start, end)
        let wrapper = document.querySelector('#tabella')
        wrapper.innerHTML = ''
        lista.forEach((item) => {
           wrapper.append(item)
        })
        
    }
}