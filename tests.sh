#!/usr/bin/env bash

set -euo pipefail
IFS=$'\n\t'

./node_modules/.bin/karma start --auto-watch --no-single-run
