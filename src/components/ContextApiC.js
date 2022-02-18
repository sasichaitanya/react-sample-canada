import React, { Component } from 'react'
import { UserConsumer } from './ContextApiDemo';

export class ContextApiC extends Component {
    render() {
        return (
            <div>
                <h1>Content in C through context api</h1>
                {/* cnsuming context here*/}
                <UserConsumer>
                    {
                        (userDetails) => {
                            return <div>{userDetails.name} {userDetails.age}</div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ContextApiC