#!/bin/bash

ROOTDIR="$( cd "$( dirname "$0")" && pwd )"
CONFIG=$1

java -jar $ROOTDIR/JsTestDriver-1.3.4.b.jar \ 
--config $CONFIG \ 
--tests all --server http://localhost:9876
