# BinanceExchanger
A small project trying to implement the binance exchanger functionality and package it into a browser-executable.

This was also a good chance to experiment with binance's API and test it for the prospect of maybe including it in a future project. For the like-minded developers among you who are considering it, I'll give you an honest opinion of my overall experience working with the API and possible challenges you may face in integrating it into your applications or websites.

PROS:
1) Functionality: Put simply, the API is reliable, and with a little reading into the precise documentation available, you can configure it to your developer needs and scale it for your respective production. I personally had little issue getting it to work for my (testing) purposes.
2) Customizability: The API service offers a surprising number of different options for regulating each individual exchange and can be easily automated per customer needs by packaging different collections of options into a discrete function to be implemented on the client side.

Anything from the amounts of base/quote currencies (the currency the user gets/sends out), the time at which the exchange can be validated in (setting timeInForce,recvWindow parameters), to the security level of the request, distinguished by the API endpoint (NONE, TRADE, USER_DATA, USER_STREAM, MARKET_DATA) can be freely decided upon by modifying the request query parameters or headers.

3) Statistics: Through the market endpoint of the same API, you can simultaneously draw live information on the various statistical features of each supported blockchain, such as through a [GET /api/v3/ticker/24hr]-type request, which yields high/low prices, average, market volumes and more.

CONS:
1) Difficult Documentation: While the documentation is truly extensive, I feel it could have been written more elaboratively, as at times I felt lost in the multitude of formats made use of in the different API requests. Although I have some prior experience implementing exchanger functionality, reading through the sometimes abstruse descriptions of each request before I stumbled into the correct passage was source of much frustration at first.
2) Non-Scalable: I would have liked to implement the functions I learnt through studying the binance API into my own application and distribute it, but as of time of writing, I know not an effective way of doing so. Each API key is tied to a specific binance account (e.g. a google or protonmail account) which requires it be validated manually by the user.

It would be great if, in the future, Binance could make their API more developer friendly, and easier to integrate into a larger-production apps.

Disclaimer: I don't intend to use the exchanger past this point and only created the account to test out an idea, but if you are so inclined, feel free to take this code and use it as a template into your project, filling out the API Key and Secret Key fields in my index.js file ({'aKey','sKey'} json object).
