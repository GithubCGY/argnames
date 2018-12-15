# argnames

[![npm version](https://badge.fury.io/js/%40chengaoyuan%2Fargnames.svg)](https://badge.fury.io/js/%40chengaoyuan%2Fargnames)
[![install size](https://packagephobia.now.sh/badge?p=@chengaoyuan/argnames)](https://packagephobia.now.sh/result?p=@chengaoyuan/argnames)
[![NPM Downloads](https://img.shields.io/npm/dm/@chengaoyuan/argnames.svg?style=flat)](https://npmcharts.com/compare/@chengaoyuan/argnames?minimal=true)
[![Build Status](https://travis-ci.org/GithubCGY/argnames.svg?branch=master)](https://travis-ci.org/GithubCGY/argnames)
[![Coverage Status](https://coveralls.io/repos/github/GithubCGY/argnames/badge.svg?branch=master)](https://coveralls.io/github/GithubCGY/argnames?branch=master)

## Installation

    $ npm install @chengaoyuan/argnames

## Usage

```ts
import argnames from "@chengaoyuan/argnames";
console.log(argnames(function(a:string,b:number){}); // out: ['a', 'b']
```

## Testing

    $ npm test
