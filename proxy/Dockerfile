FROM envoyproxy/envoy:v1.16-latest

COPY ./envoy.yaml /etc/envoy/envoy.yaml

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml

EXPOSE 8080