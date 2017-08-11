#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
curl "http://localhost:4741/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --data-urlencode "passwords[old]=$OLD" \
  --data-urlencode "passwords[new]=$NEW"

# data output from curl doesn't have a trailing newline
echo
