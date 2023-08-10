import { Datagrid, FunctionField, ShowButton } from 'react-admin'
import React from 'react'
import { prettyPrintMoney, CustomDateField, commentFunctionRenderer, isPaid } from '../utils'
export const FeesListItems = () => {
  return (
    <Datagrid bulkActionButtons={false} rowClick={id => `/fees/${id}/show`}>
      <FunctionField render={record => isPaid(record.status)} label='status' />
      <CustomDateField source='due_datetime' label='Date limite' showTime={false} />
      <FunctionField source='comment' render={commentFunctionRenderer} label='Commentaire' />
      <FunctionField label='Reste à payer' render={record => prettyPrintMoney(record.remaining_amount)} textAlign='right' />
      <CustomDateField source='creation_datetime' label='Date de création' showTime={false} />
      <ShowButton basePath='/fees' />
    </Datagrid>
  )
}
