#!/usr/bin/env bash

rm -rf dist es
rollup -c scripts/rollup.config.js
npx babel lib --out-dir es
