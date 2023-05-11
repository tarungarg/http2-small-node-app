# ssl creation on windows

openssl req -x509 -newkey rsa:4096 -keyout your.key -out your.cert -days 9999 -nodes -subj //CN=127.0.0.1

# a small http2 node app
