# -*- coding: utf-8 -*-
from sys import stdin
#import sys
#import collections
import ITP1_11_Dice


dice_list1 = list(map(int, stdin.readline().rstrip().split()))
dice_list2 = list(map(int, stdin.readline().rstrip().split()))

dice1 = ITP1_11_Dice.Dice(dice_list1)
dice2 = ITP1_11_Dice.Dice(dice_list2)

if dice1.equals(dice2):
    print("Yes")
else:
    print("No")

# 不採用
# collection_counter1 = collections.Counter(dice_list1)
# collection_counter2 = collections.Counter(dice_list2)
# if collection_counter1 != collection_counter2:
#     print('No')
#     sys.exit()

# #topの数
# for counter1 in collection_counter1.items():
#     print(counter1)
#     for i in range(counter1)
#     top_selected = counter1[1]#dice1.dice_list[0]
#     dice2.roll_until_index0top(top_selected)
#     if len(collection_counter1)
#     front_selected = dice1.dice_list[1]
#     if dice2.roll_until_index1front(front_selected) == -1:
#         print('No')
#     else:
#         if dice1.dice_list == dice2.dice_list:
#             print('Yes')
#         else:
#             print('No')
