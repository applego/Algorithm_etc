# -*- coding: utf-8 -*-
from sys import stdin

# abcde

# axyze
# yxaze
# xaze

def mreplace(s, e, rep_str,v_str):
  replaced_str = v_str[:s] + rep_str + v_str[e + 1:]
  #print(replaced_str)#TODO delete
  return replaced_str

def mreverse(s, e, v_str):
  reversed_str = v_str[:s]+ v_str[s:e+1][::-1]+v_str[e+1:]
  #print(reversed_str)  #TODO delete
  return reversed_str


def mprint(s, e, v_str):
  print(v_str[s:e+1])


STR = stdin.readline().rstrip()
q = int(stdin.readline().rstrip())
for i in range(q):
  A = list(stdin.readline().split())
  if A[0] == "print":
    mprint(int(A[1]),int( A[2]), STR)
  elif A[0] == "replace":
    STR = mreplace(int(A[1]), int(A[2]), A[3], STR)
  elif A[0] == "reverse":
    STR = mreverse(int(A[1]), int(A[2]), STR)

# ? question
    #TODO: TODO
    #!alert
    #//nana;sldkfjh
    #*aaaaaaaaaaaaa
