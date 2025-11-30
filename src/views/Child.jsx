import React from 'react'

function Child({ onClick }) {
    console.log("Child re-rendered");

    return (
        <div>Child</div>
    )
}
// Without [React.memo] this Child component will render every time, whenever we change state in the Parent component.
// The Child component will only render when it's props(handleIncrement) will change.
export default React.memo(Child)
