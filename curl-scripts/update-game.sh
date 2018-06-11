#!/bin/bash

curl "../scripts/config.apiUrl + '/games/:id'" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \

echo
