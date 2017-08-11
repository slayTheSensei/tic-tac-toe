#!/bin/bash

#curl "http://localhost:3000/sign-in" \
curl "http://localhost:4741" \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=$EMAIL" \
  --data-urlencode "credentials[password]=$PASSWORD"

echo
