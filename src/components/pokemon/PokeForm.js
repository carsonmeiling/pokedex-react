import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';

class PokeForm extends Component {
  state = {name: '', type: '', level: 0}

  componentDidMount() {
    if (this.props.id) {
      const {name, id, type, level} = this.props
      this.setState({name, id, type, level})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
    } else {
      this.props.addPokemon(this.state)
    }

    this.setState({name: '', type: '', level: 0 })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }


  render () {
    const {name, type, level} = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='Pokemon Name'
          required
          name='name'
          value={name}
          onChange={this.handleChange}
          />
        <Form.Input
          label='Pokemon Type'
          required
          name='type'
          value={type}
          onChange={this.handleChange}
          />
        <Form.Input
          label='Power Level'
          required
          name='level'
          value={level}
          onChange={this.handleChange}
          />
          <Form.Button>
            Submit
          </Form.Button>

      </Form>
    )
  }
}

export default PokeForm;