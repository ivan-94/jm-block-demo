import React from 'react'
import { FatTable } from '@gdjiami/rc-components'

interface T {
  <% for (const item of fields) { %>
    <%- item.name %>: <%- item.type %>,
  <% } %>
} 

interface P {}

export interface <%- name %>Props {
}

const tableProps = FatTable.createProps<T, P>({
  idKey: 'id',
  enablePersist: false,
  onFetch: async () => {
    return {
      total: 0,
      list: []
    }
  },
  columns: [
    <% for (const item of fields) { %>
      {
        title: '<%- item.title %>',
        dataIndex: '<%- item.name %>',
      }
    <% } %>
  ]
})

export const <%- name%>: FC<<%- name %>Props> = props => {
  return (<FatTable>
  </FatTable>)
}


