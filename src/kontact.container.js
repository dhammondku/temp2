import React from 'react'

import kontactInterface from './kontact.interface'
import GatewayDetails from './gateway.detail';

export default class KontactContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            gateways: null
        }

        this.onUpdate = this.onUpdate.bind(this)
        this.renderGateways = this.renderGateways.bind(this)
    }

    componentDidMount() {
        kontactInterface.run(this.onUpdate)
    }

    onUpdate(gateways) {
        console.log('Gateways', gateways)
        this.setState({gateways})
    }

    renderGateways() {
        if(!this.state.gateways) {
            return "Loading Gateways..."
        }
        return Object.keys(this.state.gateways).map(key => <GatewayDetails 
                    key={`${key}-${this.state.gateways[key].trackingId}`}
                    gatewayId={key}
                    beacons={this.state.gateways[key]}/>)
    }

    render() {
        return <div>
            <h1>Kontact Container</h1>
            {
                this.renderGateways()
            }
        </div>
    }
}