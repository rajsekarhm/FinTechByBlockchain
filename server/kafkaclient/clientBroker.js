const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'] 
});


const producer = kafka.producer();

(async () => {
  try {
    await producer.connect();
    await producer.send({
      topic: 'fintechBlockchain', 
      messages: [
        { value: 'Your message here' } 
      ]
    });
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    await producer.disconnect();
  }
})()

