# TODO: complete this class

class PaginationHelper:

  # The constructor takes in an array of items and a integer indicating
  # how many items fit within a single page
  def __init__(self, collection, items_per_page):
      self.collection = collection
      self.items_per_page = items_per_page
      self.dic_pageindex_items = {}
    #   itemindex = 0
      pageindex = 0
      for i, item in enumerate(self.collection):
          if i > 0 and i % self.items_per_page == 0:
              pageindex += 1

          if pageindex in self.dic_pageindex_items.keys():
              self.dic_pageindex_items[pageindex].append(item)
          else:
              self.dic_pageindex_items[pageindex] = [item]


  # returns the number of items within the entire collection
  def item_count(self):
      return len(self.collection)

  # returns the number of pages
  def page_count(self):
      page_count = len(self.collection) // self.items_per_page
      if len(self.collection) % self.items_per_page > 0:
          page_count += 1
      return page_count

  # returns the number of items on the current page. page_index is zero based
  # this method should return -1 for page_index values that are out of range
  def page_item_count(self, page_index):
      if page_index in self.dic_pageindex_items.keys():
          return len(self.dic_pageindex_items[page_index])
      else:
          return -1

  # determines what page an item is on. Zero based indexes.
  # this method should return -1 for item_index values that are out of range
  def page_index(self, item_index):
      if item_index < 0 or item_index > self.item_count() - 1:
          return - 1
      else:
          return item_index // self.items_per_page

collection = range(1,25)
helper = PaginationHelper(collection, 10)


helper.page_count()#, 3, 'page_count is returning incorrect value.')
helper.page_index(23)#, 2, 'page_index returned incorrect value')
helper.item_count()  #, 24, 'item_count returned incorrect value')

helper = PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)
print(helper.page_index(0))
print(helper.page_index(1))
print(helper.page_index(5))
