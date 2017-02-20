const EventEmitter2 = require('eventemitter2').EventEmitter2;
const Kafka = require('kafka-node')
const Producer = Kafka.Producer
const Consumer = Kafka.HighLevelConsumer
const co = require('co')

let kafkaEndpoint = process.env.KAFKA_BROKER || "docker.local:2181"
let clientId = "event-worker-" + Math.floor(Math.random() * 10000)
let client = new Kafka.Client(kafkaEndpoint, clientId)
let producer = new Producer(client);

client.on('error', function(err, data){
  console.log(err, data);
});

setTimeout(function(){
  console.log('creating topics')
  producer.createTopics(['t', 'example'], true, function (err, data) {})
}, 2000)



