import { Component } from 'react'
import Tittle from './components/Tittle'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().getTime(),
      seconds: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      const elapsed = Math.round((new Date().getTime() - this.state.time) / 100)
      const seconds = (elapsed / 10) + (elapsed % 10 ? '' : '.0')
      this.setState({
        seconds
      })
    }, 50)
  }

  render() {
    return (
      <div>
        <Tittle />
        <p>React has been successfully running for {this.state.seconds} seconds.</p>
      </div>
    )
  }
}

export default App
