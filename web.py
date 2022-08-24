import asyncio
import tornado.web
import redis

redis = redis.Redis(
     host= 'localhost',
     port= '6379')
import json
from types import SimpleNamespace
class Bot:
    
    def fromJSON(self, data):
        #data = '{"name": "John Smith", "hometown": {"name": "New York", "id": 123}}'
        # Parse JSON into an object with attributes corresponding to dict keys.
        items = json.loads(data, object_hook=lambda d: SimpleNamespace(**d))
        for i in items:
            print(i.item, i.price, i.names)

    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__, 
            sort_keys=True, indent=4)

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Price?")

    def post(self):
        #value = redis.get('bot')
        bot = Bot()
        bot.fromJSON(value)
        data = json.loads(self.request.body)
        bot.price = data.price
        updateJson = bot.toJSON()
        redis.set('bot', updateJson)
        value = redis.get('bot')
        print(value)


def make_app():
    return tornado.web.Application([
        (r"/price", MainHandler),
    ])

async def main():
    app = make_app()
    app.listen(3002)
    await asyncio.Event().wait()

if __name__ == "__main__":
    asyncio.run(main())
