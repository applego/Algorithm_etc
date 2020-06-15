# -*- coding: utf-8 -*-
from sys import stdin

a = int(stdin.readline().rstrip())

b, c = map(int,stdin.readline().rstrip().split())

s = stdin.readline().rstrip()

print(f'{a+b+c} {s}')
