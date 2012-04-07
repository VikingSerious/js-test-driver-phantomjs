#!/bin/bash

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"
PHANTOMJS_HOME=$PHANTOMJS_HOME
JSTD_VERSION=1.3.4b

if [ -z "$PHANTOMJS_HOME" ]; then
    echo "PHANTOMJS_HOME env var not set."
    exit 1
fi

if [ ! -f "$ROOTDIR/JsTestDriver-$JSTD_VERSION.jar" ]; then
    echo "Downloading JsTestDriver jar ..."
    curl http://js-test-driver.googlecode.com/files/JsTestDriver-$JSTD_VERSION.jar > $ROOTDIR/JsTestDriver-$JSTD_VERSION.jar
fi

if [ ! -f "$ROOTDIR/coverage-$JSTD_VERSION.jar" ]; then
    echo "Downloading coverage jar ..."
    curl http://js-test-driver.googlecode.com/files/coverage-$JSTD_VERSION.jar > $ROOTDIR/coverage-$JSTD_VERSION.jar
fi

java -jar $ROOTDIR/JsTestDriver-$JSTD_VERSION.jar --port 9876
$PHANTOMJS_HOME/bin/phantomjs phantomjs-jstd.js
