import React from 'react'
import { Toaster } from 'react-hot-toast'

function ToasterBottomComponent() {
  return (<Toaster
    position="bottom-center"
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

export default ToasterBottomComponent