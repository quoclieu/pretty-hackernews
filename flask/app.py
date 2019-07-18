# from flask import Flask
# app = Flask(__name__)
# with open("index.html") as fp:
#     soup = BeautifulSoup(fp)
# @app.route('/')
# def hello_world():
#     return {
#       'someobj': 'e'
#     }

from bs4 import BeautifulSoup
import urllib3
url ="https://nullsweep.com/http-security-headers-a-complete-guide/"


def makesoup(url):
  http = urllib3.PoolManager()
  response = http.request('GET', url)
  return BeautifulSoup(response.data, 'lxml')



soup = makesoup(url)
images = soup.find_all('img')

for image in images:
  print(image['width'])

# print(soup.findAll('p'))

