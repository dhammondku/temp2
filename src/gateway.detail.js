import React from 'react'
import ReactDOM from 'react-dom'
//301.466.1598
//nick@karnik.io

//dhammondku@gmail.com
const Beacon = ({beaconId, data}) => (
    <div>
        Beacon: {beaconId} has proximity {data.proximity}
    </div>
)
export default class GatewayDetails extends React.Component {
    constructor(props) {
        super(props)

        this.renderBeacons = this.renderBeacons.bind(this)
    }

    renderBeacons() {
        return Object.keys(this.props.beacons).map(key => <Beacon 
            key={key}
            beaconId={key}
            data={this.props.beacons[key]}
            />)
    }

    render() {
        //let id = Object.keys(this.props.item)[0]

        return <div>
            Gateway details: {this.props.gatewayId}
            {
                this.renderBeacons()
            }
        </div>
    }
}