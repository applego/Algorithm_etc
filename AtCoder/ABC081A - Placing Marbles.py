# -*- coding: utf-8 -*-
from sys import stdin

sss = stdin.readline().rstrip()
n = len([1 for s in sss if s == '1'])
print(n)