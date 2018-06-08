#!/bin/bash

curl "../scripts/config.apiUrl + '/sign-out'" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
