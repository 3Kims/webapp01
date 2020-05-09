from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

def bs4StockPriceScraper(CODE):

	my_url = (f'https://finance.yahoo.com/chart/{CODE}')

	#opening up connection, grabbing the page
	uClient = uReq(my_url)
	page_html = uClient.read()
	uClient.close()
	#html parsing
	page_soup = soup(page_html, "html.parser")
	#grabs each product
	infos = page_soup.findAll("div",{"class":"D(ib) Fw(200) Mend(25px) Mend(20px)--lgv3"})

	for info in infos:
	###구매후기 수
		price_now = info.find("span",{"class":"Trsdu(0.3s) Fw(b) Fz(m) Mb(-4px) D(ib)"}).text

	return price_now
