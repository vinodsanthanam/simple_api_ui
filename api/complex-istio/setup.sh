# kubectl label namespace default istio-injection=enabled

kubectl apply -f <(istioctl kube-inject -f deployment.yaml)
kubectl apply -f <(istioctl kube-inject -f services.yaml)

# kubectl apply -f <(istioctl kube-inject -f ingress-gateway.yaml)
# kubectl apply -f <(istioctl kube-inject -f routing-simple.yaml)
# kubectl apply -f <(istioctl kube-inject -f egress-rules.yaml)
# kubectl apply -f <(istioctl kube-inject -f destrules.yaml)
# kubectl apply -f <(istioctl kube-inject -f telemetry.yaml)
sleep 60
pods
