import React from 'react'
import { Toaster } from 'react-hot-toast'

function ToasterTopComponent() {
  return (<Toaster
    position="top-center"
    reverseOrder={false}
    gutter={5}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: '',
      duration: 3000,
      style: {
        background: '#fff',
        color: '#363636',
        border: '1px dotted #000'
      },
      success: {
        duration: 3000,
        theme: {
          primary: 'green',
          secondary: 'black',
        },
      },
      error: {
        duration: 3000,
        theme: {
          primary: 'green',
          secondary: 'black',
        },
      },
      loading: {
        duration: 3000,
        theme: {
          primary: 'green',
          secondary: 'black',
        },
      },
    }}
  />)
}

export default ToasterTopComponent