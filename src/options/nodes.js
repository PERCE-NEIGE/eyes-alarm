var nodes = {
    pool: {},
    getDOM(key) {
        if (nodes.pool.hasOwnProperty(key)) {
            return nodes.pool[key]
        } else {
            return nodes.pool[key] = document.querySelector('#' + key)
        }
    }
}

module.exports = nodes