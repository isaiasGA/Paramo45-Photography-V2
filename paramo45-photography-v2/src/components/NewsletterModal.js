import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import {useHistory} from 'react-router-dom';

const NewsletterModal = (props) => {
  const history = useHistory();
  return (
    <Modal
      style={{backgroundColor: 'rgba(0,0,0,.95', textAlign: 'center', fontSize: '2rem'}}
      open={props.modalOpen}
      size='small'
    >
      <Modal.Content>
        <p>Your Email has been Submitted!</p>
      </Modal.Content>
      <Modal.Actions style={{textAlign: 'center'}}>
        <Button onClick={() => history.push('/')}>Home</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default NewsletterModal;