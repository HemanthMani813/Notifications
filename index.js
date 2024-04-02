const Notification = props => {
  //  Write your code here.
  return (
    <div className={props.className} text={props.text} img={props.img}>
      <img src={props.img} />
      <p>{props.text}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Notofications</h1>
    <div>
      <Notification
        className='primary-con'
        text='Information Messeage'
        img='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
    </div>
    <div>
      <Notification
        className='secondary-con'
        text='Information Messeage'
        img='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
    </div>
    <div>
      <Notification
        className='warning-con'
        text='Information Messeage'
        img='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
    </div>
    <div>
      <Notification
        className='error-con'
        text='Information Messeage'
        img='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
