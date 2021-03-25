const core = require('@actions/core');
const io = require('@actions/io');

const path = require('path');
const fs = require('fs');

const http_request = require('./http_request');


async function run() {
    let ak = core.getInput('access-key-id', { required: true });
    let sk = core.getInput('access-key-secret', { required: true });
    let region = core.getInput('region', { required: true });
    let project_id = core.getInput('project-id', { required: true });
    let cluster_id = core.getInput('cluster-id', { required: true });
    let url = `https://cce.ap-southeast-3.myhuaweicloud.com/api/v3/projects/${project_id}/clusters/${cluster_id}/clustercert`;
    http_request.init_sign({AccessKey:`${ak}`, SecretKey:`${sk}`});
    config = await http_request.http_request("GET", url, "");

    const runnerTempDirectory = process.env['RUNNER_TEMP']; // Using process.env until the core libs are updated
    const kubeconfigPath = path.join(runnerTempDirectory, `kubeconfig_${Date.now()}`);
    core.debug(`Writing kubeconfig contents to ${kubeconfigPath}`);
    fs.writeFileSync(kubeconfigPath, kubeconfig);
    fs.chmodSync(kubeconfigPath, '600');
    core.exportVariable('KUBECONFIG', kubeconfigPath);
    console.log('KUBECONFIG environment variable is set');
}

run().catch(e => core.setFailed(e));
