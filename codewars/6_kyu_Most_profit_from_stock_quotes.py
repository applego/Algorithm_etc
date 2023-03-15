def get_most_profit_from_stock_quotes(quotes):
    print(quotes)
    profits = 0
    for i, p in enumerate(quotes):
        if i + 1 >= len(quotes):
            return profits
        max_in_after = max(quotes[i + 1 :])
        if p < max_in_after:
            profits += (max_in_after - p)
    return profits


from TestCodewar import Test
test = Test()

test.assert_equals(get_most_profit_from_stock_quotes([1, 2, 3, 4, 5, 6]), 15)
test.assert_equals(get_most_profit_from_stock_quotes([6, 5, 4, 3, 2, 1]), 0)
test.assert_equals(get_most_profit_from_stock_quotes([1, 6, 5, 10, 8, 7]), 18)
