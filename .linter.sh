#!/bin/bash
cd /home/kavia/workspace/code-generation/devassist-ai-26610-dea8a980/devassist_ai
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

