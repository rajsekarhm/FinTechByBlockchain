const { Kafka, logLevel } = require("kafkajs");
const [, , topicName, username, password] = process.argv;
const kafka = new Kafka({
  brokers: ["tender-giraffe-8501-us1-kafka.upstash.io:****"],
  ssl: true,
  sasl: {
    mechanism: "scram-sha-256",
    username: username,
    password: password,
  },
  logLevel: logLevel.ERROR,
});

const consumer = kafka.consumer({ groupId: "1" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: topicName, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch((e) => console.error("[example/consumer] e.message", e));
