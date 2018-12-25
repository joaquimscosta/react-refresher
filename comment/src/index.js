import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Sam'
          avatar={faker.image.avatar()}
          timeAgo='Today at 6:00PM'
          text='nice blog post'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Alex'
          avatar={faker.image.avatar()}
          timeAgo='Today at 8:00PM'
          text='I love React'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Jane'
          avatar={faker.image.avatar()}
          timeAgo='Yesterday at 10:00AM'
          text='Can you explain more about Redux'
        />
      </ApprovalCard>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
