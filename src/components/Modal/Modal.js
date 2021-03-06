import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
    constructor(props){
        super()
        this.e1 = document.createElement('div')
    }

    componentDidMount(){
        modalRoot.appendChild(this.e1)
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.e1)
    }

    render(){
        return ReactDOM.createPortal(this.props.children, this.e1)
    }
}

export default Modal