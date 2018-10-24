kubectl delete service frontend
kubectl delete service backend
kubectl delete service middleware
kubectl delete deployment frontend-prod
kubectl delete deployment backend-prod
kubectl delete deployment middleware-prod

# kubectl delete gateway api-ingress-gateway
# kubectl delete destinationrule frontend
# kubectl delete destinationrule backend
# kubectl delete destinationrule middleware
# kubectl delete virtualservice frontend
# kubectl delete virtualservice backend
# kubectl delete virtualservice middleware
# kubectl delete serviceentry jsontime

# kubectl delete deployment middleware-canary