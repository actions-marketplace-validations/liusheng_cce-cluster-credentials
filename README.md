# Log in to a container registry
Use this GitHub Action to [get HuaweiCloud CCE cluster credential](https://www.huaweicloud.com/en-us/product/cce.html).
```yaml
- uses: liusheng/cce-cluster-credentials@v1
  with:
    region: '<region id>' # example: ap-southeast-3
    access-key-id: '<access key id>'
    access-key-secret: '<access key secret>'
    project-id: '<project id>'
    cluster-id: '<CCE cluster id>'
```

## Reference
The AK/SK signature algorithm implementation and http request is refer to [hwcce-k8s](https://www.npmjs.com/package/hwcce-k8s).
