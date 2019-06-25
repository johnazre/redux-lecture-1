import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const AddTodoForm: React.FC = () => {
  const [title, setTitle] = useState('')

  // not done
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {}

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="text"
          name="title"
          onChange={e => setTitle(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default AddTodoForm
