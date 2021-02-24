#!/bin/sh
cd /setup

# Wait just in case localstack delays the start
sleep 7s

# Create table in dynamo

aws dynamodb create-table --endpoint-url http://localstack:4569 --cli-input-json file://posts.json

aws dynamodb list-tables --endpoint-url http://localhost:4569



# insert data
# aws dynamodb batch-write-item --request-items file://posts.json --endpoint-url http://localhost:8080