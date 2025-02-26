'use client'

import { useState } from 'react'

import { Modal } from '../ui/modal'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function RendezVousFormModal() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)

  return (
    <div className='max-w-7xl mx-auto p-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='bg-card p-6 rounded-lg shadow-sm border'>
          <Modal
            isOpen={isFormModalOpen}
            onClose={() => setIsFormModalOpen(false)}
            title='Contact Form'
            description='Fill out the form below to get in touch'
            footer={
              <div className='flex justify-end gap-2'>
                <Button variant='outline' onClick={() => setIsFormModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsFormModalOpen(false)}>Submit</Button>
              </div>
            }
          >
            <form className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' placeholder='Enter your name' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' type='email' placeholder='Enter your email' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <textarea
                  id='message'
                  className='w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                  placeholder='Enter your message'
                />
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  )
}
