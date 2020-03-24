import React, {Component} from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

class Pokemon extends Component {


  render () {
    const { id, name, type, level, releasePokemon } = this.props
    return (
      <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{type}</Table.Cell>
        <Table.Cell>{level}</Table.Cell>
        <Table.Cell>
          <Button icon>
            <Icon name='trash' color='green' onClick ={() => releasePokemon(id)} />
          </Button>
        </Table.Cell>
      </Table.Row>
    )
  }
}
export default Pokemon;