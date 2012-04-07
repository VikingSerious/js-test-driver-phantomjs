# Phantom JS / JsTestDriver Automation

A simple set of scripts to help glue together [JsTestDriver](http://code.google.com/p/js-test-driver/)
and [Phantom JS](http://www.phantomjs.org/) for an automated, headless environment for javascript
tests.

## Setup

1. Download v1.5 (or greater) of Phantom JS and set an environment variable called PHANTOMJS_HOME
   to the install location.

2. Run -./server start- to fire up the JsTestDriver server and Phantom JS.

## Running Tests

The -runtests.sh- script will run all js unit tests against JsTestDriver, using Phantom JS
as the captured browser. Any args passed to this script will be appended to the JsTestDriver invocation.

Example:

    ./runtests.sh --config example/jsTestDriver.conf --tests all --testOutput example/reports

