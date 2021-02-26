#!/bin/sh
cd /setup

# Wait just in case localstack delays the start
sleep 7s

# Create table in dynamo

aws dynamodb create-table --endpoint-url http://localstack:4566 --cli-input-json file://posts.json

# insert data
# aws dynamodb batch-write-item --request-items file://create-posts.json --endpoint-url http://localstack:4566