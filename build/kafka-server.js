let KafkaReader = new require('../server/src/kafka/kafka-reader')
let kafkaReader = new KafkaReader()

handleMessage = function (message) {
  console.log("Message ", message)
}
kafkaReader.on('message', handleMessage)
kafkaReader.on('error', handleMessage)

process.on('SIGINT', function () {
  console.log('Cleaning the house')
  kafkaReader.consumer.close(true, function () {
    console.log('Exit now')
    process.exit();
  })
});
