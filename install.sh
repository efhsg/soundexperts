#!/bin/bash
cp .env.example .env && \
docker run --rm --interactive --tty --volume $PWD:/app --volume ${COMPOSER_HOME:-$HOME/.composer}:/tmp composer install && \
sudo chown -R $USER ./vendor/
./vendor/bin/sail up -d && \
sleep 15 && \
./vendor/bin/sail artisan key:generate && \
./vendor/bin/sail artisan migrate && \
./vendor/bin/sail npm install && ./vendor/bin/sail npm run dev
