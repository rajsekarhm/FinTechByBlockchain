const { Kafka, logLevel } = require('kafkajs');
const [,,topicName,username,password] =  process.argv 
const kafka = new Kafka({
  brokers: ['tender-giraffe-8501-us1-kafka.upstash.io:9092'],
  ssl: true,
  sasl: {
      mechanism: 'scram-sha-256',
      username: username,
      password: password
  },
  logLevel: logLevel.ERROR,
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  await producer.send({
      topic: topicName,
      messages: [
      { value: 'SetUpped Kafka ..' },
      ],
  });

  console.log("Message sent successfully");
  await producer.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));