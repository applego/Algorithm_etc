# -*- coding: utf-8 -*-
from sys import stdin

#abcdeefab
#bottom top

A = stdin.readline().rstrip()
m = int(stdin.readline().rstrip())

while True:
  for i in range(m):
    hi = int(stdin.readline().rstrip())
    move_cards = A[:hi]
    not_move_cards = A[hi:]
    A = not_move_cards+move_cards
    #print(A) #TODO delete before submit
  else:
    print(A)
    A = stdin.readline().rstrip()
    if A == '-':
      break
    m = int(stdin.readline().rstrip())

# ? question
    #TODO: TODO
    #!alert
    #//nana;sldkfjh
    #*aaaaaaaaaaaaa
