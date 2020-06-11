# -*- coding: utf-8 -*-
from sys import stdin
import ITP1_11_Dice

dice_list = list(map(int, stdin.readline().rstrip().split()))
q = int(stdin.readline().rstrip())
dice = ITP1_11_Dice.Dice(dice_list)

for i in range(q):
    num0_num1 = list(map(int, stdin.readline().rstrip().split()))
    dice.roll_until_index0top(num0_num1[0])
    print(dice.get_index2_number(num0_num1[1]))
