import React from 'react'

export const Footer = () => {
  let footerStyle={
    position:'relative',
    width:'100%',
    marginTop: '40vh',
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy;  MyTodosList.com
      </p>
    </footer>
  )
}
