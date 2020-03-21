import React from 'react'

class Button extends React.Component {
    constructor() {
        super()
        this.state = {
            clicks: 0
        }
    }

    increment = () => {
        // this.setState({
        //     clicks: this.state.clicks + 1
        // })
        console.log('a')

        const api_url = "http://localhost:3001/api/v1"
        fetch(`${api_url}/flightsfdjksljfldkjlkfds`, {
            credentials: "include",
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                } else {
                    console.log('b')   
                    return resp.json()
                }
            })
            .then(resp => {
                console.log('c', resp)
            })
            .catch(error => console.log('d', error))

        console.log('e')

        // a, e, d
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Click me</button>
                {this.state.clicks}
            </div>
        )
    }

}

export default Button