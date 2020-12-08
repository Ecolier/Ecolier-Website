import 'common/navbar'
import './developer.scss'

const focusOrSend = (event, elem) => {
    var key = event.charCode || event.keyCode || 0; 
    if (key === 13) {
        if (elem.getAttribute('data-next') !== null) {
            event.preventDefault()
            const nextElement =  elem.nextElementSibling
            nextElement.focus()
            nextElement.onkeypress = event => focusOrSend(event, nextElement)
        }
    }
}

const address = document.getElementById('address')
address.onkeypress = event => focusOrSend(event, address)