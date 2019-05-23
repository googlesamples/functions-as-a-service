#!/bin/bash
gcloud functions deploy "function" --trigger-http --runtime=nodejs10 --env-vars-file .env.yaml