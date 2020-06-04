# -*- coding: utf-8 -*-
import re

s='hoge6hoge21foo:bar'
re.findall(r'[a-z]+',s) #['hoge', 'hoge', 'foo', 'bar']
re.findall(r'[a-z0-9]+',s) # ['hoge6hoge21foo', 'bar']