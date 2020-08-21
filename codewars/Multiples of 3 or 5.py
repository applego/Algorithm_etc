def solution(number):
#     sum_ = 0
#     for i in range(1,number):
#         if i%3 == 0 or i%5==0:
#             sum_ += i
    sum_2 = sum([i for i in range(1,number) if i%3==0 or i%5==0])
    return sum_2

#%%
print('cell')

# %%
