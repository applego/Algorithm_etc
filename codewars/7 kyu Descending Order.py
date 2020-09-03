def descending_order(num):
    # Bust a move right here
    ary = list(str(num))
    print(ary)
    ary = sorted(ary,reverse=True)
#     ary.sort()
#     ary.reverse()
    print(ary)
    return int(''.join(ary))