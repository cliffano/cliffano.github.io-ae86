ci: clean deps lint build

clean:
	bob clean

deps:
	npm install .

lint:
	node_modules/.bin/jsonlint -d data/

build:
	bob site

deploy:
	cp -R .bob/site/ae86/* ../cliffano.github.io/

.PHONY: ci clean deps lint build deploy
