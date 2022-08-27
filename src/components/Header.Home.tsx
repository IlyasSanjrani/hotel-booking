import React from 'react'
import { Image, Input } from 'semantic-ui-react'

const src = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

const HeaderHome = () => {
  return (
    <div className='mt-3'>
        <section className='relative'>
        <Image src={src} size='huge' style={{width:'100%', height:'500px',borderRadius:'15px'}}/>
        </section>
         
            <section style={{position:'absolute',top:'65%', left:'10%'}}>
            <Input icon='users' iconPosition='left' placeholder='Search users...' />
            </section>
    </div>

  )
}

export default HeaderHome