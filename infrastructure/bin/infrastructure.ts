#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PixegamiBlogStack } from '../lib/pixegami-blog-stack';

const app = new cdk.App();
new PixegamiBlogStack(app, 'PixegamiBlogStack', 
{env: {account: '535707483867', region: 'us-east-1' }});
