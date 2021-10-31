import React, {useState} from 'react';
import { observable, action, toJS } from 'mobx';
import { ITodos, ITodosData } from '../types/types';
import { observer } from 'mobx-react';

interface TodosList {
  data: ITodosData
}

export let todos = observable([])

const appState = {
  getTodos: action( () => {
    fetch('/api/bricks').then(response => response.json())
      .then(data => {
        todos = data
        console.log('here', todos)
        return
      })
  }),
  addTodos: action((text: string) => {
    fetch('/api/bricks', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => {
        return appState.getTodos()
      })
  }),
  changeOfStatusTodos: action((user: object) => {
    fetch('api/bricks', {
      method: 'PUT',
      body: JSON.stringify({ user }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => {
        return  appState.getTodos()
      })
  }),
  removeTodo: action((id: number) => {
    fetch('api/bricks', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => {
        return appState.getTodos()
      })
  })
}

export default appState;
