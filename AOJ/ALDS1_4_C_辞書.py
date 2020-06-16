# -*- coding: utf-8 -*-
from sys import stdin

Dic = {}

def insert(word):
  Dic[word] = True

def find(word):
  try:
    return Dic[word]
  except:
    return False

def main():
  n = int(stdin.readline().rstrip())
  for i in range(n):
    line = stdin.readline().rstrip().split()
    if line[0] == 'insert':
      insert(line[1])
    else:
      if find(line[1]):
        print("yes")
      else:
        print("no")

#main()
#? スプリット市内分？提出結果のTimeは0.43s高速化..
Dic = {}
n = int(stdin.readline().rstrip())
for i in range(n):
  line = stdin.readline().rstrip()
  if line[0] == 'i':
    Dic[line[7:]] = 0
  else:
    print('yes' if line[5:] in Dic else 'no')
