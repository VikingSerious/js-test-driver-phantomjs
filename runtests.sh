#!/bin/bash

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"

java -jar $ROOTDIR/JsTestDriver-1.3.5.jar --server http://localhost:9876 $*
