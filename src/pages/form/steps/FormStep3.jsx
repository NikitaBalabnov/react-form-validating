import { Button } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useData } from '../../../components/DataContext'
import FormDropZone from '../components/FormDropZone'

const FormStep3 = () => {
    const {data, setValues} = useData()
    const {control, handleSubmit} = useForm({ 
        defaultValues: {files: data?.files}
    })
    const navigate = useNavigate()
    const onSubmit = (data) =>{
        navigate('/form/result')
        setValues(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='step3'>
        <FormDropZone control={control} name={'files'}/>
        <div className="">
            <Button variant='contained' type='submit'>Go next</Button>
        </div>
    </form>
  )
}

export default FormStep3