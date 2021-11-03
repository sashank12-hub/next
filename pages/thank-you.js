import React from 'react'

function Thankyou({ counter, increment, decrement, reset }) {
    return (
        <div>
          {counter}
        </div>
    )
}


const mapStateToProps = state => ({
    counter: state.counterReducer.counter
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Thankyou);