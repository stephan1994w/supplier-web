import React, { useCallback } from 'react';

import { TextField } from 'formik-material-ui'
import { Formik, Form, Field, useFormikContext } from 'formik';

import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import { useDispatch as useLoginDispatch, withProvider } from '@supplier/stores/auth/sign-in';

import Desktop from '@react-utils/web/surfaces/desktop'

import classes from './style.module.sass'

const initial = {
  email: 'shaw.creaney@signaturize.com',
  password: 'Password1!'
}

function SignIn() {
  const dispatch = useLoginDispatch();

  const onSubmit = useCallback(({ email, password }) => {
    dispatch('SUBMIT', { email, password })
  }, []);

  return (
    <Desktop.Content>
      <div className={classes.root}>
        <Card>
          <CardContent>
            <Formik initialValues={initial} onSubmit={onSubmit}>
              <Form className={classes.form}>
                <Field
                  component={TextField}
                  name={'email'}
                  type={'email'}
                  label={'Email'} 
                  size={'small'} 
                  variant={'outlined'}/>
                <Field
                  component={TextField}
                  name={'password'}
                  type={'password'}
                  label={'Password'} 
                  size={'small'} 
                  variant={'outlined'}/>
                <SubmitButton />
              </Form>
            </Formik>
          </CardContent>
        </Card>
      </div>
    </Desktop.Content>
  )
}

function SubmitButton() {
  const { submitForm } = useFormikContext()

  const onClick = useCallback(() => {
    submitForm()
  }, [])

  return (
    <Button 
      variant={'contained'}
      onClick={onClick}>
      {'Sign In'}
    </Button>
  )
}

export default withProvider(SignIn);
