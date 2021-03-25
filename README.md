# Log in to a container registry
Use this GitHub Action to [get HuaweiCloud CCE cluster credential](https://www.huaweicloud.com/en-us/product/cce.html).
```yaml
- uses: liusheng/cce-context@0.0.1
  with:
    region: '<region id>' # example: ap-southeast-3
    access-key-id: '<access key id>'
    access-key-secret: '<access key secret>'
    project-id: '<project id>'
    cluseter-id: '<CCE cluster id>'
```
