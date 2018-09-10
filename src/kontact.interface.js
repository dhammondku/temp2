class KontactInterface {
    constructor() {
        this.stomp = Stomp.client('wss://ovs.kontakt.io:9090/stream?apiKey=ssqeJLoOlhQteYIOHPcJCfLbWJyrRxnf');
        this.headers = {'api-key': 'ssqeJLoOlhQteYIOHPcJCfLbWJyrRxnf'};
        this.gateways = {}
    }

    run(_cb) {
        this.stomp.connect(this.headers, cb => {
            //var topic = stomp.subscribe('/presence/stream/4UeSQ', function(e) {
            let topic = this.stomp.subscribe('/stream/8afcbb5b-7a78-4972-a775-e808f6beee9a/presence', e => {
                //debugger
                //console.log(JSON.parse(e.body));
                let data = JSON.parse(e.body)
                if(data && Array.isArray(data))
                {
                    let filteredData = data.filter(i => !i.trackingId.includes(":"))
                    //console.log(filteredData)
                    filteredData.forEach(i => {
                        if(!this.gateways[i.sourceId]) {
                            this.gateways[i.sourceId] = {}
                        }

                        this.gateways[i.sourceId][i.trackingId] = i
                    })

                    _cb(this.gateways)
                }
                else {
                    console.log(data)
                }
            }, this.headers);
        });
    }
}

export default new KontactInterface()