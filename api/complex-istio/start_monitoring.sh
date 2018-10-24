export JAEGER_POD_NAME=$(kubectl -n istio-system get pod -l app=jaeger -o jsonpath='{.items[0].metadata.name}')
export SERVICEGRAPH_POD_NAME=$(kubectl -n istio-system get pod -l app=servicegraph -o jsonpath='{.items[0].metadata.name}')
export GRAFANA_POD_NAME=$( kubectl -n istio-system get pod -l app=grafana -o jsonpath='{.items[0].metadata.name}')
export PROMETHEUS_POD_NAME=$(kubectl -n istio-system get pod -l app=prometheus -o jsonpath='{.items[0].metadata.name}')
export TELEMETRY_POD_NAME=$(kubectl -n istio-system get pod -l app=telemetry -o jsonpath='{.items[0].metadata.name}')

kubectl -n istio-system port-forward $JAEGER_POD_NAME 16686:16686 & kubectl -n istio-system port-forward $SERVICEGRAPH_POD_NAME 8088:8088 & kubectl -n istio-system port-forward $GRAFANA_POD_NAME 3000:3000 & kubectl -n istio-system port-forward $PROMETHEUS_POD_NAME 9090:9090 & kubectl -n istio-system port-forward $TELEMETRY_POD_NAME 9093:9093
