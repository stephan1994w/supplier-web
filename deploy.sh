#!/bin/bash

clear

env='dev'
branch='develop'

while getopts 'b:e:' flag; do
  case "${flag}" in
    e) env="${OPTARG}" ;;
    b) branch="${OPTARG}" ;;
    *) print_usage
       exit 1 ;;
  esac
done

echo "Deploying $branch with config $env"

rm -rf node_modules
rm -rf ./src/packages/sg-utils
rm -rf ./src/packages/react-form
rm -rf ./src/packages/react-utils
rm -rf ./src/packages/signaturize_auth

git fetch
git checkout $branch
git pull origin $branch

cd ./src/packages

git-workspace clone

mu fetch
mu checkout $branch
mu pull origin $branch

npm run setEnv:$env

yarn
